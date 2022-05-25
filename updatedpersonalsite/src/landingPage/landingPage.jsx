import { useState } from "react";
import { Link } from "react-router-dom";

export default function LandingPage() {
  function useHover() {
    const [hovering, setHovering] = useState(false);
    const onHoverProps = {
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
      gap-y-8
      h-screen
      w-screen
      bg-darker
      grid-cols-1
      text-center
      sm:grid gap-x-8 grid-cols-5 content-center
      "
    >
      <div />

      <div {...heyHoverProps} class="bg-main p-4 hover:bg-light cursor-pointer">
        <p class="text-7xl">
          {heyHover ? <Link to="/ContactMe">contact</Link> : "hey!"}
        </p>
      </div>

      <div {...imHoverProps} class="bg-main p-4 hover:bg-light cursor-pointer">
        <p class="text-7xl">
          {imHover ? <Link to="/MyWork">my work</Link> : "I'm"}
        </p>
      </div>

      <div
        {...jackHoverProps}
        class="bg-main p-4 hover:bg-light cursor-pointer"
      >
        <p class="text-7xl">
          {jackHover ? <Link to="/AboutMe">about</Link> : "Jack"}
        </p>
      </div>
      <div />
    </div>
  );
}