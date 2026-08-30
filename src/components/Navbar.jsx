
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  BriefcaseBusiness,
  CircleUserRound,
  Mail,
  Menu,
  X,
} from "lucide-react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import rcLogo from "../assets/branding/rc-logo.png";

const navLinks = [
  {
    label: "Work",
    path: "/projects",
    icon: BriefcaseBusiness,
  },
  {
    label: "About",
    path: "/about",
    icon: CircleUserRound,
  },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const goToContact = () => {
    closeMenu();

    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        document.getElementById("contact")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    } else {
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      {/* Navbar */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed inset-x-0 top-0 z-50 px-5 py-5 sm:px-7 lg:px-10"
      >
        <motion.nav
          animate={{
            maxWidth: scrolled ? "960px" : "1280px",
          }}
          transition={{
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
          className={`mx-auto flex items-center justify-between transition-all duration-300 ${
            scrolled
              ? "rounded-md border border-[var(--border)] bg-[var(--surface)]/90 px-4 py-3 shadow-lg shadow-black/10 backdrop-blur-xl sm:px-5"
              : "px-1 py-2"
          }`}
        >
          {/* Logo */}
          <Link
            to="/"
            aria-label="RihannahCodes home"
            className="relative z-10 flex shrink-0 items-center"
          >
            <img
              src={rcLogo}
              alt="RihannahCodes"
              className="h-10 w-auto object-contain sm:h-11"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center md:flex">
            <div className="flex items-center gap-7 lg:gap-9">
              {navLinks.map((link) => (
                <NavLink
                  key={link.label}
                  to={link.path}
                  className="group relative py-2 text-sm font-medium text-[var(--muted)] transition-colors duration-300 hover:text-[var(--foreground)]"
                >
                  {link.label}

                  <span className="absolute bottom-0 left-0 h-px w-0 bg-[var(--accent)] transition-all duration-300 group-hover:w-full" />
                </NavLink>
              ))}

              {/* Contact */}
              <button
                type="button"
                onClick={goToContact}
                className="group relative flex items-center gap-1.5 py-2 text-sm font-medium text-[var(--muted)] transition-colors duration-300 hover:text-[var(--foreground)]"
              >
                Contact

                <span className="absolute bottom-0 left-0 h-px w-0 bg-[var(--accent)] transition-all duration-300 group-hover:w-full" />
              </button>
            </div>

            <div className="ml-9 h-5 w-px bg-[var(--border)]" />

            {/* Let's Talk */}
            <button
              type="button"
              onClick={goToContact}
              className="group ml-7 flex items-center gap-1.5 text-sm font-medium text-[var(--foreground)] transition-colors duration-300 hover:text-[var(--accent-light)]"
            >
              Let's talk

              <ArrowUpRight
                size={15}
                strokeWidth={1.8}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            className="relative z-10 flex h-10 w-10 items-center justify-center text-[var(--foreground)] md:hidden"
          >
            <Menu size={22} strokeWidth={1.7} />
          </button>
        </motion.nav>
      </motion.header>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.button
              type="button"
              aria-label="Close navigation menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeMenu}
              className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm md:hidden"
            />

            {/* Side Panel */}
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="fixed right-0 top-0 z-[70] flex h-dvh w-[88%] max-w-sm flex-col border-l border-[var(--border)] bg-[var(--surface)] px-6 py-6 md:hidden"
            >
              {/* Panel Header */}
              <div className="flex items-center justify-between">
                <Link
                  to="/"
                  onClick={closeMenu}
                  aria-label="RihannahCodes home"
                >
                  <img
                    src={rcLogo}
                    alt="RihannahCodes"
                    className="h-10 w-auto object-contain"
                  />
                </Link>

                <button
                  type="button"
                  onClick={closeMenu}
                  aria-label="Close navigation menu"
                  className="flex h-10 w-10 items-center justify-center border border-[var(--border)] text-[var(--foreground)] transition-colors duration-300 hover:bg-[var(--background)]"
                >
                  <X size={19} strokeWidth={1.7} />
                </button>
              </div>

              {/* Navigation */}
              <div className="mt-20">
                <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--muted)]">
                  Navigation
                </p>

                <div className="flex flex-col">
                  {navLinks.map((link, index) => {
                    const Icon = link.icon;

                    return (
                      <motion.div
                        key={link.label}
                        initial={{ opacity: 0, x: 25 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.15 + index * 0.1,
                          duration: 0.4,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        <NavLink
                          to={link.path}
                          onClick={closeMenu}
                          className="group flex items-center justify-between border-b border-[var(--border)] py-5"
                        >
                          <span className="flex items-center gap-4">
                            <Icon
                              size={19}
                              strokeWidth={1.5}
                              className="text-[var(--muted)] transition-colors duration-300 group-hover:text-[var(--accent)]"
                            />

                            <span className="font-serif text-3xl text-[var(--foreground)]">
                              {link.label}
                            </span>
                          </span>

                          <ArrowUpRight
                            size={18}
                            strokeWidth={1.6}
                            className="text-[var(--muted)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--accent)]"
                          />
                        </NavLink>
                      </motion.div>
                    );
                  })}

                  {/* Mobile Contact */}
                  <motion.button
                    type="button"
                    onClick={goToContact}
                    initial={{ opacity: 0, x: 25 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.35,
                      duration: 0.4,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="group flex w-full items-center justify-between border-b border-[var(--border)] py-5 text-left"
                  >
                    <span className="flex items-center gap-4">
                      <Mail
                        size={19}
                        strokeWidth={1.5}
                        className="text-[var(--muted)] transition-colors duration-300 group-hover:text-[var(--accent)]"
                      />

                      <span className="font-serif text-3xl text-[var(--foreground)]">
                        Contact
                      </span>
                    </span>

                    <ArrowUpRight
                      size={18}
                      strokeWidth={1.6}
                      className="text-[var(--muted)] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--accent)]"
                    />
                  </motion.button>
                </div>
              </div>

              {/* Mobile CTA */}
              <motion.button
                type="button"
                onClick={goToContact}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 0.4,
                }}
                className="group mt-auto flex w-full items-center justify-between border border-[var(--border)] px-5 py-4 text-left text-sm font-medium text-[var(--foreground)] transition-colors duration-300 hover:border-[var(--accent)] hover:bg-[var(--background)]"
              >
                Let's talk

                <ArrowUpRight
                  size={17}
                  strokeWidth={1.7}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </motion.button>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
