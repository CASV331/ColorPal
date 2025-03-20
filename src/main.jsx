import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Landing from "./components/landing/LandingIndex.jsx";
import Footer from "./components/footer/Footer.jsx";
import { ColorProvider } from "./context/colorContext.jsx";
import { ShuffleProvider } from "./context/shuffleContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ColorProvider>
      <Navbar />
      <main>
        <ShuffleProvider>
          <Hero />
          <Landing />
        </ShuffleProvider>
      </main>
      <Footer />
    </ColorProvider>
  </StrictMode>
);
