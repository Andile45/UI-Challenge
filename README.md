# Clipboard Landing Page

A modern, responsive landing page for Clipboard - a clipboard management application. Built with React, TypeScript, and Vite, featuring a fully responsive design that adapts seamlessly across all device sizes.

## 🚀 Features

- **Fully Responsive Design**: Optimized for mobile, tablet, and desktop devices
- **Modern UI/UX**: Clean, professional interface with smooth animations and transitions
- **TypeScript**: Type-safe codebase for better development experience
- **Component-Based Architecture**: Modular React components for maintainability
- **Accessibility**: Semantic HTML, ARIA labels, and keyboard navigation support
- **Touch-Friendly**: Optimized touch targets (44px minimum) for mobile devices
- **Performance**: Fast loading with Vite's build tooling

## 📋 Table of Contents

- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Responsive Breakpoints](#responsive-breakpoints)
- [Features Overview](#features-overview)
- [Component Details](#component-details)

## 🛠 Technologies Used

- **React 19.1.1** - UI library
- **TypeScript 5.8.3** - Type safety
- **Vite 7.1.2** - Build tool and dev server
- **ESLint** - Code linting
- **CSS3** - Styling with responsive design

## 📁 Project Structure

```
UI-Challenge/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/          # Images and icons
│   ├── components/      # React components
│   │   ├── header.tsx   # Header component
│   │   ├── header.css   # Header styles
│   │   ├── main.tsx     # Main content component
│   │   ├── main.css     # Main styles
│   │   ├── footer.tsx   # Footer component
│   │   └── footer.css   # Footer styles
│   ├── App.tsx          # Main app component
│   ├── App.css          # App styles
│   ├── main.tsx         # Entry point
│   └── index.css        # Global styles
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd UI-Challenge
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start the development server with hot module replacement
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check for code issues

## 📱 Responsive Breakpoints

The application is fully responsive with the following breakpoints:

- **Small Mobile**: Up to 480px
- **Mobile**: Up to 767px
- **Tablet**: 768px - 1024px
- **Desktop**: 1025px and above

### Responsive Features

- **Flexible Layouts**: Components adapt using flexbox and CSS Grid
- **Responsive Typography**: Font sizes scale appropriately for each screen size
- **Touch-Optimized**: All interactive elements meet the 44px minimum touch target
- **Image Optimization**: Images scale and adapt to container sizes
- **Mobile-First Navigation**: Footer navigation stacks vertically on mobile

## ✨ Features Overview

### Header Section
- Hero section with logo and main heading
- Responsive background images (desktop/mobile)
- Call-to-action buttons for iOS and Mac downloads
- Smooth hover effects and transitions

### Main Content Section
- **Feature Showcase**: Desktop image with feature descriptions
  - Quick Search
  - iCloud Sync
  - Complete History
- **Device Compatibility**: Tablet and mobile device showcase
- **Productivity Tools**: Three feature cards
  - Create blacklists
  - Plain text snippets
  - Sneak preview
- **Company Logos**: Trusted by major companies
- **Final CTA**: Additional download buttons

### Footer Section
- Logo and navigation links
- Social media icons (Facebook, Twitter, Instagram)
- Responsive layout that stacks on mobile

## 🧩 Component Details

### Header Component
- Semantic `<header>` element
- Responsive background images using CSS pseudo-elements
- Accessible buttons with ARIA labels
- Optimized for all screen sizes

### Main Component
- Multiple content sections with proper semantic structure
- Responsive image handling
- Flexible icon grid layout
- Company logo showcase
- Consistent button styling

### Footer Component
- Semantic `<footer>` and `<nav>` elements
- Accessible navigation links
- Social media links with proper attributes
- Responsive stacking on mobile devices

## 🎨 Design Features

- **Color Scheme**: 
  - Primary: Teal/Green (#26baa4) for iOS buttons
  - Secondary: Blue (#6173ff) for Mac buttons
  - Text: Dark gray (#1d2733) for headings
  - Body: Light gray (#9eabb2) for body text

- **Typography**: 
  - Responsive font sizes
  - Optimized line heights for readability
  - Proper heading hierarchy

- **Interactions**:
  - Smooth hover effects
  - Touch-friendly button sizes
  - Focus states for accessibility
  - Transition animations

## 🔧 Development

### Code Quality
- TypeScript for type safety
- ESLint for code linting
- Component-based architecture
- Semantic HTML structure

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design tested across devices

## 📝 Notes

- All images are optimized and stored in the `src/assets` directory
- CSS uses modern features like flexbox and CSS Grid
- Components are modular and reusable
- The project follows React best practices

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is private and for educational purposes.

## 👤 Author

Built as part of a UI challenge to demonstrate responsive design and React/TypeScript skills.

---

**Note**: This is a frontend-only project. The download buttons and links are for demonstration purposes.
