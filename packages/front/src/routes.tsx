import {
  createBrowserRouter,
} from "react-router-dom";
import { Account } from "./pages/Account";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Search } from "./pages/Search";

export const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/search",
    element: <Search />,
    errorElement: <NotFound />,
  },
  {
    path: "/account",
    element: <Account />,
    errorElement: <NotFound />,
  },
];

export const router = createBrowserRouter(routes);
