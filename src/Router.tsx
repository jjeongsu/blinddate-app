import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import LogIn from "./Pages/LogIn";
import SignUp from "./Pages/SignUp";

const router = createBrowserRouter([
  {
    path:"/",
    element: <LogIn />, 
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path:"/home",
    element: <Home />
  }
]);
export default router;
