import { Link, Outlet } from "react-router-dom";
import Header from "../Components/Header";
import TabBar from "../Components/TabBar";
import { styled } from "styled-components";

function List(){
  //탭 isActive 프롭 추가하기
  return(
    <>
      <Header />
      <ListContainer >
      <Tabs>
        <Tab>
          <Link to={`/list/send`}>내가 좋아한</Link>
        </Tab>
        <Tab>
          <Link to={`/list/receive`}>나를 좋아한</Link>
        </Tab>
      </Tabs>
      <Outlet />
      </ListContainer>
      <TabBar />
    </>
  )
}
export default List;
const ListContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2,1fr);
  margin: 25px 0px;
  gap: 10px;
`
const Tab = styled.span`
  
`;