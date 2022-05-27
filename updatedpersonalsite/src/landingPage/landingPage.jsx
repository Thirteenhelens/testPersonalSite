// importing react because it's awesome
import { useState } from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  function useHover() {
    const [hovering, setHovering] = useState(false);
    const onHoverProps = {
      onBlur: () => setHovering(false),
      onFocus: () => setHovering(true),
      onMouseEnter: () => setHovering(true),
      onMouseLeave: () => setHovering(false),
    };
    return [hovering, onHoverProps];
  }

  const [imHover, imHoverProps] = useHover();
  const [heyHover, heyHoverProps] = useHover();
  const [jackHover, jackHoverProps] = useHover();

  return (
    <div
      id="mainContentContainer"
      class="
      p-5
      grid 
      w-screen
      h-screen
      gap-y-20
      bg-darker
      md:gap-x-8
      text-center
      md:grid-cols-5
      md:content-center
      "
    >
      <div />

      <button
        class="
        p-4
        bg-main
        text-7xl
        truncate
        font-Cairo
        cursor-pointer
        hover:bg-light
        focus:bg-light
        "
        {...heyHoverProps}
      >
        {heyHover ? <Link to="/ContactMe">contact</Link> : "hey!"}
      </button>

      <button
        class="
        p-4
        bg-main
        text-7xl
        truncate
        font-Cairo
        cursor-pointer
        hover:bg-light
        focus:bg-light
        "
        {...imHoverProps}
      >
        {imHover ? <Link to="/MyWork">my work</Link> : "I'm"}
      </button>

      <button
        class="
        p-4
        bg-main
        text-7xl
        truncate
        font-Cairo
        cursor-pointer
        hover:bg-light
        focus:bg-light
        "
        {...jackHoverProps}
      >
        {jackHover ? <Link to="/AboutMe">about</Link> : "Jack"}
      </button>

      <div />

      <div>
        <p
          class="
        text-white
        font-Cairo
        sm:opacity-0
        "
        >
          tap on a card to get started :)
        </p>
      </div>
    </div>
  );
}
