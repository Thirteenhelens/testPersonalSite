import { useState } from "react";
export default function landingPage() {
  async function useHover() {
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
      class="bg-darker h-screen w-screen grid content-center grid-cols-5 gap-x-8 text-center p-5"
    >
      <div />
      <div class="bg-main p-4 hover:bg-light cursor-pointer ">
        <p {...heyHoverProps} class="text-7xl">
          {heyHover ? "about" : "hey!"}
        </p>
      </div>

      <div class="bg-main p-4 hover:bg-light cursor-pointer">
        <p {...imHoverProps} class="text-7xl">
          {imHover ? "my work" : "I'm"}
        </p>
      </div>

      <div class="bg-main p-4 hover:bg-light cursor-pointer">
        <p {...jackHoverProps} class="text-7xl">
          {jackHover ? "Contact" : "Jack"}
        </p>
      </div>
      <div />
    </div>
  );
}
