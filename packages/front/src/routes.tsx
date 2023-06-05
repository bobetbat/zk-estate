import {
  createBrowserRouter,
} from "react-router-dom";
import { Account } from "./pages/Account";
import { Contract } from "./pages/Contract";
import { CreateContract } from "./pages/CreateContract";
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
  {
    path: "/create-contract",
    element: <CreateContract />,
    errorElement: <NotFound />,
  },
  {
    path: "/contract/:id",
    element: <Contract />,
    errorElement: <NotFound />,
  },
];

export const router = createBrowserRouter(routes);
