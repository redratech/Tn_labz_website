import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import iconAi from "@/assets/icon-ai.jpg";
import { Cpu, MessageSquare, LineChart } from "lucide-react";
import { useProgressiveScroll } from "@/hooks/useScrollAnimation";

const AI = () => {
  const introSection = useProgressiveScroll();
  const servicesSection = useProgressiveScroll();
  
  return (
    <Layout>
      <PageHero eyebrow="AI" title="Artificial Intelligence Solutions" subtitle="Turn raw data into business intelligence with custom ML, chatbots and predictive systems." />

      <section 
        ref={introSection.ref}
        className="container py-12 grid lg:grid-cols-2 gap-10 items-center"
      >
        <div
          style={{ 
            opacity: introSection.isVisible ? Math.min(introSection.progress * 2, 1) : 0,
            transform: `translateY(${introSection.isVisible ? (1 - introSection.progress) * 30 : 30}px)`
          }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Intelligence, <span className="text-gradient-orange">engineered.</span></h2>
          <p 
            className="text-muted-foreground"
            style={{ 
              opacity: introSection.isVisible ? Math.min(Math.max(introSection.progress - 0.1, 0) * 2.5, 1) : 0,
              transform: `translateY(${introSection.isVisible ? (1 - introSection.progress) * 20 : 20}px)`
            }}
          >
            From recommendation engines to forecasting models — we build production AI that drives outcomes.
          </p>
        </div>
        <div 
          className="rounded-3xl overflow-hidden glass-card aspect-square max-w-md mx-auto transition-all duration-700"
          style={{ 
            opacity: introSection.isVisible ? Math.min(Math.max(introSection.progress - 0.2, 0) * 2, 1) : 0,
            transform: `translateY(${introSection.isVisible ? (1 - introSection.progress) * 40 : 40}px)`
          }}
        >
          <img src={iconAi} alt="AI brain" className="w-full h-full object-cover" loading="lazy" />
        </div>
      </section>

      <section 
        ref={servicesSection.ref}
        className="container py-16 grid md:grid-cols-3 gap-6"
      >
        {[
          { icon: Cpu, t: "Machine Learning", d: "Custom models trained on your data." },
          { icon: MessageSquare, t: "Chatbots", d: "Conversational AI for support & sales." },
          { icon: LineChart, t: "Predictive Analytics", d: "Forecast trends & detect anomalies." },
        ].map((s, i) => (
          <div 
            key={s.t} 
            className="p-8 rounded-3xl glass-card glow-border-hover transition-all duration-700"
            style={{ 
              opacity: servicesSection.isVisible ? Math.min(Math.max(servicesSection.progress - 0.2 - (i * 0.08), 0) * 2, 1) : 0,
              transform: `translateY(${servicesSection.isVisible ? (1 - servicesSection.progress) * 40 : 40}px)`,
              transitionDelay: `${i * 120}ms`
            }}
          >
            <div className="w-12 h-12 rounded-2xl bg-gradient-orange flex items-center justify-center mb-4 orange-glow">
              <s.icon className="w-6 h-6 text-background" />
            </div>
            <h4 className="font-display font-semibold text-lg mb-2">{s.t}</h4>
            <p className="text-sm text-muted-foreground">{s.d}</p>
          </div>
        ))}
      </section>
    </Layout>
  );
};

export default AI;
