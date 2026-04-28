import { useEffect, useRef, useState } from "react";
import { Atom } from "lucide-react";
import innovatebg from "@/assets/innovatebg.avif";

const values = [
  { label: "Customer Support", x: -22, y: -12, rot: -15 },
  { label: "Passion", x: 14, y: -10, rot: 12 },
  { label: "Positive Experience", x: 59, y: 100, rot: 90 },
  { label: "Trustworthiness", x: 17, y: 2, rot: 8 },
  { label: "Customer Focus", x: -70, y: 50, rot: -80 },
  { label: "Long-Term Relationships", x: 15, y: -280, rot: 6 },
  { label: "Innovation", x: -13, y: -170, rot: 10 },
  { label: "Collaboration", x: 14, y: 100, rot: 10 },
  { label: "Personalization", x: -12, y: 160, rot: -15 },
  { label: "Reliability", x: 13, y: 270, rot: 8 },
  { label: "Quality", x: 10, y: 350, rot: 0 },
];

/* Animated counter for percentage */
const Percent = ({ target = 80 }: { target?: number }) => {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        const start = performance.now();
        const dur = 1800;
        const step = (t: number) => {
          const p = Math.min((t - start) / dur, 1);
          setN(Math.floor(p * target));
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        obs.disconnect();
      }
    }, { threshold: 0.4 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);
  return <span ref={ref}>{n}%</span>;
};

const InnovateSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setVisible(true);
        obs.disconnect();
      }
    }, { threshold: 0.25 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="relative py-8 md:py-10">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-6 items-stretch">
          {/* === LEFT: Cosmic card with animated word cluster === */}
          <div
            ref={sectionRef}
            className="relative rounded-[2.5rem] overflow-hidden min-h-[400px] lg:min-h-[480px] border border-white/10"
          >
            <img
              src={innovatebg}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
              width={1024}
              height={1280}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-background/40 via-transparent to-background/60" />

            {/* Circular cluster container */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-[350px] h-[350px] md:w-[400px] md:h-[400px]">
                {/* prominent circle border */}
                <div className="absolute inset-0 rounded-full border-4 border-white/30 backdrop-blur-[2px] bg-background/20" />
                <div className="absolute inset-8 rounded-full bg-gradient-radial-orange opacity-40 blur-3xl" />

                {/* word pills */}
                {values.map((v, i) => (
                  <div
                    key={v.label}
                    className="absolute left-1/2 top-1/2 px-4 py-2 rounded-full bg-gradient-orange text-background font-semibold text-sm md:text-base whitespace-nowrap shadow-lg flex items-center gap-2"
                    style={{
                      transform: visible
                        ? `translate(calc(-50% + ${v.x}%), calc(-50% + ${v.y}%)) rotate(${v.rot}deg)`
                        : `translate(-50%, -180%) rotate(${v.rot * 2}deg)`,
                      opacity: visible ? 1 : 0,
                      transition: `transform 1s cubic-bezier(0.34, 1.56, 0.64, 1) ${i * 120}ms, opacity 0.6s ease ${i * 120}ms`,
                    }}
                  >
                    <Atom className="w-3.5 h-3.5 shrink-0" />
                    {v.label}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* === RIGHT: Solid orange info card === */}
          <div className="relative rounded-[2.5rem] overflow-hidden bg-gradient-orange p-6 md:p-8 flex flex-col justify-between min-h-[400px] lg:min-h-[480px] orange-glow">
            {/* subtle texture overlay */}
            <div
              className="absolute inset-0 opacity-[0.08] pointer-events-none mix-blend-overlay"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 20% 20%, hsl(0 0% 0%) 0 1px, transparent 1.5px)",
                backgroundSize: "30px 30px",
              }}
            />

            <div className="relative">
              <p className="text-background/90 font-display font-bold tracking-wider text-xs md:text-sm mb-4">
                INNOVATE. TRANSFORM. SUCCEED.
              </p>
              <div className="font-display font-black text-background leading-none text-4xl md:text-6xl">
                <Percent target={80} />
              </div>
            </div>

            <p className="relative text-background/90 leading-relaxed text-sm md:text-base mt-6 max-w-xl text-justify">
              At <span className="font-bold">TN Labz Business Solutions</span>, we recognized the
              importance of amplifying our digital footprint in a competitive technology landscape.
              In collaboration with our expert content team, we crafted a comprehensive strategy
              that highlighted our pioneering work in <span className="font-semibold">RPA, AI,
              AR/VR, and cloud services (AWS, Azure, Office 365)</span>. By leveraging targeted
              thought leadership, engaging content, and data-driven insights, we significantly
              enhanced our brand visibility and industry recognition.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovateSection;
