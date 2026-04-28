import { Link } from "react-router-dom";
import { Play, ArrowRight, Bot, Brain, Cloud, Sparkles, Shield, Zap, Headphones, Layers, Rocket, Star, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Layout from "@/components/Layout";
import Offering from "@/components/Offering";
import WhyUs from "@/components/WhyUs";
import InnovateSection from "@/components/InnovateSection";
import BlogsSection from "@/components/BlogsSection";
import FaqSection from "@/components/FaqSection";
import LetsTalk from "@/components/LetsTalk";
import { useProgressiveScroll } from "@/hooks/useScrollAnimation";
import heroPerson from "@/assets/hero-person.jpg";
import heroAi from "@/assets/hero-ai.jpg";
import wave from "@/assets/wave.jpg";

/* ------------------ HERO ------------------ */
const Hero = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
  <section className="relative overflow-hidden pt-8 pb-20 md:pb-32">
    {/* glow */}
    <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-gradient-radial-orange opacity-50 blur-3xl pointer-events-none" />
    <div className="container relative">
      <div className="grid lg:grid-cols-12 gap-8 items-center">
        {/* Left image */}
        <div className="hidden lg:block lg:col-span-3 fade-up">
          <div className="relative rounded-[2rem] overflow-hidden glass-card aspect-[3/4]">
            <img src={heroPerson} alt="Business automation expert" className="w-full h-full object-cover" width={896} height={1152} />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          </div>
        </div>

        {/* Center text */}
        <div className="lg:col-span-6 text-center fade-up">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs uppercase tracking-widest text-primary mb-6">
            <Sparkles className="w-3.5 h-3.5" /> RPA · AI
          </span>
          <h1 className="font-display font-bold leading-[0.95] text-5xl md:text-7xl lg:text-[5.5rem] mb-6 glow-text">
            Automation
            <br />
            Services for
            <br />
            <span className="text-gradient-orange">Businesses</span>
          </h1>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto mb-10">
            Smart solutions for smarter businesses. Automate workflows, reduce costs,
            and scale faster with AI &amp; RPA.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-orange text-background font-semibold orange-glow hover:scale-105 transition-transform"
            >
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button 
              onClick={() => setShowVideo(true)}
              className="group inline-flex items-center gap-3 text-foreground hover:text-primary transition"
            >
              <span className="relative w-12 h-12 rounded-full glass flex items-center justify-center ring-pulse">
                <Play className="w-4 h-4 fill-primary text-primary translate-x-0.5" />
              </span>
              <span className="font-medium text-sm">Play Video</span>
            </button>
          </div>
        </div>

        {/* Right image */}
        <div className="hidden lg:block lg:col-span-3 fade-up">
          <div className="relative rounded-[2rem] overflow-hidden glass-card aspect-[3/4]">
            <img src={heroAi} alt="AI robot" className="w-full h-full object-cover" width={896} height={1152} />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
          </div>
        </div>
      </div>

      {/* Mobile images */}
      <div className="grid grid-cols-2 gap-4 mt-12 lg:hidden">
        <div className="rounded-3xl overflow-hidden glass-card aspect-[3/4]">
          <img src={heroPerson} alt="" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="rounded-3xl overflow-hidden glass-card aspect-[3/4]">
          <img src={heroAi} alt="" className="w-full h-full object-cover" loading="lazy" />
        </div>
      </div>
    </div>

    {/* Video Modal */}
    {showVideo && (
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={() => setShowVideo(false)}
      >
        <div 
          className="relative w-full max-w-4xl aspect-video"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={() => setShowVideo(false)}
            className="absolute -top-12 right-0 text-white hover:text-primary transition"
          >
            <X className="w-8 h-8" />
          </button>
          <iframe
            src="https://www.youtube.com/embed/WwlDeInYwf4?autoplay=1"
            className="w-full h-full rounded-lg"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    )}
  </section>
  );
};



/* ------------------ WHY CHOOSE US ------------------ */
const whyPoints = [
  { icon: Shield, title: "Proven Experience", desc: "Years of delivery across industries." },
  { icon: Sparkles, title: "Custom Solutions", desc: "Built specifically around your workflow." },
  { icon: Headphones, title: "24/7 Support", desc: "We're here whenever you need us." },
  { icon: Layers, title: "Scalable Systems", desc: "Architectures that grow with your business." },
  { icon: Rocket, title: "Innovation First", desc: "Cutting-edge AI &amp; automation tech." },
];

const WhyChooseUs = () => {
  const { ref, progress, isVisible } = useProgressiveScroll();
  
  return (
    <section ref={ref} className="relative py-16 overflow-hidden">
      <img src={wave} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />

      <div className="container relative grid lg:grid-cols-2 gap-16 items-center">
        <div
          style={{ 
            opacity: isVisible ? Math.min(progress * 2, 1) : 0,
            transform: `translateY(${isVisible ? (1 - progress) * 30 : 30}px)`
          }}
        >
          <span 
            className="inline-block px-4 py-1.5 rounded-full glass text-xs uppercase tracking-widest text-primary mb-4"
            style={{ 
              opacity: Math.min(progress * 3, 1),
              transform: `translateY(${Math.max((1 - progress) * 20, 0)}px)`
            }}
          >
            Why Choose Us
          </span>
          <h2 
            className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight"
            style={{ 
              opacity: Math.min(Math.max(progress - 0.1, 0) * 3, 1),
              transform: `translateY(${Math.max((1 - progress) * 25, 0)}px)`
            }}
          >
            The partner behind your <span className="text-gradient-orange">automation edge</span>
          </h2>
          <p 
            className="text-muted-foreground mb-8"
            style={{ 
              opacity: Math.min(Math.max(progress - 0.2, 0) * 2.5, 1),
              transform: `translateY(${Math.max((1 - progress) * 15, 0)}px)`
            }}
          >
            We build, deploy and maintain enterprise-grade automation that pays for itself within months.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {whyPoints.map((p, i) => (
            <div 
              key={p.title} 
              className="p-6 rounded-2xl glass glow-border-hover transition-all duration-700"
              style={{ 
                opacity: Math.min(Math.max(progress - 0.3 - (i * 0.08), 0) * 2, 1),
                transform: `translateY(${Math.max((1 - progress) * 40, 0)}px)`,
                transitionDelay: `${i * 120}ms`
              }}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-orange flex items-center justify-center mb-4 orange-glow">
                <p.icon className="w-5 h-5 text-background" />
              </div>
              <h4 className="font-semibold mb-1">{p.title}</h4>
              <p className="text-xs text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ------------------ STATS ------------------ */
const Counter = ({ value, suffix = "+", label }: { value: number; suffix?: string; label: string }) => {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        const start = performance.now();
        const dur = 1600;
        const step = (t: number) => {
          const p = Math.min((t - start) / dur, 1);
          setN(Math.floor(p * value));
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        obs.disconnect();
      }
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);
  return (
    <div ref={ref} className="p-8 rounded-3xl glass-card text-center hover:orange-glow transition-all duration-500">
      <div className="text-5xl md:text-6xl font-display font-bold text-gradient-orange mb-2">{n}{suffix}</div>
      <div className="text-sm text-muted-foreground uppercase tracking-widest">{label}</div>
    </div>
  );
};

const Stats = () => {
  const { ref, progress, isVisible } = useProgressiveScroll();
  
  return (
    <section ref={ref} className="relative py-16">
      <div 
        className="container grid grid-cols-2 lg:grid-cols-4 gap-6"
        style={{ 
          opacity: isVisible ? Math.min(progress * 2, 1) : 0,
          transform: `translateY(${isVisible ? (1 - progress) * 30 : 30}px)`
        }}
      >
        <Counter value={6} label="Years" />
        <Counter value={50} label="Projects" />
        <Counter value={40} label="Clients" />
        <Counter value={30} label="Reviews" />
      </div>
    </section>
  );
};

/* ------------------ TESTIMONIALS ------------------ */
const reviews = [
  { name: "Sarah Chen", role: "COO, Novatek", text: "TN Labz transformed our back-office. We cut processing time by 70% in the first quarter.", initial: "S" },
  { name: "Marcus Hall", role: "CEO, Quantix", text: "Their AI insights paid for the engagement within weeks. Genuinely world-class team.", initial: "M" },
  { name: "Priya Raman", role: "CTO, Helios", text: "From RPA bots to cloud migration — flawless execution and brilliant communication.", initial: "P" },
];

const Testimonials = () => {
  const { ref, progress, isVisible } = useProgressiveScroll();
  
  return (
    <section ref={ref} className="relative py-16">
      <div className="container">
        <div 
          className="text-center max-w-2xl mx-auto mb-16"
          style={{ 
            opacity: isVisible ? Math.min(progress * 2, 1) : 0,
            transform: `translateY(${isVisible ? (1 - progress) * 30 : 30}px)`
          }}
        >
          <span 
            className="inline-block px-4 py-1.5 rounded-full glass text-xs uppercase tracking-widest text-primary mb-4"
            style={{ 
              opacity: Math.min(progress * 3, 1),
              transform: `translateY(${Math.max((1 - progress) * 20, 0)}px)`
            }}
          >
            Reviews
          </span>
          <h2 
            className="text-4xl md:text-5xl font-display font-bold"
            style={{ 
              opacity: Math.min(Math.max(progress - 0.1, 0) * 3, 1),
              transform: `translateY(${Math.max((1 - progress) * 25, 0)}px)`
            }}
          >
            Loved by leaders
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <div 
              key={r.name} 
              className="p-8 rounded-3xl glass-card glow-border-hover transition-all duration-700"
              style={{ 
                opacity: Math.min(Math.max(progress - 0.3 - (i * 0.08), 0) * 2, 1),
                transform: `translateY(${Math.max((1 - progress) * 40, 0)}px)`,
                transitionDelay: `${i * 150}ms`
              }}
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/90 leading-relaxed mb-6">"{r.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-orange flex items-center justify-center text-background font-bold orange-glow">
                  {r.initial}
                </div>
                <div>
                  <div className="font-semibold text-sm">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


/* ------------------ PAGE ------------------ */
const Index = () => (
  <Layout>
    <Hero />
    <Offering />
    <WhyUs />
    <InnovateSection />
    <BlogsSection />
    <FaqSection />
    <LetsTalk />
  </Layout>
);

export default Index;
