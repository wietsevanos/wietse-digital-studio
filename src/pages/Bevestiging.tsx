import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const Bevestiging = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="absolute inset-0 bg-blue-dark/50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-vibrant/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-lg text-center">
        <div className="mb-8 flex justify-center">
          <div className="w-20 h-20 rounded-full bg-blue-electric/20 flex items-center justify-center animate-fade-in">
            <CheckCircle className="w-10 h-10 text-blue-electric" />
          </div>
        </div>
        
        <h1 className="text-display-sm font-light text-foreground mb-4 animate-fade-in-up">
          Bedankt voor je{" "}
          <span className="font-display italic text-gradient">aanvraag!</span>
        </h1>
        
        <p className="text-body-lg text-muted-foreground mb-8 animate-fade-in-up stagger-1">
          Ik heb je bericht ontvangen en neem zo snel mogelijk contact met je op. 
          Meestal binnen 24 uur.
        </p>
        
        <div className="animate-fade-in-up stagger-2">
          <Button variant="glow" size="lg" asChild>
            <Link to="/">Terug naar home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Bevestiging;
