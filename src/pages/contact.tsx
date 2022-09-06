import ContactForm from "../components/ContactForm";
import sx from "../styles/Contact.module.css";

const contact = () => {
  return (
    <div className="container" style={{ padding: "0 2em" }}>
      <div className="content">
        <section className={sx.bio}>
          <ContactForm />
        </section>
      </div>
    </div>
  );
};

export default contact;
