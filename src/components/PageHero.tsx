import { cn } from "@/lib/utils";

const PageHero = ({
  eyebrow,
  title,
  subtitle,
  className,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
}) => (
  <section className={cn("relative overflow-hidden py-20 md:py-28", className)}>
    <div className="absolute inset-0 bg-gradient-radial-orange opacity-40 blur-3xl" />
    <div className="container relative text-center max-w-4xl">
      {eyebrow && (
        <span className="inline-block px-4 py-1.5 rounded-full glass text-xs uppercase tracking-widest text-primary mb-6 fade-up">
          {eyebrow}
        </span>
      )}
      <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.05] mb-6 fade-up glow-text">
        {title}
      </h1>
      {subtitle && (
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto fade-up">
          {subtitle}
        </p>
      )}
    </div>
  </section>
);

export default PageHero;
