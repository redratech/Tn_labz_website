import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Rocket, Network, ScanFace, Atom, Star, Quote, ArrowUpRight } from "lucide-react";
import team from "@/assets/team.jpg";

/* Animated counter */
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
    <div ref={ref} className="relative group">
      {/* circular glow blob */}
      <div className="absolute inset-0 rounded-full bg-gradient-radial-orange opacity-50 blur-2xl group-hover:opacity-80 transition-opacity duration-500" />
      <div className="relative flex flex-col items-center justify-center aspect-square rounded-full border border-white/10 backdrop-blur-md bg-background/30 p-6 text-center group-hover:border-primary/40 transition">
        <div className="text-5xl md:text-6xl font-display font-bold text-foreground">
          {n}{suffix}
        </div>
        <div className="text-xs md:text-sm text-foreground/80 mt-2 tracking-wide">{label}</div>
      </div>
    </div>
  );
};

const features = [
  {
    icon: Rocket,
    title: "Proven Track Record",
    desc: "We have built a reputation as a trusted and reliable partner in achieving business success.",
  },
  {
    icon: Network,
    title: "Tailored Solutions",
    desc: "We offer personalized solutions tailored to your specific goals, audience, and industry.",
  },
  {
    icon: ScanFace,
    title: "Client-Centric Focus",
    desc: "Your success is our priority. We prioritize understanding your business goals.",
  },
];

const badges = [
  "Continuous Innovation",
  "Dedicated Support",
  "Positive Client Experiences",
  "Commitment to Excellence",
];

const testimonials = [
  {
    text: "Working with Technolabz has been a revelation for our company. Their dedication to understanding our industry and target audience has led to remarkable growth in our online presence. With their expertise in SEO and digital marketing, we've seen a significant increase in website traffic and brand visibility. Technolabz truly delivers results, and I highly recommend their services to any business looking to thrive in the digital age.",
    name: "David Reynolds",
    role: "Tech Innovations Ltd.",
    initial: "D",
  },
  {
    text: "As a law firm, establishing a strong online presence is essential, and Technolabz has been instrumental in helping us achieve that goal. Their team's expertise in SEO and online marketing has significantly increased our website traffic and client inquiries. From keyword research to content optimization, their strategic approach has delivered tangible results. Technolabz is a trusted partner, and I highly recommend their services to any business looking to grow online.",
    name: "Christopher Anderson",
    role: "Patel & Co. Law Firm",
    initial: "C",
  },
  {
    text: "I can't speak highly enough of Technolabz. Their strategic approach to SEO and digital marketing has been instrumental in our company's success. They took the time to understand our unique needs and crafted a tailored strategy that has consistently driven results. Thanks to their efforts, we've seen a substantial increase in leads and conversions. Technolabz is the real deal, and I wouldn't hesitate to recommend them to anyone in need of digital marketing expertise.",
    name: "David Rodriguez",
    role: "Thompson & Co. Real Estate",
    initial: "D",
  },
  {
    text: "Technolabz has been an invaluable asset to our tech company. Their deep understanding of SEO and digital marketing has helped us reach our target audience and drive conversions. Their team's proactive approach and attention to detail have made a significant impact on our online visibility and brand awareness. Thanks to Technolabz, our company has experienced steady growth, and I would highly recommend their services to anyone looking to expand their online presence.",
    name: "S. Thompson",
    role: "Turner's Tech Solutions",
    initial: "S",
  },
  {
    text: "Technolabz has been an invaluable partner for our auto repair business. Their expertise in SEO and online marketing has helped us stay ahead of the competition and attract more customers than ever before. From optimizing our website to managing our social media presence, their team's attention to detail and commitment to excellence shine through in everything they do. Thanks to Technolabz, our business has seen significant growth, and I can't recommend them enough to others in need of digital marketing services.",
    name: "Ryan Martinez",
    role: "Cooper's Car Repair Shop",
    initial: "R",
  },
  {
    text: "Technolabz has been instrumental in helping our café thrive in a competitive market. Their strategic approach to SEO and digital marketing has resulted in a noticeable increase in our online visibility and customer engagement. From optimizing our website to launching targeted advertising campaigns, their team's expertise has exceeded our expectations. Technolabz truly cares about the success of their clients, and I highly recommend their services to any business looking to boost their online presence.",
    name: "S. Thompson",
    role: "Carter's Café",
    initial: "S",
  },
];

const WhyUs = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    let animationId: number;
    let position = 0;

    const scroll = () => {
      position -= 0.5; // Scroll speed - continuous without reset
      
      setScrollPosition(position);
      animationId = requestAnimationFrame(scroll);
    };

    scroll();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  // Duplicate testimonials for infinite scroll
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
  <section className="relative overflow-hidden">
    {/* === STATS BLOCK with background image === */}
    <div className="relative py-24 md:py-32">
      <img
        src={team}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover opacity-40"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
      <div className="absolute inset-0 bg-gradient-radial-orange opacity-20 blur-3xl" />

      <div className="container relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full glass text-xs uppercase tracking-[0.25em] text-primary mb-5 font-semibold">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-6xl font-display font-bold leading-[1.05]">
            Numbers that <span className="text-gradient-orange">speak</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 max-w-5xl mx-auto">
          <Counter value={6} label="Years of Experience" />
          <Counter value={50} label="Successful Projects" />
          <Counter value={40} label="Happy Clients" />
          <Counter value={30} suffix="" label="5 Star Reviews" />
        </div>
      </div>
    </div>

    {/* === FEATURE CARDS === */}
    <div className="relative py-20">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {features.map((f) => (
            <div
              key={f.title}
              className="group relative p-10 rounded-3xl glass-card glow-border-hover text-center overflow-hidden"
            >
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-48 h-48 bg-gradient-radial-orange opacity-0 group-hover:opacity-50 transition-opacity duration-500 blur-3xl" />
              <div className="relative">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center mb-6 group-hover:bg-gradient-orange group-hover:border-transparent transition-all duration-500">
                  <f.icon className="w-7 h-7 text-primary group-hover:text-background transition" />
                </div>
                <h3 className="text-2xl font-display font-semibold mb-4">{f.title}</h3>
                <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Badge pills */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {badges.map((b) => (
            <div
              key={b}
              className="group flex items-center gap-2.5 px-6 py-3.5 rounded-full glass-card glow-border-hover"
            >
              <Atom className="w-4 h-4 text-primary group-hover:rotate-180 transition-transform duration-500" />
              <span className="text-sm font-medium">{b}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* === TESTIMONIALS with watermark === */}
    <div className="relative py-24 overflow-hidden min-h-[600px]">
      {/* huge watermark - contained within testimonial section only */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-full flex items-start justify-center pointer-events-none select-none pt-8 md:pt-12 -z-10 overflow-hidden"
      >
        <span className="font-display font-black text-foreground/[0.12] text-[16vw] md:text-[14vw] leading-none tracking-tighter whitespace-nowrap">
          TESTIMONIAL
        </span>
      </div>

      {/* Testimonials container - infinite scroll */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 h-96 overflow-hidden">
        <div 
          ref={scrollRef}
          className="space-y-6 transition-transform duration-100"
          style={{ transform: `translateY(${scrollPosition}px)` }}
        >
          {duplicatedTestimonials.map((t, index) => (
            <div
              key={`${t.name}-${index}`}
              className="relative p-4 sm:p-6 md:p-8 lg:p-10 border border-white/30 rounded-2xl sm:rounded-3xl glass-card bg-white/5"
            >
              <div className="flex gap-1 mb-3 sm:mb-5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-primary text-primary" />
                ))}
              </div>
              <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-primary/80 mb-3 sm:mb-4" />
              <p className="text-foreground leading-relaxed mb-4 sm:mb-8 text-sm sm:text-base md:text-lg">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-white/20">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-orange flex items-center justify-center text-background font-bold orange-glow text-sm sm:text-base">
                  {t.initial}
                </div>
                <div>
                  <div className="font-display font-bold text-sm sm:text-base text-foreground">{t.name}</div>
                  <div className="text-xs uppercase tracking-widest text-foreground/80 line-clamp-2">
                    {t.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-12">
        <Link
          to="/reviews"
          className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-orange text-background font-semibold text-sm uppercase tracking-wider orange-glow hover:scale-105 transition-transform"
        >
          View All Reviews
          <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform" />
        </Link>
      </div>
    </div>
  </section>
  );
};

export default WhyUs;
