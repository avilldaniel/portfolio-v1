import type { NextPage } from "next";
import sx from "../styles/Home.module.css";
import aboutSx from "../styles/About.module.css";
import gifSx from "../styles/Gif.module.css";
import { useMyStore } from "../utils/zustand-store";
import Image from "next/image";
import GifSlider from "../components/GifSlider";
import Line from "../components/Line";
import cov from "../../public/gifs/cov-tracker.gif";

const Home: NextPage = () => {
  const theme = useMyStore((state) => state.theme);
  const badgeStyle = {
    background: theme === "dark" ? "#f2f2f2" : "#354F52",
    color: theme === "dark" ? "#2f3e46" : "#f2f2f2",
  };
  return (
    <div className="container">
      <div className="content">
        <h1 className={sx.heading}>Projects</h1>

        {/* PulluP Fitness */}
        <section className={sx.proj}>
          <div className={sx["proj-demo"]}>
            <h1>🏋️ PulluP Fitness</h1>
            <GifSlider />

            <h4>
              <a
                // href="https://pullup-app.vercel.app/u/signin"
                href="https://www.pullup.at"
                target="_blank"
                rel="noopener noreferrer"
              >
                🔗 Project Link
              </a>
              <a
                href="https://github.com/avilldaniel/pullup-fitness"
                target="_blank"
                rel="noopener noreferrer"
              >
                📝 GitHub Repo
              </a>
            </h4>
          </div>

          <summary className={sx["proj-desc"]}>
            I built this app after having realized that my good ol' iOS Notes
            app no longer provided me with the user experience to exercise
            efficiently at the gym. PulluP Fitness is a web app for those who
            wish to track their fitness progression! This fullstack project
            includes the following features:
            <br />
            <ul style={{ listStyle: "square", paddingLeft: "40px" }}>
              <li>
                Passwordless sign-in as an authenticated user with NextAuth.
              </li>
              <li>
                Query a live database in order to create, update, and modify
                exercise stats such as weight, repetitions, and number of sets.
              </li>
              <li>Curate diverse workouts across several muscle groups.</li>
              <li>Plus more to come!</li>
            </ul>
            {/* Tech used */}
            <div className={aboutSx.badges}>
              <article style={badgeStyle}>Next.js</article>
              <article style={badgeStyle}>TypeScript</article>
              <article style={badgeStyle}>Amazon RDS</article>
              <article style={badgeStyle}>PostgreSQL + Prisma</article>
              <article style={badgeStyle}>React-Query</article>
              <article style={badgeStyle}>Zustand</article>
              <article style={badgeStyle}>React-Hook-Form</article>
              <article style={badgeStyle}>Zod</article>
              <article style={badgeStyle}>Mantine</article>
            </div>
          </summary>
        </section>

        <Line />

        {/* Business Landing Page */}
        <section className={sx.proj}>
          <div className={sx["proj-demo"]}>
            {/* GIF goes here */}
            <h4>
              <a
                href="https://www.pullup.at"
                target="_blank"
                rel="noopener noreferrer"
              >
                🔗 Project Link
              </a>
              <a
                href="https://github.com/avilldaniel/barbershop-ariel"
                target="_blank"
                rel="noopener noreferrer"
              >
                📝 GitHub Repo
              </a>
            </h4>
          </div>

          <summary className={sx["proj-desc"]}>
            A landing page for a local barber💈! A big focus for me when
            building this project was design and responsiveness. With a
            mobile-first design pattern, my goal was to make sure the site was
            smooth on mobile devices, whilst also making sure the app did not
            break when scaling to larger viewports. My favorite part of the
            project was creating the navigation bar through vanilla CSS. It also
            includes a contact section, allowing visitors to send a message
            which will then be re-directed to the business owner's email inbox.
            {/* Tech used */}
            <div className={aboutSx.badges}>
              <article style={badgeStyle}>Amazon S3</article>
              <article style={badgeStyle}>Next.js</article>
              <article style={badgeStyle}>TypeScript</article>
              <article style={badgeStyle}>React-Hook-Form</article>
              <article style={badgeStyle}>Zod</article>
              <article style={badgeStyle}>EmailJS</article>
              <article style={badgeStyle}>Vercel</article>
              <article style={badgeStyle}>Vanilla CSS</article>
            </div>
          </summary>
        </section>

        <Line />

        {/* COVID Stats */}
        <section className={sx.proj}>
          <div className={sx["proj-demo"]}>
            <h1>🌎 COVID-19 Tracker</h1>

            {/* GIF */}
            <div
              className={gifSx["container-slider"]}
              style={{ height: "fit-content" }}
            >
              <Image src={cov} alt="COVID-19 Tracker" />
            </div>
            <h4>
              <a
                href="https://a-covid-tracker.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                🔗 Project Link
              </a>
              <a
                href="https://github.com/avilldaniel/covid-tracker"
                target="_blank"
                rel="noopener noreferrer"
              >
                📝 GitHub Repo
              </a>
            </h4>
          </div>

          <summary className={sx["proj-desc"]}>
            The COVID-19 Tracker pulls recent data from the COVID pandemic and
            its impact on countries. Simply type a country into the input form
            and view the results! Note: Data from some countries are
            inaccessible; therefore, app will prompt user to select another
            country. I should have implemented a way to only render available
            countries within my Autocomplete text form.
            {/* Tech used */}
            <div className={aboutSx.badges}>
              <article style={badgeStyle}>Next.js</article>
              <article style={badgeStyle}>TypeScript</article>
              <article style={badgeStyle}>COVID-19 API</article>
              <article style={badgeStyle}>Faker.js</article>
              <article style={badgeStyle}>Chart.js</article>
            </div>
          </summary>
        </section>

        <Line />

        {/* To-Do App */}
        <section className={sx.proj}>
          <div className={sx["proj-demo"]}>
            {/* GIF goes here */}
            <h4>
              <a
                href="https://www.pullup.at"
                target="_blank"
                rel="noopener noreferrer"
              >
                🔗 Project Link
              </a>
              <a
                href="https://github.com/avilldaniel/pullup-fitness"
                target="_blank"
                rel="noopener noreferrer"
              >
                📝 GitHub Repo
              </a>
            </h4>
          </div>

          <summary className={sx["proj-desc"]}>
            I built this app after having realized that my good ol' iOS Notes
            app no longer provided me with the user experience to exercise
            efficiently at the gym. PulluP Fitness is a web app for those who
            wish to track their fitness progression! This fullstack project
            includes the following features:
            {/* Tech used */}
            <div className={aboutSx.badges}>
              <article style={badgeStyle}>Next.js</article>
              <article style={badgeStyle}>TypeScript</article>
              <article style={badgeStyle}>Amazon RDS</article>
              <article style={badgeStyle}>PostgreSQL + Prisma</article>
            </div>
          </summary>
        </section>

        <Line />

        {/* Tech News */}
        <section className={sx.proj}>
          <div className={sx["proj-demo"]}>
            {/* GIF goes here */}
            <h4>
              <a
                href="https://www.pullup.at"
                target="_blank"
                rel="noopener noreferrer"
              >
                🔗 Project Link
              </a>
              <a
                href="https://github.com/avilldaniel/pullup-fitness"
                target="_blank"
                rel="noopener noreferrer"
              >
                📝 GitHub Repo
              </a>
            </h4>
          </div>

          <summary className={sx["proj-desc"]}>
            I built this app after having realized that my good ol' iOS Notes
            app no longer provided me with the user experience to exercise
            efficiently at the gym. PulluP Fitness is a web app for those who
            wish to track their fitness progression! This fullstack project
            includes the following features:
            {/* Tech used */}
            <div className={aboutSx.badges}>
              <article style={badgeStyle}>Next.js</article>
              <article style={badgeStyle}>TypeScript</article>
              <article style={badgeStyle}>Amazon RDS</article>
              <article style={badgeStyle}>PostgreSQL + Prisma</article>
            </div>
          </summary>
        </section>
      </div>
    </div>
  );
};

export default Home;
