import { useState } from "react";
import { useScrollReveal } from "../../../hooks/useScrollReveal";
import { useSiteConfig } from "../../../config/SiteConfigContext";

export function ThemeBlog() {
  const { blog } = useSiteConfig();
  const header = useScrollReveal();
  const grid = useScrollReveal();
  const [activeCategory, setActiveCategory] = useState("Alle");

  if (!blog) return null;

  const filtered = activeCategory === "Alle"
    ? blog.posts
    : blog.posts.filter((p) => p.category === activeCategory);

  return (
    <section className="pt-28 sm:pt-36 pb-16 sm:pb-24 px-3 sm:px-4 max-w-7xl mx-auto">
      <div ref={header.ref} className={`text-center mb-10 sm:mb-16 ${header.isVisible ? "sr-visible" : "sr-hidden"}`}>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-medium tracking-tight text-gray-900 mb-4 sm:mb-6">
          {blog.headline}
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-gray-500 max-w-2xl mx-auto font-medium leading-relaxed">
          {blog.subheadline}
        </p>
      </div>

      {/* Category filter */}
      <div className="flex justify-center gap-1.5 sm:gap-2 mb-10 sm:mb-14 flex-wrap px-2">
        {["Alle", ...blog.categories].map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold cursor-pointer transition-all ${
              activeCategory === cat
                ? "text-white shadow-sm"
                : "text-gray-400 hover:text-gray-600"
            }`}
            style={activeCategory === cat ? { background: "var(--color-dark)" } : { background: "var(--card-bg)" }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Posts grid */}
      <div ref={grid.ref} className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto sr-stagger ${grid.isVisible ? "sr-visible" : ""}`}>
        {filtered.map((post, i) => (
          <article key={i} className="theme-card rounded-[var(--radius-card)] overflow-hidden flex flex-col group cursor-pointer">
            {/* Color bar header */}
            <div className="h-2 sm:h-2.5" style={{ background: `linear-gradient(90deg, var(--color-accent), var(--color-accent-tint-3))` }} />

            <div className="p-5 sm:p-7 flex flex-col flex-1">
              {/* Meta */}
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg" style={{ background: "var(--badge-bg)", border: "1px solid var(--badge-border)", color: "var(--color-accent-dark)" }}>
                  {post.category}
                </span>
                <span className="text-[10px] sm:text-xs text-gray-400 font-medium">{post.readTime}</span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3 leading-snug group-hover:text-accent transition-colors">
                {post.title}
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 font-medium leading-relaxed mb-5 sm:mb-6 flex-1">
                {post.excerpt}
              </p>

              {/* Author + date */}
              <div className="flex items-center justify-between pt-4 sm:pt-5" style={{ borderTop: "1px solid var(--card-border)" }}>
                <div className="flex items-center gap-2.5">
                  <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-tr ${post.authorColors} flex items-center justify-center text-white text-[9px] sm:text-[10px] font-bold`}>
                    {post.authorInitials}
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-gray-900">{post.author}</span>
                </div>
                <span className="text-[10px] sm:text-xs text-gray-400 font-medium">{post.date}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
