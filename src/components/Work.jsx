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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-14 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between lg:mb-20"
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

        {/* Projects */}
        <div className="space-y-20 lg:space-y-28">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group"
            >
              <div className="grid gap-8 lg:grid-cols-[0.8fr_1fr] lg:items-center lg:gap-14">
                {/* Project image */}
                <motion.a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                  className={`relative order-1 block max-w-2xl overflow-hidden bg-[var(--surface)] ${
                    index % 2 !== 0 ? "lg:order-1" : "lg:order-2"
                  }`}
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

                {/* Project information */}
                <div
                  className={`order-2 ${
                    index % 2 !== 0 ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent-light)]">
                    {project.category}
                  </p>

                  <h3 className="font-serif text-3xl tracking-[-0.02em] text-[var(--foreground)] sm:text-4xl">
                    {project.title}
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-7 text-[var(--muted)]">
                    {project.description}
                  </p>

                  {/* Technologies */}
                   <div className="mt-7 flex flex-wrap gap-2">
  {project.technologies.map((technology) => (
    <span
      key={technology}
      className="rounded-full border border-[var(--border)] px-3 py-1.5 text-[9px] font-medium tracking-[0.08em] text-[var(--muted)] transition-all duration-300 hover:border-[var(--muted)] hover:text-[var(--foreground)]"
    >
      {technology}
    </span>
  ))}
</div>

                  {/* Links */}
                  <div className="mt-6 flex items-center gap-5">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="group/link inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-[var(--foreground)]"
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
              </div>
            </motion.article>
          ))}
        </div>

        {/* View all projects */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-20 flex justify-center lg:mt-24"
        >
          <Link
            to="/projects"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-[var(--foreground)]"
          >
            View all projects

            <ArrowUpRight
              size={16}
              strokeWidth={1.7}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default Work;