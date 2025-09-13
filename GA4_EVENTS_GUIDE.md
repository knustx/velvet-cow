# Google Analytics 4 Event Tracking Guide

This guide explains the custom events implemented for tracking user interactions with the Velvet Cow website, specifically for package selections, add-on selections, and quote sharing.

## Overview

We've implemented structured event tracking using Google Analytics 4 (GA4) to monitor key user interactions:

1. **Package Selection** - When users choose different Brews & Booze Bundle packages
2. **Add-on Selection** - When users select/deselect Highland Premium items  
3. **Quote Sharing** - When users share their event estimates
4. **Form Interactions** - When users change guest count
5. **Price Calculations** - When users generate price estimates

## Event Categories and Structure

### 1. Package Selection Events

**Event Names:**
- `select_item` (GA4 standard ecommerce event)
- `package_selected` (custom event)

**Event Parameters:**
```javascript
{
  event_category: 'Package Selection',
  event_label: packageName,
  item_category: 'Brews & Booze Bundle',
  item_name: packageName,
  item_id: `package_${packageIndex}`,
  price: numericPrice,
  currency: 'USD',
  custom_parameters: {
    package_index: packageIndex,
    package_type: 'drink_package'
  }
}
```

**Triggered when:** User clicks on a package card to select it

### 2. Add-on Selection Events

**Event Names:**
- `add_to_cart` / `remove_from_cart` (GA4 standard ecommerce events)
- `addon_added` / `addon_removed` (custom events)

**Event Parameters:**
```javascript
{
  event_category: 'Add-on Selection',
  event_label: addonName,
  item_category: 'Highland Premium',
  item_name: addonName,
  item_id: addonId,
  price: numericPrice,
  currency: 'USD',
  quantity: isSelected ? 1 : 0,
  custom_parameters: {
    addon_id: addonId,
    addon_type: 'premium_item',
    selection_state: isSelected ? 'added' : 'removed'
  }
}
```

**Triggered when:** User clicks on a Highland Premium add-on item

### 3. Quote Sharing Events

**Event Names:**
- `share` (GA4 standard event)
- `generate_lead` (GA4 standard conversion event)
- `quote_shared` (custom conversion event)

**Event Parameters:**
```javascript
{
  event_category: 'Quote Sharing',
  event_label: `${guestCount} guests - ${packageName}`,
  method: shareMethod, // 'native_share' or 'clipboard'
  content_type: 'quote',
  item_id: `quote_${timestamp}`,
  value: totalAmount,
  currency: 'USD',
  custom_parameters: {
    guest_count: guestCount,
    package_name: packageName,
    selected_addons: selectedAddons.join(', '),
    addon_count: selectedAddons.length,
    share_method: shareMethod
  }
}
```

**Triggered when:** User clicks the "Share" button on the price calculator

### 4. Guest Count Changes

**Event Name:** `guest_count_changed`

**Event Parameters:**
```javascript
{
  event_category: 'Form Interaction',
  event_label: `${previousCount} to ${newCount}`,
  custom_parameters: {
    new_guest_count: newGuestCount,
    previous_guest_count: previousGuestCount,
    change_delta: newGuestCount - previousGuestCount
  }
}
```

**Triggered when:** User changes the guest count input field

### 5. Price Calculation

**Event Name:** `price_calculated`

**Event Parameters:**
```javascript
{
  event_category: 'Calculator Usage',
  event_label: `${guestCount} guests - ${packageName}`,
  value: totalCost,
  currency: 'USD',
  custom_parameters: {
    guest_count: guestCount,
    package_name: packageName,
    total_cost: totalCost,
    addon_count: addonCount,
    cost_per_guest: costPerGuest
  }
}
```

**Triggered when:** User clicks the Share button (to capture the final calculation)

## How to View Events in GA4

### 1. Real-time Events

1. Go to your GA4 property
2. Navigate to **Reports** → **Realtime**
3. Look for events in the "Events" section
4. You should see events like:
   - `package_selected`
   - `addon_added`
   - `addon_removed` 
   - `quote_shared`
   - `guest_count_changed`
   - `price_calculated`

### 2. Events Report

1. Navigate to **Reports** → **Engagement** → **Events**
2. Click on any event name to see detailed parameters
3. Use the search box to filter for specific events:
   - Search "package_selected" to see package selections
   - Search "addon_" to see all add-on interactions
   - Search "quote_shared" to see quote sharing activity

### 3. Creating Custom Reports

#### Package Selection Report
1. Go to **Explore** → **Free Form**
2. Add Dimensions: `Event name`, `Custom event parameter (package_name)`
3. Add Metrics: `Event count`
4. Filter: Event name = "package_selected"

#### Add-on Popularity Report  
1. Go to **Explore** → **Free Form**
2. Add Dimensions: `Event name`, `Custom event parameter (addon_name)`
3. Add Metrics: `Event count`
4. Filter: Event name contains "addon_"

#### Quote Sharing Conversion Report
1. Go to **Explore** → **Free Form**
2. Add Dimensions: `Event name`, `Custom event parameter (package_name)`, `Custom event parameter (guest_count)`
3. Add Metrics: `Event count`, `Event value`
4. Filter: Event name = "quote_shared"

### 4. Setting Up Conversions

To track quote sharing as a conversion:

1. Navigate to **Configure** → **Events**
2. Click **Create Event** 
3. Create a new event with:
   - **Custom event name:** `quote_conversion`
   - **Matching conditions:** Event name equals `quote_shared`
4. Toggle **Mark as conversion** to ON

### 5. Creating Audiences

#### High-Intent Users (Shared Quotes)
1. Navigate to **Configure** → **Audiences**
2. Click **New Audience** → **Custom audience**
3. Add condition: Event name = `quote_shared`
4. Set membership duration (e.g., 30 days)

#### Package-Specific Audiences
1. Create audiences for each package type:
   - Event name = `package_selected`
   - Custom parameter `package_name` = "Brews & Vines"
   - (Repeat for other packages)

## Testing Your Events

### Development Testing
1. Open your website with browser developer tools
2. Check the Console for gtag debug messages
3. Use the [GA4 DebugView](https://support.google.com/analytics/answer/7201382):
   - Enable Debug mode in development
   - Navigate to **Configure** → **DebugView** in GA4
   - Interact with your site to see events in real-time

### Production Verification
1. Use GA4 Real-time reports
2. Test all interactions:
   - Select different packages
   - Add/remove premium items
   - Change guest counts
   - Share quotes
3. Verify events appear within 1-2 minutes

## Key Benefits

1. **User Journey Analysis:** Understand how users navigate through package selection
2. **Product Performance:** See which packages and add-ons are most popular
3. **Lead Generation Tracking:** Monitor quote sharing as a conversion metric
4. **Pricing Insights:** Analyze price points and guest counts for quotes
5. **Engagement Metrics:** Track user interaction depth and patterns

## Troubleshooting

### Events Not Appearing
- Check that GA4 tracking ID is correct (`G-M7TT0LZP6H`)
- Verify gtag is loaded (check Network tab for gtag/js requests)
- Ensure events are fired client-side (check browser console)
- Wait up to 24 hours for events to appear in standard reports

### Missing Parameters
- Check that custom parameters are properly formatted
- Verify parameter names match GA4 requirements (no spaces, special characters)
- Test with GA4 DebugView to see real-time parameter data

### Conversion Tracking Issues
- Ensure conversions are marked in GA4 Events configuration
- Allow up to 24 hours for conversion data to populate
- Check that event values are numeric for value-based conversions

## Custom Dimensions (Optional Enhancement)

To get more detailed reporting, consider creating these custom dimensions in GA4:

1. **Package Type** → Maps to `package_name` parameter
2. **Add-on Type** → Maps to `addon_name` parameter  
3. **Guest Count Range** → Derived from `guest_count` parameter
4. **Quote Value Range** → Derived from event `value`
5. **Share Method** → Maps to `share_method` parameter

Navigate to **Configure** → **Custom definitions** → **Custom dimensions** to set these up.