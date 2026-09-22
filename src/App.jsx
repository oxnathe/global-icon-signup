import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import WhatsAppButton from "./components/layout/WhatsAppButton";
import ScrollToTop from "./components/layout/ScrollToTop";

import Home from "./pages/Home";
import Properties from "./pages/Properties";
import PropertyDetails from "./pages/PropertyDetails";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Register from "./pages/Register";

function App() {
  const handleGlobalPageTop = (event) => {
    const link = event.target.closest("a");

    if (!link) return;

    // Ignore external links, telephone links, email links, etc.
    if (
      link.target === "_blank" ||
      link.href.startsWith("tel:") ||
      link.href.startsWith("mailto:")
    ) {
      return;
    }

    // Only handle links belonging to this website.
    if (link.origin !== window.location.origin) {
      return;
    }

    // Ignore same-page hash links.
    if (
      link.pathname === window.location.pathname &&
      link.search === window.location.search &&
      link.hash
    ) {
      return;
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <BrowserRouter>
      <ScrollToTop />

      <div
        className="min-h-screen bg-white text-neutral-950"
        onClick={handleGlobalPageTop}
      >
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />

            <Route
              path="/properties"
              element={<Properties />}
            />

            <Route
              path="/properties/:propertyId"
              element={<PropertyDetails />}
            />

            <Route path="/about" element={<About />} />

            <Route path="/contact" element={<Contact />} />

            <Route
              path="/register"
              element={<Register />}
            />

            <Route
              path="*"
              element={<Navigate to="/" replace />}
            />
          </Routes>
        </main>

        <Footer />

        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}

export default App;