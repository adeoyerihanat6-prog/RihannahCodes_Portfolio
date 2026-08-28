import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import PROJECTS_DATA from "../data/projects";

function Project() {
  return (
    <main className="min-h-screen px-5 pb-24 pt-32 sm:px-8 lg:px-12 lg:pt-36">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-3xl"
        >
          <Link
            to="/"
            className="group mb-10 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--muted)] transition-colors duration-300 hover:text-[var(--foreground)]"
          >
            <ArrowLeft
              size={14}
              strokeWidth={1.7}
              className="transition-transform duration-300 group-hover:-translate-x-1"
            />
            Back home
          </Link>

          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent-light)]">
            Selected Work
          </p>

          <h1 className="font-serif text-6xl leading-[0.92] tracking-[-0.04em] text-[var(--foreground)] sm:text-7xl lg:text-8xl">
            A collection of
            <br />
            <span className="italic text-[var(--muted)]">
              things I've built.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-sm leading-7 text-[var(--muted)] sm:text-base">
            From full-stack applications to smaller experiments, these are
            some of the projects that have shaped how I build for the web.
          </p>
        </motion.header>

        {/* Projects */}
        <section className="mt-24 space-y-24 lg:mt-32 lg:space-y-32">
          {PROJECTS_DATA.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.75,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group"
            >
              <div
                className={`grid gap-8 lg:grid-cols-2 lg:items-center lg:gap-16 ${
                  index % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                {/* Image */}
                <motion.a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.35 }}
                  className="relative block overflow-hidden bg-[var(--surface)]"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={project.image}
                      alt={`${project.title} project screenshot`}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/5" />
                </motion.a>

                {/* Information */}
                <div className="max-w-lg">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-light)]">
                    {project.category}
                  </p>

                  <h2 className="font-serif text-4xl tracking-[-0.025em] text-[var(--foreground)] sm:text-5xl">
                    {project.title}
                  </h2>

                  <p className="mt-5 text-sm leading-7 text-[var(--muted)]">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="text-[10px] uppercase tracking-[0.12em] text-[var(--muted)]"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="mt-8 flex items-center gap-6">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="group/link inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--foreground)]"
                    >
                      Live site

                      <ArrowUpRight
                        size={15}
                        strokeWidth={1.7}
                        className="transition-transform duration-300 group-hover/link:-translate-y-1 group-hover/link:translate-x-1"
                      />
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="group/link inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)] transition-colors duration-300 hover:text-[var(--foreground)]"
                    >
                      GitHub

                      <ArrowUpRight
                        size={14}
                        strokeWidth={1.7}
                        className="transition-transform duration-300 group-hover/link:-translate-y-1 group-hover/link:translate-x-1"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </section>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-32 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
              That's the collection.
            </p>

            <p className="mt-2 text-sm text-[var(--muted)]">
              More ideas are already in progress.
            </p>
          </div>

          <Link
            to="/"
            className="group inline-flex items-center gap-3 border border-[var(--border)] px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--foreground)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:bg-[var(--surface)]"
          >
            Back to home

            <ArrowUpRight
              size={15}
              strokeWidth={1.7}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </main>
  );
}

export default Project;