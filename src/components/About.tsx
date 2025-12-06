import aboutImage from "@/assets/about-wietse.jpeg";
const About = () => {
  return <section id="over" className="py-section px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-blue-dark/50" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-vibrant/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-label uppercase text-blue-electric mb-4 tracking-widest animate-fade-in">
              Over mij
            </p>
            <h2 className="text-display-sm font-light text-foreground mb-8 animate-fade-in-up stagger-1">
              Wietse{" "}
              <span className="font-display italic text-gradient">van Os</span>
            </h2>
            <div className="space-y-6 text-body-lg text-muted-foreground animate-fade-in-up stagger-2">
              <p>Als digital designer geloof ik in de kracht van eenvoud. Goede websites hoeven niet ingewikkeld te zijn, ze moeten werken voor jou en je klanten.</p>
              <p>
                Mijn aanpak is duidelijk en no-nonsense: ik lever strak ontwerp, snelle 
                laadtijden en een website die je bedrijf echt vooruit helpt. Geen overbodige 
                features, wel transparante prijzen en directe communicatie.
              </p>
              <p className="text-blue-sky">
                Gevestigd in Nederland, werkend voor ondernemers met ambities.
              </p>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 animate-fade-in-up stagger-3">
            <div className="image-reveal aspect-[3/4] max-w-md mx-auto lg:mx-0 lg:ml-auto border-glow glow-blue">
              <img src={aboutImage} alt="Wietse van Os - Digital Designer" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;