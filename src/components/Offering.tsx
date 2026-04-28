import { Link } from "react-router-dom";
import { Bot, Layers, Cloud, Brain, ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";
import azure from "@/assets/azure.avif";
import cloud from "@/assets/cloud.png";
import dynamic from "@/assets/dynamic.png";
import microsoft from "@/assets/microsoft.jpeg";
import sap from "@/assets/sap.png";
import sky from "@/assets/sky.avif";

const offerings = [
  {
    icon: Bot,
    title: "Robotic Process Automation (RPA)",
    desc: "Streamline repetitive tasks and enhance operational efficiency by automating routine processes. Our RPA solutions reduce manual errors, free up valuable resources, and allow your team to focus on strategic initiatives.",
    to: "/services/rpa",
  },
  {
    icon: Layers,
    title: "Augmented & Virtual Reality (AR/VR)",
    desc: "Create immersive, interactive experiences that redefine engagement. Whether it's for training, marketing, or product visualization, our AR/VR solutions bring a new dimension to how your business interacts with customers and employees.",
    to: "/services",
  },
  {
    icon: Cloud,
    title: "Cloud Solutions (AWS, Azure, Office 365)",
    desc: "Modernize your IT infrastructure with our robust cloud services. We deploy scalable, secure, and agile cloud environments using leading platforms like AWS, Azure, and Office 365, ensuring seamless collaboration and enhanced business continuity.",
    to: "/services/cloud",
  },
  {
    icon: Brain,
    title: "Artificial Intelligence (AI)",
    desc: "Leverage advanced algorithms and data-driven insights to transform raw data into actionable intelligence. Our AI services help optimize decision-making, predict trends, and drive innovation across your organization.",
    to: "/services/ai",
  },
];

const brandLogos = [
  { src: sap, alt: "SAP" },
  { src: azure, alt: "Microsoft Azure" },
  { src: cloud, alt: "Cloud" },
  { src: dynamic, alt: "Dynamic" },
  { src: microsoft, alt: "Microsoft" },
  { src: sky, alt: "Sky" },
];

const ScrollAnimation = ({ children }: { children: React.ReactNode }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 1; // pixels per frame

    const animate = () => {
      scrollPosition -= scrollSpeed;
      
      // Reset when scrolled halfway (for infinite loop)
      if (scrollPosition <= -scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      
      scrollContainer.style.transform = `translateX(${scrollPosition}px)`;
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="relative overflow-hidden w-full">
      <div 
        ref={scrollRef}
        className="flex gap-8"
        style={{ width: 'fit-content' }}
      >
        {children}
      </div>
    </div>
  );
};

const Offering = () => (
  <section className="relative py-16 overflow-hidden">
    {/* Subtle arch pattern background */}
    <div
      className="absolute inset-0 opacity-[0.04] pointer-events-none"
      style={{
        backgroundImage:
          "radial-gradient(circle at 50% 100%, hsl(var(--foreground)) 0 1px, transparent 1.5px)",
        backgroundSize: "60px 80px",
      }}
    />
    <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-gradient-radial-orange opacity-20 blur-3xl pointer-events-none" />

    <div className="container relative">
      {/* Header row */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
        <div>
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-xs uppercase tracking-[0.25em] text-primary mb-5 font-semibold">
            Services
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-bold leading-[1.05]">
            What we are <span className="text-gradient-orange">offering</span>
          </h2>
        </div>
        <Link
          to="/services"
          className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-orange text-background font-semibold text-sm uppercase tracking-wider orange-glow hover:scale-105 transition-transform self-start md:self-auto"
        >
          View All Services
          <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
        </Link>
      </div>

      {/* Offering cards */}
      <div className="grid md:grid-cols-2 gap-6">
        {offerings.map((o) => (
          <div
            key={o.title}
            className="group relative p-8 md:p-10 rounded-3xl glass-card glow-border-hover overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-56 h-56 bg-gradient-radial-orange opacity-0 group-hover:opacity-60 transition-opacity duration-500 blur-3xl" />
            <div className="relative">
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-6 group-hover:bg-gradient-orange group-hover:border-transparent transition-all duration-500">
                <o.icon className="w-5 h-5 text-primary group-hover:text-background transition" />
              </div>
              <h3 className="text-xl md:text-2xl font-display font-semibold mb-4 leading-snug">
                {o.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-8 max-w-md">
                {o.desc}
              </p>
              <Link
                to={o.to}
                className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-foreground group-hover:text-primary transition"
              >
                Learn More
                <span className="w-7 h-7 rounded-full bg-secondary border border-white/10 group-hover:bg-gradient-orange group-hover:border-transparent flex items-center justify-center transition-all duration-500">
                  <ArrowUpRight className="w-3.5 h-3.5 text-primary group-hover:text-background transition" />
                </span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Brands collaborations */}
      <div className="mt-24 text-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-primary/15 border border-primary/30 text-xs uppercase tracking-[0.25em] text-primary mb-5 font-semibold">
          Brands Collaborations
        </span>
        <h3 className="text-3xl md:text-5xl font-display font-bold mb-12">
          Brands that <span className="text-gradient-orange">trust us</span>
        </h3>

        <ScrollAnimation>
          {[...brandLogos, ...brandLogos].map((brand, i) => (
            <div
              key={`${brand.alt}-${i}`}
              className="flex-shrink-0 px-8 py-6 min-w-[140px] rounded-2xl glass-card glow-border-hover flex items-center justify-center"
            >
              <img 
                src={brand.src} 
                alt={brand.alt}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </ScrollAnimation>
      </div>
    </div>
  </section>
);

export default Offering;
