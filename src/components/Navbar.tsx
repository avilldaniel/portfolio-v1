import Link from "next/link";
import { useRouter } from "next/router";
import sx from "../styles/Nav.module.css";
import { useMyStore } from "../utils/zustand-store";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMoonStars,
  IconSun,
} from "@tabler/icons";

const Navbar = () => {
  // Zustand
  const theme = useMyStore((state) => state.theme);
  const setTheme = useMyStore((state) => state.setTheme);
  const burger = useMyStore((state) => state.burger);
  const setBurger = useMyStore((state) => state.setBurger);

  // useRouter() to style current nav link
  const router = useRouter();

  return (
    <div className="container" style={{ padding: "2em 2em 5em" }}>
      <header className={sx.content}>
        {/* Light/dark toggle + Hamburger || Name */}
        <section className={sx["theme-toggle-layer"]}>
          <button
            className={sx["theme-toggle-btn"]}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? (
              <IconSun size={30} />
            ) : (
              <IconMoonStars size={30} />
            )}
          </button>
          {/* <h1 className={sx.name}>Daniel Villegas</h1> */}
          <h1 className={sx.name}>
            <Link href="/">Daniel Villegas</Link>
          </h1>

          <button
            className={`
              ${sx["burger-toggle-btn"]}
              ${!burger && sx["nav-open"]}
              ${theme === "light" && sx["light-theme-hamburger"]}
            `}
            onClick={() => setBurger(!burger)}
            aria-controls={sx.nav}
            aria-expanded={burger ? "false" : "true"}
          >
            <span
              className={`
                ${sx.hamburger}`}
            ></span>
            {/* Invisible menu for accessibility */}
            <span style={{ display: "none" }}>Menu</span>
          </button>
        </section>

        {/* Nav menu */}
        <nav>
          <ul
            className={`
              ${sx.nav}
              ${!burger && sx["nav-open"]}
            `}
          >
            {/* Nav links */}
            <div className={sx["nav-links"]}>
              <li
                className={`${router.pathname === "/" && sx["current-link"]}`}
              >
                <Link href="/">Home</Link>
              </li>
              <li
                className={`${
                  router.pathname === "/about" && sx["current-link"]
                }`}
              >
                <Link href="/about">About Me</Link>
              </li>
              <li
                className={`${
                  router.pathname === "/contact" && sx["current-link"]
                }`}
              >
                <Link href="/contact">Contact</Link>
              </li>
            </div>

            {/* Socials */}
            <div className={sx.socials}>
              <li>
                <a
                  href="https://github.com/avilldaniel"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconBrandGithub size={32} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/daniel-villegas-aira"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconBrandLinkedin size={32} />
                </a>
              </li>
            </div>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
