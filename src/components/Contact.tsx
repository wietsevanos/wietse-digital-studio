import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Mail, Phone, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  naam: z.string().trim().min(1, "Naam is verplicht").max(100),
  email: z.string().trim().email("Ongeldig e-mailadres").max(255),
  telefoon: z.string().trim().min(1, "Telefoonnummer is verplicht").max(20),
  bedrijf: z.string().trim().min(1, "Bedrijfsnaam is verplicht").max(100),
  opmerking: z.string().trim().max(1000).optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [formData, setFormData] = useState<ContactFormData>({
    naam: "",
    email: "",
    telefoon: "",
    bedrijf: "",
    opmerking: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    const result = contactSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach(err => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
        }
      });
      setErrors(fieldErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      const { error } = await supabase.functions.invoke("send-contact-email", {
        body: formData,
      });

      if (error) throw error;

      navigate("/bevestiging");
    } catch (error: any) {
      console.error("Error sending contact form:", error);
      toast({
        title: "Er ging iets mis",
        description: "Probeer het later opnieuw of neem direct contact op.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-section px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-blue-dark/50" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-vibrant/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-label uppercase text-blue-electric mb-4 tracking-widest animate-fade-in">
            Contact
          </p>
          <h2 className="text-display-sm font-light text-foreground mb-6 animate-fade-in-up stagger-1">
            Laten we{" "}
            <span className="font-display italic text-gradient">samenwerken</span>
          </h2>
          <p className="text-body-lg text-muted-foreground mb-12 animate-fade-in-up stagger-2">
            Klaar om jouw online aanwezigheid naar het volgende niveau te tillen? 
            Plan een vrijblijvend gesprek.
          </p>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 text-left animate-fade-in-up stagger-3">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="naam" className="text-foreground">Naam *</Label>
                <Input
                  id="naam"
                  name="naam"
                  placeholder="Je naam"
                  value={formData.naam}
                  onChange={handleChange}
                  className="bg-background/50 border-border/50 focus:border-blue-electric"
                />
                {errors.naam && <p className="text-sm text-red-400">{errors.naam}</p>}
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">E-mail *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="je@email.nl"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-background/50 border-border/50 focus:border-blue-electric"
                />
                {errors.email && <p className="text-sm text-red-400">{errors.email}</p>}
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="telefoon" className="text-foreground">Telefoonnummer *</Label>
                <Input
                  id="telefoon"
                  name="telefoon"
                  type="tel"
                  placeholder="06 12345678"
                  value={formData.telefoon}
                  onChange={handleChange}
                  className="bg-background/50 border-border/50 focus:border-blue-electric"
                />
                {errors.telefoon && <p className="text-sm text-red-400">{errors.telefoon}</p>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="bedrijf" className="text-foreground">Bedrijfsnaam *</Label>
                <Input
                  id="bedrijf"
                  name="bedrijf"
                  placeholder="Je bedrijfsnaam"
                  value={formData.bedrijf}
                  onChange={handleChange}
                  className="bg-background/50 border-border/50 focus:border-blue-electric"
                />
                {errors.bedrijf && <p className="text-sm text-red-400">{errors.bedrijf}</p>}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="opmerking" className="text-foreground">Opmerking (optioneel)</Label>
              <Textarea
                id="opmerking"
                name="opmerking"
                placeholder="Vertel iets over je project of stel een vraag..."
                value={formData.opmerking}
                onChange={handleChange}
                rows={4}
                className="bg-background/50 border-border/50 focus:border-blue-electric resize-none"
              />
            </div>

            <div className="text-center pt-4">
              <Button
                type="submit"
                variant="glow"
                size="xl"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Versturen..." : "Plan een gesprek"}
              </Button>
            </div>
          </form>

          {/* Contact Info */}
          <div className="mt-16 pt-12 border-t border-border/30">
            <p className="text-body text-muted-foreground mb-6">Of neem direct contact op:</p>
            <div className="flex flex-wrap justify-center gap-8">
              <a 
                href="tel:+31647872734" 
                className="flex items-center gap-2 text-body text-foreground hover:text-blue-sky transition-colors group"
              >
                <Phone className="w-5 h-5 text-blue-electric group-hover:text-blue-sky transition-colors" />
                <span>06 47872734</span>
              </a>
              <a 
                href="mailto:wietsevanos@gmail.com" 
                className="flex items-center gap-2 text-body text-foreground hover:text-blue-sky transition-colors group"
              >
                <Mail className="w-5 h-5 text-blue-electric group-hover:text-blue-sky transition-colors" />
                <span>wietsevanos@gmail.com</span>
              </a>
              <a 
                href="https://instagram.com/wietsevanos" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-body text-foreground hover:text-blue-sky transition-colors group"
              >
                <Instagram className="w-5 h-5 text-blue-electric group-hover:text-blue-sky transition-colors" />
                <span>@wietsevanos</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
