# Google Analytics Setup Guide for Toska CR Portfolio

## 🎯 **What is Google Analytics and Why Do We Need It?**

**Google Analytics** is a powerful tool that helps you understand your website visitors and how they interact with your portfolio. It's like having a detailed report about who visits your website and what they do there.

### **Why Analytics Matters for Your Business:**
- **📊 Track Visitors**: See how many people visit your website
- **📍 Know Your Audience**: Understand where visitors come from (Instagram, Google, etc.)
- **📈 Measure Success**: Track contact form submissions and conversions
- **🎯 Improve Marketing**: See which social media platforms bring the most visitors
- **💼 Business Insights**: Make data-driven decisions about your portfolio

### **What This Setup Tracks:**
- **Page views** (which pages are most popular)
- **Contact form submissions** (conversions)
- **Social media clicks** (Instagram, Behance, LinkedIn)
- **Visitor demographics** (age, location, interests)
- **Traffic sources** (where visitors come from)

---

## 🚀 **Setup Instructions**

### **Step 1: Create Google Analytics Account**

1. **Go to Google Analytics**: [analytics.google.com](https://analytics.google.com)
2. **Sign in** with your Gmail account
3. **Click "Start measuring"**
4. **Account name**: `Toska CR Portfolio`
5. **Data sharing settings**: Choose your preferences
6. **Click "Next"**

### **Step 2: Create Property**

1. **Property name**: `Toska CR Website`
2. **Reporting time zone**: `Europe/Warsaw` (Poland)
3. **Currency**: `Polish Zloty (PLN)`
4. **Click "Next"**

### **Step 3: Business Information**

1. **Industry category**: `Arts & Entertainment` or `Retail`
2. **Business size**: Choose appropriate size
3. **How you plan to use Google Analytics**: Select relevant options
4. **Click "Create"**

### **Step 4: Set Up Data Stream**

1. **Choose platform**: `Web`
2. **Website URL**: `https://toska-artproject.com` (or current Vercel URL)
3. **Stream name**: `Toska CR Website`
4. **Click "Create stream"**

### **Step 5: Get Measurement ID**

1. **Copy the Measurement ID** (looks like: `G-XXXXXXXXXX`)
2. **Keep this ID safe** - you'll need it for the website

### **Step 6: Update Website Configuration**

1. **Open the file**: `src/lib/analytics.ts`
2. **Find this line**: `measurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX',`
3. **Replace `G-XXXXXXXXXX`** with your actual Measurement ID
4. **Save the file**

### **Step 7: Add Environment Variable (Optional but Recommended)**

1. **Create file**: `.env.local` in project root
2. **Add this line**: `NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX`
3. **Replace `G-XXXXXXXXXX`** with your actual Measurement ID
4. **Save the file**

---

## 📊 **What You'll See in Google Analytics**

### **Real-Time Reports**
- **Current visitors** on your website right now
- **Which pages** they're viewing
- **Where they came from** (Instagram, Google, etc.)

### **Audience Reports**
- **Demographics**: Age, gender, location of visitors
- **Interests**: What your visitors are interested in
- **Technology**: What devices they use (phone, computer, etc.)

### **Acquisition Reports**
- **Traffic sources**: Instagram, Google, direct visits
- **Social media performance**: Which platforms bring most visitors
- **Search terms**: What people search to find you

### **Behavior Reports**
- **Most popular pages**: Which parts of your portfolio get most views
- **Time on site**: How long visitors stay
- **Bounce rate**: How many visitors leave immediately

### **Conversions**
- **Contact form submissions**: How many people contact you
- **Goal completions**: When visitors complete important actions

---

## 🎯 **Key Metrics to Watch**

### **Important Numbers:**
1. **Sessions**: Total visits to your website
2. **Users**: Unique visitors
3. **Page views**: Total pages viewed
4. **Bounce rate**: Should be under 70% (lower is better)
5. **Average session duration**: Should be over 1 minute
6. **Contact form submissions**: Your main conversion goal

### **Social Media Performance:**
- **Instagram clicks**: How many people click your Instagram link
- **Behance clicks**: Portfolio engagement
- **LinkedIn clicks**: Professional network engagement

---

## 🔧 **Troubleshooting**

### **Analytics Not Working?**
1. **Check Measurement ID**: Make sure it's correct in `analytics.ts`
2. **Wait 24-48 hours**: Data takes time to appear
3. **Check browser console**: Look for any error messages
4. **Test in incognito mode**: Make sure it's not blocked by ad blockers

### **No Data Showing?**
1. **Verify the ID**: Double-check the Measurement ID
2. **Check website deployment**: Make sure changes are live
3. **Wait longer**: Sometimes takes up to 48 hours
4. **Check filters**: Make sure you're not filtering out your own visits

---

## 📱 **Mobile App**

**Download the Google Analytics app** for your phone:
- **iOS**: App Store
- **Android**: Google Play Store

**Benefits:**
- Check analytics on the go
- Get real-time notifications
- View reports anywhere

---

## 🎉 **Success!**

Once set up, you'll be able to:
- **Track every visitor** to your website
- **See which social media** brings the most traffic
- **Monitor contact form** submissions
- **Make data-driven decisions** about your portfolio
- **Improve your marketing** based on real data

**Remember**: Analytics is a powerful tool for growing your business. The more you understand your visitors, the better you can serve them! 📈✨

---

## 📞 **Need Help?**

If you need help setting up Google Analytics or understanding the reports, just ask! The technical setup is already done - you just need to get your Measurement ID and add it to the website.

**Pro Tip**: Check your analytics weekly to see trends and make improvements to your portfolio! 🚀
