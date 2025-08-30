export default function SiteMap() {
  return (
    <footer className="bg-dark text-light py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <h3 className="font-serif text-2xl font-bold text-primary mb-4">
              Velvet Cow
            </h3>
            <p className="font-sans text-muted leading-relaxed">
              Creating elegant experiences and unforgettable moments through our 
              premium services and personalized approach.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-bold text-light mb-4">
              Quick Links
            </h4>
            <nav className="font-sans space-y-2">
              <a href="#about" className="block text-muted hover:text-primary transition-colors">
                About Us
              </a>
              <a href="#packages" className="block text-muted hover:text-primary transition-colors">
                Our Packages
              </a>
              <a href="#contact" className="block text-muted hover:text-primary transition-colors">
                Contact Us
              </a>
              <a href="#" className="block text-muted hover:text-primary transition-colors">
                Privacy Policy
              </a>
            </nav>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-bold text-light mb-4">
              Get In Touch
            </h4>
            <div className="font-sans text-muted space-y-2">
              <p>📧 hello@velvetcow.com</p>
              <p>📞 (555) 123-4567</p>
              <p>📍 123 Elegant Street<br />Suite 456<br />Premium City, PC 12345</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-muted mt-8 pt-8 text-center">
          <p className="font-sans text-muted">
            © 2024 Velvet Cow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
