# ResumeBuilder

A modern, privacy-focused resume builder that lets you create beautiful resumes using Markdown. Built with Vue 3, Nuxt 3, and TypeScript.

![ResumeBuilder](https://img.shields.io/badge/ResumeBuilder-Markdown%20Resume%20Builder-blue)
![Vue](https://img.shields.io/badge/Vue-3.0-green)
![Nuxt](https://img.shields.io/badge/Nuxt-3.0-green)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- **📝 Markdown Support**: Write your resume in Markdown with real-time preview
- **🎨 Highly Customizable**: Choose from multiple fonts, themes, and layouts
- **📱 Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **🔒 Privacy First**: All data is stored locally - no server-side storage
- **📄 PDF Export**: Export your resume as a professional PDF
- **🌍 Multi-language**: Support for English, Spanish, and Chinese
- **⚡ Fast & Lightweight**: Built with modern web technologies
- **🎯 Multiple Resumes**: Create and manage multiple resume versions
- **🔧 Easy Customization**: Adjust margins, spacing, fonts, and colors
- **📦 PWA Ready**: Install as a Progressive Web App

## 🚀 Live Demo

Visit the live application: [ResumeBuilder](https://resumebuilder.app)

## 🛠️ Tech Stack

- **Frontend**: Vue 3, Nuxt 3, TypeScript
- **Styling**: UnoCSS, Radix Vue
- **Build Tool**: Vite
- **Markdown**: Markdown-it with plugins
- **PDF Generation**: Browser-based printing
- **Icons**: Iconify
- **Math Support**: KaTeX
- **PWA**: Workbox

## 📦 Installation

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/SoubhagyaGhoshal/ResumeBuilder.git
   cd ResumeBuilder
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Build packages**
   ```bash
   pnpm build:packages
   ```

4. **Start development server**
   ```bash
   cd site
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
ResumeBuilder/
├── packages/                 # Internal packages
│   ├── case-police/         # Case correction utility
│   ├── dynamic-css/         # Dynamic CSS injection
│   ├── front-matter/        # Front matter parser
│   ├── google-fonts-loader/ # Google Fonts loader
│   ├── markdown-it-*        # Markdown plugins
│   ├── utils/               # Utility functions
│   ├── vue-*                # Vue components
│   └── ...
├── site/                    # Main application
│   ├── src/
│   │   ├── components/      # Vue components
│   │   ├── composables/     # Composables
│   │   ├── i18n/           # Internationalization
│   │   ├── pages/          # Pages
│   │   └── utils/          # Utilities
│   └── ...
└── README.md
```

## 🎯 Usage

### Creating Your First Resume

1. **Start the application** and navigate to the dashboard
2. **Click "New"** to create a new resume
3. **Write your content** in Markdown format
4. **Customize the appearance** using the toolbar options:
   - Choose paper size (A4, Letter, etc.)
   - Select font family and size
   - Adjust margins and spacing
   - Pick theme colors
5. **Preview in real-time** as you type
6. **Export to PDF** when ready

### Markdown Features

- **Basic formatting**: Bold, italic, lists, links
- **Sections**: Use headers for different sections
- **Icons**: Add icons using Iconify syntax
- **Math**: Include mathematical expressions with KaTeX
- **Custom styling**: Use HTML for advanced formatting

### Example Resume Structure

```markdown
# John Doe
Software Engineer

## Contact
- 📧 john.doe@email.com
- 📱 +1 (555) 123-4567
- 🌐 github.com/johndoe

## Experience
### Senior Software Engineer
**Company Name** | 2020 - Present
- Led development of web applications
- Mentored junior developers
- Implemented CI/CD pipelines

## Skills
- **Languages**: JavaScript, TypeScript, Python
- **Frameworks**: Vue.js, React, Node.js
- **Tools**: Git, Docker, AWS
```

## 🎨 Customization

### Themes
Choose from multiple color themes or create your own custom theme.

### Fonts
Select from various font families including:
- Adobe Garamond Pro
- CMU Sans Serif
- Euclid
- HKST
- LXGW Wen Kai
- Minion Pro
- Tex Gyre Pagella
- Times Newer Roman

### Layout Options
- Adjust margins (top, bottom, left, right)
- Control paragraph spacing
- Set line height
- Choose paper size

## 🌍 Internationalization

The application supports multiple languages:
- 🇺🇸 English
- 🇪🇸 Spanish
- 🇨🇳 Chinese (Simplified)

## 📱 Progressive Web App

ResumeBuilder can be installed as a PWA on supported devices:
- **Desktop**: Use browser's "Install" option
- **Mobile**: Add to home screen from browser menu
- **Offline**: Access your saved resumes without internet

## 🔧 Development

### Available Scripts

```bash
# Development
pnpm dev              # Start development server
pnpm build            # Build for production
pnpm preview          # Preview production build

# Packages
pnpm build:packages    # Build all internal packages
pnpm typecheck        # Run TypeScript type checking

# Linting
pnpm lint             # Run ESLint
pnpm lint:fix         # Fix ESLint issues
pnpm prettier         # Format code with Prettier
```

### Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Vue 3](https://vuejs.org/) and [Nuxt 3](https://nuxt.com/)
- UI components from [Radix Vue](https://www.radix-vue.com/)
- Icons powered by [Iconify](https://iconify.design/)
- Math rendering with [KaTeX](https://katex.org/)
- Inspired by various open-source resume builders

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/SoubhagyaGhoshal/ResumeBuilder/issues)
- **Discussions**: [GitHub Discussions](https://github.com/SoubhagyaGhoshal/ResumeBuilder/discussions)
- **Email**: Contact through GitHub

## ⭐ Star History

If you find this project helpful, please consider giving it a star on GitHub!

---

**Made with ❤️ by [Soubhagya Ghoshal](https://github.com/SoubhagyaGhoshal)**
