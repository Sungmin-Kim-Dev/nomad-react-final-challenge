import {createBrowserRouter} from "react-router";
import App from "./App";
import Popular from "./Routes/Popular";
import ComingSoon from "./Routes/ComingSoon";
import NowPlaying from "./Routes/NowPlaying";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {index: true, Component: Popular},
      {path: "coming-soon", Component: ComingSoon},
      {path: "now-playing", Component: NowPlaying},
    ],
  },
]);
