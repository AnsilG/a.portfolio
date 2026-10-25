# Ansil G — Portfolio Website

A responsive single-page portfolio built with React, Vite, and separate CSS. Includes a dark/light theme switch, responsive full-screen mobile navigation, service interactions, project filters, project case-study modals, and a validated contact form that opens the visitor's email application.

## Run locally

1. Install Node.js (LTS) if it is not already installed.
2. Extract this project folder.
3. Open a terminal in the `ansil-portfolio` folder.
4. Run:

   ```bash
   npm install
   npm run dev
   ```

5. Open the local URL printed by Vite (usually `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

The production files are generated in `dist/`.

## CV download

The supplied CV is included at `public/Ansil-G-CV.pdf` and linked from the hero section as a download CTA. To change the PDF later, replace that file with a new CV using the same filename.

## Contact form note

The form validates the visitor's entries and opens their configured email app with the enquiry prefilled. It does not store messages or send them from a server. For submissions without an email app, connect a service such as Formspree or build a backend endpoint.

## Before publishing

- Confirm all experience dates and descriptions are accurate for public display.
- Add project screenshots in place of the CSS-built preview illustrations if you have approved screenshots.
- If deploying under a different base path, configure Vite's `base` option as required.
