import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles.css";

// Enables scroll-reveal animation only once JS is running, so content is visible if scripts fail.
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.documentElement.classList.add("js-anim");
}

createRoot(document.getElementById("root")!).render(<App />);
