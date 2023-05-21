import { Dispatch, SetStateAction } from "react";
import { styled } from "styled-components";
import { BASEURL, Form, Input } from "../Pages/SignUp";
import { useForm } from "react-hook-form";
import axios from "axios";

interface ISetState {
  setModalOpen: Dispatch<SetStateAction<boolean>>
}

const Modal = ( {setModalOpen}: ISetState) =>{
  const {register, handleSubmit} =  useForm();
  const handleClick = () => {
    setModalOpen( false);
  }
  const handleValid = (e:any) => {
    console.log(e.nickname);
    axios({
      url: `${BASEURL}/member`,
      method:"patch",
      data: {
        nickname: e.nickname,
      }
    })
    .then(function(res){
      console.log(res.status);
    });
    setModalOpen(false);
  }
  return(
    <>
      <ModalContainer>
        <ModalHeader>회원정보수정</ModalHeader>
        <Form onSubmit={handleSubmit(handleValid)}>
          <ModalLabel> 닉네임</ModalLabel>
          <ModalInput 
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
          placeholder="새로운 별명을 입력해 주세요"
          />
          <button>수정완료</button>
        </Form>
      </ModalContainer>
      <ModalShadow />
    </>
  )
}
export default Modal;
const ModalContainer = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 40%;
  left: 35%;
  width: 300px;
  height: 270px;
  z-index: 100;
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`
const ModalShadow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 50;
  background-color: #000000;
  opacity: 0.2;
`
const ModalInput = styled.input`
  width: 200px;
  height: 40px;
  border: none;
  border-bottom: 0.5px solid #a8bdf5;
  margin: auto;
  margin-top: 0;
  &:active {
    border: none;
  }
`
const ModalHeader = styled.h2`
  font-size: 15px;
  text-align: center;
`
const ModalLabel = styled.label`
  font-size: 13px;
  font-weight: 600;
  margin-left: 50px;
  margin-top: 50px;
`