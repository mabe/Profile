# Profile

Personal profile website for Magnus Bertilsson, showcasing professional experience, skills, and contact information.

🔗 **Live Site:** [https://mabe.github.io/Profile/](https://mabe.github.io/Profile/)

## About

This is a single-page static website built with HTML, CSS, and JavaScript, featuring a clean, responsive design using Semantic UI. The site serves as an online resume and professional portfolio.

## Features

- **Responsive Design:** Mobile-first approach with breakpoints for various screen sizes
- **Modern UI:** Built with Semantic UI framework for a polished look
- **Performance:** Static files served directly, no build process needed
- **Fast Deployment:** Automatic deployment via GitHub Pages

## Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom styling with responsive breakpoints
- **JavaScript** - RequireJS for module loading
- **Frameworks/Libraries:**
  - Semantic UI 0.3.4 (UI components)
  - RequireJS 2.1.8 (module loader)
  - jQuery 2.0.3 (DOM manipulation)
  - Font Awesome 3.2.1 (icons)

## Repository Structure

```
gh-pages/                   # Primary branch (contains all website files)
├── index.html              # Main HTML file
├── css/
│   ├── app.css            # Custom styles
│   ├── normalize.css      # CSS reset
│   └── semantic/          # Semantic UI framework
├── js/
│   ├── app.js             # RequireJS config
│   ├── app/main.js        # Main application
│   └── lib/               # Vendor libraries
└── images/                # Logos and backgrounds
```

**Note:** The `master` branch is intentionally empty. All content lives on the `gh-pages` branch.

## Local Development

### Prerequisites

- Python 3 (for local server)
- Web browser
- Git

### Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mabe/Profile.git
   cd Profile
   ```

2. **Switch to the gh-pages branch:**
   ```bash
   git checkout gh-pages
   ```

3. **Start a local web server:**
   ```bash
   python3 -m http.server 8080
   ```

4. **View the site:**
   Open [http://localhost:8080](http://localhost:8080) in your browser

### Making Changes

1. Make your edits to HTML, CSS, or JS files
2. Test locally using the Python server
3. Commit your changes:
   ```bash
   git add .
   git commit -m "Description of changes"
   ```
4. Push to GitHub:
   ```bash
   git push origin gh-pages
   ```
5. Changes will be live at [https://mabe.github.io/Profile/](https://mabe.github.io/Profile/) in 1-2 minutes

## Project Details

### No Build Process

This is a static website with no compilation, transpilation, or bundling. Files are served directly as written. There is no package.json, webpack, or build scripts.

### Dependencies

All dependencies are either:
- Loaded via CDN (Semantic UI, Font Awesome, jQuery)
- Vendored in the repository (RequireJS, Semantic UI modules)

No `npm install` or dependency installation is required.

### Testing

There is no automated test suite. Testing is done manually by:
1. Starting the local development server
2. Viewing the site in a browser
3. Checking responsive behavior at different screen sizes

## Deployment

Deployment is automatic via GitHub Pages:
- **Source:** `gh-pages` branch
- **Deploy Time:** 1-2 minutes after push
- **URL:** https://mabe.github.io/Profile/

No CI/CD pipelines or manual deployment steps are needed.

## Content Sections

The profile includes:
- **Contact Information** - Email and social media links
- **Work Experience** - Professional history with company logos
- **Technologies** - Technical skills and expertise
- **Education** - Academic background
- **Hobbies** - Personal interests

## Browser Support

The site supports:
- Modern browsers (Chrome, Firefox, Safari, Edge)
- IE8+ (with conditional comments for older IE versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

This is a personal profile site. For suggestions or bug reports, please open an issue.

## License

Copyright © Magnus Bertilsson. All rights reserved.

## Contact

- **Email:** [magnus.bertilsson@gmail.com](mailto:magnus.bertilsson@gmail.com)
- **GitHub:** [@mabe](https://github.com/mabe)
- **LinkedIn:** [magnusbertilsson](http://se.linkedin.com/in/magnusbertilsson)
- **Twitter:** [@mrbertilsson](http://www.twitter.com/mrbertilsson)
