# Password Generator Browser Extension

This project has been converted into a browser extension while maintaining the original web application functionality.

## 🌟 Features

- **Secure Password Generation**: Generate strong, cryptographically secure passwords
- **Customizable Length**: Choose password length from 4 to 50 characters
- **Character Options**: Include/exclude numbers and special symbols
- **One-Click Copy**: Copy generated passwords to clipboard instantly
- **Browser Extension**: Use directly from your browser toolbar
- **Clean UI**: Modern, responsive design optimized for extension popup

## 📸 Screenshots

<p align="center">
  <img src="https://github.com/hellman53/Strong-Password-Generator/blob/6ddf5666525f5cb8345c6c773b15850a3740ca39/public/preview.png" alt="Preview" width="600"/>
</p>

## 📁 Project Structure

```
Password_Generator/
├── src/
│   ├── App.jsx              # Original web app component
│   ├── App.css              # Original web app styling
│   ├── index.css            # Tailwind CSS imports
│   └── main.jsx             # Web app entry point
├── manifest.json            # Extension manifest
├── popup.html               # Extension popup HTML
├── index.html               # Original web app HTML
└── package.json             # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

## 🛠️ Development

### Web Application
Run the original web application for development:
```bash
npm run dev
```

### Browser Extension

#### Build the Extension
```bash
npm run build:extension
```

This will:
1. Build the React components for the extension
2. Copy necessary files to `extension-build/` folder
3. Prepare the extension for loading in Chrome

#### Load Extension in Chrome
1. Run `npm run build:extension`
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" (toggle in top right)
4. Click "Load unpacked"
5. Select the `extension-build` folder
6. The extension will appear in your toolbar!

## 🎨 Styling Changes for Extension

The extension uses a completely redesigned UI optimized for the popup format:

### Key Design Changes:
- **Compact Layout**: 340x480px popup window
- **Modern Gradient**: Purple-blue gradient header and buttons
- **Card-based Design**: Clean white background with subtle shadows
- **Improved Typography**: Better font hierarchy and spacing
- **Enhanced UX**: Visual feedback for copying, hover effects
- **Monospace Password Display**: Better readability for generated passwords

### Color Palette:
- Primary: `#667eea` to `#764ba2` (gradient)
- Success: `#48bb78` (copy confirmation)
- Background: White with subtle gray sections
- Text: Various shades of gray for hierarchy

## 📦 Build Scripts

- `npm run dev` - Start development server for web app
- `npm run build` - Build web application
- `npm run lint` - Run ESLint

## 🔧 Configuration

### Extension Permissions
The extension requests minimal permissions:
- `clipboardWrite` - To copy passwords to clipboard

### Content Security Policy
The extension uses a strict CSP for security:
```json
"content_security_policy": {
  "extension_pages": "script-src 'self'; object-src 'self'"
}
```

## 🖼️ Icons

The extension includes an SVG icon source. To complete the setup:

1. Navigate to the `icons/` folder
2. Follow the instructions in `icons/README.md` to create PNG icons
3. Required sizes: 16x16, 32x32, 48x48, 128x128

## 🔒 Security Features

- **No External Requests**: All generation happens locally
- **Secure Random Generation**: Uses `Math.random()` for character selection
- **No Data Storage**: Passwords are not stored anywhere
- **Minimal Permissions**: Only requests clipboard access

## 📱 Browser Compatibility

- ✅ Chrome (Manifest V3)
- ✅ Edge (Chromium-based)
- ✅ Other Chromium browsers
- ❓ Firefox (may need manifest adjustments)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

**Enjoy your new Password Generator Browser Extension!** 🔐✨
