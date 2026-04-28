import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Youtube, Instagram, FileText } from "lucide-react";

const menu = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Blog", to: "/blog" },
  { label: "Review", to: "/reviews" },
  { label: "Contact", to: "/contact" },
];

const services = [
  { label: "Augmented Reality (AR) & Virtual Reality (VR)", to: "/services" },
  { label: "Robotic Process Automation (RPA)", to: "/services/rpa" },
  { label: "AI Consulting", to: "/services/ai" },
  { label: "AWS", to: "/services/cloud" },
  { label: "MS Dynamics 365", to: "/services/cloud" },
  { label: "SAP B1", to: "/services/cloud" },
  { label: "Azure", to: "/services/cloud" },
];

const socials = [
  { Icon: Facebook, label: "Facebook", url: "https://www.facebook.com/share/1937sbCx5c/" },
  { Icon: Twitter, label: "Twitter", url: "https://x.com/technolabz25?t=RUzKMByU78ZZw_Xic0cLmg&s=09" },
  { Icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/company/71977049/admin/page-posts/published/" },
  { Icon: Instagram, label: "Instagram", url: "https://www.instagram.com/technolabzitsoln25?igsh=MWUxbnUzbzBuMjBqNQ==" },
  { Icon: Youtube, label: "YouTube", url: "https://youtube.com/@technolabzitaoln25?si=d_EyKwcnvVL9j9NS" },
];

const Footer = () => (
  <footer className="relative pt-12 pb-8">
    {/* top orange glow blob */}
    <div className="absolute -top-32 right-0 w-[600px] h-[300px] bg-gradient-radial-orange opacity-30 blur-3xl pointer-events-none" />

    <div className="container relative space-y-8">
      {/* === Main info card === */}
      <div className="glass-card rounded-[2rem] p-8 md:p-12">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Contact details */}
          <div className="lg:col-span-4 space-y-4">
            <div className="glass rounded-2xl p-6 flex flex-col gap-3 hover:border-primary/40 transition">
              <Mail className="w-6 h-6 text-primary" />
              <a href="mailto:info@tnlabz.com" className="font-display font-semibold hover:text-primary transition">
                info@tnlabz.com
              </a>
            </div>
            <div className="glass rounded-2xl p-6 flex flex-col gap-3 hover:border-primary/40 transition">
              <Phone className="w-6 h-6 text-primary" />
              <a href="tel:+917904097918" className="font-display font-semibold hover:text-primary transition">
                +91 7904097918
              </a>
            </div>
            <div className="glass rounded-2xl p-6 flex flex-col gap-3 hover:border-primary/40 transition">
              <MapPin className="w-6 h-6 text-primary" />
              <span className="font-display font-semibold">Madurai &amp; Bangalore</span>
            </div>
          </div>

          {/* Menu */}
          <div className="lg:col-span-3">
            <h4 className="font-display font-bold text-primary text-xl mb-6">Menu</h4>
            <ul className="space-y-3">
              {menu.map((m) => (
                <li key={m.label}>
                  <Link to={m.to} className="font-display font-semibold text-foreground hover:text-primary transition">
                    {m.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-5">
            <h4 className="font-display font-bold text-primary text-xl mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.label}>
                  <Link to={s.to} className="font-display font-semibold text-foreground hover:text-primary transition">
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* === Social card === */}
      <div className="glass-card rounded-[2rem] p-10 text-center">
        <h4 className="font-display font-bold text-primary text-xl mb-6">Follow us:</h4>
        <div className="flex flex-wrap justify-center gap-4">
          {socials.map(({ Icon, label, url }, i) => (
            <a
              key={i}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-14 h-14 rounded-full glass flex items-center justify-center hover:bg-gradient-orange hover:border-transparent hover:text-background transition-all duration-300"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="pt-4 flex justify-center items-center gap-2 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} TN Labz. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
