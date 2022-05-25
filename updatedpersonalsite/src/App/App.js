import "./App.css";

function App() {
  return (
    <div
      id="mainContentContainer"
      class="bg-darker h-screen w-screen grid content-center grid-cols-5 gap-x-8 text-center p-5"
    >
      <div />
      <div class="bg-main p-4 hover:bg-light cursor-pointer ">
        <p class="text-7xl">hey!</p>
      </div>

      <div class="bg-main p-4 hover:bg-light cursor-pointer">
        <p class="text-7xl">I'm</p>
      </div>

      <div class="bg-main p-4 hover:bg-light cursor-pointer">
        <p class="text-7xl">Jack</p>
      </div>
      <div />
    </div>
  );
}

export default App;
