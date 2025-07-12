# 🧩 DeerHack - Cross-Device LAN Control & Sync System

A modern, responsive landing page for the DeerHack project - a fully local, cross-platform system that enables seamless communication between mobile, laptop, and browser over the same LAN without any internet connection or third-party servers.

## 🎯 Project Overview

DeerHack is a comprehensive solution that allows you to:

- **Sync clipboard** between devices instantly
- **Transfer files** with chunked WebSocket transfer
- **Control presentations** remotely (Google Slides, Canva, etc.)
- **Simulate mouse and keyboard** input from mobile
- **Monitor battery levels** across all devices
- **Mirror notifications** from mobile to desktop

## 🚀 Features

### 📱 Mobile App (React Native)

- Remote controller and data sender
- WebSocket communication
- Touchpad-style mouse control
- Virtual keyboard simulation
- Background support
- QR code pairing

### 💻 Desktop App (Python)

- Background service with LAN listening
- WebSocket server (asyncio + websockets)
- Mouse & keyboard simulation
- File receiver/sender
- QR code generator
- System tray integration

### 🌐 Web Controller

- Browser-based UI for testing
- Local network hosting
- Manual clipboard sync
- Touchpad simulation
- File upload capabilities

### 🔌 Browser Extension

- Google Slides, Canva, Prezi support
- WebSocket client connection
- Slide navigation via key events
- Scoped permissions

## 🛡️ Security Features

- **Secure Device Pairing**: QR code-based with one-time tokens
- **LAN-Only Communication**: No internet required
- **No Third-Party Servers**: Data never leaves your network
- **Command Whitelisting**: Strict permission controls

## 📁 Project Structure

```
DeerHackLanding/
├── index.html          # Main landing page
├── styles.css          # Comprehensive CSS styles
├── script.js           # Interactive JavaScript functionality
└── README.md           # Project documentation
```

## 🎨 Design Features

### Modern UI/UX

- **Responsive Design**: Works perfectly on all devices
- **Smooth Animations**: Intersection Observer animations
- **Interactive Elements**: Hover effects and micro-interactions
- **Professional Typography**: Inter font family
- **Gradient Backgrounds**: Modern color schemes

### Interactive Components

- **Device Mockups**: Animated phone, laptop, and browser displays
- **Feature Cards**: Hover effects and smooth transitions
- **Component Showcase**: Detailed breakdown of system parts
- **Security Visualization**: QR code pairing demo
- **Download Section**: Interactive download buttons

### Performance Optimizations

- **Lazy Loading**: Elements animate in as they become visible
- **Smooth Scrolling**: Navigation with smooth scroll behavior
- **Mobile-First**: Responsive design with mobile menu
- **Optimized Assets**: Efficient CSS and JavaScript

## 🚀 Getting Started

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/deerhack-landing.git
   cd deerhack-landing
   ```

2. **Open the landing page**:

   - Simply open `index.html` in your web browser
   - Or serve it using a local server:

     ```bash
     # Using Python
     python -m http.server 8000

     # Using Node.js
     npx serve .

     # Using PHP
     php -S localhost:8000
     ```

3. **View the page**:
   - Navigate to `http://localhost:8000` in your browser

## 🎯 Landing Page Sections

### Hero Section

- Compelling headline with typing animation
- Device mockups with floating animations
- Call-to-action buttons
- Gradient background with parallax effect

### Features Section

- Six key features with icons
- Hover animations and transitions
- Responsive grid layout

### Components Section

- Detailed breakdown of all four system components
- Technology badges (React Native, Python, etc.)
- Feature lists for each component

### Security Section

- Security features with icons
- QR code pairing visualization
- Dark theme for emphasis

### Download Section

- Download cards for each component
- Setup instructions with step-by-step guide
- Interactive download buttons with notifications

## 🎨 Customization

### Colors

The landing page uses a modern color palette:

- **Primary Blue**: `#2563eb`
- **Gradient Purple**: `#667eea` to `#764ba2`
- **Dark Theme**: `#1a202c`
- **Light Gray**: `#f7fafc`

### Typography

- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

### Animations

- **Floating Devices**: CSS keyframe animations
- **Scroll Animations**: Intersection Observer
- **Hover Effects**: Transform and scale transitions
- **Typing Effect**: JavaScript character-by-character display

## 📱 Responsive Design

The landing page is fully responsive and optimized for:

- **Desktop**: 1200px+ (full layout)
- **Tablet**: 768px - 1199px (adjusted grid)
- **Mobile**: < 768px (stacked layout, mobile menu)

## 🔧 Browser Support

- **Chrome**: 60+
- **Firefox**: 55+
- **Safari**: 12+
- **Edge**: 79+

## 🚀 Deployment

### Static Hosting

The landing page can be deployed to any static hosting service:

- **Netlify**: Drag and drop the folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Push to a GitHub repository
- **AWS S3**: Upload files to S3 bucket

### Custom Domain

Add your custom domain by:

1. Purchasing a domain
2. Configuring DNS settings
3. Setting up SSL certificate

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

- **Documentation**: Check the README for setup instructions
- **Issues**: Report bugs or feature requests on GitHub
- **Contact**: Reach out for additional support

---

Built with ❤️ for seamless cross-device control and synchronization.
