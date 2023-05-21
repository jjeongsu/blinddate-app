import { useEffect, useState } from "react";
import { BASEURL } from "../Pages/SignUp";
import axios from "axios";
import { useRecoilValue } from "recoil";
import { userInfo } from "../atom";
import { styled } from "styled-components";
import { IMember } from "../Pages/Home";

function Send(){
  const [sendList, setSendList] = useState<IMember []>();
  const userToken = useRecoilValue(userInfo);
  const fetchSendList =  async() =>{
    const response =  await axios.get(`${BASEURL}/affinity/list`, {
      headers: {authorization: userToken.refreshToken}
    });
    console.log(response.data.send);
    setSendList(response.data.send);
  }
  useEffect(()=>{fetchSendList()},[]);
  return(
    <>
      {
      (sendList?.length !== 0)
      &&
      sendList?.map((item:IMember)=> {
        return <Member> {item.nickname}</Member>
      })}
    </>
  )
}
export default Send;
export const Member = styled.li`
  list-style: none;

`