import Header from "../Components/Header";
import TabBar from "../Components/TabBar";
import { BASEURL, Button } from "./SignUp";
import { styled } from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { userInfo } from "../atom";
export interface IMember {
  userId: string,
  nickname: string,
  profileImgUrl: string,
}
function Home(){
  const userToken= useRecoilValue(userInfo);
  const [memberList, setMemberList] = useState<IMember []>([]);
  const [mListIndex, setMListIndex] = useState<number>(0);
  async function setInitialMembers () {
    try {
      const response = await axios.get(`${BASEURL}/member/list`, {headers : {authorization: userToken.accessToken}});
      const mList:IMember[] = [];
      response.data.map((item:IMember) => mList.push(item));
      setMemberList([...mList]);
    } catch(err){
      console.log(err);
    }
  }
  useEffect(()=> {
    setInitialMembers();
  },[]);
  console.log("받아온 멤버리스트", memberList);
  function handleDislike(e: React.MouseEvent<HTMLButtonElement>): void {
    console.log(e);
    const response = axios.patch(
      `${BASEURL}/affinity/dislike`,
      { 
        headers: {authorization: userToken.accessToken},
        data : {targetUserId : memberList[mListIndex].userId}
      });
    console.log(response);
    setMListIndex(prev => prev+1);
  }
  function handleLike(e: React.MouseEvent<HTMLButtonElement>): void {
    console.log(e);
    const response = axios.patch(
      `${BASEURL}/affinity/like`,
      { 
        headers: {authorization: userToken.accessToken},
        data : {targetUserId : memberList[mListIndex].userId}
      });
      console.log(response);
    setMListIndex(prev => prev+1);
  }

  return(
    <>
    <Header />
    <div style={{display:"flex",flexDirection:"column", justifyContent:"center", alignItems:"center", width:"100vw"}}>
    <Profile>
      <Image src={memberList[mListIndex]?.profileImgUrl} />
      <Nickname> {memberList[mListIndex]?.nickname}</Nickname>
    </Profile>
    
    <div style={{display:"flex"}}>
      <Button onClick = {handleDislike}>싫어요</Button>
      <Button onClick= {handleLike}>좋아요</Button>
    </div>
    </div>
    
    <TabBar />
    </>
  )
} 
export default Home;

const Image = styled.img`
  border-radius: 10px;
  width: 30vw;
`;
const Nickname = styled.p`
  text-align: center;
`;
const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`;