import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

export default function SocialLinks() {
  const socialLinks = [
    { name: "Facebook", url: "#", icon: FaFacebook },
    { name: "TikTok", url: "#", icon: FaTiktok },
    { name: "Instagram", url: "#", icon: FaInstagram }
  ];

  return (
    <section className="py-12 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="font-serif text-2xl font-bold text-primary mb-8">
            Follow Us
          </h3>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  className="bg-primary text-secondary p-4 rounded-full hover:bg-light hover:text-secondary transition-colors group"
                  aria-label={social.name}
                >
                  <IconComponent size={24} className="transition-transform group-hover:scale-110" />
                </a>
              );
            })}
          </div>
          <p className="font-sans text-primary mt-6">
            Stay connected with us on social media for the latest updates and inspiration.
          </p>
        </div>
      </div>
    </section>
  );
}
