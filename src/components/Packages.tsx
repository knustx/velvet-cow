"use client";

import { useState } from "react";
import PackageCard from "@/components/PackageCard";
import SectionDivider from "@/components/SectionDivider";
import PriceCalculator from "@/components/PriceCalculator";
import { trackPackageSelection, trackAddonSelection } from "@/lib/analytics";

export default function Packages() {
  // State to track which Brews & Booze Bundle is selected (default to first one - Brews & Vines)
  const [selectedPackageIndex, setSelectedPackageIndex] = useState<number>(0);
  // State to track selected Highland Premium items
  const [selectedPremiums, setSelectedPremiums] = useState<Set<string>>(new Set());
  const basePackage = {
    name: "The Fundamentals",
    price: "$750 Flat",
    features: [
      "Bartender for 50 guests for up to 4 hours*",
      "Bar set up and tear down",
      "Bar tools",
      "Sugar Cane Straws",
      "Acrylic Plastic Cups**",
      "White Napkins**",
      "Ice Delivery and coolers",
      "Bar Set-up & Breakdown",
      "Event & Bar Consultation 30 minutes",
      "Shopping list for alcohol recommendations",
      "Complete liability insurance coverage"
    ],
    footnotes: [
      "*Additional bartender required for more than 50 guests at $50 hourly",
      "**Upgrades available"
    ]
  };

  const drinkPackages = [
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
        "Choice of 2 Barrel Batchers or 2 House Drinks",
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
        "Choice of 1 Barrel Batcher", 
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
        "Choice of 1 Barrel Batcher", 
        "Choice of 2 Premium Garnishes",
        "Basic Garnishes"
      ]
    },
    {
      name: "Velvet Reserve",
      tagline: "Upscale & Inclusive",
      price: "$13 per Guest",
      features: [
        "Beer & Wine Pour",
        "Full Menu of House Drinks", 
        "Choice of 2 Barrel Batchers", 
        "Choice of 2 Premium Garnishes",
        "Basic Garnishes"
      ]
    },
  ];

  const premiumItems = [
    {
      id: 'water-trough',
      name: 'Water Trough',
      price: '$2 per guest',
      description: 'Includes: table, carafe, napkins, cups and lemons'
    },
    {
      id: 'iced-tea-trough',
      name: 'Iced Tea Trough',
      price: '$3 per guest',
      description: 'Includes: table, carafe, napkins, cups and lemons'
    },
    {
      id: 'champagne-pour',
      name: 'Champagne Pour',
      price: '$2.50 per guest',
      description: 'Includes disposable champagne flutes, pour and display'
    },
    {
      id: 'champagne-barrel',
      name: 'Champagne Floral Barrel',
      price: '$60 per barrel',
      description: 'Includes barrel, ice and florals to elevate your champagne display'
    },
    {
      id: 'velvet-charms',
      name: 'The Velvet Charms',
      price: '$2.50 per guest',
      description: 'Self serve elevated garnishes: herbs, florals, dehydrated citrus. Customized display'
    },
    {
      id: 'prairie-garnishes',
      name: 'Prairie Petal Garnishes',
      price: '$1.50 per guest',
      description: 'Garnishes beyond the basics: edible glitter, herbs, dehydrated citrus, complex fruits'
    },
    {
      id: 'velvet-syrups',
      name: 'Velvet Infused Syrups',
      price: '$150 flat fee',
      description: 'Self-serve for guests. Elevates basic cocktails. 3 house-made seasonal syrups. Servings for 2 cocktails per guest'
    }
  ];

  const handlePackageSelect = (packageIndex: number) => {
    setSelectedPackageIndex(packageIndex);
    const selectedPackage = drinkPackages[packageIndex];
    console.log(`Selected package: ${selectedPackage.name}`);
    
    // Track package selection in GA4
    trackPackageSelection(selectedPackage.name, packageIndex, selectedPackage.price);
  };

  const handlePremiumToggle = (itemId: string) => {
    const newSelected = new Set(selectedPremiums);
    const wasSelected = newSelected.has(itemId);
    const isNowSelected = !wasSelected;
    
    if (wasSelected) {
      newSelected.delete(itemId);
    } else {
      newSelected.add(itemId);
    }
    
    setSelectedPremiums(newSelected);
    console.log('Selected premiums:', Array.from(newSelected));
    
    // Track add-on selection in GA4
    const premiumItem = premiumItems.find(item => item.id === itemId);
    if (premiumItem) {
      trackAddonSelection(premiumItem.name, itemId, premiumItem.price, isNowSelected);
    }
  };

  return (
    <section id="packages" className="py-16 bg-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="font-serif text-4xl font-bold text-primary mb-8">
            Our Packages
          </h2>
          <SectionDivider />
        </div>
        
        <div className="text-left max-w-4xl mx-auto mb-12">
          <p className="font-sans text-lg text-light leading-relaxed">
            Our Fundamentals package applies to all of our experiences. Please choose the right Brews & Booze Bundle 
            to make your celebration truly memorable and perfectly tailored to your guests.
          </p>
        </div>
        
        {/* Base Package - The Fundamentals */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl font-bold text-primary mb-2">
              Essential Service
            </h3>
            <div className="font-sans text-sm font-bold text-primary mb-4">
              (Required for All Events)
            </div>
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
          
          {/* Brews & Booze Bundles header */}
          <div className="text-center mb-8">
            <h3 className="font-serif text-2xl font-bold text-primary mb-2">
              Brews & Booze Bundles
            </h3>
            <div className="font-sans text-sm font-bold text-primary mb-4">
              (Choose One)
            </div>
            <p className="font-sans text-light">
              Tailor your experience with our curated beverage collections (per-guest pricing)
            </p>
          </div>
          
          {/* Drink Packages - Split into 2 rows: 2 centered on top, 3 on bottom */}
          <div className="max-w-4xl mx-auto">
            {/* First row - 2 packages centered */}
            <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mb-6">
              {drinkPackages.slice(0, 2).map((pkg, index) => (
                <div key={index} className="h-full">
                  <PackageCard
                    name={pkg.name}
                    price={pkg.price}
                    features={pkg.features}
                    size="1x"
                    selectable={true}
                    selected={selectedPackageIndex === index}
                    onSelect={() => handlePackageSelect(index)}
                  />
                </div>
              ))}
            </div>
            
            {/* Second row - 3 packages */}
            <div className="grid md:grid-cols-3 gap-6">
              {drinkPackages.slice(2).map((pkg, index) => (
                <div key={index + 2} className="h-full">
                  <PackageCard
                    name={pkg.name}
                    price={pkg.price}
                    features={pkg.features}
                    size="1x"
                    selectable={true}
                    selected={selectedPackageIndex === index + 2}
                    onSelect={() => handlePackageSelect(index + 2)}
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Highland Premiums à la Carte */}
          <div className="mt-16 pt-8">
            <div className="max-w-4xl mx-auto border-t border-muted"></div>
            <div className="text-center mb-8 pt-8">
              <h4 className="font-serif text-xl font-bold text-primary mb-2">
                Highland Premiums à la Carte
              </h4>
              <p className="font-sans text-sm text-light">
                Elevate your experience with our premium add-ons
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-4">
                {premiumItems.map((item) => {
                  const isSelected = selectedPremiums.has(item.id);
                  return (
                    <div 
                      key={item.id}
                      className={`bg-light rounded-lg p-4 cursor-pointer transition-colors ${
                        isSelected 
                          ? 'border-white border-3 bg-primary' 
                          : 'border-2 border-muted hover:border-primary'
                      }`}
                      onClick={() => handlePremiumToggle(item.id)}
                    >
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 mt-1">
                          <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                            isSelected 
                              ? 'border-secondary bg-secondary' 
                              : 'border-muted'
                          }`}>
                            {isSelected && (
                              <div className="text-primary text-xs font-bold">✓</div>
                            )}
                          </div>
                        </div>
                        <div className="flex-grow">
                          <div className="flex justify-between items-start mb-1">
                            <h6 className={`font-serif text-base font-bold ${
                              isSelected ? 'text-secondary' : 'text-secondary'
                            }`}>
                              {item.name}
                            </h6>
                            <span className={`font-sans text-sm font-bold ml-2 ${
                              isSelected ? 'text-secondary' : 'text-primary'
                            }`}>
                              {item.price}
                            </span>
                          </div>
                          <p className={`font-sans text-xs leading-relaxed ${
                            isSelected ? 'text-secondary font-bold' : 'text-muted'
                          }`}>
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* Divider before Event Estimate */}
              <div className="mt-16 pt-8 border-t border-muted"></div>
              
              {/* Price Calculator */}
              <PriceCalculator
                selectedPackageIndex={selectedPackageIndex}
                selectedPremiums={selectedPremiums}
                drinkPackages={drinkPackages}
                premiumItems={premiumItems}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
