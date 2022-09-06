import { useReducer, useState } from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import sx from "../styles/Contact.module.css";

const Contact = () => {
  // Render message confirmation
  const [msgSent, setMsgSent] = useState(false);

  // Types and initial reducer state
  interface IState {
    from_name: string;
    email_id: string;
    message: string;
  }
  interface IAction {
    name: string;
    value: string;
  }
  type Action = {
    type: "CHANGE_INPUT";
    payload?: IAction;
  };
  const initForm = {
    from_name: "",
    email_id: "",
    message: "",
  };

  // Form reducer
  const formReducer = (state: IState, action: Action) => {
    switch (action.type) {
      case "CHANGE_INPUT":
        return {
          ...state,
          [action.payload!.name]: action.payload!.value,
        };
      default:
        return state;
    }
  };

  // useReducer()
  const [state, dispatch] = useReducer(formReducer, initForm);

  // Handle input change
  const handleChange = (e: FieldValues) => {
    dispatch({
      type: "CHANGE_INPUT",
      payload: {
        name: e.target.name,
        value: e.target.value,
      },
    });
  };

  // Zod schema
  const schema = z.object({
    from_name: z.string().min(1, "Required").max(25, "Too many characters"),
    email_id: z.string().email(),
    message: z.string().min(1, "Required").max(280, "Too many characters"),
  });

  // useForm()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  // Handle submit
  const contactSubmit: SubmitHandler<FieldValues> = async () => {
    try {
      // API to send email
      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        { ...state },
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      );

      // Render confirmation
      setMsgSent(true);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className={sx.container}>
      <div className={sx.content}>
        <h1>Contact Me</h1>
        {/* Contact form */}
        {!msgSent ? (
          <div>
            <form onSubmit={handleSubmit(contactSubmit)} className={sx.form}>
              {/* Name */}
              <input
                type="text"
                {...register("from_name")}
                className={`
                    ${sx["input-field"]}
                    ${
                      errors.from_name?.message
                        ? sx["error-control"]
                        : sx["form-control"]
                    }
                  `}
                placeholder="Name *"
                onChange={handleChange}
              />
              {errors.from_name?.message && (
                <p className={sx["input-err"]}>
                  {errors.from_name.message as unknown as string}
                </p>
              )}

              {/* Email */}
              <div className={sx["form-email"]}>
                <input
                  // type="email"
                  type="text"
                  {...register("email_id")}
                  className={`
                    ${sx["input-field"]}
                    ${
                      errors.email_id?.message
                        ? sx["error-control"]
                        : sx["form-control"]
                    }
                  `}
                  placeholder="Email *"
                  onChange={handleChange}
                />
                {errors.email_id?.message && (
                  <p className={sx["input-err"]}>
                    {errors.email_id.message as unknown as string}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className={sx["form-msg"]}>
                <textarea
                  {...register("message")}
                  className={`
                    ${sx["input-field"]}
                    ${
                      errors.message?.message
                        ? sx["error-control"]
                        : sx["form-control"]
                    }
                  `}
                  placeholder="Message *"
                  onChange={handleChange}
                />
                {errors.message?.message && (
                  <p className={sx["input-err"]}>
                    {errors.message.message as unknown as string}
                  </p>
                )}
              </div>

              <button type="submit">Send</button>
            </form>
          </div>
        ) : (
          // Render message confirmation
          <div>
            <h5>Message sent!</h5>
            <p>
              <Link href="/">Return home</Link>{" "}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
