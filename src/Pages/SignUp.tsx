import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
interface userInfo {
  userId : string,
  password: string, 
  nickname: string,
};
export const BASEURL =  'http://52.79.226.246';
function SignUp(){
  const {register, handleSubmit, setValue} =useForm();
  const navigate = useNavigate();
  //id, password, nickname
  const handleValid = (e:any) => {
    //do something
    console.log(e.userId);
    axios({
      url: `${BASEURL}/auth/signup`,
      method: 'post',
      data: {
        userId: e.userId,
        password: e.password,
        nickname : e.nickname,
      }
    })
    .then(function(res){
      console.log(res.data);
      console.log(res.status);
    });
    //navigation으로 mainpage로 넘어가기
    navigate('/');
  }

  return (
    <FormContainer>
      <FormHeader> 회원가입</FormHeader>
      <Form onSubmit={handleSubmit(handleValid)}> 
        <InputLabel>ID</InputLabel>
        <Input 
        {...register("userId",{
          required: "아이디를 반드시 작성해야 합니다.",
          minLength: {
            value: 3,
            message : "3글자 이상 입력해주세요"
          },
          maxLength : {
            value: 10,
            message : "10글자 이하로 입력해주세요"
          },
          pattern : {
            value: /^[A-za-z0-9가-힣]{3,10}$/,
            message : "한글, 영어, 숫자만 가능합니다"
          }
        })}
        placeholder="아이디를 써주세요"
        />
        <InputLabel>PassWord</InputLabel>
        <Input 
        {...register("password",{
          required: "비밀번호를 반드시 작성해야 합니다.",
          minLength: {
            value: 3,
            message : "3글자 이상 입력해주세요"
          },
          maxLength : {
            value: 10,
            message : "10글자 이하로 입력해주세요"
          },
        })}
        placeholder="비밀번호를 써주세요"
        />
        <InputLabel>닉네임</InputLabel>
        <Input 
        {...register("nickname",{
          required: "별명을 반드시 작성해야 합니다.",
          minLength: {
            value: 3,
            message : "3글자 이상 입력해주세요"
          },
          maxLength : {
            value: 10,
            message : "10글자 이하로 입력해주세요"
          },
          pattern : {
            value: /^[A-za-z0-9가-힣]{3,10}$/,
            message : "한글, 영어, 숫자만 가능합니다"
          }
        })}
        placeholder="별명을 써주세요"
        />
        <Button> 회원가입하기 </Button>
      </Form>
    </FormContainer>
  )
}
export default SignUp;

export const InputLabel = styled.p`
  font-size: 15px;
  margin-left: 5px;
  margin-bottom: 0px;
`
export const Input = styled.input`
  border : 1px solid #3d8bfe;
  border-radius: 2px;
  width: 250px;
  height: 50px;
  margin-bottom: 10px;
  &:hover {
    background-color: aliceblue;
  }
` ;
export const Form = styled.form`
  display: flex;
  flex-direction: column;

`
export const FormContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
`
export const Button = styled.button`
  width: 250px;
  background-color: #a8bdf5;
  margin: 10px 0px;
  &:hover {
    cursor: pointer;
  }
`
export const FormHeader = styled.h1`
  font-size: 25px;
`