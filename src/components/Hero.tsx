import { Button } from "@/components/ui/button";
const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth"
      });
    }
  };
  return <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 bg-gradient-glow pointer-events-none" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-vibrant/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 bg-blue-electric/10 rounded-full blur-3xl animate-float" style={{
      animationDelay: "-3s"
    }} />
      
      <div className="container mx-auto max-w-5xl relative z-10">
        <h1 className="text-display font-light text-foreground mb-4 animate-fade-in-up stagger-1">
          Wietse{" "}
          <span className="font-display italic text-gradient">Webworks</span>
        </h1>
        
        <p className="text-display-sm font-light text-muted-foreground mb-8 animate-fade-in-up stagger-2">
          Clean, modern en doelgericht webdesign voor ambitieuze ondernemers.
        </p>
        
        <p className="text-body-lg text-muted-foreground max-w-2xl mb-12 animate-fade-in-up stagger-3">Van idee tot livegang, helder en zorgvuldig uitgevoerd.</p>
        
        <div className="flex flex-wrap gap-4 animate-fade-in-up stagger-4">
          <Button variant="hero" size="lg" onClick={() => scrollToSection("werk")}>
            Bekijk werk
          </Button>
          <Button variant="outline" size="lg" onClick={() => scrollToSection("contact")}>
            Neem contact op
          </Button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-fade-in stagger-5">
        <div className="w-px h-16 bg-gradient-to-b from-blue-vibrant/50 to-transparent" />
      </div>
    </section>;
};
export default Hero;