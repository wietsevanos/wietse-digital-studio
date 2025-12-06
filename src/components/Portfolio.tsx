import { ExternalLink } from "lucide-react";
import projectKomo from "@/assets/project-komo.webp";
import projectMadeliefste from "@/assets/project-madeliefste.png";
import projectRogerStorm from "@/assets/project-rogerstorm.png";

const projects = [
  {
    id: 1,
    title: "Komo",
    description: "Specialty Coffee & Matcha bar met zen-uitstraling",
    image: projectKomo,
    tags: ["Webdesign", "Horeca"],
    url: "https://komo-slow-zen-site.lovable.app",
  },
  {
    id: 2,
    title: "Madeliefste Bloemen",
    description: "Buurtbloemist in Haarlem met warme, persoonlijke uitstraling",
    image: projectMadeliefste,
    tags: ["Webdesign", "Retail"],
    url: "https://bloemen-van-madeliefste.lovable.app",
  },
  {
    id: 3,
    title: "Roger & Storm",
    description: "Professionele hair salon met moderne, elegante look",
    image: projectRogerStorm,
    tags: ["Webdesign", "Beauty"],
    url: "https://natural-strokes-studio.lovable.app",
  },
];

const Portfolio = () => {
  return (
    <section id="werk" className="py-section px-6 relative">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-vibrant/30 to-transparent" />
      
      <div className="container mx-auto">
        <div className="mb-16">
          <p className="text-label uppercase text-blue-electric mb-4 tracking-widest animate-fade-in">
            Geselecteerd werk
          </p>
          <h2 className="text-display-sm font-light text-foreground animate-fade-in-up stagger-1">
            Recente{" "}
            <span className="font-display italic text-gradient">projecten</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <a 
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group block animate-fade-in-up stagger-${index + 2}`}
            >
              <div className="image-reveal aspect-[16/10] mb-6 bg-blue-dark border-glow relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                  <span className="flex items-center gap-2 text-blue-sky text-sm">
                    <ExternalLink className="w-4 h-4" />
                    Bekijk website
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 mb-3">
                {project.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="text-label uppercase text-blue-sky"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-light text-foreground mb-2 group-hover:text-blue-sky transition-colors">
                {project.title}
              </h3>
              <p className="text-body text-muted-foreground">
                {project.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
