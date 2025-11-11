# Dorup Frontend

[![React](https://img.shields.io/badge/React-19.2.0-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.2.2-646CFF.svg)](https://vitejs.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12.23.24-0055FF.svg)](https://www.framer.com/motion/)
[![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000.svg)](https://vercel.com)

A modern, responsive React frontend application for Dorup - Nigeria's all-in-one lifestyle platform redefining housing, hospitality, and payments.

## 🌟 Overview

Dorup is revolutionizing the Nigerian lifestyle sector by providing a comprehensive platform that combines verified home rentals, luxury hotel bookings, and seamless utility bill payments. Our mission is to create a trusted, efficient, and user-friendly ecosystem that addresses the core challenges in Nigeria's housing and hospitality industries.

## ✨ Key Features

### 🏠 Verified Home Rentals
- **100% Verified Properties**: All listings undergo rigorous verification with legal support
- **Nationwide Coverage**: Access to properties across all 36 states in Nigeria
- **Secure Transactions**: Built-in escrow and payment protection
- **Advanced Search**: Filter by location, price, amenities, and property type

### 🏨 Luxury Hotel Bookings
- **500+ Hotel Partners**: From budget-friendly to luxury accommodations
- **Real-time Availability**: Instant booking confirmation
- **Best Price Guarantee**: Competitive rates with exclusive deals
- **Location-based Search**: Find hotels near your destination

### 💡 Unified Bill Payments
- **All Utilities in One Place**: Electricity, water, internet, TV subscriptions
- **Multiple Payment Methods**: Card, bank transfer, mobile money
- **Instant Confirmation**: Real-time payment verification
- **Payment History**: Track all transactions and receipts

### 🔒 Security & Trust
- **100% Secure Platform**: Bank-level encryption and security
- **Verified Partners**: All service providers are thoroughly vetted
- **24/7 Support**: Dedicated customer service team
- **4.9/5 User Rating**: Trusted by over 50,000+ satisfied users

## 🛠️ Tech Stack

### Core Technologies
- **React 19.2.0** - Modern JavaScript library for building user interfaces
- **Vite 7.2.2** - Fast build tool and development server
- **React Router DOM 7.9.5** - Declarative routing for React

### UI/UX & Animations
- **Framer Motion 12.23.24** - Production-ready motion library for React
- **Lucide React 0.553.0** - Beautiful & consistent icon toolkit
- **CSS3** - Modern styling with animations and responsive design

### Development Tools
- **ESLint 9.39.1** - Code linting and formatting
- **Vite Plugin React 5.1.0** - Official React plugin for Vite
- **TypeScript Types** - Type definitions for React and related libraries

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

- **Node.js** (version 18.0.0 or higher)
- **npm** (comes with Node.js) or **yarn**
- **Git** (for version control)

## 🚀 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd dorup_frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

## 📜 Available Scripts

- `npm run dev` - Start the development server with hot reload
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 📁 Project Structure

```
dorup_frontend/
├── public/
│   └── vite.svg                 # Vite logo
├── src/
│   ├── assets/
│   │   └── react.svg           # React logo
│   ├── components/
│   │   ├── Header.jsx          # Navigation header
│   │   ├── Header.css
│   │   ├── HeroSection.jsx     # Main hero section with animations
│   │   ├── HeroSection.css
│   │   ├── ProblemSolution.jsx # Problem/solution showcase
│   │   ├── ProblemSolution.css
│   │   ├── Features.jsx        # Key features display
│   │   ├── Features.css
│   │   ├── EnhancedAboutUs.jsx # About us section
│   │   ├── EnhancedAboutUs.css
│   │   ├── MissionVision.jsx   # Mission and vision
│   │   ├── MissionVision.css
│   │   ├── TeamShowcase.jsx    # Team members display
│   │   ├── TeamShowcase.css
│   │   ├── Footer.jsx          # Site footer
│   │   ├── Footer.css
│   │   ├── PageTransition.jsx  # Page transition wrapper
│   │   └── ScrollToTop.jsx     # Scroll to top functionality
│   ├── pages/
│   │   ├── Home.jsx            # Home page component
│   │   └── About.jsx           # About page component
│   ├── App.jsx                 # Main app component with routing
│   ├── App.css                 # Global app styles
│   ├── main.jsx                # App entry point
│   └── index.css               # Global styles
├── index.html                  # HTML template
├── package.json                # Project dependencies and scripts
├── vite.config.js              # Vite configuration
├── vercel.json                 # Vercel deployment configuration
├── eslint.config.js            # ESLint configuration
└── README.md                   # Project documentation
```

## 🌐 Deployment

This application is configured for deployment on Vercel with SPA routing support.

### Vercel Deployment

1. **Connect your repository** to Vercel
2. **Configure build settings**:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
3. **Add environment variables** (if needed)
4. **Deploy**

The `vercel.json` file handles SPA routing by redirecting all routes to `index.html`.

## 🤝 Contributing

We welcome contributions to improve Dorup! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/your-feature-name`
3. **Make your changes** and ensure code quality with `npm run lint`
4. **Test your changes** thoroughly
5. **Commit your changes**: `git commit -m 'Add some feature'`
6. **Push to the branch**: `git push origin feature/your-feature-name`
7. **Open a Pull Request**

### Code Style Guidelines
- Follow React best practices and hooks guidelines
- Use meaningful component and variable names
- Keep components modular and reusable
- Ensure responsive design across all screen sizes
- Maintain accessibility standards (WCAG guidelines)

## 📄 License

This project is proprietary software owned by Dorup. All rights reserved.

## 📞 Support

For support, questions, or partnership inquiries:

- **Email**: support@dorup.ng
- **Website**: [dorup.ng](https://dorup.ng)
- **Phone**: +234 (0) XXX XXX XXXX

## 🔄 Version History

### v1.0.0 (Current)
- Initial release with core features
- Verified home rentals functionality
- Hotel booking system
- Utility bill payment integration
- Responsive design for all devices
- Framer Motion animations
- Vercel deployment configuration

---

**Built with ❤️ for Nigeria's digital transformation**

*Dorup - Redefining Housing, Hospitality & Payments in Nigeria*
