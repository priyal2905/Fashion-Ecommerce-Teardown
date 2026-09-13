# Fashion E-Commerce App Teardown & Feature Strategy (PM Portfolio Case Study)

> **One-Line Resume / LinkedIn Blurb:**  
> *"Spearheaded an end-to-end UX teardown and feature strategy for Myntra, auditing 4 core surfaces against Nielsen heuristics, benchmarking against Ajio & Nykaa Fashion, and designing a RICE-prioritized PRD for FitTwin AI sizing to recover 18% in return logistics waste."*

---

## 🎯 Executive Overview

This web app is a standalone, single-page Product Management portfolio artifact analyzing **Myntra** (Flipkart Group), India's largest fashion e-commerce platform (~60M+ MAUs, 1.5M+ products), benchmarked against **Ajio** (Reliance Retail) and **Nykaa Fashion** (FSN E-Commerce).

It investigates the central tension in fashion retail: **top-of-funnel GMV acceleration vs. bottom-of-funnel margin erosion caused by 28–35% return rates (with 56% driven by sizing ambiguity).**

### Key Sections:
1. **Overview & Problem Framing:** Executive scale context, unit economics, and 4 audit surfaces.
2. **UX Audit (4 Surfaces):** Grounded in Nielsen Norman Usability Heuristics formatted as:  
   `[Friction Point] → [Why It’s a Problem] → [Heuristic Violated]`.
3. **Competitive Benchmarking:** Comparative matrix across Personalization & Post-Purchase experience with explicit competitor differentiators (e.g., Nykaa's editorial lookbooks, Ajio's doorstep instant exchange).
4. **Feature Strategy & RICE Prioritization:** 3 concrete initiatives ranked via $(R \times I \times C) / E$ with full score justifications.
5. **User Personas:** Detailed archetypes for *Aarav Sharma* (Gen Z Trend Shopper) and *Sneha Mukherjee* (Time-Constrained Strategy Consultant) with quotes, frustrations, and top feature alignments.
6. **PRD-Style Product Brief (#1 Feature):** Comprehensive PRD for **FitTwin** (AI Garment-Cut & Sizing Engine), covering problem metrics, 4-step UX, primary/guardrail KPIs, MVP scope boundaries, and A/B test methodology.
7. **PM Reflection:** Synthesis on balancing user empathy, monetization tradeoffs, and unit economics in an e-commerce PM role.

---

## 💻 Tech Stack
- **Framework:** React 18 + Vite
- **Styling:** Tailwind CSS (custom editorial palette, Plus Jakarta Sans typography)
- **Icons:** Lucide React
- **Responsive:** Fully optimized for desktop monitors, laptops, and mobile screens

---

## 🚀 Getting Started (Local Development)

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### 3. Build for Production
```bash
npm run build
```
This generates a production-ready, minified bundle in the `dist/` directory.

---

## 🌐 How to Deploy for Free (Get a Live URL for Your Resume/LinkedIn)

Here are the three easiest zero-cost deployment methods to get a public URL for your portfolio:

### Option 1: Vercel (Recommended — Takes ~60 seconds)
Vercel is the gold standard for hosting React/Vite frontends with global edge CDN and automatic HTTPS.

#### Via Vercel Web Dashboard (Easiest):
1. Push this project to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Fashion E-Commerce PM Case Study"
   # Create a new repo on github.com, then:
   git remote add origin https://github.com/YOUR_USERNAME/fashion-pm-teardown.git
   git branch -M main
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com/) and sign up / log in with your GitHub account.
3. Click **"Add New Project"** → select your `fashion-pm-teardown` repository.
4. Vercel will automatically detect **Vite** as the framework.
5. Click **"Deploy"**. Within ~30 seconds, your site will be live at `https://fashion-pm-teardown.vercel.app`.

#### Via Vercel CLI:
```bash
npm i -g vercel
vercel
```
Follow the terminal prompts (defaults are correct).

---

### Option 2: Netlify (Drag & Drop or Git)
1. Run `npm run build` to generate the `dist` folder.
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
3. Drag and drop the `dist/` folder directly into the browser window.
4. Netlify will instantly generate a live URL (e.g., `https://fashion-pm-teardown.netlify.app`).

---

### Option 3: GitHub Pages (Direct Free Hosting on GitHub)
1. In `vite.config.js`, the base path is already configured with `base: './'` for relative paths.
2. Install `gh-pages` helper:
   ```bash
   npm install -D gh-pages
   ```
3. Add these two scripts to your `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```
4. Run:
   ```bash
   npm run deploy
   ```
5. In your GitHub repository settings under **Pages**, ensure the branch is set to `gh-pages`. Your site will be live at:  
   `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

---

## 📁 Project Structure

```
fashion/
├── index.html                   # HTML entry point with Plus Jakarta Sans font
├── package.json                 # Project scripts & dependencies
├── vite.config.js               # Vite config with relative asset base
├── tailwind.config.js           # Editorial theme configuration
├── postcss.config.js            # PostCSS pipeline
├── README.md                    # Setup, resume blurb, & deployment guide
└── src/
    ├── main.jsx                 # React root mount
    ├── App.jsx                  # Main shell with scroll-spy navigation
    ├── index.css                # Tailwind directives & custom utilities
    ├── data/
    │   └── caseStudyData.js     # Fully researched case study content dataset
    └── components/
        ├── Navbar.jsx           # Sticky glassmorphic top navigation with active tracker
        ├── HeroOverview.jsx     # Section 1: Problem framing & scale metrics
        ├── UXAudit.jsx          # Section 2: Heuristic friction points
        ├── CompetitiveBenchmark.jsx # Section 3: Comparative matrix (Ajio & Nykaa)
        ├── Prioritization.jsx   # Section 4: 3 features & RICE score table
        ├── UserPersonas.jsx     # Section 5: Target user persona cards
        ├── PRDBrief.jsx         # Section 6: Full PRD for #1 feature (FitTwin)
        ├── Reflection.jsx       # Section 7: PM synthesis & takeaways
        └── Footer.jsx           # Resume one-liner copy button & metadata
```

---

## 📝 License & Attribution
Independent educational and product management portfolio artifact. Trademarks and brand references (Myntra, Ajio, Nykaa Fashion) belong to their respective corporate entities.
