import { useRecoilValue } from "recoil";
import { loginState } from "./atom";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";

function App() {
//로그인 되었을 경우에만 보이는 화면
  const isLogIn = useRecoilValue(loginState);
  return (
    <>
      { isLogIn ? <Home /> : <SignUp />}
    </>
  )
}

export default App
