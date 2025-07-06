import { createBrowserRouter } from "react-router";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import SkillsPage from "../pages/SkillsPage";
import ContactPage from "../pages/ContactPage";
import ExperiencePage from "../pages/ExperiencePage";
import ProjectsPage from "../pages/ProjectsPage";
import App from "../App";

const router = createBrowserRouter([
  {
    Component: App,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/skills",
        element: <SkillsPage />,
      },
      {
        path: "/experience",
        element: <ExperiencePage />,
      },
      {
        path: "/projects",
        element: <ProjectsPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
]);
export default router;
