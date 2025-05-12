import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout.tsx";
import { ThemeProvider } from "./contexts/ThemeContext";
import ProjectsPage from "./pages/ProjectsPage.tsx";
import WorkPage from "./pages/WorkPage.tsx";
import ContactPage from "./pages/ContactPage.tsx";
import { HelmetProvider } from "react-helmet-async";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<HomeLayout />}>
        <Route element={<App />} path="/" />
        <Route element={<ProjectsPage />} path="/projects" />
        <Route element={<WorkPage />} path="/work" />
        <Route element={<ContactPage />} path="/contact" />
      </Route>
    </>,
  ),
);

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </HelmetProvider>,
);
