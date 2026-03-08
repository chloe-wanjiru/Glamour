// =============================================================================
// Glamour - Beauty & Wellness Website Configuration
// =============================================================================
// A Pinterest-style beauty inspiration website with Amazon product promotion
// Soft pastel color palette: pinks, golds, beige, cream
// =============================================================================

// -----------------------------------------------------------------------------
// Site Config
// -----------------------------------------------------------------------------
export interface SiteConfig {
  title: string;
  description: string;
  language: string;
  keywords: string;
  ogImage: string;
  canonical: string;
}

export const siteConfig: SiteConfig = {
  title: "Glamour | Beauty, Hair, Skincare & Wellness Inspiration",
  description: "Discover beauty inspiration, skincare tips, hair essentials, and wellness advice. Shop curated Amazon products for your glow-up journey.",
  language: "en",
  keywords: "beauty, skincare, makeup, hair care, wellness, glow up, beauty tips, Amazon beauty products",
  ogImage: "/images/hero-banner.jpg",
  canonical: "https://glamour.com",
};

// -----------------------------------------------------------------------------
// Navigation Config
// -----------------------------------------------------------------------------
export interface NavDropdownItem {
  name: string;
  href: string;
}

export interface NavLink {
  name: string;
  href: string;
  icon: string;
  dropdown?: NavDropdownItem[];
}

export interface NavigationConfig {
  brandName: string;
  brandSubname: string;
  tagline: string;
  navLinks: NavLink[];
  ctaButtonText: string;
}

export const navigationConfig: NavigationConfig = {
  brandName: "Glamour",
  brandSubname: "Beauty & Wellness",
  tagline: "Your daily dose of beauty inspiration",
  navLinks: [
    { name: "Home", href: "#home", icon: "Home" },
    { 
      name: "Shop", 
      href: "#products", 
      icon: "Sparkles",
      dropdown: [
        { name: "Makeup", href: "https://www.amazon.com/s?k=makeup" },
        { name: "Skincare", href: "https://www.amazon.com/s?k=skincare" },
        { name: "Hair Care", href: "https://www.amazon.com/s?k=hair+care" },
        { name: "Wellness", href: "https://www.amazon.com/s?k=wellness+products" },
      ]
    },
    { name: "About", href: "#about", icon: "BookOpen" },
  ],
  ctaButtonText: "Explore",
};

// -----------------------------------------------------------------------------
// Preloader Config
// -----------------------------------------------------------------------------
export interface PreloaderConfig {
  brandName: string;
  brandSubname: string;
  yearText: string;
}

export const preloaderConfig: PreloaderConfig = {
  brandName: "Glamour",
  brandSubname: "Beauty & Wellness",
  yearText: "Est. 2024",
};

// -----------------------------------------------------------------------------
// Hero Config
// -----------------------------------------------------------------------------
export interface HeroStat {
  value: number;
  suffix: string;
  label: string;
}

export interface HeroConfig {
  scriptText: string;
  mainTitle: string;
  ctaButtonText: string;
  ctaTarget: string;
  stats: HeroStat[];
  decorativeText: string;
  backgroundImage: string;
}

export const heroConfig: HeroConfig = {
  scriptText: "Discover Your Glow",
  mainTitle: "Beauty &\nWellness",
  ctaButtonText: "Start Your Journey",
  ctaTarget: "#categories",
  stats: [
    { value: 500, suffix: "+", label: "Beauty Tips" },
    { value: 1000, suffix: "+", label: "Products" },
    { value: 50, suffix: "K+", label: "Community" },
  ],
  decorativeText: "GLOW • SHINE • RADIATE",
  backgroundImage: "/images/hero-banner.jpg",
};

// -----------------------------------------------------------------------------
// Product Showcase Config (repurposed from Wine Showcase)
// -----------------------------------------------------------------------------
export interface Product {
  id: string;
  name: string;
  subtitle: string;
  year: string;
  image: string;
  filter: string;
  glowColor: string;
  description: string;
  tastingNotes: string;
  alcohol: string;
  temperature: string;
  aging: string;
}

export interface ProductFeature {
  icon: string;
  title: string;
  description: string;
}

export interface ProductQuote {
  text: string;
  attribution: string;
  prefix: string;
}

export interface ProductShowcaseConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  wines: Product[];
  features: ProductFeature[];
  quote: ProductQuote;
}

export const productShowcaseConfig: ProductShowcaseConfig = {
  scriptText: "Curated Selection",
  subtitle: "SHOP OUR FAVORITES",
  mainTitle: "Featured Products",
  wines: [
    {
      id: "lipstick",
      name: "Velvet Lipstick",
      subtitle: "Luxury Matte Collection",
      year: "2024",
      image: "/images/product-lipstick.jpg",
      filter: "",
      glowColor: "bg-rose-500/20",
      description: "Indulge in rich, velvety color that lasts all day. Our curated lipstick collection features hydrating formulas with stunning pigmentation.",
      tastingNotes: "Creamy texture with a matte finish",
      alcohol: "Cruelty-Free",
      temperature: "Long-lasting",
      aging: "Hydrating Formula",
    },
    {
      id: "skincare",
      name: "Radiance Serum",
      subtitle: "Glow-Boosting Elixir",
      year: "2024",
      image: "/images/product-skincare.jpg",
      filter: "brightness(1.1) saturate(1.1)",
      glowColor: "bg-amber-400/20",
      description: "Transform your skin with our handpicked serums and moisturizers. Achieve that coveted dewy glow with these premium skincare essentials.",
      tastingNotes: "Lightweight, fast-absorbing formula",
      alcohol: "Vegan",
      temperature: "For All Skin Types",
      aging: "Anti-Aging Benefits",
    },
    {
      id: "haircare",
      name: "Silk Hair Care",
      subtitle: "Salon-Quality Treatment",
      year: "2024",
      image: "/images/product-haircare.jpg",
      filter: "brightness(1.05) sepia(0.1)",
      glowColor: "bg-amber-600/20",
      description: "Nourish and protect your hair with our selected hair care range. From oils to masks, discover products for silky, healthy locks.",
      tastingNotes: "Rich, nourishing ingredients",
      alcohol: "Sulfate-Free",
      temperature: "Heat Protection",
      aging: "Repair & Strengthen",
    },
    {
      id: "perfume",
      name: "Eau de Parfum",
      subtitle: "Signature Scents",
      year: "2024",
      image: "/images/product-perfume.jpg",
      filter: "brightness(1.15) saturate(0.9)",
      glowColor: "bg-pink-400/20",
      description: "Complete your beauty routine with enchanting fragrances. Our perfume selection offers scents for every mood and occasion.",
      tastingNotes: "Floral and woody notes",
      alcohol: "Long-Lasting",
      temperature: "Eau de Parfum",
      aging: "Premium Ingredients",
    },
  ],
  features: [
    { icon: "Sparkles", title: "Curated Quality", description: "Handpicked premium beauty products from trusted brands" },
    { icon: "Thermometer", title: "Skin Safe", description: "Dermatologist-tested formulas for all skin types" },
    { icon: "Clock", title: "Long Lasting", description: "Products that deliver results that stand the test of time" },
  ],
  quote: {
    text: "Beauty begins the moment you decide to be yourself.",
    attribution: "Coco Chanel",
    prefix: "Quote",
  },
};

// -----------------------------------------------------------------------------
// Category Carousel Config (repurposed from Winery Carousel)
// -----------------------------------------------------------------------------
export interface CarouselSlide {
  image: string;
  title: string;
  subtitle: string;
  area: string;
  unit: string;
  description: string;
  link: string;
}

export interface CategoryCarouselConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  locationTag: string;
  slides: CarouselSlide[];
}

export const categoryCarouselConfig: CategoryCarouselConfig = {
  scriptText: "Explore Categories",
  subtitle: "BEAUTY ESSENTIALS",
  mainTitle: "Shop by Category",
  locationTag: "Your Beauty Journey",
  slides: [
    {
      image: "/images/makeup-category.jpg",
      title: "Makeup",
      subtitle: "Express Your Beauty",
      area: "500+",
      unit: "Products",
      description: "From everyday essentials to glamorous looks, discover makeup that enhances your natural beauty. Shop foundations, lipsticks, eyeshadows, and more.",
      link: "https://www.amazon.com/s?k=makeup",
    },
    {
      image: "/images/skincare-category.jpg",
      title: "Skincare",
      subtitle: "Glow From Within",
      area: "300+",
      unit: "Products",
      description: "Build your perfect skincare routine with cleansers, serums, moisturizers, and treatments. Achieve healthy, radiant skin with our curated selection.",
      link: "https://www.amazon.com/s?k=skincare",
    },
    {
      image: "/images/hair-category.jpg",
      title: "Hair Care",
      subtitle: "Strong & Beautiful",
      area: "250+",
      unit: "Products",
      description: "Nurture your hair with shampoos, conditioners, treatments, and styling products. Find solutions for every hair type and concern.",
      link: "https://www.amazon.com/s?k=hair+care",
    },
    {
      image: "/images/wellness-category.jpg",
      title: "Wellness",
      subtitle: "Healthy & Happy",
      area: "200+",
      unit: "Products",
      description: "Support your glow-up journey with wellness essentials. From supplements to healthy foods, nourish your body from the inside out.",
      link: "https://www.amazon.com/s?k=wellness+products",
    },
  ],
};

// -----------------------------------------------------------------------------
// Beauty Tips Config (repurposed from Museum)
// -----------------------------------------------------------------------------
export interface TimelineEvent {
  year: string;
  event: string;
}

export interface BeautyTabContent {
  title: string;
  description: string;
  highlight: string;
}

export interface BeautyTab {
  id: string;
  name: string;
  icon: string;
  image: string;
  content: BeautyTabContent;
}

export interface BeautyQuote {
  prefix: string;
  text: string;
  attribution: string;
}

export interface BeautyTipsConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  introText: string;
  timeline: TimelineEvent[];
  tabs: BeautyTab[];
  openingHours: string;
  openingHoursLabel: string;
  ctaButtonText: string;
  yearBadge: string;
  yearBadgeLabel: string;
  quote: BeautyQuote;
  founderPhotoAlt: string;
  founderPhoto: string;
}

export const beautyTipsConfig: BeautyTipsConfig = {
  scriptText: "Expert Advice",
  subtitle: "BEAUTY WISDOM",
  mainTitle: "Tips & Routines",
  introText: "Discover expert-backed beauty tips, skincare routines, and wellness advice to help you look and feel your best every day.",
  timeline: [
    { year: "Morning", event: "Cleanse, tone, serum, moisturize, SPF" },
    { year: "Evening", event: "Double cleanse, treat, hydrate, repair" },
    { year: "Weekly", event: "Exfoliate, mask, hair treatment" },
    { year: "Monthly", event: "Professional facial, self-care day" },
  ],
  tabs: [
    {
      id: "skincare",
      name: "Skincare",
      icon: "History",
      image: "/images/beauty-routine.jpg",
      content: {
        title: "The Perfect Skincare Routine",
        description: "A consistent skincare routine is the foundation of healthy, glowing skin. Start with gentle cleansing, follow with targeted treatments, and always finish with hydration and sun protection.",
        highlight: "Cleanse → Treat → Moisturize → Protect",
      },
    },
    {
      id: "makeup",
      name: "Makeup",
      icon: "BookOpen",
      image: "/images/makeup-tutorial.jpg",
      content: {
        title: "Makeup Tips for Every Occasion",
        description: "Whether you prefer a natural look or full glam, mastering the basics of makeup application can transform your beauty routine. Learn techniques for flawless foundation, stunning eyes, and perfect lips.",
        highlight: "Prep → Prime → Apply → Set",
      },
    },
    {
      id: "wellness",
      name: "Wellness",
      icon: "Award",
      image: "/images/spa-wellness.jpg",
      content: {
        title: "Wellness for Inner Beauty",
        description: "True beauty starts from within. Prioritize sleep, stay hydrated, eat nourishing foods, and practice self-care. Your skin, hair, and overall health will thank you.",
        highlight: "Sleep → Hydrate → Nourish → Relax",
      },
    },
  ],
  openingHours: "Daily Self-Care",
  openingHoursLabel: "Your Routine",
  ctaButtonText: "See More on Pinterest",
  yearBadge: "2024",
  yearBadgeLabel: "Glow Up",
  quote: {
    prefix: "Beauty Secret",
    text: "Taking care of yourself is the most powerful way to begin your day.",
    attribution: "Unknown",
  },
  founderPhotoAlt: "Glowing healthy skin",
  founderPhoto: "/images/glowing-skin.jpg",
};

// -----------------------------------------------------------------------------
// Inspiration & Community Config (repurposed from News)
// -----------------------------------------------------------------------------
export interface NewsArticle {
  id: number;
  image: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
}

export interface StoryQuote {
  prefix: string;
  text: string;
  attribution: string;
}

export interface StoryTimelineItem {
  value: string;
  label: string;
}

export interface InspirationConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  viewAllText: string;
  readMoreText: string;
  articles: NewsArticle[];
  testimonialsScriptText: string;
  testimonialsSubtitle: string;
  testimonialsMainTitle: string;
  testimonials: Testimonial[];
  storyScriptText: string;
  storySubtitle: string;
  storyTitle: string;
  storyParagraphs: string[];
  storyTimeline: StoryTimelineItem[];
  storyQuote: StoryQuote;
  storyImage: string;
  storyImageCaption: string;
}

export const inspirationConfig: InspirationConfig = {
  scriptText: "Get Inspired",
  subtitle: "BEAUTY INSPIRATION",
  mainTitle: "Latest Trends & Tips",
  viewAllText: "View All on Pinterest",
  readMoreText: "Read More",
  articles: [
    {
      id: 1,
      image: "/images/healthy-breakfast.jpg",
      title: "Foods for Glowing Skin",
      excerpt: "Discover the best foods to eat for radiant, healthy skin from the inside out.",
      date: "March 2024",
      category: "Wellness",
    },
    {
      id: 2,
      image: "/images/fitness-wellness.jpg",
      title: "Fitness for Your Glow Up",
      excerpt: "How regular exercise can transform your skin, hair, and overall beauty.",
      date: "March 2024",
      category: "Fitness",
    },
    {
      id: 3,
      image: "/images/makeup-tutorial.jpg",
      title: "Spring Makeup Trends",
      excerpt: "The hottest makeup trends this season and how to recreate them at home.",
      date: "March 2024",
      category: "Makeup",
    },
    {
      id: 4,
      image: "/images/spa-wellness.jpg",
      title: "DIY Spa Day at Home",
      excerpt: "Create a luxurious spa experience in your own bathroom with these simple tips.",
      date: "March 2024",
      category: "Self-Care",
    },
  ],
  testimonialsScriptText: "Community Love",
  testimonialsSubtitle: "TESTIMONIALS",
  testimonialsMainTitle: "What Our Community Says",
  testimonials: [
    {
      name: "Sarah M.",
      role: "Beauty Enthusiast",
      text: "Glamour has completely transformed my skincare routine. The product recommendations are spot-on!",
      rating: 5,
    },
    {
      name: "Jessica L.",
      role: "Wellness Blogger",
      text: "I love the Pinterest-style inspiration and the curated Amazon links. Makes shopping so easy!",
      rating: 5,
    },
    {
      name: "Emily R.",
      role: "Makeup Artist",
      text: "The beauty tips are practical and effective. My clients always ask about my skincare secrets!",
      rating: 5,
    },
  ],
  storyScriptText: "Our Story",
  storySubtitle: "ABOUT GLAMOUR",
  storyTitle: "Your Beauty Journey Starts Here",
  storyParagraphs: [
    "Glamour was created to inspire and empower anyone on their beauty and wellness journey. We believe that everyone deserves to feel confident and beautiful in their own skin.",
    "Our mission is to curate the best beauty products, share expert tips, and create a community where we can all learn and grow together. From skincare routines to makeup tutorials, wellness advice to healthy recipes, we've got you covered.",
  ],
  storyTimeline: [
    { value: "500+", label: "Beauty Tips" },
    { value: "1000+", label: "Products" },
    { value: "50K+", label: "Community" },
  ],
  storyQuote: {
    prefix: "Our Philosophy",
    text: "Beauty is being comfortable in your own skin. It's about knowing and accepting who you are.",
    attribution: "Ellen DeGeneres",
  },
  storyImage: "/images/beauty-routine.jpg",
  storyImageCaption: "Self-care is not selfish, it's essential",
};

// -----------------------------------------------------------------------------
// Newsletter/Contact Config (repurposed from Contact Form)
// -----------------------------------------------------------------------------
export interface ContactInfoItem {
  icon: string;
  label: string;
  value: string;
  subtext: string;
}

export interface ContactFormFields {
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  visitDateLabel: string;
  visitorsLabel: string;
  visitorsOptions: string[];
  messageLabel: string;
  messagePlaceholder: string;
  submitText: string;
  submittingText: string;
  successMessage: string;
  errorMessage: string;
}

export interface ContactFormConfig {
  scriptText: string;
  subtitle: string;
  mainTitle: string;
  introText: string;
  contactInfoTitle: string;
  contactInfo: ContactInfoItem[];
  form: ContactFormFields;
  privacyNotice: string;
  formEndpoint: string;
}

export const contactFormConfig: ContactFormConfig = {
  scriptText: "Stay Connected",
  subtitle: "NEWSLETTER",
  mainTitle: "Join Our Community",
  introText: "Subscribe to receive beauty tips, product recommendations, and exclusive deals delivered to your inbox.",
  contactInfoTitle: "Connect With Us",
  contactInfo: [
    { icon: "MapPin", label: "Follow Us", value: "@glamourbeauty", subtext: "On Instagram & Pinterest" },
    { icon: "Phone", label: "Shop", value: "Amazon Store", subtext: "Curated products just for you" },
    { icon: "Mail", label: "Email", value: "hello@glamour.com", subtext: "We'd love to hear from you" },
    { icon: "Clock", label: "Updates", value: "Weekly", subtext: "Fresh content every week" },
  ],
  form: {
    nameLabel: "Your Name",
    namePlaceholder: "Enter your name",
    emailLabel: "Email Address",
    emailPlaceholder: "Enter your email",
    phoneLabel: "Phone (Optional)",
    phonePlaceholder: "Enter your phone",
    visitDateLabel: "Birthday",
    visitorsLabel: "Beauty Interests",
    visitorsOptions: ["Skincare", "Makeup", "Hair Care", "Wellness", "All of the above"],
    messageLabel: "Message",
    messagePlaceholder: "Tell us what beauty topics interest you...",
    submitText: "Subscribe",
    submittingText: "Subscribing...",
    successMessage: "Welcome to Glamour! Check your inbox for a special surprise.",
    errorMessage: "Oops! Something went wrong. Please try again.",
  },
  privacyNotice: "By subscribing, you agree to receive beauty tips and product recommendations. We respect your privacy.",
  formEndpoint: "https://formspree.io/f/YOUR_FORM_ID",
};

// -----------------------------------------------------------------------------
// Footer Config
// -----------------------------------------------------------------------------
export interface SocialLink {
  icon: string;
  label: string;
  href: string;
}

export interface FooterLink {
  name: string;
  href: string;
}

export interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

export interface FooterContactItem {
  icon: string;
  text: string;
}

export interface FooterConfig {
  brandName: string;
  tagline: string;
  description: string;
  socialLinks: SocialLink[];
  linkGroups: FooterLinkGroup[];
  contactItems: FooterContactItem[];
  newsletterLabel: string;
  newsletterPlaceholder: string;
  newsletterButtonText: string;
  newsletterSuccessText: string;
  newsletterErrorText: string;
  newsletterEndpoint: string;
  copyrightText: string;
  legalLinks: string[];
  icpText: string;
  backToTopText: string;
  ageVerificationText: string;
}

export const footerConfig: FooterConfig = {
  brandName: "Glamour",
  tagline: "Beauty & Wellness",
  description: "Your daily source of beauty inspiration, skincare tips, and wellness advice. Discover curated products and join our glowing community.",
  socialLinks: [
    { icon: "Instagram", label: "Instagram", href: "https://instagram.com/glamour" },
    { icon: "Facebook", label: "Pinterest", href: "https://pinterest.com/glamour" },
  ],
  linkGroups: [
    {
      title: "Shop",
      links: [
        { name: "Makeup", href: "https://www.amazon.com/s?k=makeup" },
        { name: "Skincare", href: "https://www.amazon.com/s?k=skincare" },
        { name: "Hair Care", href: "https://www.amazon.com/s?k=hair+care" },
        { name: "Wellness", href: "https://www.amazon.com/s?k=wellness+products" },
      ],
    },
    {
      title: "Inspiration",
      links: [
        { name: "Beauty Tips", href: "https://pinterest.com/search?q=beauty+tips" },
        { name: "Skincare Routines", href: "https://pinterest.com/search?q=skincare+routine" },
        { name: "Makeup Tutorials", href: "https://pinterest.com/search?q=makeup+tutorial" },
        { name: "Wellness", href: "https://pinterest.com/search?q=wellness" },
      ],
    },
  ],
  contactItems: [
    { icon: "Mail", text: "hello@glamour.com" },
  ],
  newsletterLabel: "Subscribe for Beauty Tips",
  newsletterPlaceholder: "Enter your email",
  newsletterButtonText: "Subscribe",
  newsletterSuccessText: "Welcome to Glamour!",
  newsletterErrorText: "Please try again.",
  newsletterEndpoint: "https://formspree.io/f/YOUR_FORM_ID",
  copyrightText: "© 2024 Glamour. All rights reserved.",
  legalLinks: ["Privacy Policy", "Terms of Use"],
  icpText: "",
  backToTopText: "Back to Top",
  ageVerificationText: "",
};

// -----------------------------------------------------------------------------
// Scroll To Top Config
// -----------------------------------------------------------------------------
export interface ScrollToTopConfig {
  ariaLabel: string;
}

export const scrollToTopConfig: ScrollToTopConfig = {
  ariaLabel: "Back to top",
};

// -----------------------------------------------------------------------------
// Export Aliases for Component Compatibility
// -----------------------------------------------------------------------------
export { productShowcaseConfig as wineShowcaseConfig };
export { categoryCarouselConfig as wineryCarouselConfig };
export { beautyTipsConfig as museumConfig };
export { inspirationConfig as newsConfig };
