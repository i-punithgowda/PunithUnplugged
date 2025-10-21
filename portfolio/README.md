# Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS.

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Clean and professional design
- **React Router**: Single-page application with client-side routing
- **Component-based Architecture**: Modular and reusable components
- **Contact Form**: Interactive contact form with validation
- **Project Showcase**: Display your projects with live demos and GitHub links

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.jsx      # Navigation header
│   ├── Footer.jsx       # Site footer
│   ├── Hero.jsx         # Hero section
│   ├── About.jsx        # About section
│   ├── Projects.jsx    # Projects showcase
│   └── Contact.jsx      # Contact form and info
├── pages/               # Page components
│   ├── Home.jsx         # Home page (landing)
│   ├── About.jsx        # About page
│   ├── Projects.jsx     # Projects page
│   └── Contact.jsx      # Contact page
├── App.jsx              # Main app component with routing
├── main.jsx             # App entry point
└── index.css            # Tailwind CSS imports
```

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

## Customization

### Personal Information
- Update the hero section in `src/components/Hero.jsx`
- Modify the about section in `src/components/About.jsx`
- Add your projects in `src/components/Projects.jsx`
- Update contact information in `src/components/Contact.jsx`

### Styling
- All styling is done with Tailwind CSS classes
- Customize colors, fonts, and spacing in the components
- Modify the Tailwind config in `tailwind.config.js` for theme customization

### Projects
- Add your real projects to the `projects` array in `src/components/Projects.jsx`
- Replace placeholder images with actual project screenshots
- Update GitHub and live demo links

### Contact Form
- The contact form currently shows an alert on submission
- Integrate with a backend service or email service for actual functionality
- Update the form submission handler in `src/components/Contact.jsx`

## Technologies Used

- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **PostCSS** - CSS processing

## Deployment

This project can be deployed to any static hosting service:

- **Vercel**: Connect your GitHub repository
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Use GitHub Actions for automated deployment
- **Firebase Hosting**: Use Firebase CLI

## License

This project is open source and available under the [MIT License](LICENSE).
