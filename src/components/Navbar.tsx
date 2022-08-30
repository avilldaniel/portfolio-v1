import Link from "next/link";
import sx from "../styles/Nav.module.css";
import { useMyStore } from "../utils/zustand-store";

const Navbar = () => {
  const burger = useMyStore((state) => state.burger);
  const setBurger = useMyStore((state) => state.setBurger);

  return (
    <div className="container" style={{ padding: "2em 0 5em" }}>
      <header className={sx.content}>
        {/* Light/dark toggle + Hamburger || Name */}
        <section className={sx["theme-toggle-layer"]}>
          <button>Theme</button>

          <h1 className={sx.name}>Daniel Villegas</h1>

          <button
            className={`
              ${sx["toggle-btn"]}
              ${!burger && sx["nav-open"]}
            `}
            onClick={() => setBurger(!burger)}
            aria-controls={sx.nav}
            aria-expanded={burger ? "false" : "true"}
          >
            <span className={sx.hamburger}></span>
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
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About Me</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>

            {/* Socials */}
            <li>
              <a
                href="https://github.com/avilldaniel"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
              >
                GitHub icon
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/daniel-villegas-aira"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white" }}
              >
                LinkedIn icon
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
