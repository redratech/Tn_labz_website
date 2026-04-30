import { useState } from "react";
import { toast } from "sonner";

const LetsTalk = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill all fields");
      return;
    }
    toast.success("Thanks! We'll get back to you shortly.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="relative py-12 md:py-16 overflow-hidden">
      {/* subtle vertical line pattern */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, hsl(var(--foreground)) 0 1px, transparent 1px 80px)",
        }}
      />
      <div className="absolute -left-40 top-1/3 w-[500px] h-[500px] bg-gradient-radial-blue opacity-25 blur-3xl pointer-events-none" />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT: huge "Let's Talk!" */}
          <div>
            <h2 className="font-display font-black leading-[0.85] tracking-tight text-7xl md:text-8xl lg:text-[10rem]">
              <span className="block text-foreground">Let's</span>
              <span className="block text-gradient-blue">Talk!</span>
            </h2>
            <p className="mt-8 text-muted-foreground text-lg max-w-md">
              Have a project, idea, or question? Drop us a line — we typically reply within
              24 hours.
            </p>
          </div>

          {/* RIGHT: form card */}
          <form
            onSubmit={onSubmit}
            className="relative rounded-[2.5rem] glass-card p-8 md:p-12 space-y-6"
          >
            <div>
              <label className="block text-sm font-semibold mb-3">Name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Enter your name"
                className="w-full px-6 py-4 rounded-2xl bg-secondary/60 border border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-3">Email</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="Enter your email"
                className="w-full px-6 py-4 rounded-2xl bg-secondary/60 border border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-3">Message</label>
              <textarea
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Write your message"
                className="w-full px-6 py-4 rounded-2xl bg-secondary/60 border border-white/10 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-gradient-blue text-background font-display font-bold text-lg blue-glow hover:scale-[1.02] transition-transform"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default LetsTalk;
