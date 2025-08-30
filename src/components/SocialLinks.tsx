export default function SocialLinks() {
  const socialLinks = [
    { name: "Instagram", url: "#", icon: "📸" },
    { name: "Facebook", url: "#", icon: "📘" },
    { name: "Twitter", url: "#", icon: "🐦" },
    { name: "LinkedIn", url: "#", icon: "💼" }
  ];

  return (
    <section className="py-12 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="font-serif text-2xl font-bold text-primary mb-8">
            Follow Us
          </h3>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="bg-primary text-secondary p-4 rounded-full hover:bg-light hover:text-secondary transition-colors group"
                aria-label={social.name}
              >
                <span className="text-2xl">{social.icon}</span>
              </a>
            ))}
          </div>
          <p className="font-sans text-primary mt-6">
            Stay connected with us on social media for the latest updates and inspiration.
          </p>
        </div>
      </div>
    </section>
  );
}
