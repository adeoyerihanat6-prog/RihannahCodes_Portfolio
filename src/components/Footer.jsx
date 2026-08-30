import { motion } from "framer-motion";
import { ArrowUp, ArrowUpRight, Sparkles } from "lucide-react";

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/adeoyerihanat6-prog",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/rihanat-adeoye-2a5059395",
  },
  {
    label: "X",
    href: "https://x.com/RihannahCodes",
  },
  {
    label: "Email",
    href: "mailto:adeoyerihanat6@gmail.com",
  },
];

function Footer() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden px-5 pb-10 pt-20 sm:px-8 lg:px-12 lg:pt-28 bg-[var(--background)]">
      {/* Subtle ambient background glow */}
      <div className="absolute left-1/2 top-1/3 -z-10 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent)] opacity-5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Small identity */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-3"
        >
          <span className="h-2 w-2 rounded-full bg-[var(--accent)] animate-pulse" />
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--muted)]">
            RihannahCodes
          </span>
        </motion.div>

        {/* Refined closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-12 sm:mt-16"
        >
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
            <Sparkles size={13} className="text-[var(--accent)]" />
            <span>Until the next idea</span>
          </div>

          <h2 className="mt-4 max-w-4xl font-serif text-[clamp(2.75rem,7vw,6rem)] leading-[0.9] tracking-[-0.04em] text-[var(--foreground)]">
            Let's build something{" "}
            <span className="italic text-[var(--muted)] font-normal transition-colors duration-500 hover:text-[var(--accent)]">
              worth remembering.
            </span>
          </h2>
        </motion.div>

        {/* Social Links Matrix & Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-16 sm:mt-24 pt-8 border-t border-[var(--border)]/60 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10"
        >
          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
              Find me elsewhere
            </p>

            <div className="flex flex-wrap gap-x-8 gap-y-3">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto") ? undefined : "noreferrer"}
                  className="group relative flex items-center gap-1.5 text-sm font-medium text-[var(--foreground)] transition-colors duration-300 hover:text-[var(--accent)]"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight
                    size={13}
                    strokeWidth={2}
                    className="opacity-40 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                  {/* Creative animated underline effect */}
                  <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-[var(--accent)] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>
          </div>

          {/* Availability Badge */}
          <div className="flex items-center gap-2.5 rounded-full border border-[var(--border)] bg-[var(--surface)]/50 px-4 py-2 w-fit backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-[11px] uppercase tracking-wider text-[var(--muted)] font-medium">
              Available for new projects
            </span>
          </div>
        </motion.div>

        {/* Scaled Background Brand Mark & Bottom Control Bar */}
        <div className="relative mt-16 sm:mt-24 overflow-hidden text-center select-none pt-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="pointer-events-none">
          
            <p className="whitespace-nowrap font-serif text-[clamp(2.5rem,9.5vw,22rem)] leading-none tracking-[-0.05em] text-[var(--surface)] transition-opacity duration-700 hover:opacity-80">
              RihannahCodes
            </p>
          </motion.div>

          {/* Bottom details & Back to top perfectly structured underneath */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 pt-8 border-t border-[var(--border)]/40 flex flex-col sm:flex-row items-center justify-between gap-6 text-[10px] uppercase tracking-[0.16em] text-[var(--muted)]"
          >
            <p>© {new Date().getFullYear()} Adeoye Rihanat. All rights reserved.</p>

            {/* Back to top button  */}
            <button
              type="button"
              onClick={scrollTop}
              aria-label="Back to top"
              className="group flex items-center gap-3 text-left cursor-pointer"
            >
              <span className="text-xs uppercase tracking-[0.16em] text-[var(--muted)] transition-colors duration-300 group-hover:text-[var(--foreground)]">
                Back to top
              </span>
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] text-[var(--foreground)] transition-all duration-500 group-hover:-translate-y-1.5 group-hover:border-[var(--accent)] group-hover:bg-[var(--surface)] group-hover:shadow-lg group-hover:shadow-[var(--accent)]/10">
                <ArrowUp
                  size={16}
                  strokeWidth={1.5}
                  className="transition-transform duration-500 group-hover:-translate-y-0.5"
                />
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;