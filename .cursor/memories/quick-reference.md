# Quick Reference - Toska CR Portfolio

## Common Tasks

### Adding a New Page
1. Create directory: `src/app/new-page/`
2. Create `page.tsx` with `'use client'` directive
3. Create `layout.tsx` for metadata
4. Add navigation link in `Header.tsx`

### Adding a New Component
1. Create file in `src/components/`
2. Use proper TypeScript interfaces
3. Export as default function
4. Import where needed

### Fixing Import Errors
1. Check if component needs `'use client'`
2. Use dynamic import for heavy components
3. Verify file paths and exports

### Styling Guidelines
- Use Tailwind classes with custom color palette
- Follow responsive design patterns
- Use consistent spacing and typography
- Apply hover and transition effects

## Color Classes Quick Reference

### Primary Colors
```css
bg-terracotta-600    /* Primary background */
text-terracotta-600  /* Primary text */
bg-sage-600         /* Secondary background */
text-sage-700       /* Secondary text */
bg-olive-100        /* Accent background */
text-olive-700      /* Accent text */
```

### Accent Colors
```css
bg-vibrant-pink-600  /* Brand color */
text-vibrant-pink-600
bg-dark-teal-50     /* Footer background */
text-dark-teal-600  /* Footer text */
```

### Neutral Colors
```css
bg-cream-50         /* Page background */
bg-beige-50         /* Card background */
text-sage-600       /* Body text */
```

## Component Patterns

### Page Template
```tsx
'use client';

import { motion } from 'framer-motion';

export default function NewPage() {
  return (
    <div className="min-h-screen bg-cream-50">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Page content */}
        </motion.div>
      </div>
    </div>
  );
}
```

### Layout Template
```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Title - Toska CR",
  description: "Page description",
};

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
```

### Button Styles
```tsx
// Primary button
<button className="bg-terracotta-600 text-white px-8 py-3 rounded-full hover:bg-terracotta-700 transition-colors font-medium">
  Primary Action
</button>

// Secondary button
<button className="bg-sage-600 text-white px-8 py-3 rounded-full hover:bg-sage-700 transition-colors font-medium">
  Secondary Action
</button>
```

## Common Issues & Solutions

### "Element type is invalid" Error
- **Cause**: Server Component using client-side features
- **Solution**: Add `'use client'` directive

### Import Resolution Error
- **Cause**: Module not found or wrong path
- **Solution**: Check file path and use dynamic import if needed

### Metadata Not Working
- **Cause**: Exporting metadata from Client Component
- **Solution**: Move metadata to separate layout.tsx file

### Animation Not Working
- **Cause**: Component not marked as Client Component
- **Solution**: Add `'use client'` directive

## File Locations

### Key Files
- `src/app/layout.tsx` - Root layout
- `src/app/globals.css` - Global styles
- `src/components/Header.tsx` - Navigation
- `src/components/Footer.tsx` - Footer
- `tailwind.config.ts` - Tailwind configuration

### Page Files
- `src/app/about/page.tsx` - About page
- `src/app/work/page.tsx` - Work page
- `src/app/shop/page.tsx` - Shop page
- `src/app/contact/page.tsx` - Contact page

### Layout Files
- `src/app/about/layout.tsx` - About metadata
- `src/app/work/layout.tsx` - Work metadata

## Development Commands

```bash
# Start development server
npm run dev

# Build project
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Clear Next.js cache
rm -rf .next && npm run dev
```

## Git Commands

```bash
# Check status
git status

# Add changes
git add .

# Commit changes
git commit -m "Description of changes"

# Push to GitHub
git push origin main

# Pull latest changes
git pull origin main
```

## Deployment

### Vercel (Recommended)
1. Connect GitHub repository
2. Deploy automatically on push
3. Environment variables in Vercel dashboard

### Other Platforms
- Netlify
- Railway
- DigitalOcean App Platform

## Performance Tips

1. Use dynamic imports for heavy components
2. Optimize images with Next.js Image component
3. Use proper loading states
4. Implement error boundaries
5. Monitor bundle size
