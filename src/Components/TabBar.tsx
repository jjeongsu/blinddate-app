import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

function TabBar(){
  const navigate = useNavigate();
  return(
  <TabContainer>
    <li>
      <Tab
        onClick={()=> navigate('/list')}
        aria-label="좋아요 누른 목록"
        >좋아요
      </Tab>
    </li>
    <li>
      <Tab
      onClick={()=> navigate('/home')}
        aria-label="메인화면"
      >홈 
      </Tab>
    </li>
    <li>
      <Tab 
      onClick={()=> navigate('/mypage')}
      aria-label="마이페이지 상세정보 설정" 
      >마이페이지</Tab></li>
  </TabContainer>
)}
export default TabBar;

const TabContainer = styled.ul` //ul로 할지 nav로 할지 고민됨..
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  position: absolute;
  bottom: 0;
  margin: 0;
  width: 100%;
`;
const Tab = styled.button`
  &:focus{
    border: none;
  }
  text-align: center;
  background-color: #fff;
  border-radius: 0;
  display: flex;
  margin: 0;
`;
