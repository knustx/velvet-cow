"use client";

interface PackageCardProps {
  name: string;
  price: string;
  features: string[];
  footnotes?: string[];
  size?: '1x' | '2x' | '3x';
  selectable?: boolean;
  selected?: boolean;
  onSelect?: () => void;
}

export default function PackageCard({ 
  name, 
  price, 
  features, 
  footnotes = [], 
  size = '1x', 
  selectable = true, 
  selected = false,
  onSelect 
}: PackageCardProps) {
  const is2x = size === '2x';
  const is3x = size === '3x';
  const isMultiCol = is2x || is3x;
  
  // Determine border and background styling based on selection state
  let borderClass, bgClass, accentBorder;
  
  if (isMultiCol) {
    // Base package - always in selected state (gold background)
    borderClass = 'border-primary';
    bgClass = 'bg-primary';
    accentBorder = 'border-white border-3';
  } else if (selected) {
    // Selected add-on package
    borderClass = 'border-primary';
    bgClass = 'bg-primary';
    accentBorder = 'border-white border-3';
  } else {
    // Unselected add-on package
    borderClass = 'border-muted hover:border-primary';
    bgClass = 'bg-light hover:bg-gray-50';
    accentBorder = 'border-2';
  }
  
  return (
    <div 
      className={`${bgClass} rounded-lg p-6 ${accentBorder} ${borderClass} transition-colors h-full flex flex-col ${
        selectable && !isMultiCol ? 'cursor-pointer' : 'cursor-default'
      }`}
      onClick={selectable && onSelect && !isMultiCol ? onSelect : undefined}
    >
      <div className="flex-grow">
        <div className="text-center mb-4">
          <h3 className={`font-serif text-2xl font-bold mb-2 ${
            (selected && !isMultiCol) || isMultiCol ? 'text-secondary' : 'text-secondary'
          }`}>
            {name}
          </h3>
          <div className={`text-2xl font-bold mb-4 ${
            (selected && !isMultiCol) || isMultiCol ? 'text-secondary' : 'text-primary'
          }`}>
            {price}
          </div>
        </div>
        
        {/* Features in 1 or 2 columns based on size */}
        {isMultiCol ? (
          <div className="grid md:grid-cols-2 gap-4">
            {/* Left column - first half of features */}
            <ul className="font-sans space-y-2">
              {features.slice(0, Math.ceil(features.length / 2)).map((feature, index) => (
                <li key={index} className="text-secondary flex items-start text-base">
                  <span className="text-secondary mr-2 mt-1">•</span>
                  <span className="font-bold">{feature}</span>
                </li>
              ))}
            </ul>
            {/* Right column - second half of features */}
            <ul className="font-sans space-y-2">
              {features.slice(Math.ceil(features.length / 2)).map((feature, index) => (
                <li key={index + Math.ceil(features.length / 2)} className="text-secondary flex items-start text-base">
                  <span className="text-secondary mr-2 mt-1">•</span>
                  <span className="font-bold">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <ul className="font-sans space-y-2">
            {features.map((feature, index) => (
              <li key={index} className={`flex items-start text-base ${
                selected ? 'text-secondary' : 'text-dark'
              }`}>
                <span className={`mr-2 mt-1 ${
                  selected ? 'text-secondary' : 'text-primary'
                }`}>✓</span>
                <span className={selected ? 'font-bold' : ''}>{feature}</span>
              </li>
            ))}
          </ul>
        )}
        
        {/* Footnotes - always single column, below features */}
        {footnotes.length > 0 && (
          <div className="mt-4 pt-3 border-t border-muted">
            <div className={`font-sans text-sm space-y-1 ${
              (selected && !isMultiCol) || isMultiCol ? 'text-dark' : 'text-muted'
            }`}>
              {footnotes.map((footnote, index) => (
                <p key={index}>{footnote}</p>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
