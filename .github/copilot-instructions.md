# Copilot Instructions for Profile Repository

## Repository Overview

This repository hosts Magnus Bertilsson's personal profile website, deployed as a GitHub Pages site. The repository is intentionally minimal with a unique branch structure.

**Key Facts:**
- **Type:** Static website (no build process required)
- **Size:** 112 files, ~6.3 MB (mostly images and CSS/JS libraries)
- **Primary Branch:** `gh-pages` (contains actual website content)
- **Languages:** HTML, CSS, JavaScript
- **Frameworks/Libraries:** Semantic UI (0.3.4), RequireJS (2.1.8), jQuery (2.0.3), Font Awesome (3.2.1)
- **Deployment:** GitHub Pages (automatically served from `gh-pages` branch)
- **Live URL:** https://mabe.github.io/Profile/

## Branch Structure (CRITICAL)

**This repository has an unusual branch structure - pay close attention:**

1. **`master` branch:** Empty (intentionally cleared in 2013)
2. **`gh-pages` branch:** Contains ALL website files and is the active branch for the live site
3. **Feature branches:** Branch from `gh-pages`, NOT `master`

**When working on this repository:**
- ALWAYS use `gh-pages` as the base branch for any changes
- DO NOT attempt to work from or merge to `master`
- Feature branches should be created from and merged back to `gh-pages`

## Repository Structure

```
/ (root of gh-pages branch)
├── index.html              # Main HTML file (profile page)
├── .gitignore             # Ignores backup files (*~)
├── css/
│   ├── app.css            # Custom styles for the profile page
│   ├── normalize.css      # CSS reset/normalize
│   └── semantic/          # Semantic UI framework files (minified)
├── js/
│   ├── app.js             # RequireJS configuration
│   ├── app/
│   │   └── main.js        # Main application entry point
│   └── lib/
│       ├── require.js     # RequireJS 2.1.8
│       └── impress.js     # Presentation library (unused, commented out)
└── images/                # Company logos and background images
    ├── barium.jpg
    ├── bokia.jpg
    ├── collector.jpg
    ├── ezy.png
    ├── motesplatsen.png
    ├── overlay.png
    └── tappa.jpg
```

## Build, Test, and Deployment

### NO BUILD PROCESS REQUIRED

This is a static website with no build, compilation, or bundling steps. All files are served directly.

**To work on this repository:**

1. **Checkout the correct branch:**
   ```bash
   git checkout gh-pages
   ```

2. **Test locally (optional):**
   ```bash
   # Using Python 3 (recommended)
   python3 -m http.server 8080
   
   # Then visit http://localhost:8080 in your browser
   ```

3. **Make your changes:**
   - Edit HTML, CSS, or JS files directly
   - No npm install, yarn, or any package manager needed
   - No build/compile step required

4. **Commit and push:**
   ```bash
   git add .
   git commit -m "Your commit message"
   git push origin gh-pages
   ```

5. **Deployment:**
   - Happens automatically via GitHub Pages
   - Changes go live within 1-2 minutes after pushing to `gh-pages`
   - No CI/CD pipeline to wait for

### Testing Commands

**Local Server (for testing):**
```bash
python3 -m http.server 8080
# Access at http://localhost:8080
```

**No other test commands exist** - this is a simple static site with no test suite.

### Linting/Validation

- **No linters configured** - no ESLint, Prettier, or HTML validators
- **No package.json** - no npm scripts or dependencies
- Manual validation only: Check that HTML renders correctly in browser

## Dependencies

### External CDN Dependencies (in index.html)
- Font Awesome 3.2.1 (via CDN)
- Semantic UI 0.3.4 (via CDN)
- Google Analytics

### Vendored Libraries (in repository)
- RequireJS 2.1.8 (`js/lib/require.js`)
- jQuery 2.0.3 (loaded via CDN in RequireJS config)
- Impress.js (present but commented out in `js/app/main.js`)
- Semantic UI CSS/JS modules (minified, in `css/semantic/`)

**Important:** All dependencies are already included or loaded via CDN. There are no package managers or dependency installation steps.

## Making Changes

### HTML Changes
- Main file: `index.html`
- Structure: Standard HTML5 with Semantic UI classes
- Profile sections: Contact, Experience, Technologies, Education, Hobbies

### CSS Changes
- Custom styles: `css/app.css`
- Includes responsive design breakpoints
- Gradient background and overlay image styling

### JavaScript Changes
- RequireJS config: `js/app.js`
- Main app logic: `js/app/main.js` (currently minimal - just jQuery initialization)
- Note: `impress().init()` is commented out but impress.js is still loaded

### Adding Images
- Place in `images/` directory
- Reference in HTML as `images/filename.ext`
- Current images are company logos (JPG/PNG) and overlay.png for background effect

## Common Pitfalls and Workarounds

### Pitfall 1: Working on Wrong Branch
**Problem:** Trying to work from `master` branch (which is empty)
**Solution:** ALWAYS checkout `gh-pages` first: `git checkout gh-pages`

### Pitfall 2: Looking for Build Scripts
**Problem:** Searching for package.json, webpack.config.js, etc.
**Solution:** None exist. This is a static site - edit files directly, no build step.

### Pitfall 3: Expecting CI/CD Pipeline
**Problem:** Waiting for tests/builds to pass
**Solution:** No CI/CD. GitHub Pages deploys automatically from `gh-pages` branch in 1-2 minutes.

### Pitfall 4: Installing Dependencies
**Problem:** Running npm install or similar
**Solution:** No dependencies to install. Everything is already in the repo or loaded via CDN.

### Backup Files
- `.gitignore` excludes files ending in `~` (editor backup files)
- These files are automatically ignored and won't be committed

## GitHub Pages Configuration

- **Enabled:** Yes
- **Source Branch:** `gh-pages` (root directory)
- **Custom Domain:** None
- **HTTPS:** Enforced by GitHub
- **Deployment Time:** 1-2 minutes after push

## Architecture Notes

### Module Loading
- Uses RequireJS (AMD pattern) for JavaScript module loading
- Configuration in `js/app.js` sets up paths and loads main module
- Minimal JavaScript - most functionality comes from Semantic UI components

### Styling Approach
- Mobile-first responsive design
- Breakpoints: 1280px, 980px, 736px, 480px, 360px
- Uses Semantic UI components: headers, segments, lists, items
- Custom gradient background with overlay image

### Content Management
- Hard-coded in HTML (no CMS, no data files)
- To update experience/education: edit HTML directly in `index.html`
- No database or external data sources

## Validation Steps

When making changes to this repository:

1. **Switch to correct branch:** Verify you're on `gh-pages` with `git branch`
2. **Make changes:** Edit files directly
3. **Test locally (optional):** Run `python3 -m http.server 8080` and check http://localhost:8080
4. **Commit changes:** `git add .` and `git commit -m "message"`
5. **Push to gh-pages:** `git push origin gh-pages`
6. **Wait 1-2 minutes:** Check live site at https://mabe.github.io/Profile/
7. **Visual verification:** Ensure the page loads and looks correct in browser

## Trust These Instructions

The information in this file has been thoroughly validated through:
- Complete repository exploration (all branches and files examined)
- Testing the local development server
- Verifying the branch structure and deployment mechanism
- Confirming no build process or dependency management exists

**Only perform additional searches if:**
- You need to find specific content within existing files
- These instructions appear outdated (check git log for recent changes to structure)
- You're adding a fundamentally new capability (e.g., adding a build process)

Otherwise, trust this documentation and proceed with confidence.
