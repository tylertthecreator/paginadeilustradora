# Formspree Setup Guide for Toska CR Portfolio

## 🚀 Quick Setup (5 minutes)

### Step 1: Create Formspree Account
1. Go to [formspree.io](https://formspree.io)
2. Click "Get Started" 
3. Sign up with your Gmail account
4. Verify your email address

### Step 2: Create New Form
1. In your Formspree dashboard, click "New Form"
2. Give it a name: "Toska CR Contact Form"
3. Copy the **Form ID** (looks like: `xqwerty123`)

### Step 3: Update Form ID in Code
1. Open `src/app/contact/page.tsx`
2. Find this line: `https://formspree.io/f/YOUR_FORM_ID`
3. Replace `YOUR_FORM_ID` with your actual Form ID
4. Save the file

### Step 4: Configure Notifications
1. In Formspree dashboard, go to your form settings
2. Click "Notifications"
3. Add your Gmail address to receive form submissions
4. Customize email template if desired

### Step 5: Test the Form
1. Deploy your website to Vercel
2. Visit the contact page
3. Fill out and submit the form
4. Check your Gmail for the notification

## ✅ That's It!

**What happens now:**
- Visitors fill out the contact form on your website
- Formspree processes the submission
- You receive an email in your Gmail inbox
- You can reply directly from Gmail

**No technical knowledge required!** 🎉

## 📧 Email Format

You'll receive emails like this:
```
From: John Doe (john@example.com)
Subject: Website Inquiry

Message:
Hi, I'm interested in your pottery work. Can we discuss a custom piece?

Best regards,
John Doe
```

## 🔧 Troubleshooting

**Form not working?**
- Check that you replaced `YOUR_FORM_ID` with the correct ID
- Make sure your website is deployed (not just localhost)
- Check Formspree dashboard for any error messages

**Not receiving emails?**
- Check your spam folder
- Verify your email in Formspree settings
- Make sure notifications are enabled

## 📞 Support

- Formspree has excellent documentation: [help.formspree.io](https://help.formspree.io)
- Free plan includes 50 submissions/month
- Upgrade anytime for more submissions
