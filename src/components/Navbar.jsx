import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Work", path: "/#work" },
  { label: "About", path: "/#about" },
  { label: "Contact", path: "/#contact" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 px-5 py-5 md:px-8"
      >
        <motion.nav
          animate={{
            maxWidth: scrolled ? "980px" : "1200px",
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className={`mx-auto flex items-center justify-between px-1 transition-all duration-400 ${
            scrolled
              ? "rounded-sm border border-[var(--border)] bg-[var(--surface)]/85 px-4 py-3 backdrop-blur-md md:px-5"
              : "py-1"
          }`}
        >
          {/* Logo */}
          <NavLink
            to="/"
            aria-label="RihannahCodes home"
            className="relative z-10 flex items-center"
          >
            <img
              src="/src/assets/branding/rc-logo.png"
              alt="RC"
              className="h-8 w-auto"
            />
          </NavLink>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.label}
                to={link.path}
                className="text-sm font-medium text-[var(--muted)] transition-colors duration-300 hover:text-[var(--foreground)]"
              >
                {link.label}
              </NavLink>
            ))}

            <a
              href="#contact"
              className="group flex items-center gap-1.5 text-sm font-medium text-[var(--foreground)]"
            >
              Let's talk
              <ArrowUpRight
                size={15}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="relative z-10 flex h-10 w-10 items-center justify-center text-[var(--foreground)] md:hidden"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </motion.nav>
      </motion.header>

      {/* Mobile navigation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[var(--background)] md:hidden"
          >
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ delay: 0.05 }}
              className="flex h-full flex-col justify-center px-8"
            >
              <p className="mb-8 text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                Navigation
              </p>

              <div className="flex flex-col">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.label}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      delay: 0.1 + index * 0.08,
                      duration: 0.4,
                    }}
                  >
                    <NavLink
                      to={link.path}
                      onClick={() => setMenuOpen(false)}
                      className="block border-b border-[var(--border)] py-5 font-serif text-4xl text-[var(--foreground)]"
                    >
                      {link.label}
                    </NavLink>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;