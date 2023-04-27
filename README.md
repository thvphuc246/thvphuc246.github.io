# My Portfolio

This documentation provides an overview of the codebase for the portfolio repo built using React and Chakra UI. This portfolio showcases my skills, career history, achievements & more.

## Folder Structure

The codebase is structured as follows:
```
portfolio/
├── node_modules/
├── public/
├── src/
│ ├── assets/
│ ├── components/
│ ├── App.tsx
│ ├── index.tsx
│ └── theme.tsx
├── .gitignore
├── package.json
├── README.md
└── yarn.lock
```
- `node_modules/` contains all the dependencies installed for the project
- `public/` contains the static assets like images and favicon
- `src/` contains the source code
  - `assets/` contains the images used in the project
  - `components/` contains the reusable UI components used throughout the project
  - `App.tsx` is the main entry point of the project
  - `index.tsx` is the file that renders the React app
  - `theme.tsx` is the file that contains the custom theme settings for Chakra UI
- `.gitignore` lists the files and directories that should be ignored by Git
- `package.json` lists the dependencies and scripts for the project
- `README.md` is the documentation for the project
- `yarn.lock` contains the exact versions of the dependencies installed for the project

## Dependencies

The portfolio repo uses the following dependencies:

- `react` - a JavaScript library for building user interfaces
- `react-dom` - a package for rendering React components in the browser
- `react-router-dom` - a package for handling client-side routing in React applications
- `chakra-ui` - a component library that provides accessible and customizable UI components
- `framer-motion` - a package for creating animations in React applications
