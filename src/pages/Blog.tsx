import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import wave from "@/assets/wave.jpg";
import team from "@/assets/team.jpg";
import iconAi from "@/assets/icon-ai.jpg";
import iconRpa from "@/assets/icon-rpa.jpg";
import iconCloud from "@/assets/icon-cloud.jpg";
import iconVr from "@/assets/icon-vr.jpg";
import { useProgressiveScroll } from "@/hooks/useScrollAnimation";

const posts = [
  { img: wave, title: "The Rise of Hyperautomation in 2025", desc: "How RPA + AI are reshaping the modern enterprise stack.", tag: "Trends" },
  { img: iconAi, title: "Building Production-Grade LLM Apps", desc: "A pragmatic blueprint for shipping AI features that work.", tag: "AI" },
  { img: iconRpa, title: "5 Workflows You Should Automate Today", desc: "Quick wins your finance & HR teams will thank you for.", tag: "RPA" },
  { img: iconCloud, title: "AWS vs Azure for SaaS in 2025", desc: "A real-world comparison from migration trenches.", tag: "Cloud" },
  { img: team, title: "Inside TN Labz: How We Build", desc: "Our delivery playbook for enterprise automation.", tag: "Culture" },
  { img: iconVr, title: "AR/VR for Workforce Training", desc: "Why immersive learning sticks — and scales.", tag: "AR/VR" },
];

const Blog = () => {
  const postsSection = useProgressiveScroll();
  
  return (
    <Layout>
      <PageHero eyebrow="Blog" title="Insights from automation frontier" subtitle="Practical writing on RPA, AI, cloud and future of work." />
      <section 
        ref={postsSection.ref}
        className="container py-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {posts.map((p, i) => (
          <article 
            key={p.title} 
            className="group rounded-3xl glass-card glow-border-hover overflow-hidden transition-all duration-700"
            style={{ 
              opacity: postsSection.isVisible ? Math.min(Math.max(postsSection.progress - 0.1 - (i * 0.05), 0) * 2, 1) : 0,
              transform: `translateY(${postsSection.isVisible ? (1 - postsSection.progress) * 40 : 40}px)`,
              transitionDelay: `${i * 100}ms`
            }}
          >
            <div className="aspect-video overflow-hidden bg-black">
              <img 
                src={p.img} 
                alt={p.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                loading="lazy" 
              />
            </div>
            <div className="p-6">
              <span className="text-xs uppercase tracking-widest text-primary">{p.tag}</span>
              <h3 className="font-display font-semibold text-lg mt-2 mb-2 group-hover:text-primary transition">{p.title}</h3>
              <p className="text-sm text-muted-foreground">{p.desc}</p>
            </div>
          </article>
        ))}
      </section>
    </Layout>
  );
};

export default Blog;
