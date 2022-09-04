import type { NextPage } from "next";
import sx from "../styles/Home.module.css";
import aboutSx from "../styles/About.module.css";
import { useMyStore } from "../utils/zustand-store";
import Image from "next/image";
import GifSlider from "../components/GifSlider";

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
            <GifSlider />

            <h4>
              <a
                href="https://pullup-app.vercel.app/u/signin"
                target="_blank"
                rel="noopener noreferrer"
              >
                🔗 PulluP Fitness
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
              <li>passwordless sign-in as an authenticated user with Magic.</li>
              <li>
                query a live database in order to create, update, and modify
                exercise stats such as weight, repetitions, and number of sets.
              </li>
              <li>curate diverse workouts across several muscle groups.</li>
              <li>plus more to come!</li>
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

        {/* Chat App */}
        <section className={sx.proj}>
          <div className={sx["proj-demo"]}>
            <p>GIF</p>
            <a
              href="https://pullup-app.vercel.app/u/signin"
              target="_blank"
              rel="noopener noreferrer"
            >
              🔗 PulluP Fitness
            </a>
          </div>
          <summary className={sx["proj-desc"]}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste atque
            tempore, odit repellat in sapiente, ex necessitatibus earum
            accusantium quas nemo hic ab alias repudiandae? Ratione sit ab sint
            fuga! Natus repudiandae laborum error illo nostrum cum consequuntur
            tempora dolores perspiciatis laudantium aliquam harum odit ratione
            eveniet incidunt eaque vero iure recusandae repellendus nesciunt
            iusto, libero minima adipisci! Harum, laudantium!
          </summary>
        </section>

        {/* Business Landing Page */}
        <section className={sx.proj}>
          <div className={sx["proj-demo"]}>
            <p>GIF</p>
            <a href="google.com" target="_blank" rel="noopener noreferrer">
              🔗 PulluP Fitness
            </a>
          </div>
          <summary className={sx["proj-desc"]}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste atque
            tempore, odit repellat in sapiente, ex necessitatibus earum
            accusantium quas nemo hic ab alias repudiandae? Ratione sit ab sint
            fuga! Natus repudiandae laborum error illo nostrum cum consequuntur
            tempora dolores perspiciatis laudantium aliquam harum odit ratione
            eveniet incidunt eaque vero iure recusandae repellendus nesciunt
            iusto, libero minima adipisci! Harum, laudantium!
          </summary>
        </section>

        {/* Cosmo To-Do */}
        <section className={sx.proj}>
          <div className={sx["proj-demo"]}>
            <p>GIF</p>
            <a href="google.com" target="_blank" rel="noopener noreferrer">
              🔗 PulluP Fitness
            </a>
          </div>
          <summary className={sx["proj-desc"]}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste atque
            tempore, odit repellat in sapiente, ex necessitatibus earum
            accusantium quas nemo hic ab alias repudiandae? Ratione sit ab sint
            fuga! Natus repudiandae laborum error illo nostrum cum consequuntur
            tempora dolores perspiciatis laudantium aliquam harum odit ratione
            eveniet incidunt eaque vero iure recusandae repellendus nesciunt
            iusto, libero minima adipisci! Harum, laudantium!
          </summary>
        </section>

        {/* News App */}
        <section className={sx.proj}>
          <div className={sx["proj-demo"]}>
            <p>GIF</p>
            <a href="google.com" target="_blank" rel="noopener noreferrer">
              🔗 PulluP Fitness
            </a>
          </div>
          <summary className={sx["proj-desc"]}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste atque
            tempore, odit repellat in sapiente, ex necessitatibus earum
            accusantium quas nemo hic ab alias repudiandae? Ratione sit ab sint
            fuga! Natus repudiandae laborum error illo nostrum cum consequuntur
            tempora dolores perspiciatis laudantium aliquam harum odit ratione
            eveniet incidunt eaque vero iure recusandae repellendus nesciunt
            iusto, libero minima adipisci! Harum, laudantium!
          </summary>
        </section>
      </div>
    </div>
  );
};

export default Home;
