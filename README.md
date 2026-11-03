# Prawin V S — Portfolio Pilot

A responsive, single-page personal portfolio built with plain HTML, CSS, and JavaScript. No framework, package installation, or build step is required.

## Run locally

Open `index.html` in a browser, or run a small local server from this folder:

```bash
python -m http.server 8000
```

Then visit http://localhost:8000.

## Before deploying — personalize these items

1. In `index.html`, replace `YOUR_EMAIL@example.com` with your actual email address (it appears in two places).
2. Replace `YOUR-LINKEDIN` and `YOUR-GITHUB` with your profile URL slugs.
3. Add your résumé PDF to this folder and name it `resume.pdf`. The **Download résumé** button will appear automatically once that file is available on the deployed site.
4. Add GitHub repository/demo links and project screenshots when you have them. The project descriptions are intentionally written as summaries; update them to match the exact current state of each project.
5. Review your college name, degree dates, programme details, skills, and project descriptions before submitting the site with applications.

## Deploy to Vercel

**Fastest route:**

1. Create a GitHub repository and upload all files in this folder.
2. In Vercel, choose **Add New → Project**, then import that repository.
3. Select **Other** as the framework preset.
4. Leave the build command empty and set the output directory to `.` (the project root).
5. Click **Deploy**.

You can also deploy from this folder with the Vercel CLI (`npx vercel`) and follow the prompts, choosing the **Other** framework preset and the current directory as the project root.

## Files

- `index.html` — portfolio content and page structure
- `styles.css` — responsive visual design
- `script.js` — mobile navigation, reveal animations, and current year
