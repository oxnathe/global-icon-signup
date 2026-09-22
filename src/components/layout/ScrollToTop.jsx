import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
    };

    // Run after React has rendered the new route.
    const timer = setTimeout(scrollToTop, 0);

    return () => clearTimeout(timer);
  }, [pathname, search]);

  return null;
}

export default ScrollToTop;