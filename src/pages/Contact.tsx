import { useState } from "react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Phone, Mail, MapPin, Send, Building } from "lucide-react";
import { toast } from "sonner";
import home from "@/assets/home.jpg";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks! We'll be in touch shortly.");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <Layout>
      <PageHero eyebrow="Contact" title="Let's build something automated" subtitle="Tell us about your project — we usually respond within one business day." />

      <section className="container py-12 grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3 p-8 md:p-10 rounded-3xl glass-card">
          <form onSubmit={submit} className="grid gap-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <Input label="Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
              <Input label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
            </div>
            <div>
              <Input label="Phone" type="tel" value={form.phone} onChange={(v) => setForm({ ...form, phone: v })} />
            </div>
            <div>
              <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">Message</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-secondary/60 border border-white/10 rounded-2xl px-5 py-4 text-foreground focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition"
              />
            </div>
            <button 
              type="submit" 
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-gradient-orange text-background font-semibold orange-glow hover:scale-[1.02] transition"
            >
              Send Message <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

        <div className="lg:col-span-2 space-y-4">
          
          {/* Contact Info */}
          {[
            { icon: Phone, t: "Phone", v: "+91 7904097918" },
            { icon: Mail, t: "Email", v: "info@tnlabz.com" },
          ].map((c) => (
            <div 
              key={c.t} 
              className="p-6 rounded-2xl glass-card glow-border-hover flex items-center gap-4 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-orange flex items-center justify-center orange-glow shrink-0">
                <c.icon className="w-5 h-5 text-background" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{c.t}</div>
                <div className="font-medium">{c.v}</div>
              </div>
            </div>
          ))}

          {/* Registered Address */}
          <div className="p-6 rounded-2xl glass-card glow-border-hover transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <Building className="w-5 h-5 text-primary" />
              <h4 className="font-bold text-primary">REGISTERED ADDRESS</h4>
            </div>
            <p className="text-sm text-foreground leading-relaxed">
              NO:226, 4TH FLOOR, 8TH CROSS, 2ND BLOCK,<br />
              VISWA PRIYA LAYOUT, BERGUR,<br />
              BANGALORE-560068
            </p>
          </div>

          {/* Branch Office */}
          <div className="p-6 rounded-2xl glass-card glow-border-hover transition-all duration-300">
            <div className="flex items-center gap-3 mb-3">
              <MapPin className="w-5 h-5 text-primary" />
              <h4 className="font-bold text-primary">BRANCH OFFICE</h4>
            </div>
            <p className="text-sm text-foreground leading-relaxed">
              3/468, SURVEYOR COLONY, K.PUDUR,<br />
              MADURAI,<br />
              TAMIL NADU-625007
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

const Input = ({ label, value, onChange, type = "text" }: { label: string; value: string; onChange: (v: string) => void; type?: string }) => (
  <div>
    <label className="text-xs uppercase tracking-widest text-muted-foreground mb-2 block">{label}</label>
    <input
      required
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-secondary/60 border border-white/10 rounded-2xl px-5 py-3.5 text-foreground focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition"
    />
  </div>
);

export default Contact;
