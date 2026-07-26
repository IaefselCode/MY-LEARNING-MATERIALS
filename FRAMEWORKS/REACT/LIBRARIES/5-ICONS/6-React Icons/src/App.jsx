import { div } from "framer-motion/client";
import { FaBars } from "react-icons/fa";
import { Home } from "lucide-react";
import button from "./components/ui/button";
function App() {
  return (
    <>
      <div>
        <FaBars className="text-blue-800 h-10 w-10 " />
      </div>
      <div className="cursor-pointer">
        <Home className="text-blue-800 h-5 w-5" />
      </div>
      <button className="bg-amber-600">Hellow</button>
    </>
  );
}

export default App;
