"use client";

import { useState } from "react";
import SectionDivider from "@/components/SectionDivider";

export default function ContactForm() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const formatPhoneNumber = (value: string) => {
    // Remove all non-numeric characters
    const numbersOnly = value.replace(/\D/g, "");
    
    // Limit to 10 digits
    const limitedNumbers = numbersOnly.slice(0, 10);
    
    // Format based on length
    if (limitedNumbers.length === 0) {
      return "";
    } else if (limitedNumbers.length <= 3) {
      return `(${limitedNumbers}`;
    } else if (limitedNumbers.length <= 6) {
      return `(${limitedNumbers.slice(0, 3)}) ${limitedNumbers.slice(3)}`;
    } else {
      return `(${limitedNumbers.slice(0, 3)}) ${limitedNumbers.slice(3, 6)}-${limitedNumbers.slice(6)}`;
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setPhoneNumber(formatted);
  };
  return (
    <section id="contact" className="py-16 bg-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-bold text-secondary mb-8">
              Get In Touch
            </h2>
            <SectionDivider />
            <p className="font-sans text-lg text-dark">
              Ready to start your journey with us? We'd love to hear from you.
            </p>
          </div>
          
          <form className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="font-sans block text-dark mb-2">
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="w-full p-3 border-2 border-muted rounded focus:border-primary focus:outline-none text-dark"
                required
              />
            </div>
            
            <div>
              <label htmlFor="lastName" className="font-sans block text-dark mb-2">
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="w-full p-3 border-2 border-muted rounded focus:border-primary focus:outline-none text-dark"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="font-sans block text-dark mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border-2 border-muted rounded focus:border-primary focus:outline-none text-dark"
                required
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="font-sans block text-dark mb-2">
                Phone Number (optional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={phoneNumber}
                onChange={handlePhoneChange}
                placeholder="(___) ___-____"
                className="w-full p-3 border-2 border-muted rounded focus:border-primary focus:outline-none text-dark"
              />
            </div>
            
            <div className="md:col-span-2">
              <label htmlFor="message" className="font-sans block text-dark mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="w-full p-3 border-2 border-muted rounded focus:border-primary focus:outline-none resize-vertical text-dark"
                placeholder="Let us know how we can tailor your experience to meet your unique needs..."
                required
              ></textarea>
            </div>
            
            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="bg-primary text-secondary font-sans font-semibold py-4 px-8 rounded hover:bg-secondary hover:text-primary transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
