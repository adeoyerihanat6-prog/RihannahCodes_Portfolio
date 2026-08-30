import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import emailjs from "@emailjs/browser";

const CONTACT_HANDLES = [
  {
    id: "whatsapp",
    label: "WhatsApp",
    value: "Chat with me",
    href: "https://wa.me/2349015162388",
  },
  {
    id: "github",
    label: "GitHub",
    value: "adeoyerihanat6-prog",
    href: "https://github.com/adeoyerihanat6-prog",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "Rihanat Adeoye",
    href: "https://www.linkedin.com/in/rihanat-adeoye-2a5059395",
  },
  {
    id: "twitter",
    label: "X / Twitter",
    value: "@RihannahCodes",
    href: "https://x.com/RihannahCodes",
  },
];

function Contact() {
  const formRef = useRef(null);
  const [isSending, setIsSending] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSending(true);
    setSubmitStatus(null);

    emailjs
      .sendForm(
        "service_k9z1h9y",
        "template_s80jfmf",
        formRef.current,
        "a-tDo9efnHJl9uuNn"
      )
      .then(() => {
        setIsSending(false);
        setSubmitStatus("success");
        formRef.current.reset();
      })
      .catch((error) => {
        console.error("EmailJS Transfer Failure:", error);
        setIsSending(false);
        setSubmitStatus("error");
      });
  };

  return (
    <section
      id="contact"
      className="px-5 py-24 sm:px-8 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24"
        >
          {/* Intro */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.25em] text-[var(--accent-light)]">
                Get in touch
              </p>

              <h2 className="max-w-xl font-serif text-5xl leading-[0.98] tracking-[-0.04em] text-[var(--foreground)] sm:text-6xl lg:text-7xl">
                Let's build
                <span className="block italic text-[var(--muted)]">
                  something good.
                </span>
              </h2>

              <p className="mt-7 max-w-md text-sm leading-7 text-[var(--muted)] sm:text-base">
                Have a project in mind, an opportunity to discuss, or
                something interesting you think I should see? Send me a
                message.
              </p>
            </div>

            {/* Contact details */}
            <div className="mt-14 lg:mt-24">
              <a
                href="mailto:adeoyerihanat6@gmail.com"
                className="group flex w-fit items-center gap-2 text-sm text-[var(--muted)] transition-colors duration-300 hover:text-[var(--foreground)]"
              >
                <Mail size={16} strokeWidth={1.6} />

                <span>adeoyerihanat6@gmail.com</span>

                <ArrowUpRight
                  size={14}
                  strokeWidth={1.7}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>

              {/* Social links */}
              <div className="mt-8 flex flex-wrap gap-x-7 gap-y-4">
                {CONTACT_HANDLES.map((handle) => (
                  <a
                    key={handle.id}
                    href={handle.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-1.5 text-sm text-[var(--muted)] transition-colors duration-300 hover:text-[var(--foreground)]"
                  >
                    {handle.label}

                    <ArrowUpRight
                      size={13}
                      strokeWidth={1.7}
                      className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="rounded-3xl bg-[var(--surface)] p-6 sm:p-8 lg:p-10"
          >
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="space-y-8">
                {/* Name */}
                <div>
                  <label
                    htmlFor="from_name"
                    className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]"
                  >
                    Name
                  </label>

                  <input
                    id="from_name"
                    type="text"
                    name="from_name"
                    required
                    placeholder="Your name"
                    className="w-full border-b border-[var(--border)] bg-transparent px-0 py-3 text-sm text-[var(--foreground)] outline-none placeholder:text-[var(--muted)] focus:border-[var(--foreground)]"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="reply_to"
                    className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]"
                  >
                    Email
                  </label>

                  <input
                    id="reply_to"
                    type="email"
                    name="reply_to"
                    required
                    placeholder="you@example.com"
                    className="w-full border-b border-[var(--border)] bg-transparent px-0 py-3 text-sm text-[var(--foreground)] outline-none placeholder:text-[var(--muted)] focus:border-[var(--foreground)]"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    required
                    placeholder="Tell me a little about what you're building..."
                    className="w-full resize-none border-b border-[var(--border)] bg-transparent px-0 py-3 text-sm leading-6 text-[var(--foreground)] outline-none placeholder:text-[var(--muted)] focus:border-[var(--foreground)]"
                  />
                </div>
              </div>

              {/* Status */}
              {submitStatus === "success" && (
                <p className="mt-6 text-sm text-[var(--accent-light)]">
                  Message sent successfully. I'll get back to you soon.
                </p>
              )}

              {submitStatus === "error" && (
                <p className="mt-6 text-sm text-red-400">
                  Something went wrong. Please try again or contact me
                  directly.
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={isSending}
                className="group mt-8 inline-flex items-center gap-2 bg-[var(--foreground)] px-6 py-3.5 text-sm font-semibold text-[var(--background)] transition-all duration-300 hover:-translate-y-1 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSending ? "Sending..." : "Send message"}

                {!isSending && (
                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.8}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                )}
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;