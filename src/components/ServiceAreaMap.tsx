import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Printer } from "lucide-react";

const locations = [
  {
    id: "san-antonio",
    name: "San Antonio",
    address: "8600 Wurzbach Rd, Building 700",
    cityStateZip: "San Antonio, TX 78240",
    phone: "(210) 737-8090",
    fax: "(866) 653-2907",
    mapQuery: "8600 Wurzbach Rd, San Antonio, TX 78240",
  },
  {
    id: "mcallen",
    name: "McAllen",
    address: "2522 Buddy Owens Ave.",
    cityStateZip: "McAllen, TX 78504",
    phone: "(956) 630-1116",
    fax: "(956) 630-1250",
    mapQuery: "2522 Buddy Owens Ave, McAllen, TX 78504",
  },
  {
    id: "corpus-christi",
    name: "Corpus Christi",
    address: "3765 South Alameda Street, Suite 251",
    cityStateZip: "Corpus Christi, TX 78401",
    phone: "(361) 937-7887",
    fax: "(361) 937-9421",
    mapQuery: "3765 South Alameda St, Corpus Christi, TX 78401",
  },
  {
    id: "austin",
    name: "Austin",
    address: "706 W. Ben White Blvd, Suite 233A",
    cityStateZip: "Austin, TX 78704",
    phone: "(512) 707-1070",
    fax: "(512) 707-1722",
    mapQuery: "706 W Ben White Blvd, Austin, TX 78704",
  },
];

export function ServiceAreaMap() {
  const [selectedId, setSelectedId] = useState<string>("austin");
  const selected = locations.find((loc) => loc.id === selectedId) ?? locations[0];

  return (
    <section id="areas" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="orb orb-accent w-[400px] h-[400px] bottom-0 left-0 opacity-20" />

      <div className="container px-4 relative z-10 w-full max-w-[100vw]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <span className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 text-sm font-medium text-primary mb-4">
            <MapPin className="w-4 h-4" />
            Service Areas
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Our <span className="gradient-text">Service Area</span>
          </h2>

          <div className="grid lg:grid-cols-[1fr,380px] gap-8 lg:gap-10 items-start">
            {/* Location cards */}
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4">
              {locations.map((loc) => (
                <button
                  key={loc.id}
                  type="button"
                  onClick={() => setSelectedId(loc.id)}
                  className={`text-left rounded-2xl border-2 p-4 sm:p-5 transition-all duration-200 ${
                    selectedId === loc.id
                      ? "border-primary bg-primary/5 shadow-md"
                      : "border-border bg-card hover:border-primary/50 hover:bg-muted/50"
                  }`}
                >
                  <span className="font-semibold text-foreground block mb-1">{loc.name}</span>
                  <span className="text-sm text-muted-foreground line-clamp-2">
                    {loc.address}, {loc.cityStateZip}
                  </span>
                </button>
              ))}
            </div>

            {/* Sidebar: Selected location details */}
            <motion.div
              key={selectedId}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:sticky lg:top-24"
            >
              <div className="glass-card rounded-2xl p-6 sm:p-8 border-2 border-primary/20">
                <p className="text-sm font-semibold text-foreground mb-6">{selected.name} Office</p>

                {/* Small preview map */}
                <div className="rounded-xl overflow-hidden border border-border bg-muted mb-6 aspect-video w-full">
                  <iframe
                    title={`Map of ${selected.name}`}
                    src={`https://www.google.com/maps?q=${encodeURIComponent(selected.mapQuery)}&z=15&output=embed`}
                    className="w-full h-full min-h-[140px] border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex gap-3">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-foreground">{selected.address}</p>
                      <p className="text-sm text-muted-foreground">{selected.cityStateZip}</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground">Phone</p>
                      <a
                        href={`tel:${selected.phone.replace(/\D/g, "")}`}
                        className="text-sm font-medium text-primary hover:underline"
                      >
                        {selected.phone}
                      </a>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Printer className="w-5 h-5 text-primary flex-shrink-0" />
                    <div>
                      <p className="text-xs text-muted-foreground">Fax</p>
                      <p className="text-sm font-medium text-foreground">{selected.fax}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
