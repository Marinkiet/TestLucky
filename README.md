# ⚡ Lucky Electrical Works PTY - Website

Professional, feature-rich website for Lucky Electrical Works PTY, a trusted electrical services provider in Johannesburg, South Africa.

## 🎉 Exciting Features

### 🔒 Privacy & Security
- **Masked Contact Information** - Phone and email hidden until user clicks to reveal
- **Anti-spam Protection** - Prevents bots from scraping contact details
- **User-controlled Disclosure** - Visitors choose when to see contact info

### ✨ Interactive Elements
- **Animated Preloader** - Electric bolt loading animation
- **Scroll Progress Bar** - Visual indicator of page scroll position
- **Floating Particles** - Dynamic background animation in hero section
- **Stats Counter** - Animated counting numbers (500+ clients, 1200+ projects)
- **Testimonials Slider** - Auto-rotating customer reviews with manual controls
- **Service Modals** - Click "Learn More" on any service for detailed popup
- **Back to Top Button** - Quick navigation to page top
- **Smooth Scroll Animations** - AOS (Animate On Scroll) library integration

### 📱 Mobile-First Design
- **Responsive Layout** - Optimized for all devices
- **Touch-Friendly** - Large buttons and easy navigation
- **WhatsApp Integration** - Floating button with smart contact reveal
- **Mobile Menu** - Animated hamburger navigation

### 🎨 Modern UI/UX
- **Electric Blue & Yellow** - Eye-catching color scheme
- **Gradient Backgrounds** - Modern visual effects
- **Card Animations** - Flip and zoom effects on service cards
- **Form Validation** - Real-time visual feedback
- **Notification System** - Toast notifications for user actions

### 🚀 Performance
- **Fast Loading** - Optimized assets and code
- **Lazy Loading** - Images load as needed
- **Smooth Animations** - Hardware-accelerated CSS
- **SEO Optimized** - Proper meta tags and semantic HTML

### 🎮 Easter Eggs
- **Konami Code** - Try it! ↑↑↓↓←→←→BA
- **Console Branding** - Check browser console for surprises
- **Rainbow Mode** - Activated by secret code

## 📋 Sections

1. **Hero Section** - Powerful headline with masked contact reveal
2. **About Us** - Company mission and values
3. **Stats Counter** - Impressive numbers with animations
4. **Services** - 6 interactive service cards with modals
5. **Testimonials** - Auto-rotating customer reviews
6. **Why Choose Us** - 5 key benefits with icons
7. **Service Areas** - Johannesburg coverage with Google Maps
8. **Customer Values** - What clients appreciate
9. **Contact** - Quote request form with WhatsApp/Email options

## 🎨 Design Specifications

### Colors
- **Electric Blue**: #0066FF
- **Yellow**: #FFC107
- **White**: #FFFFFF
- **Dark Grey**: #2C2C2C

### Typography
- Clean, modern sans-serif fonts
- Responsive font sizes
- Proper hierarchy and spacing

### Animations
- Fade, slide, flip, and zoom effects
- Smooth transitions (0.3s standard)
- Hardware-accelerated transforms

## 📞 Contact Information (Protected)

Contact details are masked by default and revealed on user interaction:
- **Phone/WhatsApp**: Hidden until clicked
- **Email**: Hidden until clicked
- **Business Hours**: Monday – Saturday, 07:00 AM – 18:00 PM
- **Emergency Call-Outs**: Available

## 🗺️ Service Areas

- Johannesburg Central
- Soweto
- Roodepoort
- Randburg
- Sandton
- Midrand
- Alberton
- Germiston
- Surrounding Areas

## ⚡ Services Offered

1. **House Wiring & Rewiring** - Complete installations
2. **Indoor & Outdoor Lighting** - Modern solutions
3. **Fault Finding & Repairs** - Fast diagnosis
4. **Distribution Board Upgrades** - Safety compliance
5. **Geyser Installations** - Professional service
6. **DStv & Smart TV Setup** - Entertainment systems

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Grid, Flexbox, Animations
- **Vanilla JavaScript** - No framework dependencies
- **Font Awesome 6.4.0** - Icon library
- **AOS 2.3.1** - Animate On Scroll library
- **Google Maps Embed API** - Location display

## 📁 File Structure

```
├── index.html          # Main HTML file with all sections
├── styles.css          # Complete CSS with animations
├── script.js           # Interactive features and functionality
└── README.md           # This documentation
```

## 🚀 How to Use

1. **Open** `index.html` in any modern web browser
2. **No installation** required - pure HTML/CSS/JS
3. **No build process** - ready to deploy immediately
4. **Works offline** - except Google Maps and CDN resources

## 🎯 Key Features Explained

### Masked Contact System
```javascript
// Contacts are hidden until user clicks
// Prevents spam and bot scraping
// Smooth reveal animation
```

### Stats Counter
- Animates from 0 to target number
- Triggers when scrolled into view
- Creates impressive visual impact

### Testimonials Slider
- Auto-rotates every 5 seconds
- Manual navigation with dots
- Smooth slide transitions

### Service Modals
- Click any "Learn More" button
- Popup with service details
- Call-to-action to contact form

### Form Handling
- Choose WhatsApp or Email
- Pre-filled message templates
- Visual validation feedback

## 🎨 Customization Guide

### Update Contact Information
Edit in `script.js`:
```javascript
const CONTACT_INFO = {
    phone: '+27 63 487 2375',
    email: 'Luckyelectricalworks79@gmail.com',
    whatsapp: '27634872375'
};
```

### Change Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --electric-blue: #0066FF;
    --yellow: #FFC107;
    --white: #FFFFFF;
    --dark-grey: #2C2C2C;
}
```

### Modify Stats Numbers
Edit `data-target` attributes in HTML:
```html
<div class="stat-number" data-target="500">0</div>
```

### Update Testimonials
Edit testimonial cards in HTML:
```html
<div class="testimonial-card">
    <!-- Your testimonial content -->
</div>
```

### Change Google Maps Location
Replace iframe `src` in Service Areas section with your custom embed URL.

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)
- ⚠️ IE11 (limited support, no animations)

## 📱 Mobile Optimization

- Touch-optimized buttons (min 44x44px)
- Responsive images and layouts
- Fast mobile loading
- Swipe-friendly testimonials
- Mobile-first CSS approach

## 🚀 Deployment Options

Deploy to any static hosting:
- **GitHub Pages** - Free, easy setup
- **Netlify** - Automatic deployments
- **Vercel** - Fast global CDN
- **Traditional Hosting** - Upload via FTP
- **Firebase Hosting** - Google infrastructure

### Quick Deploy Steps:
1. Upload all files to hosting
2. Ensure `index.html` is in root
3. No server configuration needed
4. Site is live immediately!

## ⚡ Performance Tips

- All assets are optimized
- Minimal external dependencies
- Lazy loading implemented
- Hardware-accelerated animations
- Efficient JavaScript execution

## 🔧 Troubleshooting

**Animations not working?**
- Check if AOS library loaded from CDN
- Verify JavaScript is enabled

**Contact reveal not working?**
- Check browser console for errors
- Ensure JavaScript is enabled

**Maps not showing?**
- Check internet connection
- Verify Google Maps embed URL

## 📄 License

© 2026 Lucky Electrical Works PTY. All rights reserved.

---

**⚡ Quality Work. Professional Service. Guaranteed Peace of Mind. ⚡**

*Built with modern web technologies and attention to detail.*
