# Byeong-jun Park - Academic Portfolio & Profile Page

This is a premium, high-fidelity, interactive academic portfolio website for **Byeong-jun Park (박병준)**, designed for overseas Ph.D. application outreach. It showcases his public education teaching career, academic publications, G-DEAL leadership, research interests, and his "Vibe Coding" philosophy.

The project is built entirely with clean, semantic **HTML5**, **CSS3 Custom Properties**, and **Vanilla JavaScript**, featuring a sleek dark/light theme, custom timeline layouts, intersection-based scroll reveal animations, and fully responsive layouts.

## 🚀 Features

- **Pioneer of Vibe Coding & EdTech Branding**: Strong visual identity that focuses on system architecture and pedagogical logic.
- **Dynamic Timeline Filtering**: Allows users (professors) to filter experience items by *Public Schools*, *Policy & TFs*, and *EdTech Projects*.
- **Dark/Light Theme Toggle**: Seamless transition between dark and light modes with system/local preferences persisted.
- **Academic Citation Section**: Detailed publication history with direct links to DOIs and reports.
- **Responsive Layout**: Fluid layout optimized for desktops, tablets, and mobile devices.
- **SEO & Social Share Ready**: Prepared with metadata tags for search engine discoverability and social previews (OpenGraph).

## 📂 File Structure

```text
introduce/
├── index.html        # Main HTML structure & Content
├── style.css         # Styling system & theme custom properties
├── script.js         # Navigation, theme toggle, filtering & animations
└── README.md         # Deployment & usage manual
```

---

## 🌐 Quick Deployment to GitHub Pages

Since this is a static webpage, it can be hosted **100% free** on GitHub Pages. Follow these steps to host it immediately:

### Step 1: Initialize Git and Commit Code
Open your terminal (PowerShell, Bash, or Command Prompt), navigate to this folder, and run:

```bash
# Initialize git repository
git init

# Add all files to staging
git add .

# Create the initial commit
git commit -m "feat: initial commit of academic portfolio webpage"

# Rename default branch to main
git branch -M main
```

### Step 2: Add Remote and Push to GitHub
Link this local repository to your GitHub repository and push:

```bash
# Add your GitHub repository remote url
git remote add origin https://github.com/ByeongjunPark/introduce.git

# Push code to the main branch
git push -u origin main
```

### Step 3: Enable GitHub Pages in Repository Settings
1. Go to your GitHub repository page: `https://github.com/ByeongjunPark/introduce`.
2. Click on the **Settings** tab.
3. On the left sidebar, click on **Pages** (under the "Code and automation" section).
4. Under **Build and deployment**:
   - **Source**: Select **Deploy from a branch** from the dropdown menu.
   - **Branch**: Click the dropdown, select `main`, select `/ (root)` as the folder, and click **Save**.
5. After a minute, your website will be live at:
   👉 **`https://byeongjunpark.github.io/introduce/`**

---

## 🛠️ Customization

- **Updating Contact Info**: Open `index.html` and modify the values in the `<section id="contact">` section and `<div class="hero-meta">`.
- **Modifying Theme Colors**: Open `style.css` and adjust the variables inside `:root` (for Dark Mode) and `[data-theme="light"]` (for Light Mode).
- **Adding/Editing Experiences**: Add a new `<div class="timeline-item">` block in `index.html` under the `<div class="timeline">` container. Set its `data-category` attribute to either `teaching`, `policy`, or `projects` to match the filters.
