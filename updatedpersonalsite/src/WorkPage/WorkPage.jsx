import { Link } from "react-router-dom";

export default function WorkPage() {
  return (
    <div id="" class="bg-dark h-screen w-screen">
      <div class="p-5 grid justify-items-center">
        <div />
        <div id="header" class="p-5 bg-lighter text-center">
          <Link to="/Home">
            <h1 class="text-8xl">what have I done?</h1>
          </Link>
        </div>
        <div />
      </div>
    </div>
  );
}
