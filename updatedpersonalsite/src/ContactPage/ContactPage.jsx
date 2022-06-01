import { Link } from "react-router-dom";
// import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <div id="contactContainer" class="bg-dark w-screen h-screen">
      {/*  */}
      <div class="p-5 grid justify-items-center">
        <div id="header" class="p-5 bg-lighter text-center">
          <Link to="/Home">
            <h1 class="text-5xl md:text-8xl">get in touch with me</h1>
          </Link>
        </div>
      </div>

      <div
        class="
        h-96
        w-2/3
        text-4xl
        bg-light
        text-center
        hover:bg-darker
        hover:text-white"
      >
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/jack-barrett02/"
        >
          <p>LinkedIn</p>
        </a>
      </div>

      <br />
      <div class="bg-light h-96 text-center">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/Thirteenhelens"
        >
          GitHub
        </a>
      </div>
      <br />
      <div class="bg-light h-96 text-center">Email me</div>
      {/* <ContactForm /> */}
    </div>
  );
}
