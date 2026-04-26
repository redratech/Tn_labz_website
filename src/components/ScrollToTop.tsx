import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Check immediately on mount
    toggleVisibility();
    
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  // Temporarily always show for testing
  if (!isVisible && window.pageYOffset <= 100) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-40 w-12 h-12 rounded-full bg-gradient-orange text-background shadow-lg orange-glow flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-xl group"
      aria-label="Scroll to top"
    >
      <ChevronUp className="w-5 h-5 group-hover:translate-y-[-2px] transition-transform duration-300" />
    </button>
  );
};

export default ScrollToTop;
