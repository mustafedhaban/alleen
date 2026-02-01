# ✅ Quick Start Checklist

## Before You Can Deploy

Complete these tasks in order:

---

## Step 1: Image Optimization ⚡ (CRITICAL)

### What to do:
1. Go to https://squoosh.app/
2. Convert these images to WebP format at 75-80% quality:

**CRITICAL - Hero Image:**
- [ ] `public/hero2.jpg` (4688 KB) → `public/hero2.webp` (~200 KB)
- [ ] Also create optimized fallback: `public/hero2-optimized.jpg` (~300 KB)

**HIGH PRIORITY - Sector Images:**
- [ ] `public/climate_change.jpg` → `public/climate_change.webp`
- [ ] `public/education.jpg` → `public/education.webp`
- [ ] `public/20892261_Sandy_Ppl-31_Single-01.jpg` → `public/20892261_Sandy_Ppl-31_Single-01.webp`
- [ ] `public/nutrition.jpg` → `public/nutrition.webp`
- [ ] `public/wash.jpg` → `public/wash.webp`
- [ ] `public/childprotection.jpg` → `public/childprotection.webp`
- [ ] `public/gender equality.jpg` → `public/gender_equality.webp`
- [ ] `public/govering_and_human_rights.jpg` → `public/govering_and_human_rights.webp`

**OTHER:**
- [ ] `public/aboutus.png` → `public/aboutus.webp`
- [ ] DELETE `public/hero.jpg` if unused

### How to verify:
- [ ] All WebP files are in `public/` folder
- [ ] File names match exactly (case-sensitive)
- [ ] Total size of all WebP images < 2MB

---

## Step 2: Font Optimization 🔤 (CRITICAL)

### What to do:
1. Download Inter font from:
   - https://fonts.bunny.net/inter/files/inter-latin-400-normal.woff2
   - https://fonts.bunny.net/inter/files/inter-latin-500-normal.woff2
   - https://fonts.bunny.net/inter/files/inter-latin-600-normal.woff2
   - https://fonts.bunny.net/inter/files/inter-latin-700-normal.woff2

2. Create directory:
   - [ ] Create `public/fonts/` folder

3. Rename and place files:
   - [ ] `public/fonts/inter-400.woff2`
   - [ ] `public/fonts/inter-500.woff2`
   - [ ] `public/fonts/inter-600.woff2`
   - [ ] `public/fonts/inter-700.woff2`

### How to verify:
- [ ] All 4 font files are in `public/fonts/` folder
- [ ] File names match exactly
- [ ] Each file is ~13KB

---

## Step 3: Install Dependencies 📦

### What to do:
```powershell
npm install
```

### How to verify:
- [ ] No errors during installation
- [ ] `node_modules` folder exists
- [ ] Check package count is ~60% smaller than before

---

## Step 4: Test Locally 🧪

### What to do:
```powershell
npm run dev
```

Then open: http://localhost:5173

### What to check:
- [ ] Site loads without errors
- [ ] Hero image appears (should show fallback JPG in dev)
- [ ] All sections animate on scroll
- [ ] Carousel works in "Sectors of Expertise"
- [ ] Contact form works
- [ ] No console errors

---

## Step 5: Build for Production 🏗️

### What to do:
```powershell
npm run build
```

### What to check:
- [ ] Build completes without errors
- [ ] `dist/` folder is created
- [ ] Check bundle sizes in console output

### Expected output:
```
dist/assets/js/
  index-[hash].js           ~80 KB
  react-vendor-[hash].js    ~130 KB
  gsap-[hash].js            ~40 KB
  carousel-[hash].js        ~20 KB
  icons-[hash].js           ~15 KB

dist/assets/css/
  index-[hash].css          ~50 KB
```

---

## Step 6: Preview Production Build 👀

### What to do:
```powershell
npm run preview
```

Then open the URL shown (usually http://localhost:4173)

### What to check:
- [ ] Site loads quickly
- [ ] Hero WebP image loads
- [ ] Fonts load correctly
- [ ] All animations work
- [ ] Mobile responsive
- [ ] No console errors

---

## Step 7: Deploy to cPanel 🚀

### What to do:
1. Login to cPanel
2. Go to File Manager
3. Navigate to `public_html/`
4. Upload ALL contents of `dist/` folder
5. Verify `.htaccess` file is present

### Files to upload:
- [ ] index.html
- [ ] All files in `dist/assets/`
- [ ] All files in `dist/` root

---

## Step 8: Test Live Site ✅

### What to do:
1. Visit: https://alleenconsultancy.com
2. Open browser DevTools (F12) → Network tab
3. Hard refresh (Ctrl+Shift+R)

### What to check:
- [ ] Site loads quickly (< 2 seconds)
- [ ] Hero WebP image loads
- [ ] No Google Fonts requests
- [ ] Fonts load from `/fonts/` directory
- [ ] All images load correctly
- [ ] Animations work smoothly
- [ ] Mobile version works

---

## Step 9: Performance Testing 📊

### Run these tests:

**PageSpeed Insights:**
1. Go to: https://pagespeed.web.dev/
2. Enter: https://alleenconsultancy.com
3. Check scores

**Targets:**
- [ ] Mobile: 90+ 🎯
- [ ] Desktop: 95+ 🎯

**WebPageTest:**
1. Go to: https://www.webpagetest.org/
2. Test your URL
3. Check metrics

**Targets:**
- [ ] LCP: < 1.2s 🎯
- [ ] FCP: < 0.8s 🎯
- [ ] CLS: < 0.1 🎯

---

## Troubleshooting 🔧

### Images not loading?
- Check WebP files are in `public/` folder
- Verify file names match exactly
- Check browser DevTools → Network tab for 404 errors

### Fonts not loading?
- Check woff2 files are in `public/fonts/` folder
- Verify file names: inter-400.woff2, etc.
- Clear browser cache and reload

### Build errors?
- Check Node.js version (should be 18+)
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Check for TypeScript errors

### Site looks broken?
- Clear browser cache
- Check browser console for errors
- Verify all dist files were uploaded
- Check cPanel error logs

---

## 🎉 Success Criteria

Your optimization is complete when:
- ✅ PageSpeed Mobile score: 90+
- ✅ PageSpeed Desktop score: 95+
- ✅ LCP < 1.2s
- ✅ Total page size < 2.5MB
- ✅ No console errors
- ✅ All features working

---

## 📚 Documentation Reference

- Full details: `PERFORMANCE_OPTIMIZATION_SUMMARY.md`
- Image guide: `IMAGE_OPTIMIZATION_GUIDE.md`
- Font guide: `FONT_OPTIMIZATION_GUIDE.md`
- Deploy guide: `DEPLOYMENT_GUIDE.md`

---

**Ready to start? Begin with Step 1! 🚀**
