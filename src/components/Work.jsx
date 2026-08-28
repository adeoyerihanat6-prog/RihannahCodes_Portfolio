import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import PROJECTS_DATA from "../data/projects";

function Work() {
  const featuredProjects = PROJECTS_DATA.slice(0, 3);

  return (
    <section
      id="work"
      className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent-light)]">
              Selected Work
            </p>

            <h2 className="font-serif text-5xl leading-none tracking-[-0.035em] text-[var(--foreground)] sm:text-6xl lg:text-7xl">
              Things I've built.
            </h2>
          </div>

          <p className="max-w-xs text-sm leading-6 text-[var(--muted)]">
            A selection of projects I've designed, developed, and brought
            to life across the web.
          </p>
        </motion.div>

        <div className="space-y-16">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              className="group"
            >
              <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
                {/* Project information */}
                <div>
                  <p className="mb-3 text-xs uppercase tracking-[0.18em] text-[var(--accent-light)]">
                    {project.category}
                  </p>

                  <h3 className="font-serif text-3xl tracking-[-0.02em] text-[var(--foreground)] sm:text-4xl">
                    {project.title}
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-6 text-[var(--muted)]">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-x-3 gap-y-2">
                    {project.technologies.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] uppercase tracking-[0.12em] text-[var(--muted)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex items-center gap-5">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="group/link flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--foreground)]"
                    >
                      Live site

                      <ArrowUpRight
                        size={14}
                        strokeWidth={1.8}
                        className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
                      />
                    </a>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-semibold uppercase tracking-[0.12em] text-[var(--muted)] transition-colors duration-300 hover:text-[var(--foreground)]"
                    >
                      GitHub
                    </a>
                  </div>
                </div>

                {/* Project image */}
                <motion.a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="relative block overflow-hidden bg-[var(--surface)]"
                >
                  <div className="aspect-[16/10] overflow-hidden">
                    <img
                      src={project.image}
                      alt={`${project.title} project screenshot`}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                    />
                  </div>

                  <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-500 group-hover:bg-black/5" />
                </motion.a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View all projects */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 flex justify-center"
        >
          <Link
            to="/projects"
            className="group inline-flex items-center gap-3 border border-[var(--border)] px-7 py-4 text-sm font-semibold text-[var(--foreground)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:bg-[var(--surface)]"
          >
            View all projects

            <ArrowUpRight
              size={17}
              strokeWidth={1.7}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Work;