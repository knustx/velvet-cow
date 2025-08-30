import Header from "@/components/Header";
import AboutUs from "@/components/AboutUs";
import Packages from "@/components/Packages";
import ContactForm from "@/components/ContactForm";
import SocialLinks from "@/components/SocialLinks";
import SiteMap from "@/components/SiteMap";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <AboutUs />
        <Packages />
        <ContactForm />
      </main>
      <SocialLinks />
      <SiteMap />
    </div>
  );
}
