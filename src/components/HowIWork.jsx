import { motion } from "framer-motion";

const process = [
  {
    title: "Understand",
    description:
      "I start with the problem before jumping into the solution. Understanding what needs to be solved helps me build with more intention.",
  },
  {
    title: "Build",
    description:
      "I break the idea down into smaller pieces and turn it into something functional, keeping the experience simple and easy to use.",
  },
  {
    title: "Refine",
    description:
      "Once it works, I pay attention to the details — interactions, responsiveness, accessibility, and the little things that make an interface feel right.",
  },
  {
    title: "Learn",
    description:
      "Every project is an opportunity to understand something better. I experiment, make mistakes, and carry what I learn into the next thing I build.",
  },
];

function HowIWork() {
  return (
    <section className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-3xl"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent-light)]">
            How I work
          </p>

          <h2 className="font-serif text-5xl leading-[0.95] tracking-[-0.035em] text-[var(--foreground)] sm:text-6xl lg:text-7xl">
            Thoughtful work,
            <br />
            <span className="italic text-[var(--muted)]">
              from idea to interface.
            </span>
          </h2>

          <p className="mt-7 max-w-xl text-sm leading-7 text-[var(--muted)] sm:text-base">
            I like understanding the problem, building with purpose, and
            refining until the result feels simple, useful, and considered.
          </p>
        </motion.div>

        {/* Process */}
        <div className="mt-16 border-t border-[var(--border)] lg:mt-24">
          <div className="grid lg:grid-cols-4">
            {process.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="border-b border-[var(--border)] py-8 lg:border-b-0 lg:border-r lg:px-7 lg:py-10 first:lg:pl-0 last:lg:border-r-0 last:lg:pr-0"
              >
                <h3 className="font-serif text-3xl tracking-[-0.025em] text-[var(--foreground)] sm:text-4xl">
                  {item.title}
                </h3>

                <p className="mt-4 max-w-xs text-sm leading-7 text-[var(--muted)]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowIWork;