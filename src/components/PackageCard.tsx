"use client";

interface PackageCardProps {
  name: string;
  price: string;
  features: string[];
  footnotes?: string[];
  size?: '1x' | '2x' | '3x';
  selectable?: boolean;
  onSelect?: () => void;
}

export default function PackageCard({ 
  name, 
  price, 
  features, 
  footnotes = [], 
  size = '1x', 
  selectable = true, 
  onSelect 
}: PackageCardProps) {
  const is2x = size === '2x';
  const is3x = size === '3x';
  const isMultiCol = is2x || is3x;
  const borderClass = isMultiCol ? 'border-primary' : 'border-muted hover:border-primary';
  
  return (
    <div className={`bg-light rounded-lg p-6 border-2 ${borderClass} ${!isMultiCol ? 'hover:border-primary' : ''} transition-colors h-full flex flex-col`}>
      <div className="flex-grow">
        <div className="text-center mb-4">
          <h3 className="font-serif text-xl font-bold text-secondary mb-2">
            {name}
          </h3>
          <div className="text-2xl font-bold text-primary mb-4">
            {price}
          </div>
        </div>
        
        {/* Features in 1 or 2 columns based on size */}
        {isMultiCol ? (
          <div className="grid md:grid-cols-2 gap-4">
            {/* Left column - first half of features */}
            <ul className="font-sans space-y-2">
              {features.slice(0, Math.ceil(features.length / 2)).map((feature, index) => (
                <li key={index} className="text-dark flex items-start text-sm">
                  <span className="text-primary mr-2 mt-1">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            {/* Right column - second half of features */}
            <ul className="font-sans space-y-2">
              {features.slice(Math.ceil(features.length / 2)).map((feature, index) => (
                <li key={index + Math.ceil(features.length / 2)} className="text-dark flex items-start text-sm">
                  <span className="text-primary mr-2 mt-1">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <ul className="font-sans space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="text-dark flex items-start text-sm">
                <span className="text-primary mr-2 mt-1">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
        
        {/* Footnotes - always single column, below features */}
        {footnotes.length > 0 && (
          <div className="mt-4 pt-3 border-t border-muted">
            <div className="font-sans text-xs text-muted space-y-1">
              {footnotes.map((footnote, index) => (
                <p key={index}>{footnote}</p>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* Only show button if selectable */}
      {selectable && onSelect && (
        <button 
          onClick={onSelect}
          className="w-full mt-4 bg-primary text-secondary font-sans font-semibold py-2 px-4 rounded hover:bg-secondary hover:text-primary transition-colors"
        >
          Choose Package
        </button>
      )}
    </div>
  );
}
