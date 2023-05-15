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
  
`;
const Logo = styled.h1`
  
`;