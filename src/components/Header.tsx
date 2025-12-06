import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-background/90 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between py-6">
        <Link 
          to="/" 
          className="text-lg font-normal tracking-tight text-foreground transition-colors hover:text-blue-sky"
        >
          Wietse Webworks
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-10">
          <li>
            <button
              onClick={() => scrollToSection("werk")}
              className="text-caption text-muted-foreground hover:text-blue-sky transition-colors"
            >
              Werk
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("over")}
              className="text-caption text-muted-foreground hover:text-blue-sky transition-colors"
            >
              Over
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("prijzen")}
              className="text-caption text-muted-foreground hover:text-blue-sky transition-colors"
            >
              Prijzen
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-caption text-blue-sky hover:text-blue-light transition-colors"
            >
              Contact
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-px bg-foreground transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-px bg-foreground transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-px bg-foreground transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md transition-all duration-500 overflow-hidden ${
          isMobileMenuOpen ? "max-h-80 border-b border-border" : "max-h-0"
        }`}
      >
        <ul className="container mx-auto py-6 flex flex-col gap-6">
          <li>
            <button
              onClick={() => scrollToSection("werk")}
              className="text-body text-foreground hover:text-blue-sky"
            >
              Werk
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("over")}
              className="text-body text-foreground hover:text-blue-sky"
            >
              Over
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("prijzen")}
              className="text-body text-foreground hover:text-blue-sky"
            >
              Prijzen
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-body text-blue-sky"
            >
              Contact
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
