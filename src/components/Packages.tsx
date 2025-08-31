"use client";

import PackageCard from "@/components/PackageCard";
import SectionDivider from "@/components/SectionDivider";

export default function Packages() {
  const basePackage = {
    name: "The Fundamentals",
    price: "$750",
    features: [
      "Bartender for 50 guests for UP to 4 hours*",
      "Bar set up and tear down",
      "Bar tools",
      "Sugar Cane Straws",
      "Acrylic Plastic Cups*",
      "White Napkins*",
      "Ice Delivery and coolers",
      "Bar Set-up & Breakdown*",
      "Event & Bar Consultation 30 minutes",
      "Shopping list for alcohol recommendations",
      "Complete liability insurance coverage"
    ],
    footnotes: [
      "*Additional bartender required for more than 50 guests at $50 hourly",
      "*upgrades available",
      "*customized Velvet Cow cart available for $300 add-on"
    ]
  };

  const addOnPackages = [
    {
      name: "Brews & Vines",
      tagline: "Cheers!",
      price: "$4 per Guest",
      features: [
        "Beer & Wine Pour",
        "Basic Garnishes"
      ]
    },
    {
      name: "Barrel Batchers",
      tagline: "Perfect & Simplistic",
      price: "$6 per Guest",
      features: [
        "Beer & Wine Pour",
        "2 Barrel Batchers or 2 House Drinks",
        "Basic Garnishes"
      ]
    },
    {
      name: "Grazing Pasture",
      tagline: "The Upgrade",
      price: "$8 per Guest",
      features: [
        "Beer & Wine Pour",
        "Choice of 2 House Drinks", 
        "1 Barrel Batcher", 
        "Basic Garnishes"
      ]
    },
    {
      name: "The Prairie Pour",
      tagline: "Perfect Elegant Mix",
      price: "$11  per Guest",
      features: [
        "Beer & Wine Pour",
        "Choice of 4 House Drinks", 
        "Premium & Basic Garnishes"
      ]
    },
    {
      name: "The Velvet Reserve",
      tagline: "Upscale & Inclusive",
      price: "$13 per Guest",
      features: [
        "Beer & Wine Pour",
        "Full Menu of House Drinks", 
        "2 Barrel Batchers", 
        "Premium & Basic Garnishes"
      ]
    },
  ];

  const handlePackageSelect = (packageName: string) => {
    console.log(`Selected package: ${packageName}`);
    // TODO: Add package selection logic
  };

  return (
    <section id="packages" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold text-primary mb-8">
            Our Packages
          </h2>
          <SectionDivider />
          <p className="font-sans text-lg text-light max-w-2xl mx-auto">
            Our Bar Fundamentals package is the foundation of your event's beverage service, covering all the essentials for a seamless experience.
          </p>
        </div>
        
        {/* Base Package - The Fundamentals */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl font-bold text-primary mb-4">
              Base Package - Required for All Events
            </h3>
            <p className="font-sans text-light">
              This fee covers our services provided below:
            </p>
          </div>
          
          {/* 3x2 Grid: Row 1 - Base package (2 cols), Row 2 - Add-ons (3x1 cols) */}
          <div className="grid md:grid-cols-3 md:grid-rows-2 gap-6 max-w-6xl mx-auto">
            {/* Row 1: Base package spans 2 columns */}
            <div className="md:col-span-2">
              <PackageCard
                name={basePackage.name}
                price={basePackage.price}
                features={basePackage.features}
                footnotes={basePackage.footnotes}
                size="2x"
                selectable={false}
              />
            </div>
            
            {/* Empty cell in row 1, column 3 */}
            <div className="hidden md:block"></div>
            
            {/* Row 2: Add-On Packages - each takes 1 column */}
            {addOnPackages.map((pkg, index) => (
              <PackageCard
                key={index}
                name={pkg.name}
                price={pkg.price}
                features={pkg.features}
                size="1x"
                selectable={true}
                onSelect={() => handlePackageSelect(pkg.name)}
              />
            ))}
          </div>
          
          {/* Add-on packages header - only visible on mobile */}
          <div className="text-center mt-12 mb-8 md:hidden">
            <h3 className="font-serif text-xl font-bold text-primary mb-2">
              Add-On Packages
            </h3>
            <p className="font-sans text-sm text-light">
              Per-person enhancements
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
