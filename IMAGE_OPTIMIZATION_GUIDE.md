# Image Optimization Guide

## Critical: Images to Optimize

You need to convert these images to WebP format using an online tool or image editor:

### Use this free online tool: https://squoosh.app/

## Images to Convert (Priority Order):

### 1. CRITICAL - Hero Image
- **File**: `public/hero2.jpg` (4688 KB)
- **Target size**: 200 KB
- **Format**: WebP
- **Quality**: 75-80%
- **New name**: `public/hero2.webp`
- **Fallback**: Create optimized JPEG at ~300KB as `public/hero2-optimized.jpg`

### 2. HIGH PRIORITY - Sector Images
Convert all these to WebP at 75% quality:

- `public/climate_change.jpg` (1538 KB) → `public/climate_change.webp` (target: 150KB)
- `public/education.jpg` (1351 KB) → `public/education.webp` (target: 120KB)
- `public/20892261_Sandy_Ppl-31_Single-01.jpg` (1207 KB) → `public/20892261_Sandy_Ppl-31_Single-01.webp` (target: 120KB)
- `public/nutrition.jpg` (1040 KB) → `public/nutrition.webp` (target: 100KB)
- `public/wash.jpg` (376 KB) → `public/wash.webp` (target: 40KB)
- `public/childprotection.jpg` (369 KB) → `public/childprotection.webp` (target: 40KB)
- `public/gender equality.jpg` (193 KB) → `public/gender_equality.webp` (target: 30KB)
- `public/govering_and_human_rights.jpg` (123 KB) → `public/govering_and_human_rights.webp` (target: 20KB)

### 3. Other Images
- `public/aboutus.png` (242 KB) → `public/aboutus.webp` (target: 50KB)
- Delete `public/hero.jpg` if unused (1787 KB)

## Quick Instructions for Squoosh.app:

1. Go to https://squoosh.app/
2. Drag and drop your image
3. Select "WebP" format on the right side
4. Set quality to 75-80
5. Check the file size (should be 80-90% smaller)
6. Download the optimized image
7. Rename to match the format above
8. Place in the `public/` folder

## Verification:
After conversion, all images should total < 2MB (currently 12MB+)

## Expected Results:
- hero2.webp: ~200KB (was 4688KB) = **95% reduction**
- Total images: ~1.5-2MB (was 12MB+) = **85% reduction**
- LCP improvement: 3-5 seconds → <1.2 seconds
