import meForIcon from "../assets/meForIcon.jpg";

export default function NameNTitles() {
  return (
    <div id="abtMe">
      <div id="img" class="py-5 grid grid-cols-3 justify-items-center">
        <img
          src={meForIcon}
          alt="Jack B looking nice"
          class="w-1/2 rounded-full border-4 col-start-2 col-end-3"
        />
      </div>

      <div
        id="nameAndTitles"
        class="text-xl text-grey text-center pointer-events-none"
      >
        <span class="underline font-bold text-3xl">Jack Barrett</span>
        <br />
        certified full stack web developer
        <br />
        tech support specialist at{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://soona.co"
          class="bg-lighter font-bold text-black hover:bg-dark hover:text-white pointer-events-auto"
        >
          soona
        </a>
      </div>
    </div>
  );
}
