# Sabi Varman - AI & Data Science Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS showcasing my work as an AI & Data Science student.

## Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **State Management**: TanStack Query
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd sabiportfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:8080`.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/
│   ├── portfolio/          # Portfolio-specific components
│   │   ├── Hero.tsx       # Hero section with contact info
│   │   ├── Navigation.tsx # Main navigation
│   │   ├── Education.tsx  # Education background
│   │   ├── Skills.tsx     # Technical skills
│   │   ├── Projects.tsx   # Project showcase
│   │   ├── Certifications.tsx # Certifications
│   │   └── Contact.tsx    # Contact form
│   └── ui/                # Reusable UI components (shadcn/ui)
├── pages/
│   ├── Index.tsx          # Main portfolio page
│   └── NotFound.tsx       # 404 page
├── hooks/                 # Custom React hooks
└── lib/                   # Utility functions
```

## Features

- **Responsive Design**: Optimized for all device sizes
- **Modern UI**: Clean, professional design with smooth animations
- **Fast Performance**: Built with Vite for optimal loading speeds
- **Accessibility**: Semantic HTML and ARIA attributes
- **SEO Optimized**: Meta tags and structured data
- **Contact Form**: Functional contact form with validation

## Deployment

This project can be deployed to any static hosting service like Vercel, Netlify, or GitHub Pages.

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Deploy to Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure redirects if needed

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

**Sabi Varman**
- Email: sabivarman1@gmail.com
- Phone: +91 9600895752
- Location: Kadamalaikundu, Theni, Tamil Nadu

Built with ❤️ using modern web technologies.
