"use client";

interface PackageCardProps {
  name: string;
  price: string;
  features: string[];
  onSelect?: () => void;
}

export default function PackageCard({ name, price, features, onSelect }: PackageCardProps) {
  return (
    <div className="bg-light rounded-lg p-8 border-2 border-muted hover:border-primary transition-colors h-full flex flex-col">
      <div className="flex-grow">
        <h3 className="font-serif text-2xl font-bold text-secondary mb-4">
          {name}
        </h3>
        <div className="text-3xl font-bold text-primary mb-6">
          {price}
        </div>
        <ul className="font-sans space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="text-dark flex items-center">
              <span className="text-primary mr-2">✓</span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <button 
        onClick={onSelect}
        className="w-full mt-8 bg-primary text-secondary font-sans font-semibold py-3 px-6 rounded hover:bg-secondary hover:text-primary transition-colors"
      >
        Choose Package
      </button>
    </div>
  );
}
