export default function Header() {
  return (
    <header className="bg-background border-b-2 border-primary py-6">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="font-serif text-3xl font-bold text-primary">
            Velvet Cow
          </div>
          <nav className="hidden md:flex space-x-8">
            <a 
              href="#about" 
              className="font-sans text-dark hover:text-primary transition-colors"
            >
              About Us
            </a>
            <a 
              href="#packages" 
              className="font-sans text-dark hover:text-primary transition-colors"
            >
              Packages
            </a>
            <a 
              href="#contact" 
              className="font-sans text-dark hover:text-primary transition-colors"
            >
              Contact
            </a>
          </nav>
          {/* Mobile menu button placeholder */}
          <button className="md:hidden text-dark">
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}
