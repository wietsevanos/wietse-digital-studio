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
            Tarieven
          </p>
          <h2 className="text-display-sm font-light text-foreground animate-fade-in-up stagger-1">
            Bouwkosten en{" "}
            <span className="font-display italic text-gradient">service</span>
          </h2>
          <p className="text-body text-muted-foreground mt-4 animate-fade-in-up stagger-2">
            Eenmalige kosten + maandelijkse service, helder geprijsd.
          </p>
        </div>

        {/* Two cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-8">
          {/* Website Options Card - Dark background, blue button */}
          <div className="animate-fade-in-up stagger-3 bg-card border border-blue-vibrant/20 p-6 flex flex-col">
            <h3 className="text-lg font-medium mb-1 tracking-wide text-foreground">
              Website opties en eenmalige kosten
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              Afhankelijk van gekozen functies
            </p>
            
            {/* Price - left aligned like reference */}
            <div className="text-left mb-8">
              <span className="text-sm text-blue-electric block mb-1">vanaf</span>
              <span className="text-[2.5rem] font-normal text-blue-electric">€500</span>
              <span className="text-blue-electric/70 text-xl font-normal ml-2">– €1.800</span>
            </div>

            <button
              onClick={() => togglePanel("website")}
              className="w-full bg-blue-vibrant text-background hover:bg-blue-electric transition-all duration-300 py-3.5 px-6 text-center mt-auto flex items-center justify-center gap-2"
            >
              <span>Bekijk opties</span>
              <ChevronDown 
                className={`w-5 h-5 transition-transform duration-300 ${
                  openPanel === "website" ? "rotate-180" : ""
                }`} 
              />
            </button>
          </div>

          {/* Monthly Service Card - Blue background, dark button */}
          <div className="animate-fade-in-up stagger-4 bg-blue-vibrant border border-blue-vibrant p-6 flex flex-col">
            <h3 className="text-lg font-medium mb-1 tracking-wide text-background">
              Maandelijkse service
            </h3>
            <p className="text-sm text-background/70 mb-6">
              Hosting, veiligheid en onderhoud in één pakket
            </p>
            
            {/* Price - left aligned like reference */}
            <div className="text-left mb-8 mt-5">
              <span className="text-[2.5rem] font-normal text-background">€20</span>
              <span className="text-background/70 text-xl font-normal ml-2">/ maand</span>
            </div>

            <button
              onClick={() => togglePanel("service")}
              className="w-full bg-card text-foreground hover:bg-secondary transition-all duration-300 py-3.5 px-6 text-center mt-auto flex items-center justify-center gap-2"
            >
              <span>Bekijk details</span>
              <ChevronDown 
                className={`w-5 h-5 transition-transform duration-300 ${
                  openPanel === "service" ? "rotate-180" : ""
                }`} 
              />
            </button>
          </div>
        </div>

        {/* Expandable panels below cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-8">
          {/* Website Features Panel */}
          <div 
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              openPanel === "website" ? "opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="bg-card border border-blue-vibrant/30 p-6">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-lg font-normal text-foreground">Inclusief opties</h4>
                <button 
                  onClick={() => setOpenPanel(null)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="grid gap-3">
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

          {/* Service Features Panel */}
          <div 
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              openPanel === "service" ? "opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="bg-card border border-blue-vibrant/30 p-6">
              <div className="flex items-center justify-between mb-6">
                <h4 className="text-lg font-normal text-foreground">Wat zit erin</h4>
                <button 
                  onClick={() => setOpenPanel(null)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="grid gap-3">
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

        {/* Footer text */}
        <p className="text-center text-sm text-muted-foreground max-w-2xl mx-auto animate-fade-in-up stagger-5">
          De uiteindelijke totaalprijs bestaat uit de eenmalige bouwkosten + de maandelijkse service. Zo weet je altijd waar je aan toe bent.
        </p>
      </div>
    </section>
  );
};

export default Pricing;
