# 🌐 CyberSnake Website Specification

## Project Overview
Modern, cyberpunk-themed landing page for CyberSnake mobile game with App Store/Play Store download links and integrated privacy policy page.

---

## 🎯 Website Goals

1. **Showcase the game** with engaging visuals and descriptions
2. **Drive app downloads** with prominent CTA buttons
3. **Provide legal compliance** with privacy policy page
4. **Build brand presence** with professional web presence
5. **SEO optimization** for discoverability

---

## 📄 Page Structure

### 1. Home Page (`index.html`)

#### A. Hero Section
```
┌─────────────────────────────────────────────────────────┐
│                    CyberSnake Logo                      │
│                                                         │
│         🐍 CYBERSNAKE: NEON ADVENTURE 🐍               │
│                                                         │
│    "A Premium Snake Game with Cyberpunk Aesthetics"    │
│                                                         │
│  [📱 Download on App Store]  [📱 Get it on Play Store] │
└─────────────────────────────────────────────────────────┘
```

**Content:**
- Animated logo or icon
- Game title with neon glow effect
- Catchy tagline
- Dual download buttons (iOS & Android)
- Background: Dark with animated grid/particles

---

#### B. Game Preview Section
```
┌─────────────────────────────────────────────────────────┐
│               📱 GAME SCREENSHOTS 📱                    │
│                                                         │
│  [Screenshot 1]  [Screenshot 2]  [Screenshot 3]        │
│                                                         │
│           Swipeable carousel on mobile                  │
└─────────────────────────────────────────────────────────┘
```

**Content:**
- 3-5 high-quality screenshots
- Carousel/slider functionality
- Mobile-responsive grid

---

#### C. Features Section
```
┌─────────────────────────────────────────────────────────┐
│                    ✨ KEY FEATURES ✨                   │
│                                                         │
│  🎨 Cyberpunk Aesthetics    🏆 Global Leaderboards     │
│  Stunning neon visuals      Compete worldwide          │
│                                                         │
│  🐍 Custom Skins            ⚡ Power-Ups                │
│  Unlock unique designs      Boost your gameplay        │
│                                                         │
│  🎮 Two Game Modes          💎 Daily Rewards            │
│  Level & Endless modes      Free coins & gems          │
└─────────────────────────────────────────────────────────┘
```

**Features List:**
1. **🎨 Cyberpunk Neon Aesthetics** - Stunning visuals with vibrant neon effects
2. **🏆 Global Leaderboards** - Compete with players worldwide
3. **🐍 Collectible Snake Skins** - Unlock 6+ unique designs
4. **⚡ Strategic Power-Ups** - Magnet, Shield, Time Extender
5. **🎮 Two Game Modes** - Progressive levels & endless challenge
6. **💎 Daily Rewards System** - Free coins and gems every day
7. **📱 Smooth Performance** - 60 FPS optimized gameplay
8. **🎵 Immersive Audio** - Dynamic sound effects and music

---

#### D. Game Modes Section
```
┌─────────────────────────────────────────────────────────┐
│                   🎮 GAME MODES 🎮                      │
│                                                         │
│  📊 LEVEL MODE                 ∞ ENDLESS MODE          │
│  ├─ 50+ Progressive Levels    ├─ Infinite Challenge    │
│  ├─ Increasing Difficulty     ├─ High Score Chase      │
│  ├─ Unlock New Worlds         ├─ Global Rankings       │
│  └─ Boss Encounters           └─ Ultimate Test         │
└─────────────────────────────────────────────────────────┘
```

---

#### E. Download CTA Section
```
┌─────────────────────────────────────────────────────────┐
│              🚀 READY TO PLAY? 🚀                       │
│                                                         │
│         Download CyberSnake for FREE today!            │
│                                                         │
│  [🍎 App Store]              [🤖 Google Play]          │
│                                                         │
│           Available on iOS and Android                  │
└─────────────────────────────────────────────────────────┘
```

---

#### F. Footer
```
┌─────────────────────────────────────────────────────────┐
│                      CyberSnake                         │
│                                                         │
│  [Privacy Policy] | [Terms of Service] | [Support]     │
│                                                         │
│        © 2025 CyberSnake. All rights reserved.         │
│                                                         │
│  [Twitter] [Instagram] [Discord] [YouTube]             │
└─────────────────────────────────────────────────────────┘
```

**Footer Links:**
- Privacy Policy (internal link)
- Terms of Service (internal link)
- Support/Contact email
- Social media icons (optional)

---

### 2. Privacy Policy Page (`privacy-policy.html`)

#### Header
```
┌─────────────────────────────────────────────────────────┐
│  [← Back to Home]            CyberSnake                 │
│                                                         │
│                   PRIVACY POLICY                        │
│                                                         │
│              Last Updated: [Date]                       │
└─────────────────────────────────────────────────────────┘
```

#### Content Structure

```markdown
# Privacy Policy for CyberSnake

**Effective Date:** October 14, 2025
**Last Updated:** October 14, 2025

## 1. Introduction
Welcome to CyberSnake. We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and share information when you use our mobile game.

## 2. Information We Collect

### 2.1 Data Linked to Your Identity
- **Device Identifier (UUID)**: Used to sync game progress across devices
- **Username**: Displayed on leaderboards (visible to other players)
- **Gameplay Data**: Scores, achievements, level progress, unlocked skins
- **Game Statistics**: Play time, game modes played, power-up usage
- **Device Region/Language**: Used for localized content
- **Notification Settings**: Push notification preferences and FCM token

### 2.2 Data Used for Tracking
- **Advertising Identifier (IDFA)**: Used by Google AdMob for personalized ads
- **Ad Interaction Data**: Ad views, clicks, and rewards claimed

### 2.3 Automatically Collected Information
- Device type and model
- Operating system version
- App version
- Crash reports and diagnostic data

## 3. How We Use Your Information

We use collected information for:
- **Game Functionality**: Save progress, sync across devices, display leaderboards
- **Personalization**: Customize your gaming experience
- **Analytics**: Improve game balance and features
- **Advertising**: Show relevant rewarded video ads via Google AdMob
- **Communication**: Send opt-in push notifications about game updates
- **Support**: Respond to your inquiries and technical issues

## 4. Third-Party Services

### 4.1 Google AdMob (Advertising)
- **Purpose**: Display rewarded video ads
- **Data Collected**: IDFA, device information, ad interactions
- **Privacy Policy**: https://policies.google.com/privacy
- **Opt-Out**: You can limit ad tracking in iOS Settings > Privacy > Tracking

### 4.2 Firebase Cloud Messaging (Notifications)
- **Purpose**: Send push notifications (with your permission)
- **Data Collected**: FCM token, notification preferences
- **Privacy Policy**: https://firebase.google.com/support/privacy

### 4.3 Supabase (Backend Database)
- **Purpose**: Store game data, manage leaderboards
- **Data Collected**: All gameplay data listed in Section 2.1
- **Privacy Policy**: https://supabase.com/privacy
- **Data Location**: Cloud servers (specify region if known)

## 5. Data Sharing and Disclosure

We do NOT sell your personal information. We share data only with:
- **Service Providers**: Supabase, Firebase, AdMob (as described above)
- **Legal Requirements**: When required by law or to protect our rights
- **Business Transfers**: In case of merger, acquisition, or sale

**Public Information**: Your username and scores are publicly visible on leaderboards.

## 6. Data Retention

- **Active Users**: Data retained while you use the app
- **Inactive Users**: Data may be deleted after 2 years of inactivity
- **Deletion Requests**: Honored within 30 days (see Section 8)

## 7. Data Security

We implement security measures including:
- Encrypted data transmission (HTTPS/TLS)
- Secure database access controls
- Regular security audits
- However, no method is 100% secure. Use at your own risk.

## 8. Your Privacy Rights

Depending on your location, you may have rights to:
- **Access**: Request a copy of your data
- **Correction**: Update inaccurate information
- **Deletion**: Request data deletion (account cannot be recovered)
- **Opt-Out**: Disable tracking (iOS Settings > Privacy > Tracking)
- **Notifications**: Disable push notifications in app settings

**To exercise your rights**, contact us at: privacy@cybersnake.app (or your actual email)

## 9. Children's Privacy

CyberSnake is suitable for ages 4+ (or PEGI/ESRB rating). We do not knowingly collect data from children under 13 without parental consent. If you believe a child has provided us data, contact us immediately.

## 10. International Users

Your data may be transferred to and stored on servers in [Specify: US, EU, etc.] which may have different privacy laws than your country. By using CyberSnake, you consent to this transfer.

## 11. California Privacy Rights (CCPA)

If you're a California resident, you have additional rights under CCPA:
- Right to know what data we collect
- Right to delete your data
- Right to opt-out of "sale" (we don't sell data)
- Right to non-discrimination

Contact us to exercise these rights.

## 12. European Privacy Rights (GDPR)

If you're in the EU/UK, we process data under these lawful bases:
- **Consent**: For advertising tracking (IDFA)
- **Contract**: To provide game services
- **Legitimate Interest**: For analytics and improvements

You have additional GDPR rights including data portability and withdrawal of consent.

## 13. Changes to This Policy

We may update this policy. Changes will be posted here with a new "Last Updated" date. Continued use after changes constitutes acceptance.

## 14. Contact Us

For privacy questions or requests:
- **Email**: support@cybersnake.app (replace with your actual email)
- **Website**: https://cybersnake.app
- **Response Time**: Within 7 business days

## 15. Consent

By using CyberSnake, you consent to this Privacy Policy.

---

**App Information:**
- **App Name**: CyberSnake
- **Bundle ID (iOS)**: space.hasanali.cybersnake
- **Package (Android)**: [Your Android package name]
- **Developer**: [Your company/developer name]
```

---

## 🎨 Design Requirements

### Color Scheme (Cyberpunk Theme)
```css
--primary-neon: #00FFFF;        /* Cyan */
--secondary-neon: #FF1744;       /* Red/Pink */
--accent-gold: #FFD700;          /* Gold */
--background-dark: #0A0A0A;      /* Deep Black */
--background-gradient: linear-gradient(135deg, #1A1A2E 0%, #16213E 100%);
--surface: #2D2D44;              /* UI Cards */
--text-primary: #FFFFFF;
--text-secondary: #8A8A8A;
--glow-cyan: 0 0 20px rgba(0, 255, 255, 0.6);
--glow-red: 0 0 20px rgba(255, 23, 68, 0.6);
```

### Typography
- **Headings**: `Orbitron` or `Rajdhani` (Google Fonts)
- **Body**: `Inter` or `Roboto`
- **Accent**: `Press Start 2P` (for retro elements)

### Visual Effects
- Neon glow effects on text and buttons
- Animated grid background (CSS or Canvas)
- Particle effects (optional - canvas/WebGL)
- Smooth scroll animations
- Hover effects on interactive elements
- Mobile-first responsive design

---

## 📱 Technical Requirements

### Performance
- **Load Time**: < 3 seconds
- **Mobile Optimized**: Touch-friendly, responsive
- **SEO Friendly**: Meta tags, structured data
- **Accessibility**: WCAG 2.1 AA compliant

### Technologies (Suggested)
```
HTML5 + CSS3 + Vanilla JavaScript
OR
Next.js / React (for dynamic features)
OR
Static Site Generator (Hugo, Jekyll)
```

### Required Meta Tags
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>CyberSnake - Premium Neon Snake Game | iOS & Android</title>
<meta name="description" content="Download CyberSnake, a premium mobile snake game with cyberpunk aesthetics, power-ups, and global leaderboards. Free on iOS and Android!">
<meta name="keywords" content="snake game, mobile game, cyberpunk, neon, iOS game, Android game, free game">
<meta property="og:title" content="CyberSnake - Premium Neon Snake Game">
<meta property="og:description" content="A stunning snake game with cyberpunk visuals and addictive gameplay">
<meta property="og:image" content="https://cybersnake.app/og-image.png">
<meta property="og:url" content="https://cybersnake.app">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" type="image/png" href="/favicon.png">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
```

### App Store Links (Update with actual URLs)
```javascript
const APP_STORE_URL = "https://apps.apple.com/app/cybersnake/id[YOUR_APP_ID]";
const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=space.hasanali.cybersnake";
```

---

## 🚀 Hosting & Deployment

### Recommended Hosting Options
1. **Vercel** - Free, fast, automatic HTTPS
2. **Netlify** - Free tier, easy deployment
3. **GitHub Pages** - Free for static sites
4. **Cloudflare Pages** - Free with CDN

### Domain Options
- `cybersnake.app` (preferred)
- `playcybersnake.com`
- `cybersnakegame.com`

### SSL Certificate
- **Required**: HTTPS enabled (free with hosting providers)
- **Why**: Apple requires HTTPS for privacy policy links

---

## 📋 Content Checklist

### Assets Needed
- [ ] Logo (PNG, SVG - transparent background)
- [ ] App Icon (512x512px minimum)
- [ ] Screenshots (3-5 images, high quality)
- [ ] Favicon (32x32, 16x16)
- [ ] Apple Touch Icon (180x180)
- [ ] OG Image for social sharing (1200x630)
- [ ] Background patterns/textures

### Copy/Text Content
- [ ] Hero headline
- [ ] Game description (short & long versions)
- [ ] Feature descriptions
- [ ] Game modes explanations
- [ ] App Store descriptions (if needed)
- [ ] Footer text
- [ ] Complete privacy policy
- [ ] Terms of service (optional)

### Links & Integration
- [ ] App Store URL
- [ ] Google Play URL
- [ ] Support email address
- [ ] Social media links (if applicable)
- [ ] Analytics (Google Analytics, Plausible, etc.)

---

## 🔍 SEO & Analytics

### Google Analytics (Optional)
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Structured Data (Schema.org)
```json
{
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  "name": "CyberSnake",
  "operatingSystem": "iOS, Android",
  "applicationCategory": "GameApplication",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.5",
    "ratingCount": "1000"
  }
}
```

---

## 📱 Responsive Breakpoints

```css
/* Mobile First */
@media (min-width: 640px) { /* sm */ }
@media (min-width: 768px) { /* md - Tablet */ }
@media (min-width: 1024px) { /* lg - Desktop */ }
@media (min-width: 1280px) { /* xl - Large Desktop */ }
```

---

## 🎯 Call-to-Action Buttons

### Design Specifications
```css
.download-button {
  padding: 16px 32px;
  border-radius: 12px;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: var(--glow-cyan);
}

.download-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 0 30px rgba(0, 255, 255, 0.8);
}

.download-button.ios {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.download-button.android {
  background: linear-gradient(135deg, #00d2ff 0%, #3a7bd5 100%);
}
```

### Button Text
- iOS: "📱 Download on App Store" or "Get it on iPhone"
- Android: "📱 Get it on Google Play" or "Download for Android"

---

## 🔒 Legal Compliance

### Required Pages
1. **Privacy Policy** ✅ (specified above)
2. **Terms of Service** (optional but recommended)
3. **Contact/Support** (email or form)

### GDPR Cookie Banner (if using analytics)
```html
<div class="cookie-banner">
  We use cookies to improve your experience. 
  <button onclick="acceptCookies()">Accept</button>
  <a href="/privacy-policy.html">Learn More</a>
</div>
```

---

## 📊 Analytics & Tracking

### Track These Events
- Page views
- Download button clicks (iOS vs Android)
- Privacy policy views
- Time on page
- Bounce rate

### Example Button Tracking
```javascript
function trackDownload(platform) {
  gtag('event', 'download_click', {
    'event_category': 'engagement',
    'event_label': platform, // 'ios' or 'android'
  });
  
  // Redirect to store
  window.location.href = platform === 'ios' ? APP_STORE_URL : PLAY_STORE_URL;
}
```

---

## 🚀 Launch Checklist

### Pre-Launch
- [ ] All content proofread
- [ ] Links tested (especially App Store/Play Store)
- [ ] Mobile responsive on all devices
- [ ] Cross-browser tested (Chrome, Safari, Firefox, Edge)
- [ ] Privacy policy reviewed by legal (recommended)
- [ ] Analytics installed and tested
- [ ] Favicon and meta tags verified
- [ ] SSL certificate active
- [ ] Custom domain connected

### Post-Launch
- [ ] Submit to Google Search Console
- [ ] Create sitemap.xml
- [ ] Share on social media
- [ ] Add link to App Store/Play Store listings
- [ ] Monitor analytics for issues
- [ ] Test download flow end-to-end

---

## 📝 Example File Structure

```
website/
├── index.html              # Home page
├── privacy-policy.html     # Privacy policy
├── terms.html             # Terms of service (optional)
├── css/
│   ├── main.css           # Main styles
│   └── animations.css     # Animation effects
├── js/
│   ├── main.js            # Main JavaScript
│   └── particles.js       # Particle effects (optional)
├── images/
│   ├── logo.png
│   ├── icon.png
│   ├── screenshots/
│   │   ├── screen1.png
│   │   ├── screen2.png
│   │   └── screen3.png
│   ├── og-image.png
│   └── favicon.png
├── fonts/                 # If using local fonts
└── robots.txt             # SEO
```

---

## 🎬 Additional Features (Optional)

### Advanced Features
- **Video Trailer**: Embedded YouTube video
- **Live Stats Counter**: Show download count (if available)
- **Newsletter Signup**: Collect emails for updates
- **Beta Signup**: Early access form
- **Press Kit**: Media assets for journalists
- **Blog**: Game updates and tips
- **FAQ Section**: Common questions

### Animations
- Scroll-triggered animations (AOS library)
- Parallax scrolling
- CSS keyframe animations for neon glow
- Particle.js background effects
- GSAP for complex animations

---

## 📧 Contact Information (Update These)

Replace placeholders with actual information:

- **Support Email**: `support@cybersnake.app`
- **Privacy Email**: `privacy@cybersnake.app`
- **General Inquiries**: `info@cybersnake.app`
- **Business**: `business@cybersnake.app`

---

## 🎉 Success Metrics

Track these KPIs after launch:
- Download button click-through rate
- Time on site
- Bounce rate
- Mobile vs Desktop traffic split
- Geographic distribution of visitors
- iOS vs Android preference

---

## 🔗 Useful Resources

### Design Inspiration
- https://dribbble.com/tags/game-landing-page
- https://www.awwwards.com/websites/game/

### Tools
- **Figma/Sketch**: Design mockups
- **TinyPNG**: Image compression
- **PageSpeed Insights**: Performance testing
- **BrowserStack**: Cross-browser testing

### Legal Templates
- https://www.termsfeed.com/privacy-policy-generator/
- https://www.freeprivacypolicy.com/

---

**Last Updated:** October 14, 2025  
**Version:** 1.0  
**Status:** Ready for Development

---

## Next Steps

1. ✅ Review this specification
2. ⏳ Gather all required assets (screenshots, logo, etc.)
3. ⏳ Choose hosting provider and register domain
4. ⏳ Develop website (HTML/CSS/JS or framework)
5. ⏳ Add App Store/Play Store links when available
6. ⏳ Test thoroughly on all devices
7. ⏳ Deploy to production
8. ⏳ Submit URL to App Store Connect (Privacy Policy field)

**Questions?** Review this document and start building! 🚀
