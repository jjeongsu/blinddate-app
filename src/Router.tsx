import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import LogIn from "./Pages/LogIn";
import SignUp from "./Pages/SignUp";
import Profile from "./Components/Profile";
import Likelist from "./Pages/List";
import Mypage from "./Pages/Mypage";
import List from "./Pages/List";
import Error from  "./Components/Error";

const router = createBrowserRouter([
  {
    path:"/",
    element: <LogIn />, 
    errorElement: <Error />
  },
  {
    path: "/signup",
    element: <SignUp />,
    errorElement: <Error />
  },
  {
    path:"/home",
    element: <Home />,
    errorElement: <Error />
  },
  {
    path: "/mypage",
    element: <Mypage />,
    errorElement: <Error />
  },
  {
    path: "/list",
    element: <List />,
    children: [
      {

      }
    ],
    errorElement: <Error />
  }
]);
export default router;
