import { useEffect, useState } from "react";
import { IMember } from "../Pages/Home";
import axios from "axios";
import { BASEURL } from "../Pages/SignUp";
import { Member } from "./Send";
import { useRecoilValue } from "recoil";
import { userInfo } from "../atom";

function Receive(){
  const [receiveList, setReceiveList] = useState<IMember []>();
  const userToken = useRecoilValue(userInfo);
  const fetchReceiveList =  async() =>{
    const response =  await axios.get(`${BASEURL}/affinity/list`, {
      headers: {authorization: userToken.refreshToken}
    });
    console.log(response.data.receive);
    setReceiveList(response.data.receive);
  }
  useEffect(()=>{fetchReceiveList()},[]);
  return(
    <>
      {
      (receiveList?.length !== 0)
      &&
      receiveList?.map((item:IMember)=> {
        return <Member> {item.nickname}</Member>
      })}
    </>
  )
}
export default Receive;