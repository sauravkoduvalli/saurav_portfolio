import AppLayout from "./layouts/AppLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import SkillsPage from "./pages/SkillsPage";
import ExperiencePage from "./pages/ExperiencePage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import { ThemeProvider } from "./contexts/ThemeContext";

function App() {
  const sections = [
    { id: "home", component: <HomePage /> },
    { id: "about", component: <AboutPage /> },
    { id: "skills", component: <SkillsPage /> },
    { id: "experience", component: <ExperiencePage /> },
    { id: "projects", component: <ProjectsPage /> },
    { id: "contact", component: <ContactPage /> },
  ];

  return (
    <ThemeProvider>
      <AppLayout sections={sections} />
    </ThemeProvider>
  );
}

export default App;
