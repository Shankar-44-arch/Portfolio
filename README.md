# Modern Developer Portfolio

A premium, highly responsive, and beautifully animated developer portfolio built with React and Vite. It features a sleek monochromatic light theme, a vibrant dark theme, smooth scroll animations, and dynamic configuration via environment variables.

## 🚀 Features

- **Centralized Configuration**: Update personal details via `.env` and portfolio content via `data.js` without touching React components.
- **Modern Themes**: Sleek Black & White light mode and vibrant Blue & Purple dark mode with an animated mesh gradient background.
- **Bento Grid Layouts**: Clean, Apple-inspired grid architectures for Skills, Projects, and Achievements.
- **Fluid Animations**: Smooth, scroll-triggered animations powered by `framer-motion` that dynamically re-animate upon view.
- **Fully Responsive**: Mobile-first design optimized for all devices and screen sizes.

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Styling**: Vanilla CSS (CSS Variables, Flexbox, Grid)

## 📂 Project Structure

```text
src/
├── components/           # React components (Hero, About, Skills, Projects, etc.)
├── styles/               # Component-specific CSS stylesheets
├── index.css             # Global styles, CSS reset, and theme variables
├── App.jsx               # Main application component and layout wrapper
└── data.js               # Centralized data store fetching from .env
```

## ⚙️ Setup & Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd myportfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Portfolio Data**
   Open `src/data.js` to update your personal details, social links, skills, projects, and achievements.

4. **Run the development server**
   ```bash
   npm run dev
   ```
   Your portfolio will now be running at `http://localhost:5173`.

## 📦 Building for Production

To build the application for production, run:
```bash
npm run build
```
This will generate an optimized, minified bundle in the `dist/` directory, ready to be deployed to platforms like Vercel, Netlify, or GitHub Pages.
