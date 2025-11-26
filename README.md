# Alleen Consultant - Landing Page

A modern, responsive landing page for Alleen Consultant, a strategic consulting firm specializing in Somalia & the Somali Region.

## 🚀 Features

- **Modern Tech Stack**: Built with React 18, TypeScript, Vite, and Tailwind CSS
- **Stunning UI/UX**: Enhanced with animations, gradients, and micro-interactions
- **Responsive Design**: Mobile-first approach with adaptive layouts and mobile menu
- **Fast Performance**: Optimized with Vite for instant HMR and fast builds
- **Accessibility**: WCAG compliant with keyboard navigation and reduced motion support
- **Type Safety**: Full TypeScript support for better development experience
- **Interactive Components**: Hover effects, smooth scrolling, and loading states

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)

To verify your installation, run:
```bash
node --version
npm --version
```

## 🛠️ Installation

1. Navigate to the project directory:
```bash
cd C:\Users\HP\Documents\trae_projects\alleen
```

2. Install dependencies:
```bash
npm install
```

## 🎯 Development

Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:5173`

## 🏗️ Build

Create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 📁 Project Structure

```
alleen/
├── src/
│   ├── components/       # React components
│   │   ├── About.tsx
│   │   ├── Approach.tsx
│   │   ├── Card.tsx
│   │   ├── Clients.tsx
│   │   ├── Contact.tsx
│   │   ├── Heading.tsx
│   │   ├── Hero.tsx
│   │   ├── Layout.tsx
│   │   ├── Section.tsx
│   │   ├── Sectors.tsx
│   │   ├── Services.tsx
│   │   └── Strengths.tsx
│   ├── data/            # Data files
│   │   ├── clients.ts
│   │   ├── sectors.ts
│   │   ├── services.ts
│   │   └── strengths.ts
│   ├── styles/          # CSS files
│   │   └── index.css
│   ├── App.tsx          # Main app component
│   └── main.tsx         # Entry point
├── index.html           # HTML template
├── package.json         # Dependencies
├── tailwind.config.js   # Tailwind configuration
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## 🎨 Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool & dev server
- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **Inter Font** - Typography

## ✨ UI/UX Enhancements

The landing page features a modern, professional design with:

### Visual Design
- Smooth animations and transitions
- Gradient backgrounds and glassmorphism effects
- Custom shadows with hover effects
- Consistent color palette (Blue brand + Orange accent)

### Interactive Elements
- Dynamic scroll shadow on navigation header
- Responsive mobile menu with hamburger icon
- Card hover effects with lift animations
- Form focus states with ring indicators
- Loading states and success animations
- Button scale transforms on interaction

### Components
- **Hero**: Animated gradient background with statistics and badge
- **Services**: Icon-based cards with gradient containers
- **Contact**: Modern form with validation and loading states
- **Navigation**: Sticky header with smooth scroll behavior
- **All Sections**: Consistent spacing and visual hierarchy

For detailed documentation, see [UI_ENHANCEMENTS.md](./UI_ENHANCEMENTS.md)

## 📄 License

Private project for Alleen Consultant.

## 📞 Contact

For more information, visit the contact section on the website or email: info@alleenconsultant.org
