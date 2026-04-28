import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What services does Technolabz Business Solutions offer?",
    answer: "We specialize in delivering innovative technology solutions including Robotic Process Automation (RPA), Artificial Intelligence (AI), Augmented/Virtual Reality (AR/VR), and comprehensive cloud services with platforms such as AWS, Azure, and Office 365. Our offerings are designed to drive business transformation and operational excellence."
  },
  {
    question: "Who founded Technolabz Business Solutions and when was it established?",
    answer: "Technolabz Business Solutions was founded in 2019 by visionary leader Venkatesh. His passion for innovation and commitment to client success have shaped the company's mission and strategic direction."
  },
  {
    question: "What industries do you serve?",
    answer: "Technolabz Business Solutions was founded in 2019 by visionary leader Venkatesh. His passion for innovation and commitment to client success have shaped the company's mission and strategic direction."
  },
  {
    question: "How do you ensure the security and reliability of your solutions?",
    answer: "Security and reliability are at the core of our operations. We adhere to industry-leading best practices and standards, ensuring that our solutions are robust, secure, and compliant with the latest regulatory requirements. Our team continuously monitors and updates our technologies to safeguard your business data and operations."
  },
  {
    question: "How can I start a project with Technolabz Business Solutions?",
    answer: "Getting started is simple. Reach out to us via our contact page or call our customer service team. We'll schedule an initial consultation to understand your business needs and outline a customized plan to drive your digital transformation journey."
  },
  {
    question: "Do you offer ongoing support and maintenance?",
    answer: "Absolutely. We believe in building long-term partnerships with our clients. In addition to project implementation, we provide comprehensive support and maintenance services to ensure your solutions continue to perform optimally and evolve with your business needs."
  },
  {
    question: "What sets Technolabz Business Solutions apart from other technology providers?",
    answer: "At Technolabz Business Solutions, we stand out through our holistic approach to digital transformation. We combine deep expertise in RPA, AI, AR/VR, and cloud services with a client-centric mindset, ensuring every solution is custom-tailored to your unique business challenges. Our commitment to long-term partnerships, continuous innovation, and robust support means we're not just a service provider—we're your strategic ally in driving sustainable growth and operational excellence."
  }
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-12 md:py-16 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* FAQ tag */}
          <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-orange text-background text-xs uppercase tracking-widest font-semibold mb-6">
            Frequently Asked Questions
          </span>

          {/* Main heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-12">
            Got Questions? We've Got <span className="text-gradient-orange">Answers!</span>
          </h2>

          {/* FAQ items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left"
                >
                  <span className="text-foreground font-semibold text-base md:text-lg pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-orange flex items-center justify-center transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDown className="w-5 h-5 text-background" />
                  </div>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-5 pt-0">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
