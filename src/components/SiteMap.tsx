import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { FaChevronRight } from 'react-icons/fa';

export default function SiteMap() {
  return (
    <footer className="bg-dark text-light py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-12 gap-8">
          {/* Brand Section - Takes up 5 columns */}
          <div className="md:col-span-5">
            <h3 className="font-serif text-2xl font-bold text-primary mb-4">
              Velvet Cow
            </h3>
            <p className="font-sans text-muted leading-relaxed pr-4">
              Creating elegant experiences and unforgettable moments through our 
              premium services and personalized approach.
            </p>
          </div>
          
          {/* Quick Links - Takes up 3 columns */}
          <div className="md:col-span-3">
            <h4 className="font-serif text-lg font-bold text-light mb-4">
              Quick Links
            </h4>
            <nav className="font-sans space-y-2">
              <a href="#about" className="flex items-center gap-2 text-muted hover:text-primary transition-colors group">
                <FaChevronRight size={12} className="text-primary opacity-75 group-hover:opacity-100 transition-opacity" />
                <span>About Us</span>
              </a>
              <a href="#packages" className="flex items-center gap-2 text-muted hover:text-primary transition-colors group">
                <FaChevronRight size={12} className="text-primary opacity-75 group-hover:opacity-100 transition-opacity" />
                <span>Our Packages</span>
              </a>
              <a href="#contact" className="flex items-center gap-2 text-muted hover:text-primary transition-colors group">
                <FaChevronRight size={12} className="text-primary opacity-75 group-hover:opacity-100 transition-opacity" />
                <span>Contact Us</span>
              </a>
              <a href="#" className="flex items-center gap-2 text-muted hover:text-primary transition-colors group">
                <FaChevronRight size={12} className="text-primary opacity-75 group-hover:opacity-100 transition-opacity" />
                <span>Privacy Policy</span>
              </a>
            </nav>
          </div>
          
          {/* Contact Info - Takes up 4 columns */}
          <div className="md:col-span-4">
            <h4 className="font-serif text-lg font-bold text-light mb-4">
              Get In Touch
            </h4>
            <div className="font-sans text-muted space-y-3">
              <div className="flex items-center gap-3">
                <MdEmail size={20} className="text-primary" />
                <span>hello@velvetcow.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MdPhone size={20} className="text-primary" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-start gap-3">
                <MdLocationOn size={20} className="text-primary mt-1" />
                <div>
                  <div>123 Elegant Street</div>
                  <div>Suite 456</div>
                  <div>Premium City, PC 12345</div>
                </div>
              </div>
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
