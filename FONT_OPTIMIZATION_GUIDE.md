# Font Optimization Guide

## Self-Host Inter Font (Eliminate Google Fonts Blocking)

### Step 1: Download Inter Font Files

1. Go to: https://fonts.google.com/specimen/Inter
2. Click "Download family"
3. Extract the ZIP file
4. Look for the `static/` folder or `.woff2` files

OR use this direct link for optimized Inter woff2 files:
https://fonts.bunny.net/inter/files/inter-latin-400-normal.woff2
https://fonts.bunny.net/inter/files/inter-latin-500-normal.woff2
https://fonts.bunny.net/inter/files/inter-latin-600-normal.woff2
https://fonts.bunny.net/inter/files/inter-latin-700-normal.woff2

### Step 2: Create fonts directory

Create folder: `public/fonts/`

### Step 3: Copy required font files

You need these weights:
- Inter-Regular.woff2 (400)
- Inter-Medium.woff2 (500)
- Inter-SemiBold.woff2 (600)
- Inter-Bold.woff2 (700)

Place them in: `public/fonts/`

### Step 4: Font file naming

Rename files to:
- `public/fonts/inter-400.woff2`
- `public/fonts/inter-500.woff2`
- `public/fonts/inter-600.woff2`
- `public/fonts/inter-700.woff2`

### Step 5: Expected Result

- Removes Google Fonts blocking request
- Fonts load from same origin (faster)
- Reduces external dependencies
- Improves FCP (First Contentful Paint)

### File Sizes (Expected)

- inter-400.woff2: ~13KB
- inter-500.woff2: ~13KB
- inter-600.woff2: ~13KB
- inter-700.woff2: ~13KB

**Total**: ~52KB (vs 100KB+ from Google Fonts)

## Verification

After adding fonts, you should see:
1. No external font requests in Network tab
2. Fonts loading from `/fonts/` directory
3. FCP improvement of 200-400ms
