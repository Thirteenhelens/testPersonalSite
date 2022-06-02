import { Link } from "react-router-dom";

export default function AbtHeader() {
  return (
    <div class="p-5 grid justify-items-center">
      <div id="header" class="p-5 bg-lighter text-center">
        <Link to="/Home">
          <h1 class="text-8xl">about me</h1>
        </Link>
      </div>
    </div>
  );
}
