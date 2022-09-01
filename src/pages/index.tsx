import type { NextPage } from "next";
import sx from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className="container">
      <div className="content">
        <h1 className={sx.heading}>Projects</h1>

        {/* PulluP Fitness */}
        <section className={sx.proj}>
          <div className={sx["proj-demo"]}>
            <p>GIF</p>
            <h4>
              <a
                href="https://pullup-app.vercel.app/u/signin"
                target="_blank"
                rel="noopener noreferrer"
              >
                🔗 PulluP Fitness
              </a>
            </h4>
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
