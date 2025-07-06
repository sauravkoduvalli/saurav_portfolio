import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.tsx"; // Uncomment this line for vertical scroll navigation
import { RouterProvider } from "react-router";
import router from "./routes/index.tsx";

{/* Uncomment this block for vertical scroll navigation
  createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
*/}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
