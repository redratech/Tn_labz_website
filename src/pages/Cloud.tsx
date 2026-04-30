import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import iconCloud from "@/assets/icon-cloud.jpg";
import { useProgressiveScroll } from "@/hooks/useScrollAnimation";

const Cloud = () => {
  const introSection = useProgressiveScroll();
  
  return (
    <Layout>
      <PageHero eyebrow="Cloud" title="Cloud Infrastructure & Migration" subtitle="Scale securely with modern, multi-cloud architectures designed for performance." />

      <section 
        ref={introSection.ref}
        className="container py-12 grid lg:grid-cols-2 gap-10 items-center"
      >
        <div 
          className="rounded-3xl overflow-hidden glass-card aspect-square max-w-md mx-auto transition-all duration-700"
          style={{ 
            opacity: introSection.isVisible ? Math.min(introSection.progress * 2, 1) : 0,
            transform: `translateY(${introSection.isVisible ? (1 - introSection.progress) * 30 : 30}px)`
          }}
        >
          <img src={iconCloud} alt="Cloud" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { t: "AWS", d: "Production-grade AWS architectures." },
            { t: "Azure", d: "Enterprise Azure migrations." },
            { t: "SaaS", d: "Scalable SaaS platforms, end-to-end." },
          ].map((c, i) => (
            <div 
              key={c.t} 
              className="p-6 rounded-2xl glass-card glow-border-hover text-center transition-all duration-700"
              style={{ 
                opacity: introSection.isVisible ? Math.min(Math.max(introSection.progress - 0.2 - (i * 0.08), 0) * 2, 1) : 0,
                transform: `translateY(${introSection.isVisible ? (1 - introSection.progress) * 40 : 40}px)`,
                transitionDelay: `${i * 120}ms`
              }}
            >
              <div className="text-2xl font-display font-bold text-gradient-blue mb-2">{c.t}</div>
              <p className="text-xs text-muted-foreground">{c.d}</p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Cloud;
