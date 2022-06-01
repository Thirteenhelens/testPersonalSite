import { Link } from "react-router-dom";

export default function ContactPage() {
  return (
    <div id="contactContainer" class="bg-dark w-full h-full">
      <div class="p-5 grid justify-items-center">
        <div id="header" class="p-5 bg-lighter text-center">
          <Link to="/Home">
            <h1 class="text-5xl md:text-8xl">get in touch with me</h1>
          </Link>
        </div>
      </div>

      <div class="py-2 md:py-10 grid grid-cols-5 gap-y-4">
        <div class="text-4xl bg-light col-end-5 text-center col-start-2 hover:bg-darker hover:text-white">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Thirteenhelens"
          >
            <div class="py-20 md:py-52">
              <p>GitHub</p>
              <svg
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-6 w-6 inline-flex"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </div>
          </a>
        </div>

        <div class="text-4xl bg-light col-end-5 text-center col-start-2 hover:bg-darker hover:text-white">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/jack-barrett02/"
          >
            <div class="py-20 md:py-52">
              <p>LinkedIn</p>
              <svg
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-6 w-6 inline-flex"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </div>
          </a>
        </div>

        <div class="text-4xl bg-light col-end-5 text-center col-start-2 hover:bg-darker hover:text-white">
          <p class="py-20 md:py-56">Email me</p>
        </div>
      </div>
    </div>
  );
}
