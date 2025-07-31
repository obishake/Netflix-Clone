# Netflix Clone

This project is a Netflix Clone built with React and Vite. It replicates the core features and UI of Netflix, allowing users to browse movies and TV shows, view details, and not stream content. The application uses React Router for navigation and modern React best practices.

## Features

- Browse movies and TV shows
- View detailed information for each title
- Responsive Netflix-inspired UI
- Routing with React Router
- Fast development with Vite
- Login page with Google authentication using Firebase

## Getting Started

1. **Install dependencies:**
   ```
   npm install
   ```
2. **Set up Firebase:**
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Enable Google authentication in the Authentication section.
   - Add your Firebase configuration to `src/firebase.js`.
3. **Run the development server:**
   ```
   npm run dev
   ```
4. **Open your browser:**  
   Visit `http://localhost:5173` to view the app.

## Technologies Used

- React
- Vite
- React Router
- CSS
- Firebase (Google authentication)

## Credits

This project is for educational purposes and is not affiliated with Netflix.


---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.