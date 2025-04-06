import {Outlet} from "react-router";
import Header from "./Components/Header";

function App() {
  return (
    <div className="bg-zinc-800 text-gray-50">
      <Header />
      <div className="min-h-dvh pt-24 px-4">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
