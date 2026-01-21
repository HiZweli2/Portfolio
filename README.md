# Zwelihle Nleya - Portfolio Website

A modern, elegant portfolio website showcasing DevOps engineering and cloud architecture expertise.

## Features

- Minimalist design with sophisticated color palette
- Deep jewel-tone accents (blues, purples, teals, coppers)
- Built with React and Vite for optimal performance
- Fully responsive design
- Smooth animations and transitions
- Modern component-based architecture

## Tech Stack

- React 18
- Vite
- Lucide React (icons)
- Modern CSS with CSS Variables

## Project Structure

```
portfolio/
├── src/
│   ├── components/          
│   │   ├── Background.jsx   
│   │   ├── Navigation.jsx   
│   │   ├── Hero.jsx        
│   │   ├── ProjectCard.jsx 
│   │   ├── Projects.jsx    
│   │   ├── SkillCard.jsx   
│   │   ├── Skills.jsx      
│   │   ├── Contact.jsx     
│   │   └── Footer.jsx      
│   ├── data/
│   │   └── portfolio.js     
│   ├── styles/
│   │   └── global.css       
│   ├── App.jsx              
│   └── main.jsx             
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Customization

### Update Personal Information

Edit `src/data/portfolio.js` to update:
- Projects (descriptions, technologies, impacts)
- Skills (categories and items)
- Contact links (email, GitHub, LinkedIn)

### Customize Colors

The color palette is defined using CSS variables in `src/styles/global.css`:
```css
:root {
  --bg-primary: #0f1419;
  --text-primary: #e8e8e8;
  --accent-blue: #4a9eff;
  --accent-purple: #b68cd9;
  --accent-teal: #5fbfa7;
  --accent-copper: #d4915e;
  --accent-lavender: #9d7fb8;
}
```

### Add New Sections

Create a new component in `src/components/` and import it into `src/App.jsx`.

## Deployment

This site can be deployed to any static hosting service:

- **Vercel**: Connect your repository for automatic deployments
- **Netlify**: Deploy the `dist` folder after running `npm run build`
- **GitHub Pages**: Use the appropriate Vite plugin

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 Zwelihle Nleya. All rights reserved.
