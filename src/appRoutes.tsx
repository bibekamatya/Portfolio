import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Details from "./components/details.tsx";
import App from "./App.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "projects/:name",
    element: <Details />,
  },
]);

export const AppRoutes = () => <RouterProvider router={router} />;
