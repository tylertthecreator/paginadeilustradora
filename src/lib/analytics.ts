// Google Analytics 4 Configuration for Toska CR Portfolio

export const analyticsConfig = {
  // Google Analytics 4 Measurement ID
  // Format: G-XXXXXXXXXX
  measurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX',
  
  // Custom Events for Toska CR Portfolio
  events: {
    // Contact form events
    CONTACT_FORM_START: 'contact_form_start',
    CONTACT_FORM_SUBMIT: 'contact_form_submit',
    CONTACT_FORM_SUCCESS: 'contact_form_success',
    CONTACT_FORM_ERROR: 'contact_form_error',
    
    // Portfolio events
    PORTFOLIO_VIEW: 'portfolio_view',
    WORK_GALLERY_VIEW: 'work_gallery_view',
    IMAGE_CLICK: 'image_click',
    
    // Social media events
    SOCIAL_CLICK: 'social_click',
    INSTAGRAM_CLICK: 'instagram_click',
    BEHANCE_CLICK: 'behance_click',
    LINKEDIN_CLICK: 'linkedin_click',
    
    // Navigation events
    PAGE_VIEW: 'page_view',
    NAVIGATION_CLICK: 'navigation_click',
  },
  
  // Conversion goals
  conversions: {
    CONTACT_FORM_SUBMISSION: 'contact_form_submission',
    PORTFOLIO_ENGAGEMENT: 'portfolio_engagement',
    SOCIAL_ENGAGEMENT: 'social_engagement',
  }
};

// Helper function to track custom events
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

// Helper function to track conversions
export const trackConversion = (conversionName: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: conversionName,
      value: value,
    });
  }
};

// Declare gtag function for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}
