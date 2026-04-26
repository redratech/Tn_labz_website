import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const BlogsSection = () => {
  return (
    <section className="relative py-20 md:py-28 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          {/* BLOGS tag */}
          <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-orange text-background text-xs uppercase tracking-widest font-semibold mb-6">
            Blogs
          </span>

          {/* Main heading */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
            Dive into our collection of <span className="text-gradient-orange">engaging blog posts</span>
          </h2>

          {/* Description */}
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Stay updated with the latest insights on RPA, AI, Cloud Computing, and Automation technologies.
          </p>

          {/* Read Blogs button */}
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-orange text-background font-semibold text-sm uppercase tracking-wider orange-glow hover:scale-105 transition-transform"
          >
            Read Blogs <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;
