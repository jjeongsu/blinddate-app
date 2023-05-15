import { useForm } from "react-hook-form";
import { Button, Form, FormContainer, FormHeader, Input, InputLabel } from "./SignUp";
import { Outlet, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSetRecoilState } from "recoil";
import { loginState, userInfo } from "../atom";
const BASEURL =  'http://52.79.226.246';
function LogIn(){
  const setUserInfo = useSetRecoilState(userInfo);
  const setLoginState = useSetRecoilState(loginState);
  const {register, handleSubmit} = useForm();
  const navigate = useNavigate();
  const handleValid = (e: any) => {
    console.log(e);
    axios({
      url:`${BASEURL}/auth/signin`,
      method:'post',
      data: {
        userId: e.userId,
        password: e.password,
      }
    })
    .then(function(res){
      setUserInfo({
        accessToken : res.data.accessToken,
        refreshToken: res.data.refreshToken,
      });
      setLoginState(true);
      navigate('home');
    })
  }
  return (
    <FormContainer>
      <FormHeader> 로그인</FormHeader>
      <Form onSubmit={handleSubmit(handleValid)}>
        <InputLabel>ID</InputLabel>
        <Input 
        {...register("userId",{
          required: "아이디를 반드시 작성해야 합니다.",
          minLength:{
            value: 3,
            message : "아이디는 3글자 이상입니다."
          },
          maxLength: {
            value: 10,
            message : "아이디는 10글자 이상입니다."
          }
        })}
        placeholder="아이디를 써주세요" />
        <InputLabel>Password</InputLabel>
        <Input 
        {...register("password",{
          required: "비밀번호를 반드시 작성해야 합니다.",
          minLength:{
            value: 3,
            message : "비밀번호는 3글자 이상입니다."
          },
          maxLength: {
            value: 10,
            message : "비밀번호는 10글자 이상입니다."
          }
        })}
        placeholder="비밀번호를 써주세요"
        />
        <Button> 로그인하기 </Button>
        <Button onClick={() => {navigate("/signup");}}>회원가입하러 가기</Button>
      </Form>
    </FormContainer>
  )
}
export default LogIn;
