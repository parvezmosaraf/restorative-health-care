import { motion } from "framer-motion";
import { MapPin, Phone, Printer } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { CareCompanion } from "@/components/CareCompanion";

const locations = [
  {
    id: "san-antonio",
    name: "San Antonio",
    address: "8600 Wurzbach Rd, Building 700",
    cityStateZip: "San Antonio, TX 78240",
    phone: "(210) 737-8090",
    fax: "(866) 653-2907",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=8600+Wurzbach+Rd+San+Antonio+TX+78240",
  },
  {
    id: "mcallen",
    name: "McAllen",
    address: "2522 Buddy Owens Ave.",
    cityStateZip: "McAllen, TX 78504",
    phone: "(956) 630-1116",
    fax: "(956) 630-1250",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=2522+Buddy+Owens+Ave+McAllen+TX+78504",
  },
  {
    id: "corpus-christi",
    name: "Corpus Christi",
    address: "3765 South Alameda Street, Suite 251",
    cityStateZip: "Corpus Christi, TX 78401",
    phone: "(361) 937-7887",
    fax: "(361) 937-9421",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=3765+South+Alameda+St+Corpus+Christi+TX+78401",
  },
  {
    id: "austin",
    name: "Austin",
    address: "706 W. Ben White Blvd, Suite 233A",
    cityStateZip: "Austin, TX 78704",
    phone: "(512) 707-1070",
    fax: "(512) 707-1722",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=706+W+Ben+White+Blvd+Austin+TX+78704",
  },
];

export default function Locations() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden w-full">
      <Navigation />

      <section className="pt-28 sm:pt-32 pb-16">
        <div className="container px-4 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 mb-10"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Our Locations</h1>
              <p className="text-muted-foreground text-sm">
                Four offices across South Texas to serve you
              </p>
            </div>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {locations.map((loc, index) => (
              <motion.article
                key={loc.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="rounded-2xl border border-border bg-card p-6 hover:border-primary/30 hover:shadow-md transition-all"
              >
                <h2 className="text-lg font-bold text-primary mb-3">{loc.name}</h2>
                <div className="space-y-2 text-muted-foreground text-sm">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>
                      {loc.address}
                      <br />
                      {loc.cityStateZip}
                    </span>
                  </div>
                  <a href={`tel:${loc.phone.replace(/\D/g, "")}`} className="flex items-center gap-2 hover:text-primary transition-colors">
                    <Phone className="w-4 h-4 flex-shrink-0" />
                    {loc.phone}
                  </a>
                  <div className="flex items-center gap-2">
                    <Printer className="w-4 h-4 flex-shrink-0" />
                    {loc.fax}
                  </div>
                </div>
                <a
                  href={loc.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-primary hover:underline"
                >
                  <MapPin className="w-4 h-4" />
                  View on map
                </a>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <CareCompanion />
    </div>
  );
}
