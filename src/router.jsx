// router.jsx
import { createBrowserRouter } from "react-router-dom";
import About from "./pages/AboutPage";
import Contact from "./pages/Contact";
import App from "./App";
import Products from "./pages/SpacesPage";
import { HomePage } from "./pages/Homepage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "products", element: <Products /> },
    ],
  },
]);
