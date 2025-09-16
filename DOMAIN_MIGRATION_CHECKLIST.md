# Domain Migration Checklist for Toska CR Portfolio

## 🎯 **When Custom Domain (toska-artproject.com) is Connected**

This checklist ensures all services are properly updated when the domain serverHold is resolved and the custom domain is connected to Vercel.

---

## ✅ **Pre-Migration Checklist**

### **Current Status:**
- **Domain**: `toska-artproject.com` (serverHold status)
- **Current URL**: Vercel domain (e.g., `toska-cr-portfolio.vercel.app`)
- **Registrar**: Key-Systems GmbH
- **Technical Contact**: `bok@seohost.pl`

### **What's Already Set Up:**
- ✅ **Vercel deployment** with current domain
- ✅ **SEO configuration** with placeholder URL
- ✅ **Google Analytics** ready for custom domain
- ✅ **Sitemap generation** with placeholder URL
- ✅ **Formspree** contact form ready

---

## 🔄 **Post-Migration Updates Required**

### **1. SEO Configuration Update**
**File**: `src/lib/seo-config.ts`
**Current**: `url: "https://toska-artproject.com"`
**Action**: Update to actual domain when connected

```typescript
// Update this line:
url: "https://toska-artproject.com", // Change to actual domain
```

### **2. Sitemap URL Update**
**File**: `src/app/sitemap.ts`
**Current**: Uses `seoConfig.site.url`
**Action**: Will automatically update when SEO config is updated

### **3. Google Search Console Setup**
**Action**: Add new property for custom domain
1. **Go to**: [search.google.com/search-console](https://search.google.com/search-console)
2. **Add Property**: `https://toska-artproject.com`
3. **Verify ownership** using HTML file or DNS record
4. **Submit sitemap**: `https://toska-artproject.com/sitemap.xml`
5. **Keep Vercel property** for historical data

### **4. Google Analytics Update**
**File**: `src/lib/analytics.ts`
**Action**: Update measurement ID if needed
- **Current**: Uses environment variable
- **Update**: If new GA4 property is created for custom domain

### **5. Formspree Configuration**
**File**: `src/app/contact/page.tsx`
**Action**: Update form action URL if needed
- **Current**: `https://formspree.io/f/YOUR_FORM_ID`
- **Update**: If Formspree needs domain-specific configuration

### **6. Social Media Links**
**Files**: `src/components/Footer.tsx`, `src/lib/seo-config.ts`
**Action**: Update any hardcoded URLs to use new domain
- **Current**: Already using dynamic URLs
- **Status**: ✅ No changes needed

---

## 📋 **Step-by-Step Migration Process**

### **Step 1: Domain Connection**
1. **Contact technical admin**: `bok@seohost.pl`
2. **Resolve serverHold** status
3. **Update nameservers** to Vercel
4. **Wait for propagation** (24-48 hours)
5. **Test domain** accessibility

### **Step 2: Vercel Configuration**
1. **Add custom domain** in Vercel dashboard
2. **Configure SSL** certificate
3. **Test HTTPS** functionality
4. **Update redirects** if needed

### **Step 3: SEO Updates**
1. **Update `seo-config.ts`** with new domain
2. **Test sitemap** generation
3. **Verify meta tags** on all pages
4. **Check Open Graph** previews

### **Step 4: Analytics Setup**
1. **Add new Search Console** property
2. **Verify domain ownership**
3. **Submit sitemap** to Search Console
4. **Update GA4** if new property created

### **Step 5: Testing & Verification**
1. **Test all pages** on new domain
2. **Check contact form** functionality
3. **Verify analytics** tracking
4. **Test social media** links
5. **Check mobile** responsiveness

---

## 🚨 **Important Notes**

### **Data Preservation:**
- **Vercel Search Console** data will remain available
- **Google Analytics** data continues seamlessly
- **Formspree** submissions continue working
- **No data loss** during migration

### **SEO Considerations:**
- **301 redirects** should be set up from Vercel to custom domain
- **Sitemap** should be updated immediately
- **Search Console** should be configured for new domain
- **Meta tags** should reflect new domain

### **Timeline:**
- **Domain resolution**: 24-48 hours after nameserver update
- **SSL certificate**: Automatic via Vercel
- **Search indexing**: 1-2 weeks for full re-indexing
- **Analytics data**: Immediate for new domain

---

## 📞 **Contacts for Domain Resolution**

### **Technical Admin:**
- **Email**: `bok@seohost.pl`
- **Phone**: `+48.564771012`
- **Action**: Contact to resolve serverHold status

### **Vercel Support:**
- **Documentation**: [vercel.com/docs](https://vercel.com/docs)
- **Support**: Available in Vercel dashboard
- **Action**: Help with domain configuration

---

## ✅ **Success Criteria**

**Domain migration is complete when:**
- ✅ **Custom domain** loads the website
- ✅ **HTTPS** is working properly
- ✅ **All pages** are accessible
- ✅ **Contact form** works on new domain
- ✅ **Analytics** tracking new domain
- ✅ **Search Console** configured for new domain
- ✅ **SEO** configuration updated
- ✅ **Social media** links work correctly

---

## 🔄 **Rollback Plan**

**If issues occur:**
1. **Revert nameservers** to original settings
2. **Use Vercel domain** temporarily
3. **Fix issues** before re-attempting migration
4. **Contact support** if needed

---

**Remember**: This checklist should be followed when the domain serverHold is resolved and the custom domain is ready to be connected! 🚀
