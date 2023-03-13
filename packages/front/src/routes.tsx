import { Box } from "@mui/material";
import {
  createBrowserRouter,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Products } from "./pages/Products";

export const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/products",
    element: <Products />,
  },
];

export const router = createBrowserRouter(routes);
