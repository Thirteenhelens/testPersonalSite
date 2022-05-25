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

  const test = () => {
    console.log("poop");
  };

  return (
    <div
      id="mainContentContainer"
      class="bg-darker h-screen w-screen grid content-center grid-cols-5 gap-x-8 text-center p-5"
    >
      <div />
      <div
        onClick={test}
        {...heyHoverProps}
        class="bg-main p-4 hover:bg-light cursor-pointer"
      >
        <p class="text-7xl">
          {heyHover ? <Link to="/ContactMe">contact</Link> : "hey!"}
        </p>
      </div>

      <div class="bg-main p-4 hover:bg-light cursor-pointer">
        <p {...imHoverProps} class="text-7xl">
          {imHover ? <Link to="/MyWork">my work</Link> : "I'm"}
        </p>
      </div>

      <div class="bg-main p-4 hover:bg-light cursor-pointer">
        <p {...jackHoverProps} class="text-7xl">
          {jackHover ? <Link to="/AboutMe">about</Link> : "Jack"}
        </p>
      </div>
      <div />
    </div>
  );
}
