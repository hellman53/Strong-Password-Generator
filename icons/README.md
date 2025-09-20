# Extension Icons

This folder contains the icons for the Password Generator browser extension.

## Current Status
- `icon.svg` - Source SVG icon (128x128)

## Required PNG Icons
To complete the extension setup, you need to create PNG versions of the icon in the following sizes:

- `icon-16.png` (16x16) - Small icon for extension toolbar
- `icon-32.png` (32x32) - Medium icon for extension management
- `icon-48.png` (48x48) - Icon for extension details
- `icon-128.png` (128x128) - Large icon for Chrome Web Store

## How to Create PNG Icons

### Option 1: Using Online Converter
1. Go to an online SVG to PNG converter (like convertio.co or cloudconvert.com)
2. Upload the `icon.svg` file
3. Convert to PNG format at each required size

### Option 2: Using Command Line (if you have ImageMagick installed)
```bash
magick icon.svg -resize 16x16 icon-16.png
magick icon.svg -resize 32x32 icon-32.png  
magick icon.svg -resize 48x48 icon-48.png
magick icon.svg -resize 128x128 icon-128.png
```

### Option 3: Using Design Software
Use tools like GIMP, Photoshop, or Figma to export the SVG in different sizes.

## Temporary Workaround
Until you create the PNG files, you can temporarily update the `manifest.json` to use a placeholder or remove the icon references.
