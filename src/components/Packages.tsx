"use client";

import PackageCard from "@/components/PackageCard";
import SectionDivider from "@/components/SectionDivider";

export default function Packages() {
  const packages = [
    {
      name: "Essential",
      price: "$299",
      features: ["Basic consultation", "Standard delivery", "Email support"]
    },
    {
      name: "Premium",
      price: "$599",
      features: ["Extended consultation", "Priority delivery", "Phone & email support", "Custom options"]
    },
    {
      name: "Luxury",
      price: "$999",
      features: ["Complete consultation", "Express delivery", "24/7 support", "Full customization", "Premium materials"]
    }
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
            Choose the perfect package tailored to your needs and budget.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <PackageCard
              key={index}
              name={pkg.name}
              price={pkg.price}
              features={pkg.features}
              onSelect={() => handlePackageSelect(pkg.name)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
