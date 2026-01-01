# Favicon Setup Guide

## Current Status
The website is configured to use favicons, but the icon files need to be created from the CliveUX logo.

## Required Favicon Files

You need to create the following favicon files from `cliveux logo Black.png`:

### Files to Create in `/public` folder:

1. **favicon.ico** (16x16, 32x32, 48x48 sizes - multi-size ICO file)
2. **icon-light-32x32.png** (32x32px PNG for light mode)
3. **icon-dark-32x32.png** (32x32px PNG for dark mode - may need white/light version)
4. **icon.svg** (Scalable SVG version - preferred for modern browsers)
5. **apple-icon.png** (180x180px PNG for Apple devices)

## Recommended Tools

### Online Tools:
- **Favicon.io** - https://favicon.io (Upload logo, generates all sizes)
- **RealFaviconGenerator** - https://realfavicongenerator.net (Comprehensive favicon generator)
- **Favicon Generator** - https://www.favicon-generator.org

### Desktop Tools:
- **ImageMagick** (Command line)
- **GIMP** or **Photoshop** (Manual creation)
- **Figma** (Design and export)

## Quick Setup Steps

### Option 1: Using Favicon.io (Easiest)
1. Go to https://favicon.io/favicon-converter/
2. Upload `cliveux logo Black.png`
3. Download the generated favicon package
4. Extract and place files in `/public` folder:
   - `favicon.ico` → `/public/favicon.ico`
   - `android-chrome-192x192.png` → Can be used for `apple-icon.png`
   - `android-chrome-512x512.png` → Can be used for larger icons
5. Create `icon-light-32x32.png` and `icon-dark-32x32.png` from the logo
6. Create or update `icon.svg` with the logo

### Option 2: Using RealFaviconGenerator (Most Comprehensive)
1. Go to https://realfavicongenerator.net
2. Upload `cliveux logo Black.png`
3. Configure options:
   - iOS: Enable Apple touch icon (180x180)
   - Android: Enable Android Chrome icons
   - Windows: Enable Windows tiles
   - Safari: Enable Safari pinned tab
4. Generate and download
5. Place all files in `/public` folder
6. Update `app/layout.tsx` if needed

## File Specifications

### favicon.ico
- **Format**: ICO (multi-size)
- **Sizes**: 16x16, 32x32, 48x48 pixels
- **Location**: `/public/favicon.ico`
- **Purpose**: Default browser favicon

### icon-light-32x32.png
- **Format**: PNG
- **Size**: 32x32 pixels
- **Background**: Transparent or white
- **Logo**: Black logo (from `cliveux logo Black.png`)
- **Location**: `/public/icon-light-32x32.png`
- **Purpose**: Light mode favicon

### icon-dark-32x32.png
- **Format**: PNG
- **Size**: 32x32 pixels
- **Background**: Transparent or dark
- **Logo**: White or light colored logo (inverted version)
- **Location**: `/public/icon-dark-32x32.png`
- **Purpose**: Dark mode favicon

### icon.svg
- **Format**: SVG
- **Size**: Scalable (recommended: 512x512 viewBox)
- **Location**: `/public/icon.svg`
- **Purpose**: Modern browser favicon (scalable, crisp at any size)

### apple-icon.png
- **Format**: PNG
- **Size**: 180x180 pixels
- **Location**: `/public/apple-icon.png`
- **Purpose**: Apple touch icon (iOS home screen)

## Next.js 13+ Alternative (Recommended)

Next.js 13+ supports automatic favicon handling. You can:

1. Create `app/icon.png` (512x512px recommended)
2. Next.js will automatically generate all required sizes
3. This is simpler than manual configuration

To use this method:
1. Create `app/icon.png` from your logo (512x512px)
2. Next.js will automatically serve it as favicon
3. You can still keep the metadata icons configuration for additional control

## Current Configuration

The favicon is configured in `app/layout.tsx`:

```typescript
icons: {
  icon: [
    {
      url: "/icon-light-32x32.png",
      media: "(prefers-color-scheme: light)",
    },
    {
      url: "/icon-dark-32x32.png",
      media: "(prefers-color-scheme: dark)",
    },
    {
      url: "/icon.svg",
      type: "image/svg+xml",
    },
  ],
  apple: "/apple-icon.png",
}
```

## Testing

After creating the favicon files:

1. **Clear browser cache** (important!)
2. **Hard refresh** the page (Ctrl+Shift+R or Cmd+Shift+R)
3. **Check browser tab** - favicon should appear
4. **Test in different browsers**:
   - Chrome/Edge
   - Firefox
   - Safari
   - Mobile browsers

## Notes

- Favicons are heavily cached by browsers - changes may take time to appear
- Use `.ico` format for maximum compatibility
- SVG favicons work in modern browsers but may need fallback
- Apple devices require specific sizes (180x180 for iOS)
- Dark mode favicon should be lighter/white version of logo



