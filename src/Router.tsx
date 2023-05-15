import { createBrowserRouter } from "react-router-dom";
import App from "./App";

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />, //좋아요, 싫어요 페이지로 고치기
  }
])

export default router;