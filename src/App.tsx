import { useRecoilValue } from "recoil";
import { loginState } from "./atom";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import { RouterProvider } from "react-router-dom";
import router from "./Router";

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
