import { useState } from "react";
import { send } from "emailjs-com";

export default function ContactForm() {
  const [toSend, setToSend] = useState({
    message: "",
    reply_to: "",
    from_name: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send("service_s9r3irg", "template_5solhag", toSend, "7JYskOlEaA9qey4im")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
    setToSend({ message: "", reply_to: "", from_name: "" });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  return (
    <form onSubmit={onSubmit} class="bg-light p-8 m-5 grid grid-cols-5">
      <div />
      <div>
        <p class="text-xs ml-1 pointer-events-none">Name (required)</p>
        <input
          required
          type="text"
          name="from_name"
          placeholder="John Doe"
          onChange={handleChange}
          value={toSend.from_name}
          class="form-control shadow border rounded w-2/3 p-2 mb-4 tracking-wide"
        />
      </div>

      <div>
        <div class="text-xs ml-1 pointer-events-none">Email (yours)</div>
        <input
          type="email"
          name="reply_to"
          value={toSend.reply_to}
          onChange={handleChange}
          placeholder="example@adress.com"
          class="shadow border rounded w-2/3 p-2 mb-4"
        />
      </div>

      <div>
        <div class="text-xs ml-1 pointer-events-none">Message (required)</div>
        <textarea
          required
          type="text"
          name="message"
          value={toSend.message}
          onChange={handleChange}
          class="shadow border rounded w-2/3 p-2 mb-4"
          placeholder="I'd love to talk to you about..."
        />
      </div>

      <br />
      <button
        type="submit"
        class="font-bold py-2 px-4 rounded bg-dark text-white hover:shadow-lg hover:bg-lighter hover:text-darker"
      >
        Submit
      </button>
    </form>
  );
}
