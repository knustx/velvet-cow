"use client";

import { useState } from "react";
import SectionDivider from "@/components/SectionDivider";

interface FAQItem {
  question: string;
  answer: string;
  id: string;
}

const faqData: FAQItem[] = [
  {
    id: "service-area",
    question: "What areas do you serve?",
    answer: "We serve Montgomery County and Harris County TX, including The Woodlands, Houston, and Conroe. Contact us to confirm service availability for your specific location."
  },
  {
    id: "what-included",
    question: "What's included in your bartending service?",
    answer: "Our service includes professional bartenders, complete bar setup, custom cocktail creation, serving throughout your event, and cleanup afterward. We handle all the bar logistics so you can focus on enjoying your celebration."
  },
  {
    id: "pricing-packages",
    question: "How does your pricing work?",
    answer: "We offer transparent, upfront package pricing with no hidden fees. Our competitive rates are based on event size, duration, and service level. We provide reduced costs for batch cocktails while offering the flexibility to accommodate premium drinks when desired. This approach allows you to balance budget considerations with special requests. Contact us for a customized quote and to discuss how we can tailor our pricing to your specific needs."
  },
  {
    id: "event-types",
    question: "What types of events do you serve?",
    answer: "We specialize in weddings, corporate events, private parties, anniversaries, fundraisers, tailgates, festivals, and other special occasions. Whether intimate or large-scale, we customize our service to fit your event perfectly."
  },
  {
    id: "advance-booking",
    question: "How far in advance should I book?",
    answer: "A minimum of one week lead time is best to ensure proper collaboration and planning, including allowing you appropriate time to source the necessary supplies. We may be able to accommodate last-minute requests in certain circumstances. Please reach out with any specific questions about timing or availability."
  },
  {
    id: "signature-cocktails",
    question: "Can you create custom signature cocktails?",
    answer: "Absolutely! We love creating personalized signature cocktails that reflect your style and preferences. We offer different tiers of drink menus and can work with you to design the perfect cocktail lineup for your event. We also offer special seasonal offerings that incorporate fresh, seasonal ingredients to make your event even more memorable."
  },
  {
    id: "alcohol-provision",
    question: "Do you provide alcohol, or do I need to supply it?",
    answer: "We are a dry hire mobile bartending service. This means you provide the alcohol and we provide the professional bartending expertise. This approach offers several benefits: you have complete control over your alcohol selection and budget, you can choose your preferred brands and quality levels, and you avoid markup costs. Our team will guide you on quantities and selections based on your guest count and preferences to ensure you have everything needed for a successful event."
  },
  {
    id: "guest-capacity",
    question: "How many guests can you serve?",
    answer: "Our packages are designed to scale with event size, whether small or large. We can accommodate events of various sizes, from intimate gatherings to large celebrations. Our team scales to match your guest count, ensuring everyone receives excellent service throughout the event."
  },
  {
    id: "special-requests",
    question: "Can you accommodate special requests or dietary restrictions?",
    answer: "Yes! We're eager to collaborate and tailor our offerings to fit your vision. Whether you have specific cocktail requests, need non-alcoholic options, or have other special requirements, we work with you to make your event uniquely yours."
  }
];

export default function FAQ() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  // Generate structured data for FAQ
  const faqStructuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <>
      {/* FAQ Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqStructuredData),
        }}
      />
      
      <section id="faq" className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl font-bold text-light mb-8">
                Frequently Asked Questions
              </h2>
              <SectionDivider />
              <p className="font-sans text-lg text-light">
                Everything you need to know about our mobile bartending services
              </p>
            </div>
            
            <div className="space-y-4">
              {faqData.map((item) => {
                const isOpen = openItems.includes(item.id);
                
                return (
                  <div
                    key={item.id}
                    className="bg-light rounded-lg border-2 border-primary overflow-hidden"
                  >
                    <button
                      onClick={() => toggleItem(item.id)}
                      className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-primary/10 transition-colors"
                      aria-expanded={isOpen}
                      aria-controls={`faq-answer-${item.id}`}
                    >
                      <h3 className="font-sans font-semibold text-lg text-dark pr-4">
                        {item.question}
                      </h3>
                      <span 
                        className={`text-primary text-2xl transition-transform duration-200 ${
                          isOpen ? 'transform rotate-45' : ''
                        }`}
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </button>
                    
                    <div
                      id={`faq-answer-${item.id}`}
                      className={`px-6 border-t border-primary/20 overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen ? 'max-h-96 pb-4' : 'max-h-0'
                      }`}
                      style={{
                        maxHeight: isOpen ? '400px' : '0px',
                        paddingBottom: isOpen ? '1rem' : '0px'
                      }}
                    >
                      <p className="font-sans text-dark leading-relaxed pt-4">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <div className="text-center mt-12">
              <p className="font-sans text-light mb-4">
                Have a question that isn&apos;t answered here?
              </p>
              <button
                onClick={() => {
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="font-sans font-semibold py-3 px-6 bg-primary text-secondary rounded hover:bg-light hover:text-primary transition-colors"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}