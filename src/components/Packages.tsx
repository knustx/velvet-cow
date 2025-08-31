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
          
          {/* The Fundamentals - Centered */}
          <div className="max-w-2xl mx-auto mb-12">
            <PackageCard
              name={basePackage.name}
              price={basePackage.price}
              features={basePackage.features}
              footnotes={basePackage.footnotes}
              size="2x"
              selectable={false}
            />
          </div>
          
          {/* Add-on packages header */}
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl font-bold text-primary mb-4">
              Add-On Packages
            </h3>
            <p className="font-sans text-light">
              Per-person enhancements
            </p>
          </div>
          
          {/* Add-On Packages - Split into 2 rows: 2 centered on top, 3 on bottom */}
          <div className="max-w-4xl mx-auto">
            {/* First row - 2 packages centered */}
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-6">
              {addOnPackages.slice(0, 2).map((pkg, index) => (
                <div key={index} className="h-full">
                  <PackageCard
                    name={pkg.name}
                    price={pkg.price}
                    features={pkg.features}
                    size="1x"
                    selectable={true}
                    onSelect={() => handlePackageSelect(pkg.name)}
                  />
                </div>
              ))}
            </div>
            
            {/* Second row - 3 packages */}
            <div className="grid md:grid-cols-3 gap-6">
              {addOnPackages.slice(2).map((pkg, index) => (
                <div key={index + 2} className="h-full">
                  <PackageCard
                    name={pkg.name}
                    price={pkg.price}
                    features={pkg.features}
                    size="1x"
                    selectable={true}
                    onSelect={() => handlePackageSelect(pkg.name)}
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Remove mobile-only add-on packages header as we now have a dedicated header for all screen sizes */}
        </div>
      </div>
    </section>
  );
}
