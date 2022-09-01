import Image from "next/image";
import sx from "../styles/About.module.css";

const about = () => {
  return (
    <div className="container" style={{ padding: "0 2em" }}>
      <section className={sx.bio}>
        <summary>
          <p>
            Hello, my name is Daniel. Currently I am pursuing a career as a
            developer.
            <br />
            - Degree <br />
            - Web dev <br />
            - If I don't have VS Code in front of me, there's a good chance I'm
            watching basketball or soccer, making music, at the gym, or gaming
            on my PC.
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
            <article style={{ background: "#EF476F" }}>
              Serverless Functions
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
  );
};

export default about;
