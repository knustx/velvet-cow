import SectionDivider from "@/components/SectionDivider";

export default function AboutUs() {
  return (
    <section id="about" className="py-16 bg-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-bold text-secondary mb-8">
            About Us
          </h2>
          <SectionDivider />
          <p className="font-sans text-lg text-dark leading-relaxed mb-6">
            Welcome to Velvet Cow, where elegance meets excellence. We specialize in creating 
            unforgettable experiences through our carefully curated packages and services.
          </p>
          <p className="font-sans text-lg text-dark leading-relaxed">
            Our team is dedicated to providing personalized solutions that exceed your 
            expectations and bring your vision to life.
          </p>
        </div>
      </div>
    </section>
  );
}
