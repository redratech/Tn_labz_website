import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import tnlabz from "@/assets/tnlabz new.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/reviews", label: "Reviews" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hideLogo, setHideLogo] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      setHideLogo(window.scrollY > 400);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between gap-4">
        {/* Logo - Mobile */}
        <div className={cn("flex items-center", "lg:hidden")}>
          <Link to="/" className={cn("flex items-center gap-2 group transition-all duration-500", hideLogo ? "w-0 opacity-0 overflow-hidden" : "opacity-100")}>
            <div className="relative flex-shrink-0">
              <img 
                src={tnlabz} 
                alt="TN Labz" 
                className="w-10 h-10 rounded-xl object-cover transition-transform group-hover:scale-110"
              />
            </div>
            <span className="font-display font-bold text-xl tracking-tight whitespace-nowrap">
              TN <span className="text-gradient-orange">Labz</span>
            </span>
          </Link>
        </div>
        <Link to="/" className={cn("hidden lg:flex items-center gap-2 group")}>
          <div className="relative">
            <img 
              src={tnlabz} 
              alt="TN Labz" 
              className="w-10 h-10 rounded-xl object-cover transition-transform group-hover:scale-110"
            />
          </div>
          <span className="font-display font-bold text-xl tracking-tight">
            TN <span className="text-gradient-orange">Labz</span>
          </span>
        </Link>

        {/* Desktop pill nav */}
        <nav className="hidden lg:flex items-center gap-1 px-2 py-2 rounded-full glass">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                cn(
                  "px-5 py-2 rounded-full text-sm font-medium transition-all duration-300",
                  "hover:text-primary hover:scale-105",
                  isActive
                    ? "bg-secondary text-primary shadow-[0_0_20px_hsl(var(--primary)/0.4)]"
                    : "text-foreground/90"
                )
              }
            >
              {l.label.toUpperCase()}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-orange text-background font-semibold text-sm transition-all hover:scale-105 orange-glow"
        >
          Get Started
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="lg:hidden w-11 h-11 rounded-full glass flex items-center justify-center"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile sheet */}
      {open && (
        <div className="lg:hidden absolute top-full right-4 left-4 mt-3 p-4 rounded-3xl glass animate-scale-in">
          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "px-4 py-3 rounded-2xl text-sm font-medium transition",
                    isActive ? "bg-secondary text-primary" : "text-foreground/90 hover:bg-secondary/60"
                  )
                }
              >
                {l.label.toUpperCase()}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 text-center px-4 py-3 rounded-2xl bg-gradient-orange text-background font-semibold"
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
