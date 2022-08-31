import Image from "next/image";
import sx from "../styles/About.module.css";

const about = () => {
  return (
    <div className="container" style={{ padding: "0 2em" }}>
      <section className={sx.bio}>
        <summary>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora at
          repellat, fuga alias aperiam ducimus repudiandae sequi cum porro unde
          facere quo corporis odio blanditiis dignissimos, reiciendis sunt
          assumenda nam. Fugit voluptatem labore porro ipsa sint, maiores quidem
          aperiam laboriosam rerum harum delectus ex inventore ea neque in
          explicabo quod et eos quis illo sunt. Ipsa optio laudantium eum vero?
          Sit placeat omnis eligendi numquam, repellat qui, optio harum vel amet
          illo deleniti consequatur tempora delectus? Alias maiores odio dolor
          dolores culpa enim quaerat. Sit quaerat molestias quo temporibus
          delectus.
        </summary>
        <Image
          src="/me.JPG"
          alt="Pic of me"
          height={240}
          width={240}
          className={sx.pic}
          style={{
            borderRadius: "50%",
          }}
        />
      </section>
    </div>
  );
};

export default about;