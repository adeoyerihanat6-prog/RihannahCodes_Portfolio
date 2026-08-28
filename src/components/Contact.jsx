import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Github, Linkedin } from "lucide-react";
import { FaWhatsapp, FaXTwitter } from "react-icons/fa6";
import emailjs from "@emailjs/browser";

const CONTACT_HANDLES = [
  {
    id: "email",
    label: "Email",
    value: "adeoyerihanat6@gmail.com",
    href: "mailto:adeoyerihanat6@gmail.com",
    icon: Mail,
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    value: "Chat with me",
    href: "https://wa.me/2349015162388",
    icon: FaWhatsapp,
  },
  {
    id: "github",
    label: "GitHub",
    value: "adeoyerihanat6-prog",
    href: "https://github.com/adeoyerihanat6-prog",
    icon: Github,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    value: "Rihanat Adeoye",
    href: "https://www.linkedin.com/in/rihanat-adeoye-2a5059395",
    icon: Linkedin,
  },
  {
    id: "twitter",
    label: "X / Twitter",
    value: "@riha66076",
    href: "https://x.com/riha66076",
    icon: FaXTwitter,
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
      className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24"
        >
          {/* Intro */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--accent-light)]">
                Get in touch
              </p>

              <h2 className="max-w-xl font-serif text-5xl leading-[0.98] tracking-[-0.04em] text-[var(--foreground)] sm:text-6xl lg:text-7xl">
                Have something
                <span className="italic text-[var(--muted)]">
                  {" "}
                  worth building?
                </span>
              </h2>

              <p className="mt-7 max-w-md text-base leading-7 text-[var(--muted)]">
                I'm open to opportunities, collaborations, and interesting
                ideas. If you think we could build something worthwhile,
                I'd love to hear from you.
              </p>
            </div>

            {/* Social links */}
            <div className="mt-12 lg:mt-20">
              <p className="mb-5 text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                Find me online
              </p>

              <div className="flex flex-wrap gap-x-6 gap-y-4">
                {CONTACT_HANDLES.slice(1).map((handle) => {
                  const Icon = handle.icon;

                  return (
                    <a
                      key={handle.id}
                      href={handle.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={handle.label}
                      className="group flex items-center gap-2 text-sm text-[var(--muted)] transition-colors duration-300 hover:text-[var(--foreground)]"
                    >
                      <Icon size={15} strokeWidth={1.7} />

                      <span>{handle.label}</span>

                      <ArrowUpRight
                        size={13}
                        strokeWidth={1.7}
                        className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                      />
                    </a>
                  );
                })}
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
              <div className="space-y-7">
                <div>
                  <label
                    htmlFor="from_name"
                    className="mb-2 block text-xs uppercase tracking-[0.16em] text-[var(--muted)]"
                  >
                    Name
                  </label>

                  <input
                    id="from_name"
                    type="text"
                    name="from_name"
                    required
                    placeholder="Your name"
                    className="w-full border-b border-[var(--border)] bg-transparent px-0 py-3 text-sm text-[var(--foreground)] outline-none transition-colors duration-300 placeholder:text-[var(--muted)] focus:border-[var(--accent)]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="reply_to"
                    className="mb-2 block text-xs uppercase tracking-[0.16em] text-[var(--muted)]"
                  >
                    Email
                  </label>

                  <input
                    id="reply_to"
                    type="email"
                    name="reply_to"
                    required
                    placeholder="you@example.com"
                    className="w-full border-b border-[var(--border)] bg-transparent px-0 py-3 text-sm text-[var(--foreground)] outline-none transition-colors duration-300 placeholder:text-[var(--muted)] focus:border-[var(--accent)]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs uppercase tracking-[0.16em] text-[var(--muted)]"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    placeholder="Tell me a little about what you're building..."
                    className="w-full resize-none border-b border-[var(--border)] bg-transparent px-0 py-3 text-sm leading-6 text-[var(--foreground)] outline-none transition-colors duration-300 placeholder:text-[var(--muted)] focus:border-[var(--accent)]"
                  />
                </div>
              </div>

              {submitStatus === "success" && (
                <p className="mt-5 text-sm text-[var(--accent-light)]">
                  Message sent successfully. I'll get back to you soon.
                </p>
              )}

              {submitStatus === "error" && (
                <p className="mt-5 text-sm text-red-400">
                  Something went wrong. Please try again or contact me
                  directly.
                </p>
              )}

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

        {/* Email */}
        <motion.a
          href="mailto:adeoyerihanat6@gmail.com"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="group mt-16 flex w-fit items-center gap-2 text-sm text-[var(--muted)] transition-colors duration-300 hover:text-[var(--foreground)]"
        >
          <Mail size={15} strokeWidth={1.7} />

          <span>adeoyerihanat6@gmail.com</span>

          <ArrowUpRight
            size={14}
            strokeWidth={1.7}
            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </motion.a>
      </div>
    </section>
  );
}

export default Contact;