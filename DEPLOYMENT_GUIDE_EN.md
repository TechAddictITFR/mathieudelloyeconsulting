# 🚀 DEPLOYMENT GUIDE - Mathieu Delloye Portfolio

## ✅ Your GitHub Repository Created
**URL:** https://github.com/TechAddictITFR/mathieudelloyeconsulting.git

---

## 📋 STEP 1: Prepare Your Files

You need to upload these files to your repository:
```
mathieudelloyeconsulting/
├── index.html                    (main page)
├── styles.css                    (design & styling)
├── script.js                     (interactivity)
├── cv_mathieu_servicenow_1page.html  (downloadable CV)
├── README.md                     (documentation)
└── images/
    ├── framatome.svg
    ├── atos.svg
    ├── devoteam.svg
    └── adecco.svg
```

---

## 🖥️ STEP 2: Clone the Repository (If not already done)

```bash
# Open Terminal/PowerShell/Command Line
git clone https://github.com/TechAddictITFR/mathieudelloyeconsulting.git
cd mathieudelloyeconsulting
```

---

## 📤 STEP 3: Add Portfolio Files

**Option A: Via GitHub Web Interface (Easiest)**

1. Go to: https://github.com/TechAddictITFR/mathieudelloyeconsulting
2. Click **"Add file"** → **"Upload files"**
3. **Drag & drop** or **select** these files:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `cv_mathieu_servicenow_1page.html`
   - `README.md`
   - **Entire folder** `images/` (with 4 SVG files)
4. Commit message: `"Add portfolio website files"`
5. Click **"Commit changes"**

**Option B: Via Git Command Line (If you have Git installed)**

```bash
# Copy files to the repository folder
cp -r /path/to/portfolio/files/* /path/to/mathieudelloyeconsulting/

# Verify everything is there
ls -la

# Add all files
git add .

# Commit
git commit -m "Add portfolio website with experience images"

# Push to GitHub
git push origin main
```

---

## ⚙️ STEP 4: Enable GitHub Pages

1. Go to your repository: https://github.com/TechAddictITFR/mathieudelloyeconsulting
2. Click **Settings** (⚙️ gear icon, top right)
3. In the left menu, click **"Pages"**
4. Under **"Source"**, select:
   - **Branch:** `main`
   - **Folder:** `/ (root)`
5. Click **"Save"**

---

## 🌐 STEP 5: Access Your Portfolio

After a few seconds, you'll see a notification:
```
Your site is published at: 
https://techaddictitfr.github.io/mathieudelloyeconsulting/
```

**OR** (shorter URL):
```
https://techaddictitfr.github.io
```

⏳ **Wait 1-2 minutes** for GitHub Pages to compile and deploy your site.

---

## ✅ VERIFICATION CHECKLIST

Once deployed, test:
- ✅ Page displays correctly
- ✅ SVG images visible for each experience
- ✅ Smooth navigation scrolling
- ✅ Buttons and links work
- ✅ CV download link functional
- ✅ Mobile responsive (test on phone)

---

## 🎨 CUSTOMIZATION (Optional)

**Add Your Own Custom Domain** (e.g., mathieudelloye.com)

1. **Purchase a domain** (~$2-5/year):
   - namecheap.com
   - godaddy.com
   - google.com/domains

2. **Configure GitHub Pages**:
   - Settings → Pages → Custom domain
   - Enter your domain name
   - Add DNS records at your registrar

---

## 📝 ADD TO YOUR CV

Include this line in the "Contact" or "Web" section of your CV:

```
Portfolio: https://techaddictitfr.github.io/mathieudelloyeconsulting/
```

Or shorter:

```
Website: https://techaddictitfr.github.io
```

---

## 🔧 TROUBLESHOOTING

**Site not displaying?**
- Verify `index.html` is at the **root** of your repository
- Wait 2-3 minutes after pushing files
- Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)
- Check Settings → Pages → Source is properly configured

**Images not showing?**
- Verify the `images/` folder is at root level
- Check file paths in index.html: `images/name.svg`
- Ensure all 4 SVG files are in the folder
- Refresh the page (hard refresh: Ctrl+Shift+R)

**Site loading slowly?**
- SVG files are lightweight, shouldn't be slow
- GitHub Pages is free, some variability is normal
- Everything should work fine

---

## 📊 FINAL STATS

✅ **Portfolio Created**: Modern, professional, interactive
✅ **Hosting**: Free on GitHub Pages (unlimited)
✅ **Domain**: techaddictitfr.github.io (free)
✅ **Performance**: Fast, no external dependencies
✅ **Responsive**: Desktop, Tablet, Mobile optimized
✅ **CV Integrable**: Direct link to include in CV

---

## 🎯 NEXT STEPS

1. **Push** files to GitHub (see Step 3)
2. **Enable** GitHub Pages (see Step 4)
3. **Wait** 1-2 minutes for deployment
4. **Test** your link: https://techaddictitfr.github.io/mathieudelloyeconsulting/
5. **Add** the link to your CV

---

## 💡 QUICK LINKS

- GitHub Repository: https://github.com/TechAddictITFR/mathieudelloyeconsulting
- GitHub Pages Docs: https://docs.github.com/en/pages
- Portfolio Files Location: `/mnt/user-data/outputs/`

---

**Happy deploying! 🚀**

---

*Created: February 24, 2025*
*Portfolio v1.0 - ServiceNow ITSM & AI Product Owner*
