import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Sparkles, Terminal } from "lucide-react";
import Work from "../components/Work";
import AboutPreview from "../components/AboutPreview";
import Contact from "../components/Contact";

function Home() {
  return (
    <main className="relative overflow-hidden bg-[var(--background)]">
      {/* Decorative ambient background gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[450px] rounded-full bg-[var(--accent)]/10 blur-[120px] pointer-events-none" />

      <section className="relative flex min-h-screen items-center px-5 pb-24 pt-28 sm:px-8 lg:px-12">
        <div className="mx-auto w-full max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-5xl"
          >
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[var(--accent-light)]/20 bg-[var(--accent-light)]/5 backdrop-blur-md mb-6">
              <Terminal size={14} className="text-[var(--accent-light)]" />
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent-light)]">
                Full-Stack Web Developer &bull; MERN Specialist
              </p>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-[clamp(3.5rem,9vw,8rem)] leading-[0.92] tracking-[-0.04em] text-[var(--foreground)]">
              I build thoughtful
              <br />
              <span className="italic text-[var(--muted)] hover:text-[var(--foreground)] transition-colors duration-500">
                digital experiences.
              </span>
            </h1>

            {/* Sub-headline & Call to Actions */}
            <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-md text-base leading-7 text-[var(--muted)]">
                I'm Rihanat, a MERN stack developer focused on building
                purposeful, responsive, and engaging web experiences with clean code.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="#work"
                  className="group relative inline-flex items-center gap-3 overflow-hidden bg-[#747A45] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#8A9055] shadow-lg shadow-[#747A45]/20"
                >
                  <span className="relative z-10">View my work</span>
                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.8}
                    className="relative z-10 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>

                <a
                  href="#contact"
                  className="group inline-flex items-center gap-3 border border-[var(--muted)]/40 px-6 py-3.5 text-sm font-semibold text-[var(--foreground)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#747A45] hover:bg-[var(--accent)]/5"
                >
                  <span>Let's talk</span>
                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.8}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Bottom Information Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute bottom-8 left-5 right-5 flex items-center justify-between sm:left-8 sm:right-8 lg:left-12 lg:right-12"
          >
            {/* Live Availability Status */}
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--accent)]"></span>
              </span>
              Available for opportunities
            </div>

            {/* Scroll Indicator */}
            <a
              href="#work"
              className="hidden items-center gap-3 text-xs uppercase tracking-[0.18em] text-[var(--muted)] transition-colors duration-300 hover:text-[var(--foreground)] sm:flex group"
            >
              <span>Scroll to explore</span>
              <ArrowDown size={14} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-y-1" />
            </a>
          </motion.div>
        </div>
      </section>

      <Work />
      <AboutPreview />
      
      <Contact/>
    </main>
  );
}

export default Home;