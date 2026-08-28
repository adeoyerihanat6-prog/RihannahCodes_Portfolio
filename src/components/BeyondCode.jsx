import { motion } from "framer-motion";
import { ArrowUpRight, BookOpen, Code2, Lightbulb } from "lucide-react";

const interests = [
  {
    icon: BookOpen,
    title: "Reading",
    text: "Books, stories, and getting completely lost in a good one.",
  },
  {
    icon: Code2,
    title: "Building",
    text: "Side projects, experiments, and ideas that refuse to stay ideas.",
  },
  {
    icon: Lightbulb,
    title: "Learning",
    text: "Exploring better ways to build, think, and solve problems.",
  },
];

function BeyondCode() {
  return (
    <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-3xl">
            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-light)]">
              Beyond the code
            </p>

            <h2 className="font-serif text-4xl leading-[1.05] tracking-[-0.035em] text-[var(--foreground)] sm:text-5xl lg:text-6xl">
              There's more to me than
              <span className="italic text-[var(--muted)]">
                {" "}
                the code.
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-7 text-[var(--muted)]">
              When I'm not building something, I'm probably reading,
              experimenting with a new idea, or convincing myself that
              redesigning something is somehow productive.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {interests.map((interest, index) => {
              const Icon = interest.icon;

              return (
                <motion.div
                  key={interest.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  whileHover={{ y: -6 }}
                  className="group rounded-2xl bg-[var(--surface)] p-6 transition-shadow duration-300 hover:shadow-lg"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--background)] text-[var(--accent-light)]">
                    <Icon size={18} strokeWidth={1.6} />
                  </div>

                  <h3 className="mt-8 font-serif text-2xl text-[var(--foreground)]">
                    {interest.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[var(--muted)]">
                    {interest.text}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-12 flex flex-col gap-4 rounded-2xl bg-[var(--foreground)] p-7 sm:flex-row sm:items-center sm:justify-between sm:p-8"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                Currently curious about
              </p>

              <p className="mt-3 text-sm leading-6 text-[var(--background)] sm:text-base">
                Better UI · Full-stack architecture · New ideas · Good books
              </p>
            </div>

            <a
              href="/about"
              className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-[var(--background)]"
            >
              More about me
              <ArrowUpRight
                size={16}
                strokeWidth={1.7}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default BeyondCode;