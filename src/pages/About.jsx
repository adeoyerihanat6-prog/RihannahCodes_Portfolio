import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Layers3, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { ArrowUp } from "lucide-react";

function About() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <main>
      <section className="px-5 pb-24 pt-28 sm:px-8 lg:px-12 lg:pb-32 lg:pt-32">
        <div className="mx-auto max-w-7xl">
          {/* Intro */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="max-w-5xl"
          >
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent-light)]">
              About
            </p>

            <h1 className="font-serif text-[clamp(3.5rem,9vw,7.5rem)] leading-[0.92] tracking-[-0.04em] text-[var(--foreground)]">
              I care about
              <br />
              <span className="italic text-[var(--muted)]">
                how things feel.
              </span>
            </h1>

            <p className="mt-10 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
              I'm Rihanat, a full-stack web developer who enjoys turning ideas
              into thoughtful, functional digital experiences. I work across
              the frontend and backend, with a particular interest in
              interfaces that feel intentional rather than simply functional.
            </p>
          </motion.div>

          {/* What I do */}
          <div className="mt-24 grid gap-14 lg:mt-32 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent-light)]">
                What I do
              </p>

              <h2 className="mt-5 font-serif text-4xl leading-tight tracking-[-0.03em] text-[var(--foreground)] sm:text-5xl">
                From interface
                <br />
                to infrastructure.
              </h2>
            </motion.div>

            <div className="grid gap-10 sm:grid-cols-3">
              {[
                {
                  icon: Code2,
                  title: "Frontend",
                  text: "Responsive interfaces with React, Tailwind CSS, and thoughtful interaction.",
                },
                {
                  icon: Layers3,
                  title: "Backend",
                  text: "REST APIs, authentication, databases, and the systems behind the interface.",
                },
                {
                  icon: Sparkles,
                  title: "Experience",
                  text: "I care about motion, hierarchy, responsiveness, and the small details users notice.",
                },
              ].map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                    }}
                  >
                    <Icon
                      size={22}
                      strokeWidth={1.5}
                      className="text-[var(--accent)]"
                    />

                    <h3 className="mt-5 text-sm font-semibold uppercase tracking-[0.12em] text-[var(--foreground)]">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                      {item.text}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Philosophy */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="mt-28 max-w-4xl lg:mt-40"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent-light)]">
              My approach
            </p>

            <p className="mt-6 font-serif text-3xl leading-[1.15] tracking-[-0.025em] text-[var(--foreground)] sm:text-4xl lg:text-5xl">
              Good development isn't just about making something work.
              <span className="italic text-[var(--muted)]">
                {" "}
                It's about making it make sense.
              </span>
            </p>
          </motion.div>

          {/* Tech */}
          <div className="mt-24 grid gap-10 lg:mt-32 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent-light)]">
                Toolkit
              </p>

              <h2 className="mt-4 font-serif text-4xl tracking-[-0.03em] text-[var(--foreground)] sm:text-5xl">
                The tools
                <br />
                behind the work.
              </h2>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-5">
              {[
                "React",
                "JavaScript",
                "Tailwind CSS",
                "Node.js",
                "Express",
                "MongoDB",
                "Framer Motion",
                "Git",
                "GitHub",
                "REST APIs",
              ].map((tech) => (
                <span
                  key={tech}
                  className="text-sm text-[var(--muted)] transition-colors duration-300 hover:text-[var(--foreground)]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="mt-28 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between lg:mt-40"
          >
            <div>
              <p className="font-serif text-3xl tracking-[-0.025em] text-[var(--foreground)] sm:text-4xl">
                Want to see what I've built?
              </p>

              <p className="mt-2 text-sm text-[var(--muted)]">
                Explore the projects behind the work.
              </p>
            </div>

            <Link
              to="/projects"
              className="group inline-flex w-fit items-center gap-2 bg-[var(--background)] px-6 py-3.5 text-sm font-semibold text-[var(--background)] transition-transform duration-300 hover:-translate-y-1"
            >
              View projects
              <ArrowUpRight
                size={16}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
            <p className="whitespace-nowrap font-serif text-[clamp(2.5rem,9.5vw,22rem)] leading-none tracking-[-0.05em] text-[var(--surface)] transition-opacity duration-700 hover:opacity-80">
              RihannahCodes
            </p>

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
      </section>
    </main>
  );
}

export default About;