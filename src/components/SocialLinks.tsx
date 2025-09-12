import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
import SectionDivider from '@/components/SectionDivider';

export default function SocialLinks() {
  const socialLinks = [
    { name: "Facebook", url: "https://www.facebook.com/people/The-Velvet-Cow-Brews-Booze/61579165239793/", icon: FaFacebook },
    { name: "TikTok", url: "https://www.tiktok.com/@velvetcowbrewsandbooze", icon: FaTiktok },
    { name: "Instagram", url: "https://www.instagram.com/thevelvetcowbrews/", icon: FaInstagram }
  ];

  return (
    <section id="social" className="py-12 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-serif text-4xl font-bold text-primary mb-8">
            Follow Us
          </h2>
          <SectionDivider />
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary text-secondary p-4 rounded-full hover:bg-light hover:text-secondary transition-all hover:scale-150"
                  aria-label={social.name}
                >
                  <IconComponent size={24} />
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
