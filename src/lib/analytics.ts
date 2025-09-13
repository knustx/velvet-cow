/**
 * Google Analytics 4 Event Tracking Utilities
 * 
 * This module provides structured event tracking for GA4 to monitor user interactions
 * with packages, add-ons, and quote sharing functionality.
 */

// Extend the Window interface to include gtag
declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void;
    dataLayer: Array<Record<string, unknown>>;
  }
}

/**
 * Track package selection events
 * This helps understand which packages are most popular with users
 */
export const trackPackageSelection = (packageName: string, packageIndex: number, packagePrice: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'select_item', {
      event_category: 'Package Selection',
      event_label: packageName,
      item_category: 'Brews & Booze Bundle',
      item_name: packageName,
      item_id: `package_${packageIndex}`,
      price: extractNumericPrice(packagePrice),
      currency: 'USD',
      custom_parameters: {
        package_index: packageIndex,
        package_type: 'drink_package'
      }
    });
    
    // Also track as a custom event for easier filtering
    window.gtag('event', 'package_selected', {
      event_category: 'User Engagement',
      event_label: packageName,
      value: extractNumericPrice(packagePrice),
      custom_parameters: {
        package_name: packageName,
        package_index: packageIndex,
        package_price: packagePrice
      }
    });
  }
};

/**
 * Track add-on/premium item selection events
 * This helps understand which premium items are most popular
 */
export const trackAddonSelection = (
  addonName: string, 
  addonId: string, 
  addonPrice: string, 
  isSelected: boolean
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    const eventAction = isSelected ? 'add_to_cart' : 'remove_from_cart';
    const eventName = isSelected ? 'addon_added' : 'addon_removed';
    
    window.gtag('event', eventAction, {
      event_category: 'Add-on Selection',
      event_label: addonName,
      item_category: 'Highland Premium',
      item_name: addonName,
      item_id: addonId,
      price: extractNumericPrice(addonPrice),
      currency: 'USD',
      quantity: isSelected ? 1 : 0,
      custom_parameters: {
        addon_id: addonId,
        addon_type: 'premium_item',
        selection_state: isSelected ? 'added' : 'removed'
      }
    });
    
    // Also track as a custom event
    window.gtag('event', eventName, {
      event_category: 'User Engagement', 
      event_label: addonName,
      value: isSelected ? extractNumericPrice(addonPrice) : 0,
      custom_parameters: {
        addon_name: addonName,
        addon_id: addonId,
        addon_price: addonPrice,
        is_selected: isSelected
      }
    });
  }
};

/**
 * Track quote sharing events
 * This helps understand user engagement and potential lead conversion
 */
export const trackQuoteShare = (
  guestCount: number, 
  totalAmount: number, 
  packageName: string,
  selectedAddons: string[],
  shareMethod?: string
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    // Track as a share event
    window.gtag('event', 'share', {
      event_category: 'Quote Sharing',
      event_label: `${guestCount} guests - ${packageName}`,
      method: shareMethod || 'unknown',
      content_type: 'quote',
      item_id: `quote_${Date.now()}`,
      value: totalAmount,
      currency: 'USD',
      custom_parameters: {
        guest_count: guestCount,
        package_name: packageName,
        selected_addons: selectedAddons.join(', '),
        addon_count: selectedAddons.length,
        share_method: shareMethod || 'clipboard'
      }
    });
    
    // Track as a lead generation event
    window.gtag('event', 'generate_lead', {
      event_category: 'Lead Generation',
      event_label: 'Quote Shared',
      value: totalAmount,
      currency: 'USD',
      custom_parameters: {
        lead_type: 'quote_share',
        guest_count: guestCount,
        package_selection: packageName,
        total_value: totalAmount
      }
    });
    
    // Track as a custom conversion event
    window.gtag('event', 'quote_shared', {
      event_category: 'Conversions',
      event_label: packageName,
      value: totalAmount,
      custom_parameters: {
        guest_count: guestCount,
        package_name: packageName,
        total_amount: totalAmount,
        selected_addons_count: selectedAddons.length,
        timestamp: new Date().toISOString()
      }
    });
  }
};

/**
 * Track form interactions (guest count changes)
 * This helps understand user behavior patterns
 */
export const trackGuestCountChange = (newGuestCount: number, previousGuestCount: number) => {
  if (typeof window !== 'undefined' && window.gtag && newGuestCount !== previousGuestCount) {
    window.gtag('event', 'guest_count_changed', {
      event_category: 'Form Interaction',
      event_label: `${previousGuestCount} to ${newGuestCount}`,
      custom_parameters: {
        new_guest_count: newGuestCount,
        previous_guest_count: previousGuestCount,
        change_delta: newGuestCount - previousGuestCount
      }
    });
  }
};

/**
 * Track price calculator interactions
 * This helps understand user engagement with the pricing tool
 */
export const trackPriceCalculation = (
  guestCount: number,
  packageName: string, 
  totalCost: number,
  addonCount: number
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'price_calculated', {
      event_category: 'Calculator Usage',
      event_label: `${guestCount} guests - ${packageName}`,
      value: totalCost,
      currency: 'USD',
      custom_parameters: {
        guest_count: guestCount,
        package_name: packageName,
        total_cost: totalCost,
        addon_count: addonCount,
        cost_per_guest: Math.round(totalCost / guestCount * 100) / 100
      }
    });
  }
};

/**
 * Utility function to extract numeric price from price strings
 * e.g., "$4 per Guest" -> 4, "$750 Flat" -> 750
 */
function extractNumericPrice(priceString: string): number {
  const match = priceString.match(/\$(\d+(?:\.\d+)?)/);
  return match ? parseFloat(match[1]) : 0;
}

/**
 * Initialize enhanced ecommerce tracking
 * Call this once when the app loads to set up enhanced tracking
 */
export const initializeEnhancedTracking = () => {
  if (typeof window !== 'undefined' && window.gtag) {
    // Enable enhanced ecommerce
    window.gtag('config', 'G-M7TT0LZP6H', {
      custom_map: {
        'custom_parameter_1': 'package_selection',
        'custom_parameter_2': 'addon_selection',
        'custom_parameter_3': 'quote_sharing'
      },
      // Enable enhanced ecommerce features
      send_page_view: true,
      enhanced_ecommerce: true
    });
  }
};

/**
 * Track page views with custom parameters
 * Useful for tracking which sections users spend time in
 */
export const trackPageView = (pageName: string, section?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'page_view', {
      page_title: pageName,
      page_location: window.location.href,
      custom_parameters: {
        section: section || 'unknown',
        timestamp: new Date().toISOString()
      }
    });
  }
};