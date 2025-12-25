# TinyTales - Frontend Task

## Project Name: tinytales - Clean, descriptive name matching the project

## Version: 0.1.0 

## Project Overview
This is a Next.js 16.1.1 project with complete authentication flow and pixel-perfect UI implementation.
- User Registration (Full Name, Email, Password, Phone, Country Code)
- User Login with JWT authentication
- Account Verification with 6-digit code
- Protected Dashboard with personalized welcome message
- Pixel-perfect UI implementation based on provided mockup

## Live Demo

### Version Requirements
- Next.js 16 requires Node.js 18.17 or higher
- React 19 works with current Next.js 16
- Tailwind CSS v4 requires PostCSS 8+

## Features
### Authentication & Security
User Registration: Comprehensive sign-up with full validation (Full Name, Email, Password, Phone, Country Code)
Secure Login: JWT-based authentication with token management
Email Verification: 6-digit OTP verification flow with resend capability
Protected Routes: Middleware-based route protection for /dashboard
Session Management: Secure token storage in localStorage with cookie fallback
Form Validation: Client-side validation using Yup schemas

###  UI/UX Excellence
Pixel-Perfect Design: Faithful implementation of provided mockups
Responsive Design: Mobile-first approach with full responsiveness across all devices
Modern Interface: Clean, intuitive user interface with smooth transitions
Accessibility: Semantic HTML and ARIA labels for improved accessibility
Real-time Feedback: Interactive form validation with immediate error display
Loading States: Visual feedback during API requests

###  Technical Implementation
Modern Architecture: Next.js App Router with Server/Client Component separation
State Management: React hooks and Formik for form state
API Integration: Axios with centralized configuration and error handling
Code Quality: Type-safe development practices
Environment Configuration: Multi-environment setup ready
Production Optimization: Built-in Next.js optimizations

## Technology Stack
-Core Framework :Next.js 16.1.1 (App Router) - Modern React framework with server-side rendering
-Frontend Libraries :React 18 - UI library with hooks ,Formik - Form state management ,Yup - Schema validation ,Axios - HTTP client

## Styling & UI
Tailwind CSS - Utility-first CSS framework

## Installation
## for creating Project =>npx create-next-app@latest tinytales 
## for installing dependencies => npm install
## for installing libraries => npm install formik yup axios

## Running Project => npm run dev and open http://localhost:3000
## Deploy =>

## Clone Repository =>https://github.com/TaRek-ElSayed02/TinyTales

## Environment Configuration =>NEXT_PUBLIC_API_BASE_URL=https://tinytales.trendline.marketing/api

## Public Routes
/ - Landing page (if exists)
/auth/login - Login page
/auth/register - Registration page
/auth/verify - Email verification page

## Protected Routes
/dashboard - User dashboard (requires authentication) => protected by middleware

## API
Base Configuration
Base URL: https://tinytales.trendline.marketing/api
Headers: Accept: application/json
Error Handling: Comprehensive error catching with user-friendly messages

## Available Endpoints
POST /auth/register - User registration
POST /auth/login - User login
POST /auth/verify-email - Email verification

## Security Features
Token Management
JWT token stored in localStorage 
JWT token stored in cookies
Cookie fallback for middleware protection
Automatic token clearing on logout

## Form Validation
Client-side validation using Yup schemas
Password complexity requirements:
    Minimum 8 characters
    Uppercase & lowercase letters
    Numbers
    Special characters
Real-time validation feedback

## Route Protection
Server-side middleware checks
Automatic redirect to login for unauthenticated users
Protected dashboard route

## Internationalization (i18n) - Translation System

### Overview
The application features a complete bilingual (English & Arabic) support system with RTL (Right-to-Left) layout support for Arabic language. The translation system is built using JSON locale files with a custom helper function, providing seamless language switching across all pages without page reload.

### Technology Used
- **JSON Locale Files**: `/app/locales/en.json` and `/app/locales/ar.json`
- **Custom i18n Helper**: `/app/i18n/index.ts` - Handles translation key lookup and fallback
- **Context API**: `LanguageContext.tsx` - Global language state management with localStorage persistence
- **Next.js App Router**: Client components with "use client" directive for interactivity
- **Tailwind CSS**: For responsive and RTL-aware styling

### Key Features

#### 1. **Language Toggle Button**
- Implemented on all pages: Login, Register, Verify, Dashboard
- Easy access to switch between English and Arabic
- Instant UI updates without page reload

#### 2. **RTL Support**
- Automatic document direction change: `document.dir = 'rtl' | 'ltr'`
- RTL-aware CSS classes using Tailwind conditionals:
  - `flex-row-reverse` for reversed layouts
  - `justify-end` / `justify-start` for RTL alignment
  - `text-right` / `text-left` for text direction
  - `left-3` / `right-3` for position adjustments
- Transform direction inversion for carousels and sliders
- Arrow/icon rotation with `scaleX(-1)` for RTL

#### 3. **Namespace-Based Organization**
Translation keys are organized into logical namespaces:
- `common` - Shared UI elements (Sign In, Sign Up, buttons, language switcher)
- `register` - Registration page specific text
- `verify` - Email verification page text
- `dashboard` - Dashboard page text
- `navbar` - Navigation bar items
- `product` - Product details, breadcrumbs, materials, sizes, colors
- `reviews` - Review section, ratings, comments
- `similar` - Similar items carousel
- `footer` - Footer links and information
- `validation` - Login validation messages
- `registerValidation` - Registration validation messages
- `errors` - Error messages


#### **Locale Files Structure**
```json
{
  "common": { "key": "value" },
  "section": { "key": "value", "subKey": "value" },
  "validation": { "errorKey": "error message" },
  "errors": { "errorKey": "error message" }
}
```

####  **Language Context**
```typescript
// app/contexts/LanguageContext.tsx
export function useLanguage() {
  return {
    locale: 'en' | 'ar',
    toggleLocale: () => void,
    setLocale: (locale: Locale) => void
  };
}
```

Features:
- Persists language preference to localStorage
- Updates document.dir and document.lang automatically
- Provides toggle function for easy language switching
- Available to all components via Context API

####  **Pages & Components with Full Translation**

**Authentication Pages:**
- `/auth/login` - Login form with validation messages in both languages
- `/auth/register` - Registration form with comprehensive validation
- `/auth/verify` - Email verification page with 6-digit code input

**Main Pages:**
- `/dashboard` - User dashboard with profile information
- `/` - Home page with all components

**Components:**
- **Navbar** - Navigation menu with language switcher
- **Hero** - Product showcase with breadcrumb, color selection, size/material dropdowns
- **ProductDetails** - Product information section
- **Reviews** - Product reviews with ratings and comments
- **SimilarItems** - Related products carousel
- **Footer** - Footer with links and information

####  **Dynamic Content Examples**

**Product Cards:**
- Translated product names: `product.product1Name`
- Translated categories: `similar.productCategoryDresses`
- Translated color names: `product.colorRed`, `product.colorBlue`, etc.

**Validation Messages:**
- Email validation: `validation.emailRequired`, `validation.invalidEmail`
- Password validation: `registerValidation.passwordMin`, `registerValidation.passwordUpper`
- Custom error messages in Arabic and English

**Dynamic Dates:**
- Review dates: `reviews.sampleDate1` (e.g., "4 months ago" → "قبل 4 أشهر")

####  **Mobile & Responsive Translation**
- All translations are fully responsive
- Works seamlessly on mobile, tablet, and desktop
- RTL layout adjustments for Arabic on all screen sizes
- Mobile-optimized text sizes and spacing

####  **Performance Optimizations**
- Translations are loaded at build time
- No additional API calls for translations
- Instant language switching with localStorage
- Efficient context re-renders only when locale changes
- Type-safe translation keys with TypeScript

### File Structure
```
app/
├── locales/
│   ├── en.json          # English translations
│   └── ar.json          # Arabic translations
├── i18n/
│   └── index.ts         # Translation helper function
├── contexts/
│   └── LanguageContext.tsx  # Global language state
├── auth/
│   ├── login/page.tsx
│   ├── register/page.tsx
│   └── verify/page.tsx
├── dashboard/page.tsx
├── components/
│   ├── Navbar/
│   ├── Hero/
│   ├── ProductDetails/
│   ├── Reviews/
│   ├── SimilarItems/
│   └── Footer/
└── ...
```

### Adding New Translations
1. Add key-value pair to both `en.json` and `ar.json`
2. Use in component: `{t('namespace.key', locale)}`
3. TypeScript will provide autocompletion for valid keys

### Language Persistence
- User's language preference is saved to localStorage as `language`
- On page reload, the app restores the user's selected language
- Default language is English if no preference is set



## Design Implementation Highlights
##   Architecture & Structure
Component-Based Architecture: Modular components for better maintainability
Responsive Layout: Mobile-first approach with Tailwind CSS
TypeScript: Full type safety throughout the application

# Key Components Implemented
1. Navbar Component
    Responsive navigation with mobile sidebar toggle
    Desktop menu with icons and labels
    Mobile hamburger menu with sliding sidebar
    Font integration (Poppins) for consistent typography
    Interactive hover states and transitions
2. ProductDetails Component
    Main Features:
    Image Gallery:
    Main product image display with navigation arrows
    Thumbnail image selector
    Image indicators (dots)
    Smooth transitions between images
    Product Information:
    Breadcrumb navigation
    Product title and category badge
    Pricing with discount display
    Product description
    Product Customization:
    Material type selection (Cotton/Polyester/Blend)
    Size selection dropdown (2XL to S)
    Color selection with visual color chips and labels
    Interactive quantity selector with price calculation
    Add to Cart Section:
    Quantity controls (+/- buttons)
    Dynamic price calculation
    "Add to Cart" button with hover effects
    Action buttons (Save to Favorites, Add to Bag)
3. Hero Section
    Decorative background with overlay
    "Product Details" text with stroke effect
    Responsive typography scaling
4. Reviews Component
    Rating summary with star distribution
    Individual review cards
    "Add Comment" functionality
    "View More Comments" button
    Rating breakdown with progress bars
5. SimilarItems Component
    Carousel/slider for related products
    Responsive item display (3-4 items based on screen size)
    Product cards with:
    Product images
    Category labels
    Pricing and discounts
    Color options display
    Rating stars and review count
    Add to cart/favorites functionality
    Navigation arrows for carousel
6. Footer Component
    Full-width background image with overlay
    Multi-column layout on desktop
    Stacked layout on mobile
    Contact information
    Helpful links section
    Newsletter subscription
    Social media links

## Technical Features
# Responsive Design
    Mobile-first approach
    Breakpoints: sm, md, lg
    Fluid typography and spacing
    Adaptive image sizing
    Collapsible navigation on mobile
# Interactive Elements
    Hover states on all interactive elements
    Image carousel with navigation
    Quantity selector with live price updates
    Color selection with visual feedback
    Sidebar toggle for mobile navigation
    Product carousel with touch/swipe support
# UI/UX Considerations
    Visual Hierarchy: Clear typography scale and spacing
    Color Scheme: Consistent use of brand colors (#BE968E, #020202)
    Accessibility: Semantic HTML, ARIA labels, keyboard navigation
    Performance: Optimized images, efficient component rendering
    Transitions: Smooth animations and state changes
## Design System
    Typography: Poppins font family with consistent weights
    Spacing: Consistent padding/margin using Tailwind utilities
    Border Radius: Consistent rounded corners (xl, 2xl, 3xl)
    Shadows: Subtle shadows for depth
    Borders: Consistent border widths and colors

##  Implementation Details
# State Management
    React hooks for local state management
    State for:
        Image carousel index
        Selected color
        Quantity
        Sidebar visibility
        Favorite items
        Cart items
##  Design Requirements Met
# Pixel-Perfect Implementation
    Exact spacing and alignment as per mockup
    Precise color matching
    Accurate typography implementation
    Consistent component styling
# Fully Responsive
    All components adapt to screen size
    Touch-friendly interactions on mobile
    Readable text at all sizes
    Maintained design integrity across devices
# Interactive Elements
    All buttons and controls are functional
    Hover and active states implemented
    Smooth transitions and animations
    Accessible keyboard navigation
