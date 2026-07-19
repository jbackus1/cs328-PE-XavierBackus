# PE01 - Resume

## Input
The application does not take dynamic input from the user at runtime. Instead, the "input" is the static resume content — name, contact details, education, skills, work experience, and project information — hardcoded directly into the `Resume.js` component as JSX. This content, along with styling rules defined in `Resume.css`, serves as the data the application renders.

## Process
When the app starts, `index.js` renders the root `App` component into the DOM. `App` imports and renders the `Resume` component, which returns a JSX structure organizing the resume content into semantic sections (header, education, skills, experience, projects). React converts this JSX into HTML elements, while `Resume.css` is applied to control layout, typography, colors, and spacing — including the required lime-green background and black text.

## Output
The browser displays a single-page resume styled to match the assignment's sample output, with the candidate's information organized into clearly labeled sections and clickable links to project source code on GitHub.