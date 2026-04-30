import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import LetsTalk from "@/components/LetsTalk";
import { Star } from "lucide-react";
import reviewdevidimg from "@/assets/reviewdevidimg.avif";
import reviewdevidlogo from "@/assets/reviewdevid.svg";
import devidrodriguez from "@/assets/devidrodriguez.avif";
import ryanmartinez from "@/assets/Ryan Martinez.avif";
import williamthompson from "@/assets/William Thompson.avif";
import sthompson from "@/assets/S. Thompson.avif";
import benjamindavis from "@/assets/Benjamin Davis.avif";
import benjamindavislogo from "@/assets/Benjamin Davis logo.svg";
import sthompsonlogo from "@/assets/S. Thompson logo.svg";

const reviews = [
  { 
    name: "David Reynolds", 
    role: "Tech Innovations Ltd.", 
    text: "Working with Technolabz has been a revelation for our company. Their dedication to understanding our industry and target audience has led to remarkable growth in our online presence. With their expertise in SEO and digital marketing, we've seen a significant increase in website traffic and brand visibility. Technolabz truly delivers results, and I highly recommend their services to any business looking to thrive in the digital age.",
    image: reviewdevidimg,
    logo: reviewdevidlogo
  },
  { 
    name: "David Rodriguez", 
    role: "Thompson & Co. Real Estate", 
    text: "I can't speak highly enough of Technolabz. Their strategic approach to SEO and digital marketing has been instrumental in our company's success. They took the time to understand our unique needs and crafted a tailored strategy that has consistently driven results. Thanks to their efforts, we've seen a substantial increase in leads and conversions. Technolabz is the real deal, and I wouldn't hesitate to recommend them to anyone in need of digital marketing expertise.",
    image: devidrodriguez
  },
  { 
    name: "Ryan Martinez", 
    role: "Cooper's Car Repair Shop", 
    text: "Technolabz has been an invaluable partner for our auto repair business. Their expertise in SEO and online marketing has helped us stay ahead of the competition and attract more customers than ever before. From optimizing our website to managing our social media presence, their team's attention to detail and commitment to excellence shine through in everything they do. Thanks to Technolabz, our business has seen significant growth, and I can't recommend them enough to others in need of digital marketing services.",
    image: ryanmartinez
  },
  { 
    name: "S. Thompson", 
    role: "Carter's Café", 
    text: "Technolabz has been instrumental in helping our café thrive in a competitive market. Their strategic approach to SEO and digital marketing has resulted in a noticeable increase in our online visibility and customer engagement. From optimizing our website to launching targeted advertising campaigns, their team's expertise has exceeded our expectations. Technolabz truly cares about the success of their clients, and I highly recommend their services to any business looking to boost their online presence.",
    image: sthompson,
    logo: sthompsonlogo
  },
  { 
    name: "Christopher Anderson", 
    role: "Patel & Co. Law Firm", 
    text: "As a law firm, establishing a strong online presence is essential, and Technolabz has been instrumental in helping us achieve that goal. Their team's expertise in SEO and online marketing has significantly increased our website traffic and client inquiries. From keyword research to content optimization, their strategic approach has delivered tangible results. Technolabz is a trusted partner, and I highly recommend their services to any business looking to grow online." 
  },
  { 
    name: "S. Thompson", 
    role: "Turner's Tech Solutions", 
    text: "Technolabz has been an invaluable asset to our tech company. Their deep understanding of SEO and digital marketing has helped us reach our target audience and drive conversions. Their team's proactive approach and attention to detail have made a significant impact on our online visibility and brand awareness. Thanks to Technolabz, our company has experienced steady growth, and I would highly recommend their services to anyone looking to expand their online presence." 
  },
  { 
    name: "William Thompson", 
    role: "Atlanta, Georgia", 
    text: "From the moment I contacted them for a consultation, their team exhibited professionalism and a commitment to excellence. They listened attentively to my ideas and preferences, offering valuable insights and creative solutions every step of the way. The result is a beautifully designed landscape that perfectly complements my home and exceeds my expectations. I'm thrilled with the outcome and grateful for GreenScape's dedication to bringing my vision to life.",
    image: williamthompson
  },
  { 
    name: "S. Thompson", 
    role: "Ramirez Fitness Studio", 
    text: "Technolabz has been a game-changer for our fitness studio. Their expertise in SEO and digital marketing has helped us attract new clients and grow our business. Their team's strategic approach to keyword research and content optimization has resulted in a noticeable increase in website traffic and inquiries. I'm incredibly impressed with their professionalism and dedication to our success. I highly recommend Technolabz to any business looking to enhance their online presence.",
  },
  { 
    name: "Benjamin Davis", 
    role: "Bennett's Bakery", 
    text: "Technolabz has been an invaluable partner for our bakery. Their team's expertise in SEO and online marketing has helped us stand out in a competitive market. From optimizing our website to managing our social media presence, their strategic approach has delivered impressive results. Thanks to their efforts, we've seen a significant increase in online orders and customer engagement. I couldn't be happier with the results, and I highly recommend Technolabz to anyone looking to grow their business online.",
    image: benjamindavis,
    logo: benjamindavislogo
  },
];

const Reviews = () => {
  return (
    <Layout>
      <PageHero eyebrow="Reviews" title="Check Our Works With Real Results" subtitle="Stories from the operators and founders we've helped automate." />
      <section 
        className="container py-8 grid md:grid-cols-2 gap-6"
      >
        {reviews.map((r, i) => (
          <div 
            key={`${r.name}-${i}`} 
            className="group p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl glass-card glow-border-hover transition-all duration-700 bg-white/20 hover:bg-white/30 relative"
          >
            {r.logo && (
              <img 
                src={r.logo} 
                alt="Company Logo"
                className="absolute top-3 right-3 w-8 h-8 sm:top-4 sm:right-4 sm:w-12 sm:h-12 object-contain"
              />
            )}
            <div className="flex gap-1 mb-3 sm:mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-foreground font-medium leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base group-hover:text-white transition-colors text-justify">"{r.text}"</p>
            <div className="flex items-center gap-2 sm:gap-3">
              {r.image ? (
                <img 
                  src={r.image} 
                  alt={r.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover blue-glow"
                />
              ) : (
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-blue flex items-center justify-center text-background font-bold blue-glow text-sm sm:text-base">
                  {r.name[0]}
                </div>
              )}
              <div>
                <div className="font-bold text-xs sm:text-sm text-foreground group-hover:text-white transition-colors">{r.name}</div>
                <div className="text-xs text-foreground/90 font-medium line-clamp-2 group-hover:text-white transition-colors">{r.role}</div>
              </div>
            </div>
          </div>
        ))}
      </section>

      <LetsTalk />
    </Layout>
  );
};

export default Reviews;
