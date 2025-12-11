const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-6 border-t border-blue-mid/30">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-4">
            <p className="text-caption text-muted-foreground">
              © {currentYear} Wietse Webworks. Alle rechten voorbehouden.
            </p>
            <p className="text-caption text-muted-foreground">
              KVK: 99105578
            </p>
          </div>
          <p className="text-caption text-blue-sky">
            Strak webdesign voor ondernemers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
