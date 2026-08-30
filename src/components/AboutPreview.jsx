import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const stack = [
  {
    category: "Frontend",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    technologies: ["Node.js", "Express", "MongoDB"],
  },
  {
    category: "Tools",
    technologies: ["Git", "GitHub", "Postman", "Vercel", "Render"],
  },
];

function AboutPreview() {
  return (
    <section
      id="about"
      className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-20"
        >
          {/* Brand statement */}
          <p className="whitespace-nowrap font-serif text-[clamp(2.5rem,9.5vw,22rem)] leading-none tracking-[-0.05em] text-[var(--surface)] transition-opacity duration-700 hover:opacity-80">
            RihannahCodes
          </p>

          {/* About content */}
          <div>
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-light)]">
              A little about me
            </p>

            <h2 className="max-w-4xl font-serif text-4xl leading-[1.05] tracking-[-0.035em] text-[var(--foreground)] sm:text-5xl lg:text-6xl">
              I like making things that are
              <span className="italic text-[var(--muted)]">
                {" "}
                useful, clear, and worth coming back to.
              </span>
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-7 text-[var(--muted)]">
              I'm Rihanat, a full-stack web developer working with the MERN
              stack. I enjoy taking an idea from that first rough thought
              all the way to something people can actually use.
            </p>

            <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--muted)]">
              I'm especially interested in the details, how something feels
              to navigate, how the interface responds, and how the code
              behind it holds everything together.
            </p>

            <Link
              to="/about"
              className="group mt-9 inline-flex items-center gap-2 text-sm font-semibold text-[var(--foreground)]"
            >
              Get to know me

              <ArrowUpRight
                size={16}
                strokeWidth={1.7}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </div>

          {/* Current focus + Stack */}
          <div className="flex flex-col justify-end lg:pb-2">
            {/* Right now */}
            <div className="mb-10">
              <p className="mb-3 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                Right now
              </p>

              <p className="text-lg leading-7 text-[var(--foreground)]">
                Learning, building, experimenting, and finding better ways to
                solve problems.
              </p>
            </div>

            {/* Tech stack */}
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                Tools I work with
              </p>

              {stack.map(({ category, technologies }) => (
                <div
                  key={category}
                  className="mb-5 last:mb-0"
                >
                  <p className="mb-3 text-xs font-medium text-[var(--muted)]">
                    {category}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-[var(--border)] px-3 py-1.5 text-xs text-[var(--foreground)] transition-colors duration-300 hover:border-[var(--accent)]"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutPreview;