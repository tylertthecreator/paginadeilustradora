# Google Search Console Setup Guide for Toska CR Portfolio

## 🎯 **What is Google Search Console?**

**Google Search Console** is a free tool that shows you how your website appears in Google search results. It helps you understand what people search for to find your site and how well your pages rank in Google.

### **Why Search Console Matters:**
- **📊 Search Performance**: See which search terms bring visitors
- **🔍 Ranking Insights**: Understand how your pages rank in Google
- **🛠️ Technical Health**: Monitor site health and fix issues
- **📱 Mobile Usability**: Ensure your site works well on mobile
- **⚡ Performance**: Track Core Web Vitals and page speed

---

## 🚀 **Setup Instructions**

### **Step 1: Access Google Search Console**

1. **Go to**: [search.google.com/search-console](https://search.google.com/search-console)
2. **Sign in** with the same Google account used for Analytics
3. **Click "Start now"** or "Add property"

### **Step 2: Add Property**

1. **Choose property type**: `URL prefix` (recommended)
2. **Enter your website URL**: `https://your-vercel-domain.vercel.app`
   - Replace `your-vercel-domain` with your actual Vercel domain
   - Example: `https://toska-cr-portfolio.vercel.app`
3. **Click "Continue"**

### **Step 3: Verify Ownership**

**Choose verification method**: `HTML file` (easiest)

1. **Download the HTML file** provided by Google
2. **Upload to your website** root directory (`public/` folder)
3. **Click "Verify"** in Search Console

**Alternative method**: `HTML tag`
1. **Copy the meta tag** provided by Google
2. **Add to your website** `<head>` section
3. **Click "Verify"** in Search Console

### **Step 4: Submit Sitemap**

1. **Go to "Sitemaps"** in the left menu
2. **Add sitemap URL**: `https://your-vercel-domain.vercel.app/sitemap.xml`
3. **Click "Submit"**

### **Step 5: Configure Settings**

1. **Set target country**: `Poland` (if applicable)
2. **Set preferred domain**: `www` or `non-www` (choose one)
3. **Enable email notifications** for important issues

---

## 📊 **What You'll See in Search Console**

### **Performance Report**
- **Total clicks**: How many people clicked from Google search
- **Total impressions**: How many times your site appeared in search
- **Average CTR**: Click-through rate from search results
- **Average position**: How high your pages rank in search

### **Top Search Queries**
- **"handcrafted ceramics"**: How many people search for this
- **"pottery artist"**: Your ranking for this term
- **"Toska CR"**: Brand searches
- **"custom ceramics"**: Service-related searches

### **Top Pages**
- **Homepage**: Most popular page in search
- **Portfolio**: How well your work appears in search
- **About page**: Personal brand visibility
- **Contact page**: Lead generation from search

### **Coverage Report**
- **Valid pages**: Pages Google has successfully indexed
- **Excluded pages**: Pages with issues that need fixing
- **Errors**: Technical problems affecting search visibility
- **Warnings**: Issues that don't prevent indexing

---

## 🎯 **Key Metrics to Monitor**

### **Important Numbers:**
1. **Clicks**: Total clicks from Google search (goal: increase over time)
2. **Impressions**: How often your site appears in search (goal: increase)
3. **CTR**: Click-through rate (goal: above 2-3%)
4. **Position**: Average ranking position (goal: top 10, ideally top 3)
5. **Coverage**: Number of indexed pages (goal: all pages indexed)

### **Search Queries to Watch:**
- **"handcrafted ceramics"** - Primary service
- **"pottery artist"** - Professional identity
- **"custom ceramics"** - Service offering
- **"Toska CR"** - Brand searches
- **"artisan bags"** - Secondary service

---

## 🔧 **Troubleshooting**

### **Verification Failed?**
1. **Check file upload**: Make sure HTML file is in correct location
2. **Wait a few minutes**: DNS changes take time to propagate
3. **Try different method**: Use HTML tag instead of file
4. **Check website**: Make sure site is accessible

### **No Data Showing?**
1. **Wait 24-48 hours**: Data takes time to appear
2. **Check sitemap**: Make sure it's submitted and working
3. **Verify domain**: Ensure correct URL is added
4. **Check indexing**: Make sure pages are being crawled

### **Low Search Performance?**
1. **Improve content**: Add more relevant keywords
2. **Fix technical issues**: Address any errors shown
3. **Optimize meta tags**: Improve titles and descriptions
4. **Build backlinks**: Get other sites to link to yours

---

## 📱 **Mobile App**

**Download the Google Search Console app** for your phone:
- **iOS**: App Store
- **Android**: Google Play Store

**Benefits:**
- Check search performance on the go
- Get notifications about issues
- View reports anywhere

---

## 🔄 **Domain Migration Reminder**

**When custom domain is connected:**
1. **Add new property** for `https://toska-artproject.com`
2. **Verify ownership** of new domain
3. **Submit sitemap** for new domain
4. **Keep Vercel property** for historical data
5. **Update SEO configuration** with new domain

**See `DOMAIN_MIGRATION_CHECKLIST.md` for complete migration steps.**

---

## 🎉 **Success!**

Once set up, you'll be able to:
- **Track search performance** for your portfolio
- **See which keywords** bring the most traffic
- **Monitor technical health** of your website
- **Fix issues** that hurt search rankings
- **Optimize content** based on real search data

**Remember**: Search Console data helps you understand how people find your ceramics and bags online, which is crucial for growing your business! 🔍✨

---

## 📞 **Need Help?**

If you need help setting up Search Console or understanding the reports, just ask! The technical setup is already done - you just need to verify ownership and submit your sitemap.

**Pro Tip**: Check your Search Console weekly to monitor performance and fix any issues that arise! 🚀
