# K Sai Sravan Naidu — Portfolio

A five-page, responsive student portfolio created for the **HTML5 Semantic Structure & Accessibility** assignment.

## Student details
- **Name:** K Sai Sravan Naidu
- **Course:** B.Tech CSE

## Pages
1. `index.html` — Home
2. `about.html` — About
3. `projects.html` — Projects
4. `skills.html` — Skills
5. `contact.html` — Contact form

## Features
- Semantic HTML5 landmarks and elements: `header`, `nav`, `main`, `section`, `article`, `aside`, `footer`, `form`, `label` and `button`.
- Skip link, visible keyboard focus, logical headings and keyboard-operable navigation.
- ARIA labels, `aria-current`, `aria-expanded`, live form status and validation descriptions where useful.
- Responsive CSS for mobile, tablet and desktop, plus reduced-motion support.
- Page-specific titles and meta descriptions, viewport and theme metadata, and Open Graph metadata on the home page.
- JavaScript mobile menu, dynamic copyright year and accessible client-side contact form validation.

## Run locally
No build tools or dependencies are required.

1. Download and extract the ZIP file.
2. Open the `sai_sravan_portfolio` folder.
3. Double-click `index.html` to open the website in your browser.

For a local development server, open a terminal in this folder and run:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Important customisation before submission
- Replace the sample project cards on `projects.html` with your actual completed projects.
- Update the skill indicators on `skills.html` to reflect your real self-assessed progress.
- Add your real public email address and GitHub profile link on `contact.html`.
- Add a profile photo only if you want one; the current design uses an initials avatar.
- Test every page and link on desktop and mobile sizes.

## Contact form note
The form currently performs browser-side validation and displays an accessible status message. It **does not send or store messages** because a real contact form needs a server or trusted form-processing service. Connect one before describing it as a live message service.

## Accessibility and quality checks
Before submitting:
1. Navigate the site using only `Tab`, `Shift+Tab`, `Enter` and `Space`.
2. Check that the skip link appears when focused.
3. Test the contact form with empty, invalid and valid entries.
4. Check responsive layouts at narrow and wide viewport sizes.
5. Run the site through Lighthouse in Chrome DevTools and review Accessibility and SEO results.
6. Optionally validate the HTML with the W3C Nu HTML Checker: https://validator.w3.org/nu/

## Submit on GitHub
1. Sign in to GitHub and create a **New repository**.
2. Name it `html5-semantic-accessibility-portfolio`.
3. Choose **Public** if your assignment reviewer needs to access it. Do not upload passwords or private information.
4. Create the repository.
5. On your computer, extract this ZIP file. Open the extracted project folder.
6. On the repository page, choose **Add file → Upload files**.
7. Upload the contents of the `sai_sravan_portfolio` folder (the five HTML files, `assets` folder and `README.md`). Upload the contents, not an extra nested copy of the folder.
8. Enter a commit message such as `Add accessible five-page portfolio` and click **Commit changes**.
9. Copy the repository URL. This is the GitHub submission link.

### Optional: publish with GitHub Pages
1. Open the repository **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select branch `main` and folder `/ (root)`, then save.
4. Wait for GitHub Pages to publish. Your site URL will be shown in the Pages section.
5. Open the published URL and test all five pages. Submit the live URL if your assignment accepts a website URL.

## Project structure

```text
sai_sravan_portfolio/
├── index.html
├── about.html
├── projects.html
├── skills.html
├── contact.html
├── README.md
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   └── main.js
    └── images/
        └── favicon.svg
```
