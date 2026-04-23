import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Updates } from "./pages/Updates";
import { Reports } from "./pages/Reports";
import { Ayuda } from "./pages/Ayuda";
import { Profile } from "./pages/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "updates", Component: Updates },
      { path: "reports", Component: Reports },
      { path: "ayuda", Component: Ayuda },
      { path: "profile", Component: Profile },
    ],
  },
]);
