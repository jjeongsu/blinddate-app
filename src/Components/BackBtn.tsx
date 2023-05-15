import { useNavigate } from "react-router-dom";

function BackBtn(){
  const navigation = useNavigate();
  const handleClick = (e: any) => {
    navigation(-1);
  }
  return(
    <button onClick={handleClick}>
      뒤로가기
    </button>
  );
}
export default BackBtn;