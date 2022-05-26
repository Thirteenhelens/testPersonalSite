import { useState } from "react";
import { send } from "emailjs-com";
import { Link } from "react-router-dom";

export default function ContactPage() {
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
    <div id="contactContainer" class="bg-dark w-screen h-screen">
      <div class="p-5 grid justify-items-center">
        <div />
        <div id="header" class="p-5 bg-lighter text-center">
          <Link to="/Home">
            <h1 class="text-8xl">get in touch with me</h1>
          </Link>
        </div>
        <div />
      </div>

      <div id="socials" class="bg-light">
        <nav>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/jack-barrett02/"
          >
            {" "}
            LinkedIn{" "}
          </a>
          |
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Thirteenhelens"
          >
            {" "}
            GitHub{" "}
          </a>
          |<a href="mailto:jbarrett1347@gmail.com"> Email </a>
        </nav>
      </div>

      {/* <div id="gridForForm"> */}
      <form onSubmit={onSubmit} class="bg-light shadow-md rounded p-8 m-5">
        <div class="text-xs ml-1 pointer-events-none">Name (required)</div>
        <input
          required
          type="text"
          name="from_name"
          placeholder="John Doe"
          onChange={handleChange}
          value={toSend.from_name}
          class="form-control shadow border rounded w-2/3 p-2 mb-4 tracking-wide"
        />

        <div class="text-xs ml-1 pointer-events-none">Email (yours)</div>
        <input
          type="email"
          name="reply_to"
          value={toSend.reply_to}
          onChange={handleChange}
          placeholder="example@adress.com"
          class="shadow border rounded w-2/3 p-2 mb-4"
        />

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
        <br />
        <button
          type="submit"
          class="font-bold py-2 px-4 rounded bg-dark text-white hover:shadow-lg hover:bg-lighter hover:text-darker"
        >
          Submit
        </button>
      </form>
      {/* </div> */}
    </div>
  );
}
