import "./App.css";
import AnimationControls from "./components/tutorial1/AnimationControls";
import Basics from "./components/tutorial1/Basics";
import Gestures from "./components/tutorial1/Gestures";
import ScrollAnimations from "./components/tutorial1/ScrollAnimations";
import ViewBasedAnimations from "./components/tutorial1/ViewBasedAnimations";
import CoolAnimation from "./components/tutorial2/CoolAnimation";
import EventsAndDrag from "./components/tutorial2/EventsAndDrag";
import KeyFrames from "./components/tutorial2/KeyFrames";
import UseAnimation from "./components/tutorial2/UseAnimation";
import Variants from "./components/tutorial2/Variants";
import Example1 from "./components/tutorial3/Example1";
import Example2 from "./components/tutorial3/Example2";
import Example3 from "./components/tutorial3/Example3";
import Example4 from "./components/tutorial3/Example4";
import ViewAnimations2 from "./components/tutorial4/ViewAnimations2";

function App() {
  return (
    <>
      <div>
        {/* <Basics /> */}
        {/* <Gestures />
        <AnimationControls /> */}
        {/* <ViewBasedAnimations /> */}
        {/* <ScrollAnimations /> */}
        {/* <CoolAnimation /> */}
        {/* <EventsAndDrag /> */}
        {/* <Variants/>s */}
        {/* <KeyFrames />S */}
        {/* <UseAnimation /> */}
        <Example1 />
        <Example2 />
        <Example3 />
        <Example4 />
        <ViewAnimations2 />
      </div>
    </>
  );
}

export default App;
