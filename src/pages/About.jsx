import { motion } from "framer-motion";
import {
  ArrowUp,
  ArrowUpRight,
  Code2,
  Layers3,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
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
];

const technologies = [
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
];

function About() {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <main className="min-h-screen">
      {/* Intro */}
      <section className="px-5 pb-24 pt-28 sm:px-8 lg:px-12 lg:pb-36 lg:pt-36">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent-light)]">
              About
            </p>

            <h1 className="max-w-5xl font-serif text-[clamp(3.5rem,8vw,8rem)] leading-[0.9] tracking-[-0.05em] text-[var(--foreground)]">
              I care about
              <br />
              <span className="italic text-[var(--muted)]">
                how things feel.
              </span>
            </h1>

            <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_0.65fr] lg:gap-24">
              <p className="max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
                I'm Rihanat, a full-stack web developer who enjoys turning
                ideas into thoughtful, functional digital experiences. I work
                across the frontend and backend, with a particular interest in
                interfaces that feel intentional rather than simply
                functional.
              </p>

              <p className="max-w-md text-sm leading-7 text-[var(--muted)] lg:pt-2">
                I enjoy paying attention to the details — how something feels
                to navigate, how an interface responds, and how the code behind
                it holds everything together.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What I do */}
      <section className="border-t border-[var(--border)] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent-light)]">
                What I do
              </p>

              <h2 className="mt-5 max-w-md font-serif text-4xl leading-[1.05] tracking-[-0.035em] text-[var(--foreground)] sm:text-5xl">
                From interface
                <br />
                to infrastructure.
              </h2>
            </motion.div>

            <div className="grid gap-12 sm:grid-cols-3 sm:gap-8">
              {services.map((item, index) => {
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
                    className="border-t border-[var(--border)] pt-5"
                  >
                    <Icon
                      size={21}
                      strokeWidth={1.5}
                      className="text-[var(--accent)]"
                    />

                    <h3 className="mt-5 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--foreground)]">
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
        </div>
      </section>

      {/* Philosophy */}
      <section className="px-5 py-24 sm:px-8 lg:px-12 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent-light)]">
              My approach
            </p>

            <p className="mt-7 max-w-5xl font-serif text-4xl leading-[1.08] tracking-[-0.035em] text-[var(--foreground)] sm:text-5xl lg:text-6xl">
              Good development isn't just about making something work.
              <span className="italic text-[var(--muted)]">
                {" "}
                It's about making it make sense.
              </span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Toolkit */}
      <section className="border-t border-[var(--border)] px-5 py-24 sm:px-8 lg:px-12 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent-light)]">
                Toolkit
              </p>

              <h2 className="mt-5 max-w-md font-serif text-4xl leading-[1.05] tracking-[-0.035em] text-[var(--foreground)] sm:text-5xl">
                The tools
                <br />
                behind the work.
              </h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-2 border-t border-[var(--border)] sm:grid-cols-3"
            >
              {technologies.map((tech, index) => (
                <div
                  key={tech}
                  className={`border-b border-[var(--border)] py-4 text-sm text-[var(--muted)] transition-colors duration-300 hover:text-[var(--foreground)] ${
                    index % 2 === 0
                      ? "border-r border-[var(--border)] pr-4 sm:border-r-0"
                      : "pl-4 sm:pl-0"
                  } ${
                    index % 3 !== 2
                      ? "sm:border-r sm:border-[var(--border)] sm:pr-4"
                      : ""
                  }`}
                >
                  {tech}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 pb-16 pt-24 sm:px-8 lg:px-12 lg:pb-20 lg:pt-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="border-t border-[var(--border)] pt-8"
          >
            <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                  Selected work
                </p>

                <h2 className="mt-4 max-w-xl font-serif text-4xl leading-tight tracking-[-0.03em] text-[var(--foreground)] sm:text-5xl">
                  Want to see what I've built?
                </h2>

                <p className="mt-3 text-sm text-[var(--muted)]">
                  Explore the projects behind the work.
                </p>
              </div>

              <Link
                to="/projects"
                className="group inline-flex w-fit items-center gap-3 border border-[var(--border)] px-6 py-3.5 text-sm font-semibold text-[var(--foreground)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:bg-[var(--surface)]"
              >
                View projects

                <ArrowUpRight
                  size={16}
                  strokeWidth={1.7}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>
          </motion.div>

          {/* Brand */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-24 overflow-hidden font-serif text-[clamp(3rem,11vw,10rem)] leading-none tracking-[-0.06em] text-[var(--surface)] lg:mt-32"
          >
            RihannahCodes
          </motion.p>

          {/* Back to top */}
          <div className="mt-10 flex justify-end border-t border-[var(--border)] pt-6">
            <button
              type="button"
              onClick={scrollTop}
              aria-label="Back to top"
              className="group flex cursor-pointer items-center gap-3"
            >
              <span className="text-xs uppercase tracking-[0.16em] text-[var(--muted)] transition-colors duration-300 group-hover:text-[var(--foreground)]">
                Back to top
              </span>

              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] text-[var(--foreground)] transition-all duration-500 group-hover:-translate-y-1 group-hover:border-[var(--accent)] group-hover:bg-[var(--surface)]">
                <ArrowUp
                  size={15}
                  strokeWidth={1.5}
                  className="transition-transform duration-500 group-hover:-translate-y-0.5"
                />
              </span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About;