import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import iconRpa from "@/assets/icon-rpa.jpg";
import { Workflow, FileSpreadsheet, Receipt, Users, TrendingDown, CheckCircle2, Clock } from "lucide-react";
import { useProgressiveScroll } from "@/hooks/useScrollAnimation";

const RPA = () => {
  const introSection = useProgressiveScroll();
  const benefitsSection = useProgressiveScroll();
  const processSection = useProgressiveScroll();
  
  return (
    <Layout>
      <PageHero eyebrow="RPA" title="Robotic Process Automation Solutions" subtitle="Software bots that automate repetitive tasks — accurate, tireless, and built around your workflow." />

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
          <img src={iconRpa} alt="RPA bot" className="w-full h-full object-cover" loading="lazy" />
        </div>
        <div>
          <h2 
            className="text-3xl md:text-4xl font-display font-bold mb-4"
            style={{ 
              opacity: introSection.isVisible ? Math.min(Math.max(introSection.progress - 0.1, 0) * 2.5, 1) : 0,
              transform: `translateY(${introSection.isVisible ? (1 - introSection.progress) * 25 : 25}px)`
            }}
          >
            What is <span className="text-gradient-orange">RPA?</span>
          </h2>
          <p 
            className="text-muted-foreground mb-6"
            style={{ 
              opacity: introSection.isVisible ? Math.min(Math.max(introSection.progress - 0.2, 0) * 2, 1) : 0,
              transform: `translateY(${introSection.isVisible ? (1 - introSection.progress) * 20 : 20}px)`
            }}
          >
            Robotic Process Automation uses software bots to handle repetitive, rules-based tasks — freeing humans for higher-value work.
          </p>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Workflow, t: "Workflow Automation" },
              { icon: FileSpreadsheet, t: "Data Entry" },
              { icon: Receipt, t: "Invoice Processing" },
              { icon: Users, t: "HR Automation" },
            ].map((f, i) => (
              <div 
                key={f.t} 
                className="p-4 rounded-2xl glass glow-border-hover transition-all duration-700"
                style={{ 
                  opacity: introSection.isVisible ? Math.min(Math.max(introSection.progress - 0.3 - (i * 0.05), 0) * 2, 1) : 0,
                  transform: `translateY(${introSection.isVisible ? (1 - introSection.progress) * 30 : 30}px)`,
                  transitionDelay: `${i * 80}ms`
                }}
              >
                <f.icon className="w-5 h-5 text-primary mb-2" />
                <div className="text-sm font-medium">{f.t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section 
        ref={benefitsSection.ref}
        className="container py-16"
      >
        <div 
          className="text-center mb-10"
          style={{ 
            opacity: benefitsSection.isVisible ? Math.min(benefitsSection.progress * 2, 1) : 0,
            transform: `translateY(${benefitsSection.isVisible ? (1 - benefitsSection.progress) * 30 : 30}px)`
          }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold">Benefits</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: TrendingDown, t: "Reduce Costs", d: "Cut operational overhead up to 70%." },
            { icon: CheckCircle2, t: "Improve Accuracy", d: "Eliminate manual entry errors." },
            { icon: Clock, t: "Save Time", d: "Bots that work around the clock." },
          ].map((b, i) => (
            <div 
              key={b.t} 
              className="p-8 rounded-3xl glass-card glow-border-hover transition-all duration-700"
              style={{ 
                opacity: benefitsSection.isVisible ? Math.min(Math.max(benefitsSection.progress - 0.2 - (i * 0.08), 0) * 2, 1) : 0,
                transform: `translateY(${benefitsSection.isVisible ? (1 - benefitsSection.progress) * 40 : 40}px)`,
                transitionDelay: `${i * 120}ms`
              }}
            >
              <b.icon className="w-8 h-8 text-primary mb-4" />
              <h4 className="font-semibold text-lg mb-2">{b.t}</h4>
              <p className="text-sm text-muted-foreground">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

    <section 
      ref={processSection.ref}
      className="container py-16"
    >
      <div 
        className="text-center mb-12"
        style={{ 
          opacity: processSection.isVisible ? Math.min(processSection.progress * 2, 1) : 0,
          transform: `translateY(${processSection.isVisible ? (1 - processSection.progress) * 30 : 30}px)`
        }}
      >
        <h2 className="text-3xl md:text-4xl font-display font-bold">Our <span className="text-gradient-orange">Process</span></h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {["Analysis", "Design", "Development", "Deployment"].map((step, i) => (
          <div 
            key={step} 
            className="relative p-6 rounded-2xl glass-card glow-border-hover transition-all duration-700"
            style={{ 
              opacity: processSection.isVisible ? Math.min(Math.max(processSection.progress - 0.3 - (i * 0.05), 0) * 2, 1) : 0,
              transform: `translateY(${processSection.isVisible ? (1 - processSection.progress) * 40 : 40}px)`,
              transitionDelay: `${i * 100}ms`
            }}
          >
            <div className="text-4xl font-display font-bold text-gradient-orange mb-2">0{i + 1}</div>
            <div className="font-semibold">{step}</div>
          </div>
        ))}
      </div>
    </section>
  </Layout>
);
};

export default RPA;
