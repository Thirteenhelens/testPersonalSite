import { Link } from "react-router-dom";

export default function AboutPage() {
  return (
    <div id="aboutContainer" class="bg-light h-screen w-screen">
      <div class="p-5 grid justify-items-center">
        <div />
        <div id="header" class="p-5 bg-lighter text-center ">
          <Link to="/Home">
            <h1 class="text-8xl">about Jack</h1>
          </Link>
        </div>
        <div />
      </div>

      {/* move this further down? */}
      <div class="grid justify-items-center">
        <div id="tagline" class="p-4 bg-main text-center pointer-events-none">
          <p class="text-lg">
            web developer in the front end, gamer in the back end
          </p>
        </div>
      </div>

      <div id="content" class="pt-40 p-10 pointer-events-none	">
        <div id="bio">
          <p class="text-5xl font-bold">who is Jack?</p>
          <br />
          <p>
            Good question! As a lifelong gamer, I have a vested interest in
            technology. Not just overall, but all of the intricacies behind how
            things work. As I grew up, my intrigue increased and I started
            looking into how all of my favorite technologies seemed to magically
            work. Learning that real human people were behind all of this was a
            life-changing revelation because to me, it meant that if I talked to
            the computer in its own language it could perform this magic for me!
            From there, I started tinkering and building whatever I could get my
            hands on from my personal PC, to my mechanical keyboard. Beyond my
            technical fascination, the logical nature of computers motivated me
            to try and add personality and life to whatever I made.
          </p>
          <p class="text-5xl font-bold pt-10">?</p>
        </div>

        <div id="wordMap">
          <p>word map thing</p>
        </div>
      </div>

      <div id="me">
        <div id="img">
          <p>image placeholder</p>
        </div>
        <div>
          <p>name, title, buttons</p>
        </div>
      </div>
    </div>
  );
}
