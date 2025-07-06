{
  /* Old VerticalScrollNav code
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
*/
}

import { Outlet } from "react-router";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "./contexts/ThemeContext";
function App() {
  return (
    <ThemeProvider>
      <div className="relative flex w-full flex-col">
        <header>
          <Navbar />
        </header>
        <main className="flex-auto">
          <Outlet />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
