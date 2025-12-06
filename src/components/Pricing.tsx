import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const packages = [
  {
    name: "Starter",
    price: "vanaf €750",
    description: "Perfect voor startende ondernemers",
    features: [
      "1-3 pagina's",
      "Responsive design",
      "Basic SEO setup",
      "Contactformulier",
      "1 revisieronde",
      "Snelle laadtijden",
    ],
  },
  {
    name: "Business",
    price: "vanaf €1.250",
    description: "Voor groeiende bedrijven",
    features: [
      "4-6 pagina's",
      "Professioneel design",
      "Social media integratie",
      "2 revisierondes",
      "Google Analytics",
      "Mobiel-first ontwerp",
    ],
    featured: true,
  },
  {
    name: "Premium",
    price: "vanaf €1.500",
    description: "Complete oplossing",
    features: [
      "7+ pagina's",
      "Custom design op maat",
      "3 revisierondes",
      "3 maanden onderhoud",
      "Priority support",
      "Performance optimalisatie",
      "Domein & hosting advies",
    ],
  },
];

const Pricing = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="prijzen" className="py-section px-6 relative">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-vibrant/30 to-transparent" />
      
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="text-label uppercase text-blue-electric mb-4 tracking-widest animate-fade-in">
            Transparante prijzen
          </p>
          <h2 className="text-display-sm font-light text-foreground animate-fade-in-up stagger-1">
            <span className="font-display italic text-gradient">Pakketten</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={pkg.name}
              className={`p-8 lg:p-10 transition-all duration-500 animate-fade-in-up stagger-${index + 2} ${
                pkg.featured 
                  ? "bg-gradient-to-b from-blue-vibrant to-blue-electric text-background relative overflow-hidden" 
                  : "bg-card border-glow hover:border-blue-vibrant/50"
              }`}
            >
              {pkg.featured && (
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-blue-sky via-blue-light to-blue-sky" />
              )}
              
              <div className="mb-8">
                <h3 className={`text-xl font-normal mb-2 ${pkg.featured ? "text-background" : "text-foreground"}`}>
                  {pkg.name}
                </h3>
                <p className={`text-caption mb-6 ${pkg.featured ? "text-background/70" : "text-muted-foreground"}`}>
                  {pkg.description}
                </p>
                <div className={`text-4xl font-light ${pkg.featured ? "text-background" : "text-blue-sky"}`}>
                  {pkg.price}
                </div>
              </div>

              <ul className="space-y-4 mb-10">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`w-4 h-4 mt-1 flex-shrink-0 ${pkg.featured ? "text-background/70" : "text-blue-electric"}`} />
                    <span className={`text-body ${pkg.featured ? "text-background/90" : "text-muted-foreground"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={pkg.featured ? "outline" : "hero"}
                className={`w-full ${pkg.featured ? "border-background/40 text-background hover:bg-background hover:text-blue-vibrant" : ""}`}
                onClick={scrollToContact}
              >
                Aan de slag
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
