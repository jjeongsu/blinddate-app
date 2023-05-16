import styled from "styled-components";
import BackBtn from "./BackBtn";

function Header(){
  return(
    <HeaderContainer>
      <BackBtn />
      <Logo> BLINDY</Logo>
    </HeaderContainer>
  )
}
export default Header;

const HeaderContainer = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  top: 0;
`;
const Logo = styled.h1`
  height: inherit;
  margin: 0;
`;