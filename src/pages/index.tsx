import type { NextPage } from "next";
import sx from "../styles/Home.module.css";
import aboutSx from "../styles/About.module.css";
import gifSx from "../styles/Gif.module.css";
import { useMyStore } from "../utils/zustand-store";
import Image from "next/image";
import GifSlider from "../components/GifSlider";
import Line from "../components/Line";

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
            {/* Title */}
            <h1>🏋️ PulluP Fitness</h1>

            {/* GIF */}
            <GifSlider />

            {/* Links */}
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
            If there is one project to view of mines, please let it be this one!
            I built this app after having realized that my good ol{`'`} iOS
            Notes app no longer provided me with the user experience to exercise
            efficiently at the gym. PulluP Fitness is a web app for those who
            wish to track their fitness progression! This full-stack project
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
              <li>Set consecutive timers for timed workouts such as abs.</li>
              <li>Plus more to come!</li>
            </ul>
            <h2>Things I learned</h2>
            <ul style={{ listStyle: "square", paddingLeft: "40px" }}>
              <li>
                Integrating an interactive & dynamic table was much harder than
                I thought. Creating the skeleton wasn’t too difficult (add a
                button that, when triggered, transforms table data fields to
                text input). The difficult part was figuring out how to combine
                it with complex state, form validation, db queries, and
                re-rendering.
              </li>
              <li>
                I also ran into lots of state management and prop drilling
                issues. Took a break and spent some time studying different ways
                of managing state, client vs server state, global vs local
                state, etc. Ended up utilizing Zustand (client state) and React
                Query (server state).
              </li>
              <li>
                It seems trying to re-invent the wheel with anything security
                related is a big no-no. Fortunately, NextAuth exists! It made
                passwordless authentication very easy to implement.
              </li>
            </ul>
            {/* Tech used */}
            <div className={`${aboutSx.badges} ${sx.badges}`}>
              <article style={badgeStyle}>Next.js</article>
              <article style={badgeStyle}>TypeScript</article>
              <article style={badgeStyle}>Amazon RDS</article>
              <article style={badgeStyle}>PostgreSQL + Prisma</article>
              <article style={badgeStyle}>NextAuth</article>
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
            {/* Title */}
            <h1>💈 Business Landing Page</h1>

            {/* GIF */}
            <div
              className={gifSx["container-slider"]}
              style={{ height: "fit-content" }}
            >
              <Image
                src="https://d1i3aib8o7oh3l.cloudfront.net/portfolio/onguard.gif"
                alt="Business landing page demo"
                layout="responsive"
                width={400}
                height={600}
              />
            </div>

            {/* Links */}
            <h4>
              <a
                href="https://onguardcuts.vercel.app/"
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
            A landing page for a local barber! A big focus for me when building
            this project was design and responsiveness. With a mobile-first
            design pattern, my goal was to make sure the site was smooth on
            mobile devices, whilst also making sure the app did not break when
            scaling to larger viewports. My favorite part of the project was
            creating the navigation bar through vanilla CSS. It also includes a
            contact section, allowing visitors to send a message which will then
            be re-directed to the business owner{`'`}s email inbox.
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
            {/* Title */}
            <h1>🌎 COVID-19 Tracker</h1>

            {/* GIF */}
            <div
              className={gifSx["container-slider"]}
              style={{ height: "fit-content" }}
            >
              <Image
                src="https://d1i3aib8o7oh3l.cloudfront.net/portfolio/cov-tracker.gif"
                alt="COVID-19 Tracker demo"
                layout="responsive"
                width={600}
                height={514}
              />
            </div>

            {/* Links */}
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
            and view the results! <br /> <br />
            <i style={{ fontSize: "0.9rem" }}>
              Note: Data from some countries are inaccessible; therefore, app
              will prompt user to select another country. I should have
              implemented a way to only render available countries within my
              Autocomplete text form.
            </i>
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
            {/* Title */}
            <h1>🧑‍🚀 To-do</h1>

            {/* GIF */}
            <div
              className={gifSx["container-slider"]}
              style={{ height: "fit-content" }}
            >
              <Image
                src="https://d1i3aib8o7oh3l.cloudfront.net/portfolio/to-do.gif"
                alt="To-do app demo"
                layout="responsive"
                width={1256}
                height={1075}
              />
            </div>

            {/* Links */}
            <h4>
              <a
                href="https://it-cosmo.vercel.app/todo"
                target="_blank"
                rel="noopener noreferrer"
              >
                🔗 Project Link
              </a>
              <a
                href="https://github.com/avilldaniel/cosmo-app-fe"
                target="_blank"
                rel="noopener noreferrer"
              >
                📝 GitHub Repo
              </a>
            </h4>
          </div>

          <summary className={sx["proj-desc"]}>
            No portfolio is complete without your very first To-do app. Built
            for the IT Assets team of the Cosmopolitan of Las Vegas, the app
            lets you create, delete, and edit a list of to-do{`'`}s. The list of
            to-do{`'`}s communicates with a live Node.js server connected to a
            PostgreSQL database deployed on Heroku.
            {/* Tech used */}
            <div className={aboutSx.badges}>
              <article style={badgeStyle}>React</article>
              <article style={badgeStyle}>React Router</article>
              <article style={badgeStyle}>Node + Express</article>
              <article style={badgeStyle}>Node-Postgres</article>
              <article style={badgeStyle}>Tailwind</article>
              <article style={badgeStyle}>CORS</article>
              <article style={badgeStyle}>Heroku</article>
              <article style={badgeStyle}>Vercel</article>
            </div>
          </summary>
        </section>

        <Line />

        {/* Tech News */}
        <section className={sx.proj}>
          <div className={sx["proj-demo"]}>
            {/* Title */}
            <h1>⌨️ Tech Globe</h1>

            {/* GIF */}
            <div
              className={gifSx["container-slider"]}
              style={{ height: "fit-content" }}
            >
              <Image
                src="https://d1i3aib8o7oh3l.cloudfront.net/portfolio/tech-globe.gif"
                alt="Tech news demo"
                layout="responsive"
                width={800}
                height={577}
              />
            </div>

            {/* Links */}
            <h4>
              <a
                href="https://tech-globe.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                🔗 Project Link
              </a>
              <a
                href="https://github.com/avilldaniel/nextjs-tech-news"
                target="_blank"
                rel="noopener noreferrer"
              >
                📝 GitHub Repo
              </a>
            </h4>
          </div>

          <summary className={sx["proj-desc"]}>
            A Next.js app that fetches the top 3 technology-related news
            headlines from a selected country. Data is fetched from the{" "}
            <a
              href="https://newsapi.org/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "underline" }}
            >
              News API
            </a>{" "}
            using Static Site Generation (SSG) along with Dynamic Routing.
            {/* Tech used */}
            <div className={aboutSx.badges}>
              <article style={badgeStyle}>Next.js</article>
              <article style={badgeStyle}>TypeScript</article>
              <article style={badgeStyle}>Serverless Functions</article>
              <article style={badgeStyle}>3rd Party API</article>
            </div>
          </summary>
        </section>
      </div>
    </div>
  );
};

export default Home;
