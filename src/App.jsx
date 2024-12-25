import React from "react";
// import Intro from "./components/intro";
import Home from "./components/Home";

function App() {
  return (
    <>
      <div
        className="fixed inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url("../src/assets/image/background.png")',
        }}
      ></div>

      <div className="relative z-10">
        {/* Content before the yellow div */}
        <div className="h-[36rem] flex items-center justify-center"></div>
        <div className="flex relative justify-center">
          <Home />
        </div>
      </div>
    </>
  );
}

export default App;
