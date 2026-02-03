import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CareCompanion } from "@/components/CareCompanion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const NWS_ALERTS_URL = "https://api.weather.gov/alerts/active?limit=50";
const NWS_CAP_FEED_URL = "https://alerts.weather.gov/cap/us.php?x=0";
// Dev: Vite proxy forwards /api/nws/* to api.weather.gov with correct headers
const PROXY_ALERTS_URL = "/api/nws/alerts/active?limit=50";
const ALLORIGINS_GET = "https://api.allorigins.win/get?url=" + encodeURIComponent(NWS_ALERTS_URL);
const ALLORIGINS_CAP_RAW = "https://api.allorigins.win/raw?url=" + encodeURIComponent(NWS_CAP_FEED_URL);
const ALLORIGINS_CAP = "https://api.allorigins.win/get?url=" + encodeURIComponent(NWS_CAP_FEED_URL);

interface NWSAlertProperties {
  event: string;
  headline: string | null;
  description: string | null;
  instruction: string | null;
  areaDesc: string;
  severity?: string;
  urgency?: string;
  sent: string;
  effective?: string;
  expires?: string;
}

interface NWSAlertFeature {
  type: string;
  properties: NWSAlertProperties;
}

interface NWSAlertsResponse {
  type: string;
  features: NWSAlertFeature[];
}

const CAP_NS_1_1 = "urn:oasis:names:tc:emergency:cap:1.1";
const CAP_NS_1_2 = "urn:oasis:names:tc:emergency:cap:1.2";

function getTagText(el: Element, name: string): string {
  const child = el.getElementsByTagName(name)[0];
  return child?.textContent?.trim() ?? "";
}

function getCapText(el: Element, name: string): string {
  const ns11 = el.getElementsByTagNameNS(CAP_NS_1_1, name)[0];
  const ns12 = el.getElementsByTagNameNS(CAP_NS_1_2, name)[0];
  const colon = el.getElementsByTagName(`cap:${name}`)[0];
  const local = el.getElementsByTagName(name)[0];
  return (ns11 ?? ns12 ?? colon ?? local)?.textContent?.trim() ?? "";
}

function stripHtml(html: string): string {
  if (!html) return "";
  const div = typeof document !== "undefined" ? document.createElement("div") : null;
  if (div) {
    div.innerHTML = html;
    return div.textContent?.trim() ?? html.replace(/<[^>]+>/g, " ").trim();
  }
  return html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

function parseCapFeed(xmlText: string): NWSAlertFeature[] {
  const features: NWSAlertFeature[] = [];
  try {
    const doc = new DOMParser().parseFromString(xmlText, "text/xml");
    const entries = doc.getElementsByTagName("entry");
    for (let i = 0; i < Math.min(entries.length, 50); i++) {
      const entry = entries[i];
      const title = getTagText(entry, "title");
      let summary = getTagText(entry, "summary");
      if (summary) summary = stripHtml(summary);
      const event = getCapText(entry, "event");
      const areaDesc = getCapText(entry, "areadesc");
      const instruction = getCapText(entry, "instruction");
      const effective = getCapText(entry, "effective");
      const expires = getCapText(entry, "expires");
      const sent = getTagText(entry, "updated") || effective || new Date().toISOString();
      if (!title && !event) continue;
      features.push({
        type: "Feature",
        properties: {
          event: event || title || "Alert",
          headline: title || `${event || "Alert"} – ${areaDesc || "U.S."}`,
          description: summary || null,
          instruction: instruction || null,
          areaDesc: areaDesc || "United States",
          sent,
          effective: effective || undefined,
          expires: expires || undefined,
        },
      });
    }
  } catch {
    /* ignore parse errors */
  }
  return features;
}

/** Fallback sample alerts when live API is unavailable (e.g. CORS) */
const FALLBACK_ALERTS: NWSAlertFeature[] = [
  {
    type: "Feature",
    properties: {
      event: "Heat Advisory",
      headline: "Heat Advisory – South Texas",
      description: "High temperatures and humidity may cause heat-related illness. Drink plenty of fluids, stay in air conditioning, and check on relatives and neighbors. Never leave people or pets in a closed vehicle.",
      instruction: "Take extra precautions if you work or spend time outside. Reschedule strenuous activities to early morning or evening.",
      areaDesc: "South Texas",
      sent: new Date().toISOString(),
      effective: new Date().toISOString(),
      expires: new Date(Date.now() + 86400000).toISOString(),
    },
  },
  {
    type: "Feature",
    properties: {
      event: "Severe Thunderstorm Watch",
      headline: "Severe Thunderstorm Watch – Bexar and surrounding counties",
      description: "Scattered severe thunderstorms are possible. Hazards include damaging wind gusts and large hail. Isolated tornadoes cannot be ruled out.",
      instruction: "Prepare for possible severe weather. Stay tuned to local media and have a way to receive warnings.",
      areaDesc: "Bexar, Comal, Guadalupe, Kendall, Medina, Wilson Counties",
      sent: new Date().toISOString(),
      effective: new Date().toISOString(),
      expires: new Date(Date.now() + 14400000).toISOString(),
    },
  },
  {
    type: "Feature",
    properties: {
      event: "Flood Watch",
      headline: "Flood Watch – Coastal Plains",
      description: "Heavy rainfall may lead to flash flooding in low-lying and poor drainage areas. Do not drive through flooded roadways.",
      instruction: "Monitor later forecasts and be prepared to take action if a Flash Flood Warning is issued.",
      areaDesc: "Coastal Plains of South Texas",
      sent: new Date().toISOString(),
      effective: new Date().toISOString(),
      expires: new Date(Date.now() + 86400000).toISOString(),
    },
  },
];

async function fetchAlerts(): Promise<{ data: NWSAlertsResponse; isFallback: boolean }> {
  // 1. Try Vite dev proxy (no CORS, correct User-Agent) – works when running npm run dev
  try {
    const res = await fetch(PROXY_ALERTS_URL);
    if (res.ok) {
      const data = await res.json();
      if (data?.features && Array.isArray(data.features)) {
        return { data, isFallback: false };
      }
    }
  } catch {
    /* no proxy (e.g. production build) or network */
  }

  // 2. Try NWS CAP feed via AllOrigins /raw (raw XML string)
  try {
    const res = await fetch(ALLORIGINS_CAP_RAW);
    if (res.ok) {
      const text = await res.text();
      if (text && text.includes("entry")) {
        const features = parseCapFeed(text);
        if (features.length > 0) {
          return { data: { type: "FeatureCollection", features }, isFallback: false };
        }
      }
    }
  } catch {
    /* parse or network */
  }

  // 3. Try AllOrigins GET wrapper for NWS JSON API
  try {
    const res = await fetch(ALLORIGINS_GET);
    if (res.ok) {
      const wrapper = await res.json();
      const text = wrapper?.contents;
      if (typeof text === "string") {
        try {
          const data = JSON.parse(text) as NWSAlertsResponse;
          if (data?.features && Array.isArray(data.features)) {
            return { data, isFallback: false };
          }
        } catch {
          /* invalid JSON */
        }
      }
    }
  } catch {
    /* network error */
  }

  // 4. Try AllOrigins GET for CAP feed (wrapper.contents)
  try {
    const res = await fetch(ALLORIGINS_CAP);
    if (res.ok) {
      const wrapper = await res.json();
      const text = wrapper?.contents;
      if (typeof text === "string" && text.includes("entry")) {
        const features = parseCapFeed(text);
        if (features.length > 0) {
          return { data: { type: "FeatureCollection", features }, isFallback: false };
        }
      }
    }
  } catch {
    /* parse or network */
  }

  // 5. Try direct NWS (when CORS allows)
  try {
    const res = await fetch(NWS_ALERTS_URL, {
      headers: {
        Accept: "application/geo+json, application/json",
        "User-Agent": "Mozilla/5.0 (compatible; RestorativeHealthCare/1.0; +https://restorativehealth.com)",
      },
    });
    if (res.ok) {
      const data = await res.json();
      if (data?.features && Array.isArray(data.features)) {
        return { data, isFallback: false };
      }
    }
  } catch {
    /* CORS or network */
  }

  return {
    data: { type: "FeatureCollection", features: FALLBACK_ALERTS },
    isFallback: true,
  };
}

function AlertList() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["emergency-alerts"],
    queryFn: fetchAlerts,
    staleTime: 5 * 60 * 1000,
    retry: 2,
  });

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-muted-foreground">
        <AlertTriangle className="w-12 h-12 mb-4 animate-pulse" />
        <p>Loading latest emergency alerts…</p>
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="space-y-4">
        <div className="rounded-xl border border-amber-200 bg-amber-50 dark:bg-amber-950/30 dark:border-amber-800 p-3 text-sm text-amber-800 dark:text-amber-200">
          Live data is temporarily unavailable. Showing sample alerts for reference.
        </div>
        <AlertAccordion features={FALLBACK_ALERTS} />
        <p className="text-xs text-muted-foreground text-center">
          For current alerts, visit{" "}
          <a href="https://www.weather.gov/alerts" target="_blank" rel="noopener noreferrer" className="text-primary underline">
            weather.gov/alerts
          </a>
          .
        </p>
      </div>
    );
  }

  const features = data.data.features ?? [];
  const isFallback = data.isFallback;

  if (features.length === 0) {
    return (
      <div className="rounded-xl border border-border bg-muted/30 p-8 text-center">
        <p className="font-medium text-foreground">No active alerts right now</p>
        <p className="text-sm text-muted-foreground mt-1">
          There are no current emergency or weather alerts for the areas we monitor.
        </p>
      </div>
    );
  }

  return (
    <>
      {isFallback && (
        <div className="rounded-xl border border-amber-200 bg-amber-50 dark:bg-amber-950/30 dark:border-amber-800 p-3 text-sm text-amber-800 dark:text-amber-200 mb-4">
          Live data is temporarily unavailable. Showing sample alerts for reference. For current alerts, see{" "}
          <a href="https://www.weather.gov/alerts" target="_blank" rel="noopener noreferrer" className="font-medium underline">
            weather.gov/alerts
          </a>
          .
        </div>
      )}
      <AlertAccordion features={features} />
    </>
  );
}

function AlertAccordion({ features }: { features: NWSAlertFeature[] }) {
  return (
    <Accordion type="single" collapsible className="w-full space-y-2">
      {features.map((feature, index) => {
        const p = feature.properties;
        const title = p.headline || `${p.event} – ${p.areaDesc}`;
        const summary = [p.description, p.instruction].filter(Boolean).join("\n\n");
        return (
          <AccordionItem
            key={(p.sent || "") + index}
            value={`alert-${index}`}
            className="rounded-xl border border-border bg-card px-4 data-[state=open]:border-primary/50"
          >
            <AccordionTrigger className="text-left hover:no-underline py-4">
              <span className="font-semibold text-foreground pr-2">{title}</span>
            </AccordionTrigger>
            <AccordionContent>
              <div className="whitespace-pre-wrap text-muted-foreground text-sm leading-relaxed">
                {summary || "No additional details available."}
              </div>
              {(p.effective || p.expires) && (
                <p className="text-xs text-muted-foreground mt-3">
                  Effective: {p.effective ? new Date(p.effective).toLocaleString() : "—"} · Expires:{" "}
                  {p.expires ? new Date(p.expires).toLocaleString() : "—"}
                </p>
              )}
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}

export default function EmergencyAlerts() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden w-full">
      <Navigation />

      <section className="pt-28 sm:pt-32 pb-12">
        <div className="container px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <AlertTriangle className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Emergency Alerts</h1>
              <p className="text-muted-foreground text-sm">
                Latest weather and emergency warnings (storms, floods, heat, etc.)
              </p>
            </div>
          </motion.div>

          <p className="text-muted-foreground text-sm mb-8">
            Live alerts from the National Weather Service (weather.gov) via a free public feed. Click a headline to see the full summary and instructions.
          </p>

          <AlertList />
        </div>
      </section>

      <Footer />
      <CareCompanion />
    </div>
  );
}
