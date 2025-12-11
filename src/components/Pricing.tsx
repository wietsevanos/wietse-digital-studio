import { useState } from "react";
import { Check, ChevronDown, X } from "lucide-react";

const websiteFeatures = [
  "Modern, strak maatwerk design",
  "Extra pagina's (per pagina keuze mogelijk)",
  "Social media integratie",
  "Copywriting ondersteuning",
  "Extra revisierondes",
  "Afspraakmodule indien gewenst",
  "Branding en kleuradvies",
  "Performance optimalisatie",
  "Basis SEO optimalisatie",
  "Google Analytics integratie",
  "Meertalige ondersteuning (optioneel)",
];

const serviceFeatures = [
  "Hosting op snelle premium servers",
  "Domeinbeheer en DNS-configuratie",
  "Website beveiliging en bescherming",
  "Wekelijkse backups",
  "Kleine maandelijkse aanpassing inbegrepen",
  "Technische updates en onderhoud",
  "Monitoring",
  "Performance checks",
  "Prioriteit bij kleine vragen",
];

const Pricing = () => {
  const [openPanel, setOpenPanel] = useState<"website" | "service" | null>(null);

  const togglePanel = (panel: "website" | "service") => {
    setOpenPanel(openPanel === panel ? null : panel);
  };

  return (
    <section id="prijzen" className="py-section px-6 relative">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-vibrant/30 to-transparent" />
      
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-label uppercase text-blue-electric mb-4 tracking-widest animate-fade-in">
            Transparante tarieven
          </p>
          <h2 className="text-display-sm font-light text-foreground animate-fade-in-up stagger-1 max-w-3xl mx-auto">
            Eenmalige bouwkosten + maandelijkse service werken samen voor het beste eindresultaat
          </h2>
        </div>

        {/* Two large buttons */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-8">
          {/* Website Options Button */}
          <div className="animate-fade-in-up stagger-2">
            <button
              onClick={() => togglePanel("website")}
              className="w-full bg-blue-vibrant text-background hover:bg-blue-electric transition-all duration-300 p-8 lg:p-10 text-left group shadow-lg shadow-blue-vibrant/25 hover:shadow-blue-electric/40"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl lg:text-2xl font-normal mb-3 tracking-wide">
                    Website opties en eenmalige kosten
                  </h3>
                  <p className="text-background/80 text-sm lg:text-base">
                    Vanaf €500 tot €1.800, afhankelijk van gekozen functies
                  </p>
                </div>
                <ChevronDown 
                  className={`w-6 h-6 flex-shrink-0 transition-transform duration-300 ${
                    openPanel === "website" ? "rotate-180" : ""
                  }`} 
                />
              </div>
            </button>

            {/* Website Features Panel */}
            <div 
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openPanel === "website" ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="bg-card border border-blue-vibrant/30 p-8 lg:p-10">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-lg font-normal text-foreground">Inclusief opties</h4>
                  <button 
                    onClick={() => setOpenPanel(null)}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {websiteFeatures.map((feature) => (
                    <div 
                      key={feature} 
                      className="flex items-start gap-3 p-3 bg-secondary/50 border border-blue-vibrant/10"
                    >
                      <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-blue-electric" />
                      <span className="text-sm text-foreground/90">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Monthly Service Button */}
          <div className="animate-fade-in-up stagger-3">
            <button
              onClick={() => togglePanel("service")}
              className="w-full border border-blue-vibrant/40 bg-transparent text-foreground hover:bg-blue-vibrant hover:text-background hover:border-blue-vibrant transition-all duration-300 p-8 lg:p-10 text-left group"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl lg:text-2xl font-normal mb-3 tracking-wide">
                    Maandelijkse service (€20 p.m.)
                  </h3>
                  <p className="text-muted-foreground group-hover:text-background/80 text-sm lg:text-base transition-colors">
                    Hosting, veiligheid en onderhoud in één pakket
                  </p>
                </div>
                <ChevronDown 
                  className={`w-6 h-6 flex-shrink-0 transition-transform duration-300 ${
                    openPanel === "service" ? "rotate-180" : ""
                  }`} 
                />
              </div>
            </button>

            {/* Service Features Panel */}
            <div 
              className={`overflow-hidden transition-all duration-500 ease-in-out ${
                openPanel === "service" ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="bg-card border border-blue-vibrant/30 p-8 lg:p-10">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-lg font-normal text-foreground">Wat zit erin</h4>
                  <button 
                    onClick={() => setOpenPanel(null)}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {serviceFeatures.map((feature) => (
                    <div 
                      key={feature} 
                      className="flex items-start gap-3 p-3 bg-secondary/50 border border-blue-vibrant/10"
                    >
                      <Check className="w-4 h-4 mt-0.5 flex-shrink-0 text-blue-electric" />
                      <span className="text-sm text-foreground/90">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer text */}
        <p className="text-center text-sm text-muted-foreground max-w-2xl mx-auto animate-fade-in-up stagger-4">
          De uiteindelijke totaalprijs bestaat uit de eenmalige bouwkosten + de maandelijkse service. Zo weet je altijd waar je aan toe bent.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
