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
        </div>
        
        <div className="text-left max-w-4xl mx-auto space-y-8">
          <p className="font-sans text-lg text-dark leading-relaxed">
            Hosting should be joyful—not a juggling act. With Velvet Cow Brew and Booze, guests can relax, 
            mingle, and truly celebrate while we handle the bar and all its details.
          </p>
          
          <div>
            <h3 className="font-serif text-2xl font-bold text-secondary mb-4">
              Partners in Memories
            </h3>
            <p className="font-sans text-lg text-dark leading-relaxed">
              Event planning can sometimes feel like herding cattle—lots of moving parts and details galore. 
              That's where we come in. Velvet Cow Brew and Booze isn't just a mobile bartending service in 
              The Woodlands & Houston; we're your partners in creating moments worth remembering.
            </p>
          </div>
          
          <div>
            <h3 className="font-serif text-2xl font-bold text-secondary mb-4">
              Straightforward Experience
            </h3>
            <p className="font-sans text-lg text-dark leading-relaxed">
              We're committed to making event planning smooth and hassle-free. That's why we offer upfront, 
              competitive package pricing with accessible rates—so you always know what to expect, with zero 
              hidden fees or surprises. Our streamlined booking, with an easy-to-use form, makes the process 
              stress-free from start to finish.
            </p>
          </div>
          
          <div>
            <h3 className="font-serif text-2xl font-bold text-secondary mb-4">
              Worry-Free Hosting
            </h3>
            <p className="font-sans text-lg text-dark leading-relaxed">
              Our passionate team handles it all—arriving early, setting up a beautiful bar, serving great drinks, 
              and tidying up afterwards so you can stay focused on what matters most: your guests.
            </p>
          </div>
          
          <div>
            <h3 className="font-serif text-2xl font-bold text-secondary mb-4">
              Drink Menu Tiers & Signature Cocktails
            </h3>
            <p className="font-sans text-lg text-dark leading-relaxed">
              Let Velvet Cow Brew and Booze transform your event into a smooth, unforgettable celebration. 
              Hand us the logistics and savor the laughter, clinking glasses, and authentic connections. 
              We offer different tiers of drink menus to match any taste or occasion, plus signature cocktails 
              for you to browse and choose the perfect lineup.
            </p>
          </div>
          
          <div>
            <h3 className="font-serif text-2xl font-bold text-secondary mb-4">
              Flexible, Personal Service
            </h3>
            <p className="font-sans text-lg text-dark leading-relaxed mb-4">
              Simple never means rigid. Got unique ideas or special requests? We're eager to collaborate and 
              tailor our offerings to fit your vision. At Velvet Cow Brew and Booze, exceptional service meets 
              a personalized touch, letting you enjoy remarkable moments without the hassle.
            </p>
            <p className="font-sans text-lg text-dark leading-relaxed font-medium">
              Craving something extraordinary? Fill out the form below—let us know how we can make your event uniquely yours!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
