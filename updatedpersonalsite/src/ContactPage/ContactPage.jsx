import { Link } from "react-router-dom";
import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <div id="contactContainer" class="bg-dark w-screen h-screen">
      <div class="p-5 grid justify-items-center">
        <div />
        <div id="header" class="p-5 bg-lighter text-center">
          <Link to="/Home">
            <h1 class="text-5xl md:text-8xl">get in touch with me</h1>
          </Link>
        </div>
        <div />

        <div id="socials" class="bg-light text-center py-2 px-60 mt-5">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/jack-barrett02/"
          >
            {" "}
            LinkedIn |
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Thirteenhelens"
          >
            {" "}
            GitHub |
          </a>
          <a href="mailto:jbarrett1347@gmail.com"> Email</a>
        </div>
      </div>

<div class="bg-light h-96">

</div>

<div>

</div>


      {/* <ContactForm /> */}
    </div>
  );
}
