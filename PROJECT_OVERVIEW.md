# Askunai Ha'ir Website - Project Overview

## About the Organization

**Askunai Ha'ir** (Hebrew: "Volunteer responders / helpers for those in need") is a global volunteer humanitarian and first-response organization coordinating help when it matters most.

## Website Structure

### Pages Implemented (9 Total)

1. **Home** (`/`)
   - Hero section with animated globe background
   - Mission strip with 3 core values
   - What We Do overview (4 feature blocks)
   - Animated impact statistics counter
   - Askanim spotlight carousel with testimonials
   - Donation CTA

2. **About** (`/about`)
   - Organization story and mission
   - Role of askanim (volunteer coordinators)
   - Global leadership model structure
   - Ethics and accountability section
   - Transparency statement
   - Mission and vision statements

3. **What We Do** (`/what-we-do`)
   - Crisis Dispatch System (24/7 coordination)
   - Field Volunteer Coordination
   - Emergency Logistics
   - Family & Community Support
   - Cross-Border Humanitarian Aid

4. **Get Help** (`/get-help`)
   - 24/7 Emergency hotline display
   - Help request form with multiple fields
   - Quick info cards (response time, multilingual support)
   - Alternative contact methods
   - Form validation and submission

5. **Apply** (`/apply`)
   - 4-step volunteer journey visualization
   - Comprehensive application form
   - Skills selector with checkboxes
   - Availability calendar options
   - Success confirmation screen

6. **Global Operations** (`/global-operations`)
   - Interactive regional selector
   - Regional coordinator information
   - Active response zones display
   - Coordination center locations
   - Live statistics (87 countries, 15,420 volunteers)

7. **Donate** (`/donate`)
   - One-time vs Monthly donation selector
   - Donation purpose options (4 categories)
   - Predefined and custom amount selection
   - Payment method selection
   - Financial transparency with breakdown charts
   - Alternative giving options

8. **News & Updates** (`/news`)
   - Featured stories section
   - Category and region filters
   - Card-based article layout
   - Newsletter signup
   - 6 sample articles with images

9. **Contact** (`/contact`)
   - Contact form with validation
   - Quick contact cards (emergency, general, international)
   - Office hours and contact information
   - US and Israel headquarters details
   - Regional office finder

### Core Components

- **Header**: Sticky navigation with dark mode toggle, responsive mobile menu
- **Footer**: Site links, social media, legal policies
- **EmergencyButton**: Floating "Get Help Now" button (bottom right)

## Design System

### Brand Colors
- Primary Green: `#6FAF2F` (help, growth, life)
- Secondary Blue: `#4A86C5` (trust, stability)
- Accent Light Green: `#9FD36B`
- Soft Gray Background: `#F4F6F8`
- Dark Text: `#1E1E1E`
- Emergency Red: `#d4183d`

### Typography
- Modern sans-serif system fonts
- Responsive sizing with mobile-first approach
- High contrast for accessibility

### UI Features
- Rounded cards with soft shadows
- Light gradients (green → blue)
- Smooth hover animations
- Mobile-first responsive design
- Dark mode support (toggle in header)
- Accessible forms with validation

## Technical Stack

- **Framework**: React 18.3.1
- **Routing**: React Router DOM v7
- **Styling**: Tailwind CSS v4
- **Animations**: Motion (formerly Framer Motion) v12
- **Forms**: React Hook Form v7.55.0
- **Theming**: next-themes v0.4.6
- **Icons**: Lucide React v0.487.0

## Key Features

✅ **Mobile-First Responsive**: Works perfectly on all device sizes
✅ **Dark Mode**: Full dark mode support with toggle
✅ **Fast Loading**: Optimized components and images
✅ **Accessibility**: ARIA labels, semantic HTML, keyboard navigation
✅ **Form Validation**: Real-time validation on all forms
✅ **SEO Ready**: Semantic structure, meta tags ready
✅ **Production Ready**: Clean, modular code

## Pages Navigation Flow

```
Home → About/What We Do (Learn)
     → Get Help (Emergency)
     → Apply (Volunteer)
     → Donate (Support)
     → Global Operations (Network)
     → News (Updates)
     → Contact (Connect)
```

## Emergency Features

1. **Emergency Hotline Banner** on Get Help page
2. **Floating Emergency Button** on all pages
3. **Quick Contact Cards** on Contact page
4. **24/7 Availability** messaging throughout

## Design Principles

- **Trust-First**: Clean, professional, transparent design
- **Calm Under Pressure**: Soothing colors, clear hierarchy
- **Action-Driven**: Prominent CTAs, clear next steps
- **Human Touch**: Personal stories, real impact
- **Global Reach**: Multilingual support, worldwide presence

## Logo Integration

The organization's logo is integrated throughout:
- Header (navigation)
- Footer (branding)
- Displayed as circular badge: Globe with green/blue arc

## Future Enhancement Ideas

- Backend integration with Supabase for form submissions
- Real-time volunteer tracking dashboard
- Multi-language support (i18n)
- Advanced map visualization with live data
- Volunteer portal with login
- Donation payment gateway integration
- Blog/CMS integration for news articles

## File Structure

```
/src
  /app
    /components
      - Header.tsx (Navigation)
      - Footer.tsx (Site footer)
      - EmergencyButton.tsx (Floating CTA)
      /ui (Pre-existing component library)
    /pages
      - Home.tsx
      - About.tsx
      - WhatWeDo.tsx
      - GetHelp.tsx
      - Apply.tsx
      - GlobalOperations.tsx
      - Donate.tsx
      - News.tsx
      - Contact.tsx
      - NotFound.tsx (404)
    - App.tsx (Main router)
  /styles
    - index.css (Custom animations)
    - theme.css (Brand colors, dark mode)
    - tailwind.css
    - fonts.css
```

## Getting Started

The website is ready to run. All components are built, styled, and integrated. The forms include client-side validation and submission handlers that currently log to console (ready for backend integration).

### Main CTA Buttons:
- **Get Help Now** → `/get-help`
- **Become a Volunteer** → `/apply`
- **Donate** → `/donate`

### Emergency Access:
- Floating button always visible (bottom-right)
- Emergency hotline: +1-800-ASKUNAI
- International: +972-2-ASKUNAI

---

**Organization Mission**: To coordinate rapid, compassionate humanitarian responses by mobilizing skilled volunteers and resources to communities in crisis worldwide.

**Website Goal**: Connect people in need with help, recruit volunteers, accept donations, and showcase global impact.
