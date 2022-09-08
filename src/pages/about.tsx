import Image from "next/image";
import sx from "../styles/About.module.css";

const about = () => {
  return (
    <div className="container" style={{ padding: "0 2em" }}>
      <div className="content">
        <section className={sx.bio}>
          <summary>
            <p>
              Hello, my name is Daniel. I am currently pursuing a career as a
              developer. In 2020, I received my bachelors in computer science at
              the University of Nevada, Las Vegas.
              <br />
              <br />
              At the moment, I am keen on developing my full-stack skills,
              building my personal portfolio, and getting my daily GitHub
              commits in.
              <br />
              <br />
              If I don't have VS Code in front of me, there's a good chance I'm
              watching sports, making music, at the gym, or gaming on my PC.
              <br />
            </p>
            <div className={sx.badges}>
              {/* Green */}
              <article style={{ background: "#06D6A0", color: "#2f3e46" }}>
                React
              </article>
              <article style={{ background: "#06D6A0", color: "#2f3e46" }}>
                TypeScript
              </article>
              <article style={{ background: "#06D6A0", color: "#2f3e46" }}>
                Next.js
              </article>

              {/* Blue */}
              <article style={{ background: "#118AB2" }}>REST</article>
              <article style={{ background: "#118AB2" }}>tRPC</article>
              <article style={{ background: "#118AB2" }}>Express.js</article>

              {/* Yellow */}
              <article style={{ background: "#FFD166", color: "#2f3e46" }}>
                PostgreSQL
              </article>
              <article style={{ background: "#FFD166", color: "#2f3e46" }}>
                Prisma
              </article>

              {/* Red */}
              <article style={{ background: "#EF476F" }}>Git</article>
              <article style={{ background: "#EF476F" }}>AWS</article>
              {/* <article style={{ background: "#EF476F" }}>
              Serverless Functions
            </article> */}
              <article style={{ background: "#EF476F" }}>
                Serverless | CDN
              </article>

              {/* White */}
              <article style={{ background: "#f2f2f2", color: "#2f3e46" }}>
                Vanilla CSS
              </article>
              <article style={{ background: "#f2f2f2", color: "#2f3e46" }}>
                Tailwind
              </article>

              {/* <p style={{ background: "#073B4C" }}>React-Query, Zustand</p> */}
            </div>
          </summary>
          <div className={sx.pic}>
            <Image
              src="/me.JPG"
              alt="Pic of me"
              height={160}
              width={160}
              // className={sx.pic}
              style={{
                borderRadius: "50%",
              }}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default about;
