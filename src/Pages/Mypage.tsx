import { styled } from "styled-components";
import Header from "../Components/Header";
import TabBar from "../Components/TabBar";
import { BASEURL, Button } from "./SignUp";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { userInfo } from "../atom";
import { useNavigate } from "react-router-dom";
import Modal from "../Components/Modal";
interface IUser {
  nickname: string,
  profileImgUrl: string,
  userId: string,
}
function Mypage(){
  const navigate = useNavigate();
  const userToken= useRecoilValue(userInfo);
  const [user, setUser]= useState<IUser>();
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const setInitialUserInfo = async() => {
    const response = await axios.get(`${BASEURL}/auth/user`,
    {
      headers: {authorization: userToken.accessToken}
    });
    console.log(response.data);
    setUser({...response.data});
  }
  const handleEditClick = () => {
    setModalOpen(true);
  }
  useEffect(()=>{
    setInitialUserInfo();
  }, []);

  return(
    <>
      <Header />
      <MypageContainer >
        <UserProfile>
          {/* <UserImg src={user?.profileImgUrl}/> */}
          <UserImg />
          <div>
            <span> {user?.nickname}</span>
            <EditBtn onClick = {handleEditClick}>수정하기</EditBtn>
          </div>
        </UserProfile>
        <Button onClick={()=>{navigate('/list/send')}}> 내가 좋아한 사람 </Button>
        <Button onClick={()=>{navigate('/list/receive')}}> 나를 좋아한 사람 </Button>
      </MypageContainer>
      <TabBar />
      {
        isModalOpen && (
          <Modal setModalOpen ={setModalOpen}/>
        )
      }
    </>
  )
}
export default Mypage;
const MypageContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const UserImg = styled.img`
  border-radius: 50%;
  width: 200px;
  height: 200px;
  background-color: aliceblue;
`
const UserProfile= styled.div`
`;
const EditBtn = styled.button`
  width: 100px;
  font-size: 10px;
  margin-left: 50px;
`