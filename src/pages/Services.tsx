import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import LetsTalk from "@/components/LetsTalk";
import { ArrowRight, Bot, Brain, Cloud, Layers, Rocket, Share2, User, MessageCircle, HeartHandshake, Atom } from "lucide-react";
import { useProgressiveScroll } from "@/hooks/useScrollAnimation";

const services = [
  { 
    icon: Bot, 
    title: "Robotic Process Automation", 
    desc: "Automate repetitive business tasks with intelligent bots that work 24/7, increasing efficiency and reducing errors.",
    to: "/services/rpa" 
  },
  { 
    icon: Brain, 
    title: "Artificial Intelligence", 
    desc: "Leverage AI-powered solutions including chatbots, machine learning, and predictive analytics to transform your data into actionable insights.",
    to: "/services/ai" 
  },
  { 
    icon: Cloud, 
    title: "Cloud Services", 
    desc: "Scale your business securely with modern cloud infrastructure on AWS, Azure, and Office 365 platforms.",
    to: "/services/cloud" 
  },
  { 
    icon: Layers, 
    title: "AR/VR Solutions", 
    desc: "Create immersive digital experiences for training, product visualization, and customer engagement using augmented and virtual reality.",
    to: "/services" 
  },
];

const features = [
  {
    icon: Rocket,
    title: "Proven Track Record",
    desc: "We have built a reputation as a trusted and reliable partner in achieving business success.",
  },
  {
    icon: Share2,
    title: "Tailored Solutions",
    desc: "We offer personalized solutions tailored to your specific goals, audience, and industry.",
  },
  {
    icon: User,
    title: "Client-Centric Focus",
    desc: "Your success is our priority. We prioritize understanding your business goals.",
  },
  {
    icon: MessageCircle,
    title: "Transparent Communication",
    desc: "We believe in open and honest communication every step of the way.",
  },
  {
    icon: HeartHandshake,
    title: "Dedicated Support",
    desc: "Your success is our priority, and we're here to support you every step of the way.",
  },
  {
    icon: Atom,
    title: "Expertise Across Industries",
    desc: "Our team has extensive experience working across various industries.",
  },
];

const Services = () => {
  const servicesSection = useProgressiveScroll();

  return (
    <Layout>
      <PageHero 
        eyebrow="Services" 
        title="Explore Our Automation Services" 
        subtitle="A full-stack automation partner — from bots to brains to cloud." 
      />

      {/* Services */}
      <section 
        ref={servicesSection.ref}
        className="container py-16 md:py-24"
      >
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <Link
              to={s.to}
              key={s.title}
              className="group relative p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl bg-white/10 border border-white/20 overflow-hidden transition-all duration-300 hover:border-primary/40 hover:bg-white/15"
              style={{ 
                opacity: servicesSection.isVisible ? Math.min(Math.max(servicesSection.progress - 0.1 - (i * 0.05), 0) * 2, 1) : 0,
                transform: `translateY(${servicesSection.isVisible ? (1 - servicesSection.progress) * 40 : 40}px)`,
                transitionDelay: `${i * 150}ms`
              }}
            >
              <div className="relative">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-orange flex items-center justify-center mb-4 sm:mb-5">
                  <s.icon className="w-6 h-6 sm:w-7 sm:h-7 text-background" />
                </div>
                <h3 className="text-lg sm:text-xl font-display font-bold mb-3 text-foreground">{s.title}</h3>
                <p className="text-foreground/90 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-5">{s.desc}</p>
                <div className="inline-flex items-center gap-2 text-xs font-medium text-primary">
                  Learn more <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ✅ NEW Why Choose Us Section */}
      <section className="relative py-20 md:py-28 bg-black text-white overflow-hidden">
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="container mx-auto px-6 relative z-10">
          
          {/* Heading */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 text-orange-400 text-xs uppercase tracking-widest font-semibold mb-6">
              WHY CHOOSE US
            </span>

            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6">
              Why we are your best{" "}
              <span className="text-orange-500">choice</span>
            </h2>
          </div>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {features.map((item, i) => (
              <div
                key={i}
                className="p-4 sm:p-6 lg:p-8 rounded-2xl bg-white/10 border border-white/20 hover:border-orange-500/60 hover:shadow-lg hover:shadow-orange-500/20 transition duration-300"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-xl border border-orange-500/60 mb-4 sm:mb-5">
                  <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400" />
                </div>

                <h3 className="text-lg sm:text-xl font-semibold mb-3 text-white">
                  {item.title}
                </h3>

                <p className="text-gray-300 leading-relaxed text-xs sm:text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LetsTalk />

    </Layout>
  );
};

export default Services;