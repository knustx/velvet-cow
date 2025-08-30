import SectionDivider from "@/components/SectionDivider";

export default function ContactForm() {
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
                className="w-full p-3 border-2 border-muted rounded focus:border-primary focus:outline-none"
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
                className="w-full p-3 border-2 border-muted rounded focus:border-primary focus:outline-none"
                required
              />
            </div>
            
            <div className="md:col-span-2">
              <label htmlFor="email" className="font-sans block text-dark mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 border-2 border-muted rounded focus:border-primary focus:outline-none"
                required
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
                className="w-full p-3 border-2 border-muted rounded focus:border-primary focus:outline-none resize-vertical"
                placeholder="Tell us about your project or ask us a question..."
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
