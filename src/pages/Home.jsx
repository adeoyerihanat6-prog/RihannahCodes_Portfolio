import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Work from "../components/Work";
import AboutPreview from "../components/AboutPreview";

function Home() {
  return (
    <main>
      <section className="relative flex min-h-screen items-center overflow-hidden px-5 pb-24 pt-28 sm:px-8 lg:px-12">
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
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent-light)]">
              Full-Stack Web Developer
            </p>

            <h1 className="font-serif text-[clamp(3.5rem,9vw,8rem)] leading-[0.92] tracking-[-0.04em] text-[var(--foreground)]">
              I build thoughtful
              <br />
              <span className="italic text-[var(--muted)]">
                digital experiences.
              </span>
            </h1>

            <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-md text-base leading-7 text-[var(--muted)]">
                I'm Rihanat, a MERN stack developer focused on building
                purposeful, responsive, and engaging web experiences.
              </p>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="#work"
                  className="group inline-flex items-center gap-3 bg-[#747A45] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#8A9055]"
                >
                  <span>View my work</span>

                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.8}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>

                <a
                  href="#contact"
                  className="group inline-flex items-center gap-3 border border-[#36322E] px-6 py-3.5 text-sm font-semibold text-[#F3EFE6] transition-all duration-300 hover:-translate-y-1 hover:border-[#747A45]"
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

          {/* Bottom information */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute bottom-8 left-5 right-5 flex items-center justify-between sm:left-8 sm:right-8 lg:left-12 lg:right-12"
          >
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
              <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
              Available for opportunities
            </div>

            <a
              href="#work"
              className="hidden items-center gap-3 text-xs uppercase tracking-[0.18em] text-[var(--muted)] transition-colors duration-300 hover:text-[var(--foreground)] sm:flex"
            >
              Scroll to explore
              <ArrowDown size={14} strokeWidth={1.5} />
            </a>
          </motion.div>
        </div>
      </section>
      <Work/>
      <AboutPreview/>
    </main>
  );
}

export default Home;