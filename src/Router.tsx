import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import LogIn from "./Pages/LogIn";
import SignUp from "./Pages/SignUp";
import Mypage from "./Pages/Mypage";
import List from "./Pages/List";
import Error from  "./Components/Error";
import Receive from "./Components/Receive";
import Send from "./Components/Send";

const router = createBrowserRouter([
  {
    path:"",
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
        path: "send",
        element: <Send />
      },
      {
        path: "receive",
        element: <Receive />
      }
    ],
    errorElement: <Error />
  }
]);
export default router;
