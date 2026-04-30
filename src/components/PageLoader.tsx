import { useState, useEffect } from "react";

const PageLoader = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    // Get current path on mount
    setCurrentPath(window.location.pathname);
    
    // Handle navigation
    const handleNavigationStart = () => {
      setIsLoading(true);
    };

    const handleNavigationEnd = () => {
      setTimeout(() => {
        setIsLoading(false);
        setCurrentPath(window.location.pathname);
      }, 300);
    };

    // Intercept navigation
    const originalPushState = window.history.pushState;
    const originalReplaceState = window.history.replaceState;

    window.history.pushState = function(...args) {
      handleNavigationStart();
      const result = originalPushState.apply(window.history, args);
      setTimeout(handleNavigationEnd, 100);
      return result;
    };

    window.history.replaceState = function(...args) {
      handleNavigationStart();
      const result = originalReplaceState.apply(window.history, args);
      setTimeout(handleNavigationEnd, 100);
      return result;
    };

    // Listen for popstate (browser back/forward)
    window.addEventListener('popstate', handleNavigationStart);
    setTimeout(handleNavigationEnd, 100);

    return () => {
      window.history.pushState = originalPushState;
      window.history.replaceState = originalReplaceState;
      window.removeEventListener('popstate', handleNavigationStart);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-orange-glowsm">
      <div className="relative">
        {/* Loader animation */}
        <div className="w-16 h-16 rounded-full border-4 border-white/20 border-t-orange-500 animate-spin"></div>
        
        {/* Logo in center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 rounded-lg bg-text-gradient-orangeorange flex items-center justify-center">
            <span className="text-background font-bold text-xs">TN</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageLoader;
