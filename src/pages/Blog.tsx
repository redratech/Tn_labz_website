import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import wave from "@/assets/wave.jpg";
import team from "@/assets/team.jpg";
import iconAi from "@/assets/icon-ai.jpg";
import iconRpa from "@/assets/icon-rpa.jpg";
import iconCloud from "@/assets/icon-cloud.jpg";
import iconVr from "@/assets/icon-vr.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const posts = [
  { img: iconCloud, title: "Cloud Development for Business: Your Guide to 2026's Essential Digital Foundation", desc: "Step into the future of digital infrastructure with our comprehensive guide to cloud development in 2026.", date: "JAN 28, 2026", tag: "FEATURED" },
  { img: iconRpa, title: "The Future of Efficiency: A Deep Dive into RPA for Websites", desc: "Explore how Robotic Process Automation is transforming web workflows and boosting business productivity.", date: "JAN 26, 2026", tag: "FEATURED" },
  { img: iconVr, title: "The Immersive Revolution: How AR & VR are Transforming the Modern Enterprise", desc: "Discover the power of Augmented and Virtual Reality in reshaping training, collaboration, and customer experience.", date: "JAN 2, 2026", tag: "FEATURED" },
  { img: iconCloud, title: "The Battle of the Clouds: Choosing Between AWS, Microsoft Azure, and Google Cloud", desc: "A deep comparison of the top three cloud providers to help you make the right choice for your business.", date: "JAN 4, 2026", tag: "FEATURED" },
  { img: iconAi, title: "The AI Revolution: How Artificial Intelligence is Redefining Enterprise Efficiency in 2026", desc: "Learn how AI is breaking boundaries and setting new standards for operational excellence in the modern era.", date: "JAN 5, 2026", tag: "FEATURED" },
  { img: iconRpa, title: "Transforming Business: The Power of RPA & AI", desc: "Unlock the synergistic potential of combining RPA with AI to create truly autonomous business processes.", date: "JAN 20, 2026", tag: "FEATURED" },
];

const BlogCard = ({ p, i }: { p: typeof posts[0]; i: number }) => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  
  return (
    <article 
      ref={ref}
      className={`group rounded-3xl glass-card glow-border-hover overflow-hidden transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${(i % 3) * 100}ms` }}
    >
      <div className="relative aspect-video overflow-hidden bg-black">
        <img 
          src={p.img} 
          alt={p.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60" 
          loading="lazy" 
        />
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full glass-card text-[10px] font-bold uppercase tracking-widest text-white border border-white/20">
            <span className="text-primary">★</span> {p.tag}
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full glass-card text-[10px] font-bold uppercase tracking-widest text-white border border-white/20">
            <span className="text-primary">📅</span> {p.date}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
          <h4 className="text-[10px] font-bold uppercase tracking-widest text-white line-clamp-1 border border-white/20 rounded-md p-2 bg-black/40">
            📖 {p.title}
          </h4>
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-display font-semibold text-lg mb-3 group-hover:text-primary transition leading-tight">
          {p.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-3">
          {p.desc}
        </p>
      </div>
    </article>
  );
};

const Blog = () => {
  return (
    <Layout>
      <PageHero eyebrow="Blog" title="Insights from automation frontier" subtitle="Practical writing on RPA, AI, cloud and future of work." />
      <section className="container py-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((p, i) => (
          <BlogCard key={p.title} p={p} i={i} />
        ))}
      </section>
    </Layout>
  );
};

export default Blog;
