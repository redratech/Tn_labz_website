import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import LetsTalk from "@/components/LetsTalk";
import FaqSection from "@/components/FaqSection";
import { Target, Heart, Sparkles, Star, ChevronDown } from "lucide-react";
import { useProgressiveScroll, useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState, useEffect, useRef } from "react";
import team from "@/assets/team.jpg";
import venkat from "@/assets/venkat.jpg";
import azure from "@/assets/azure.avif";
import cloud from "@/assets/cloud.png";
import dynamic from "@/assets/dynamic.png";
import microsoft from "@/assets/microsoft.jpeg";
import sap from "@/assets/sap.png";
import sky from "@/assets/sky.avif";

const brandLogos = [
  { src: sap, alt: "SAP" },
  { src: azure, alt: "Microsoft Azure" },
  { src: cloud, alt: "Cloud" },
  { src: dynamic, alt: "Dynamic" },
  { src: microsoft, alt: "Microsoft" },
  { src: sky, alt: "Sky" },
];

const ScrollRightToLeft = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = 0;
    const scrollSpeed = 1;

    const animate = () => {
      scrollPosition -= scrollSpeed;
      
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
        {[...brandLogos, ...brandLogos].map((brand, i) => (
          <div
            key={`rtl-${brand.alt}-${i}`}
            className="flex-shrink-0 px-8 py-6 min-w-[140px] rounded-2xl glass-card glow-border-hover flex items-center justify-center"
          >
            <img 
              src={brand.src} 
              alt={brand.alt}
              className="h-12 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const ScrollLeftToRight = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollPosition = -scrollContainer.scrollWidth / 2;
    const scrollSpeed = 1;

    const animate = () => {
      scrollPosition += scrollSpeed;
      
      if (scrollPosition >= 0) {
        scrollPosition = -scrollContainer.scrollWidth / 2;
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
        {[...brandLogos, ...brandLogos].map((brand, i) => (
          <div
            key={`ltr-${brand.alt}-${i}`}
            className="flex-shrink-0 px-8 py-6 min-w-[140px] rounded-2xl glass-card glow-border-hover flex items-center justify-center"
          >
            <img 
              src={brand.src} 
              alt={brand.alt}
              className="h-12 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const About = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const missionSection = useScrollAnimation(0.2);

  const toggleSection = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const companyInfo = [
    {
      title: "Our History",
      number: "01",
      content: "Founded in 2019 by visionary leader Venkatesh, Technolabz Business Solutions embarked on a mission to harness the transformative power of technology. What began as a bold idea quickly evolved into a dynamic enterprise committed to driving business transformation through innovative solutions.\n\nFrom our inception, our journey has been defined by our passion for merging cutting-edge technology with practical business applications. We have continuously pushed boundaries by pioneering initiatives in Robotic Process Automation (RPA), Artificial Intelligence (AI), Augmented/Virtual Reality (AR/VR), and robust cloud infrastructures powered by AWS, Azure, and Office 365."
    },
    {
      title: "Our Mission", 
      number: "02",
      content: "At Technolabz Business Solutions, our mission is to empower businesses to thrive in the digital age by harnessing the transformative power of technology. Founded in 2019 by visionary leader Venkatesh, we are committed to bridging the gap between cutting-edge innovations and practical business solutions.\n\nWe strive to:\n\n• Innovate: Develop and implement breakthrough solutions in RPA, AI, AR/VR, and cloud infrastructures.\n• Empower: Equip organizations with scalable, efficient, and creative technologies.\n• Transform: Facilitate seamless transition into the digital era.\n• Collaborate: Forge strong, long-term partnerships with clients at the center."
    },
    {
      title: "Our Vision",
      number: "03", 
      content: "At Technolabz Business Solutions, our vision is clear: to be the catalyst for business transformation in an ever-changing digital landscape. We are dedicated to empowering organizations to not only overcome today's challenges but also seize tomorrow's opportunities.\n\nWith a client-centered approach, we strive to redefine excellence by blending innovative technology with strategic insights, ensuring every solution is as forward-thinking as it is practical. Together with our clients and partners, we are building a future where technology fuels progress, drives success, and transforms the way businesses operate."
    }
  ];
  
  return (
    <Layout>
      {/* Custom Hero Section with Team Image */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={team} 
            alt="TN Labz Team" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </div>
        
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-foreground">
              Hey There! Welcome to <span className="text-gradient-blue">Technolabz Business Solutions!</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/90 leading-relaxed">
              A multidisciplinary team of engineers, data scientists, and designers — building automation with craft.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="container py-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Company Info (Fixed) */}
          <div className="lg:sticky lg:top-24">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Who we are
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-primary mb-6">
              About our Company
            </h3>
            <p className="text-foreground/90 leading-relaxed mb-6 text-justify">
              Welcome to Technolabz Business Solutions-your trusted partner in driving business transformation through innovative technology. We are dedicated to empowering enterprises with cutting-edge solutions that streamline operations, enhance customer experiences, and accelerate growth. Our mission is to bridge the gap between emerging technologies and practical business applications, ensuring your organization stays ahead in an ever-evolving digital landscape.
            </p>
          </div>

          {/* Right Side - History/Mission/Vision (Scrollable) */}
          <div className="space-y-4">
            {companyInfo.map((info, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleSection(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <div className="flex items-center gap-3 pr-4">
                    <div className="w-8 h-8 rounded-lg bg-gradient-blue flex items-center justify-center text-background font-bold text-sm flex-shrink-0">
                      {info.number}
                    </div>
                    <span className="text-foreground font-semibold text-base md:text-lg">
                      {info.title}
                    </span>
                  </div>
                  <div
                    className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-blue flex items-center justify-center transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown className="w-5 h-5 text-background" />
                  </div>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-5 pt-0">
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-line text-justify">
                      {info.content}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Founder Section */}
      <section className="container py-10">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-3">
            About Founder
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-primary">
            Meet The Founder
          </h3>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Founder Image */}
          <div className="order-2 lg:order-1">
            <img 
              src={venkat} 
              alt="Venkatesh - Founder of Technolabz Business Solutions" 
              className="w-full h-auto rounded-2xl object-cover max-h-[400px]"
              loading="lazy"
            />
            <p className="text-center mt-4 text-2xl font-semibold text-primary">
              Venkatesh
            </p>
          </div>

          {/* Right Side - Founder Info */}
          <div className="order-1 lg:order-2 space-y-4">
            <p className="text-foreground/90 leading-relaxed text-justify">
              Venkatesh is the heart of Technolabz Business Solutions-a visionary leader whose decades of expertise in advanced technology have propelled our transformative journey. His passion for innovation and commitment to client success have been instrumental in shaping our identity as a leader in the digital landscape.
            </p>
            
            <p className="text-foreground/80 leading-relaxed text-justify">
              Venkatesh is known for his hands-on leadership and his commitment to continuous learning and innovation. He inspires his team to think creatively and challenge the status quo, ensuring that every solution is tailored to meet the dynamic needs of today's enterprises. His forward-thinking approach and unwavering dedication to excellence continue to drive the company's mission-empowering businesses to thrive in a rapidly evolving digital era.
            </p>

            {/* Founder Qualities */}
            <div className="grid grid-cols-2 gap-3 pt-4">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                <div className="w-10 h-10 rounded-lg bg-gradient-blue flex items-center justify-center mx-auto mb-2">
                  <Target className="w-5 h-5 text-background" />
                </div>
                <h4 className="font-semibold text-foreground text-xs mb-1">Visionary Thinker</h4>
              </div>
              
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                <div className="w-10 h-10 rounded-lg bg-gradient-blue flex items-center justify-center mx-auto mb-2">
                  <Heart className="w-5 h-5 text-background" />
                </div>
                <h4 className="font-semibold text-foreground text-xs mb-1">Empathetic Leader</h4>
              </div>
              
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                <div className="w-10 h-10 rounded-lg bg-gradient-blue flex items-center justify-center mx-auto mb-2">
                  <Sparkles className="w-5 h-5 text-background" />
                </div>
                <h4 className="font-semibold text-foreground text-xs mb-1">Creative Problem-Solver</h4>
              </div>
              
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                <div className="w-10 h-10 rounded-lg bg-gradient-blue flex items-center justify-center mx-auto mb-2">
                  <Star className="w-5 h-5 text-background" />
                </div>
                <h4 className="font-semibold text-foreground text-xs mb-1">Passionate Mentor</h4>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section 
        ref={missionSection.ref}
        className="container py-16"
      >
        <div 
          className="text-center mb-12"
          style={{ 
            opacity: missionSection.isVisible ? 1 : 0,
            transform: `translateY(${missionSection.isVisible ? 0 : 30}px)`,
            transition: 'all 0.8s cubic-bezier(0.22, 1, 0.36, 1)'
          }}
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            How We Work
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-primary">
            Our 4 Stage Process
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              step: "01",
              title: "Discovery Phase",
              description: "During this initial stage, we delve deep into understanding your business goals, target audience, and market landscape. We conduct thorough research and analysis to identify opportunities and challenges, laying the foundation for a successful campaign."
            },
            {
              step: "02",
              title: "Strategy Development",
              description: "With insights gathered from the discovery phase, we develop a customized strategy tailored to your specific needs and objectives. This comprehensive plan outlines the key tactics, channels, and timelines needed to achieve your business goals effectively."
            },
            {
              step: "03",
              title: "Implementation and Execution",
              description: "Once the strategy is finalized and approved, we roll up our sleeves and put the plan into action. Our expert team utilizes cutting-edge tools and techniques to execute each component of the strategy with precision and efficiency."
            },
            {
              step: "04",
              title: "Monitoring and Optimization",
              description: "Continuous monitoring and optimization are essential to ensuring the success and effectiveness of our campaigns. We closely track key performance indicators (KPIs) and metrics, analyzing data to identify areas for improvement and making necessary adjustments to optimize results."
            }
          ].map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all duration-700"
              style={{ 
                opacity: missionSection.isVisible ? 1 : 0,
                transform: `translateY(${missionSection.isVisible ? 0 : 40}px)`,
                transition: 'all 0.8s cubic-bezier(0.22, 1, 0.36, 1)',
                transitionDelay: `${index * 150}ms`
              }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-gradient-blue flex items-center justify-center text-background font-bold text-lg mb-2">
                    {item.step}
                  </div>
                  <div className="text-xs text-foreground/60 uppercase tracking-widest text-center">Step</div>
                </div>
                <div>
                  <h4 className="text-xl font-display font-bold mb-3">{item.title}</h4>
                  <p className="text-foreground/80 leading-relaxed text-sm text-justify">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Brands Section */}
      <section className="container py-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
            Brands
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold text-primary">
            OUR PARTNERS
          </h3>
        </div>

        {/* First Row - Right to Left Scroll */}
        <div className="mb-8">
          <ScrollRightToLeft />
        </div>

        {/* Second Row - Left to Right Scroll */}
        <div>
          <ScrollLeftToRight />
        </div>
      </section>

      <FaqSection />

      <LetsTalk />

    </Layout>
  );
};

export default About;
