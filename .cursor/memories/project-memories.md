# Toska CR Portfolio - Project Memories

## Project Context
This is a Next.js 15.5.2 portfolio website for Toska CR, a ceramic artist and handbag designer. The site showcases handcrafted ceramics and artisan bags with a focus on sustainable, handmade art.

## Key Technical Decisions Made

### 1. Client Component Architecture
- **Decision**: Converted pages using framer-motion to Client Components
- **Reason**: Server Components cannot use client-side features like animations
- **Implementation**: Added `'use client'` directive to interactive pages
- **Files affected**: `src/app/work/page.tsx`, `src/app/about/page.tsx`

### 2. Dynamic Import Strategy
- **Decision**: Used dynamic import for WorkGallery component
- **Reason**: Prevents SSR issues with client-side animations
- **Implementation**: `dynamic(() => import('./WorkGallery'), { ssr: false })`
- **Benefit**: Better performance and error handling

### 3. Metadata Management
- **Decision**: Separated metadata into layout.tsx files
- **Reason**: Client Components cannot export metadata
- **Implementation**: Created dedicated layout files for each page
- **Files**: `src/app/work/layout.tsx`, `src/app/about/layout.tsx`

### 4. Error Handling
- **Decision**: Implemented ErrorBoundary component
- **Reason**: Graceful error handling for client-side components
- **Implementation**: Class-based error boundary with proper TypeScript types
- **File**: `src/components/ErrorBoundary.tsx`

## Recent Issues Resolved

### Element Type Invalid Error
- **Problem**: "Element type is invalid" errors across multiple pages
- **Root Cause**: Server Components trying to use client-side features
- **Solution**: Converted pages to Client Components with proper metadata separation
- **Status**: ✅ Resolved

### WorkGallery Import Error
- **Problem**: Module resolution issues with WorkGallery component
- **Root Cause**: TypeScript module resolution conflicts
- **Solution**: Used dynamic import with proper error handling
- **Status**: ✅ Resolved

## Project Structure Decisions

### Component Organization
- **Pages**: Each route has its own directory with page.tsx and layout.tsx
- **Components**: Shared components in src/components/
- **Styling**: Tailwind CSS with custom color palette
- **Animations**: Framer Motion for smooth transitions

### Color Palette
- **Primary**: Terracotta (#D2691E), Sage (#87A96B), Olive (#6B8E23)
- **Accent**: Vibrant Pink (#E91E63), Dark Teal (#2C5F5D)
- **Neutral**: Cream (#F5F5DC), Beige (#F5DEB3)

### Typography
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)
- **Code**: JetBrains Mono (monospace)
- **Branding**: Handwritten font for "Toska CR"

## Development Workflow

### Git Strategy
- **Repository**: https://github.com/tylertthecreator/paginadeilustradora
- **Branch**: main
- **Recent commits**: Fixed Element type invalid errors, added dynamic imports

### Development Server
- **Command**: `npm run dev`
- **Port**: 3001 (3000 was in use)
- **Features**: Turbopack for faster builds

### Build Process
- **Command**: `npm run build`
- **Output**: Static files in .next directory
- **Deployment**: Ready for Vercel or similar platforms

## Known Issues & Warnings

### Viewport Metadata Warning
- **Issue**: "Unsupported metadata viewport is configured in metadata export"
- **Status**: Non-critical warning, doesn't affect functionality
- **Solution**: Can be addressed by moving viewport to separate export

### Turbopack Warnings
- **Issue**: Some Turbopack-related warnings in development
- **Status**: Non-critical, development-only warnings
- **Impact**: None on production build

## Future Improvements

### Performance
- Image optimization for artwork gallery
- Lazy loading for heavy components
- Bundle size optimization

### Features
- Contact form integration with EmailJS
- Shopping cart functionality
- Blog section for artist updates
- SEO optimization

### Code Quality
- Unit tests for components
- E2E tests for critical user flows
- Accessibility improvements
- Performance monitoring

## Key Files to Remember

### Critical Components
- `src/app/work/WorkGallery.tsx` - Interactive gallery with filtering
- `src/components/ErrorBoundary.tsx` - Error handling
- `src/app/layout.tsx` - Root layout with fonts and providers

### Configuration Files
- `package.json` - Dependencies and scripts
- `tailwind.config.ts` - Styling configuration
- `tsconfig.json` - TypeScript configuration
- `next.config.ts` - Next.js configuration

### Styling
- `src/app/globals.css` - Global styles and Tailwind imports
- Color palette defined in Tailwind config
- Custom fonts loaded in root layout
