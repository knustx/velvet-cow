"use client";

import { useState, useEffect } from "react";

interface PremiumItem {
  id: string;
  name: string;
  price: string;
  description: string;
}

interface DrinkPackage {
  name: string;
  price: string;
  tagline: string;
  features: string[];
}

interface PriceCalculatorProps {
  selectedPackageIndex: number;
  selectedPremiums: Set<string>;
  drinkPackages: DrinkPackage[];
  premiumItems: PremiumItem[];
}

export default function PriceCalculator({
  selectedPackageIndex,
  selectedPremiums,
  drinkPackages,
  premiumItems
}: PriceCalculatorProps) {
  const [guestCount, setGuestCount] = useState<number>(50);

  // Extract numeric price from price string (e.g., "$4 per Guest" -> 4)
  const extractPrice = (priceString: string): number => {
    const match = priceString.match(/\$(\d+(?:\.\d+)?)/);
    return match ? parseFloat(match[1]) : 0;
  };

  // Calculate additional bartenders using math.floor((guests-1)/50)
  const calculateAdditionalBartenders = (guests: number): number => {
    return Math.floor((guests - 1) / 50);
  };

  // Format number with commas for thousands separator
  const formatCurrency = (amount: number): string => {
    return amount.toLocaleString('en-US');
  };

  // Calculate costs for different groups
  const calculateCosts = () => {
    const foundationsCost = 750;
    
    // Package cost per guest
    const selectedPackage = drinkPackages[selectedPackageIndex];
    const packageCostPerGuest = extractPrice(selectedPackage.price);
    const totalPackageCost = Math.round(packageCostPerGuest * guestCount);
    
    // Additional bartenders cost (part of fundamentals)
    const additionalBartenders = calculateAdditionalBartenders(guestCount);
    const bartenderCost = additionalBartenders * 50 * 4; // $50 per hour * 4 hours
    
    const fundamentalsSubtotal = foundationsCost + totalPackageCost + bartenderCost;
    
    // A la carte options - separate flat fees from variable costs
    const flatFeeItems: Array<{id: string; name: string; cost: number}> = [];
    const variableCostItems: Array<{id: string; name: string; cost: number; description: string}> = [];
    
    selectedPremiums.forEach(premiumId => {
      const premium = premiumItems.find(item => item.id === premiumId);
      if (premium) {
        const price = extractPrice(premium.price);
        let itemCost = 0;
        let costDescription = "";
        
        if (premium.price.includes('per guest')) {
          itemCost = Math.round(price * guestCount);
          costDescription = `(${guestCount.toLocaleString('en-US')} guests @ $${price.toFixed(2)} per guest)`;
          variableCostItems.push({id: premiumId, name: premium.name, cost: itemCost, description: costDescription});
        } else if (premium.price.includes('flat fee')) {
          itemCost = Math.round(price);
          flatFeeItems.push({id: premiumId, name: premium.name, cost: itemCost});
        } else if (premium.price.includes('per barrel')) {
          itemCost = Math.round(price);
          flatFeeItems.push({id: premiumId, name: premium.name, cost: itemCost});
        } else {
          // Default to per-guest pricing
          itemCost = Math.round(price * guestCount);
          costDescription = `(${guestCount.toLocaleString('en-US')} guests @ $${price.toFixed(2)} per guest)`;
          variableCostItems.push({id: premiumId, name: premium.name, cost: itemCost, description: costDescription});
        }
      }
    });
    
    const alaCarteSubtotal = [...flatFeeItems, ...variableCostItems].reduce((sum, item) => sum + item.cost, 0);
    const grandTotal = fundamentalsSubtotal + alaCarteSubtotal;
    
    return {
      fundamentalsSubtotal,
      alaCarteSubtotal,
      grandTotal,
      flatFeeItems,
      variableCostItems,
      foundationsCost,
      totalPackageCost,
      bartenderCost,
      additionalBartenders
    };
  };

  const handleGuestCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value) || 0;
    setGuestCount(Math.max(1, value)); // Ensure minimum of 1 guest
  };

  const costs = calculateCosts();

  return (
    <div className="mt-8 p-6 bg-light rounded-lg border-2 border-primary">
      <h5 className="font-serif text-2xl font-bold text-secondary mb-4 text-center">
        Event Estimate
      </h5>
      
      <div className="px-4">
        {/* Guest Count Input */}
        <div className="mb-4 flex items-center gap-3">
          <label htmlFor="guest-count" className="font-sans text-sm font-semibold text-secondary">
            Number of Guests:
          </label>
          <input
            type="number"
            id="guest-count"
            min="1"
            value={guestCount}
            onChange={handleGuestCountChange}
            className="w-16 px-2 py-2 text-center border-2 border-muted rounded-md font-sans text-secondary bg-white focus:border-primary focus:outline-none"
          />
        </div>

        {/* Package Selection Group */}
        <div className="mb-6">
          <h6 className="font-serif text-base font-bold text-secondary mb-3">
            Package Selection
          </h6>
        <div className="space-y-2 font-sans text-sm">
          <div className="flex justify-between">
            <span className="text-muted pl-4">Foundations Package</span>
            <span className="text-secondary font-semibold">${formatCurrency(costs.foundationsCost)}</span>
          </div>
          
          <div className="flex justify-between">
            <span className="text-muted pl-4">
              {drinkPackages[selectedPackageIndex].name} ({guestCount.toLocaleString('en-US')} guests @ ${extractPrice(drinkPackages[selectedPackageIndex].price).toFixed(2)} per guest)
            </span>
            <span className="text-secondary font-semibold">
              ${formatCurrency(costs.totalPackageCost)}
            </span>
          </div>

          {/* Additional Bartenders */}
          {costs.additionalBartenders > 0 && (
            <div className="flex justify-between">
              <span className="text-muted pl-4">
                Additional Bartenders ({costs.additionalBartenders} × $50 × 4 hours)
              </span>
              <span className="text-secondary font-semibold">
                ${formatCurrency(costs.bartenderCost)}
              </span>
            </div>
          )}
          
          <div className="border-t border-muted pt-2 mt-3">
            <div className="flex justify-between">
              <span className="text-secondary font-semibold">Subtotal:</span>
              <span className="text-secondary font-bold">${formatCurrency(costs.fundamentalsSubtotal)}</span>
            </div>
          </div>
        </div>
        </div>

        {/* À la Carte Group */}
        {(costs.flatFeeItems.length > 0 || costs.variableCostItems.length > 0) && (
          <div className="mb-6">
            <h6 className="font-serif text-base font-bold text-secondary mb-3">
              À la Carte Add-ons
            </h6>
            <div className="space-y-2 font-sans text-sm">
              {/* Flat Fee Items First */}
              {costs.flatFeeItems.map(item => (
                <div key={item.id} className="flex justify-between">
                  <span className="text-muted pl-4">
                    {item.name} (flat fee)
                  </span>
                  <span className="text-secondary font-semibold">
                    ${formatCurrency(item.cost)}
                  </span>
                </div>
              ))}
              
              {/* Variable Cost Items Second */}
              {costs.variableCostItems.map(item => (
                <div key={item.id} className="flex justify-between">
                  <span className="text-muted pl-4">
                    {item.name} {item.description}
                  </span>
                  <span className="text-secondary font-semibold">
                    ${formatCurrency(item.cost)}
                  </span>
                </div>
              ))}
              
              <div className="border-t border-muted pt-2 mt-3">
                <div className="flex justify-between font-semibold">
                  <span className="text-secondary">Subtotal:</span>
                  <span className="text-secondary font-bold">${formatCurrency(costs.alaCarteSubtotal)}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Grand Total */}
        <div className="border-t-2 border-primary pt-3 mb-4">
          <div className="flex justify-between font-bold">
            <span className="text-secondary text-lg">Grand Total:</span>
            <span className="text-primary text-xl">${formatCurrency(costs.grandTotal)}</span>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="text-xs text-muted font-sans leading-relaxed border-t border-muted pt-3">
          <p>
            <strong>Please note:</strong> This is an estimate only. Each contract is tailored to the specific event 
            and may include customizations beyond the scope of this calculator. Final pricing will be provided 
            in your personalized quote.
          </p>
        </div>
      </div>
    </div>
  );
}
