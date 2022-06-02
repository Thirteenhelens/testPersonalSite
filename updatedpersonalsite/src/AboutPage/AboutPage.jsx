import Bio from "./Bio";
import Wordmap from "./Wordmap";
import Tagline from "./Tagline";
import AbtHeader from "./AbtHeader";
import NameNTitles from "./NameNTitles";

export default function AboutPage() {
  return (
    <div
      id="aboutContainer"
      class="
      bg-light
      font-Cairo
      min-h-screen
      min-w-screen
      "
    >
      <AbtHeader />
      <div class="pt-20 grid grid-rows-2">
        <div class="row-start-1 row-end-3 absolute">
          <NameNTitles />
          <Tagline />
        </div>
        <div class="h-96 bg-darker rounded-tl-full rounded-tr-full row-start-2" />
      </div>

      <div class="py-24 h-full bg-darker grid grid-cols-5">
        <Bio />
        <Wordmap />
      </div>
    </div>
  );
}
