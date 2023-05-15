import { atom } from "recoil";



export const loginState = atom<boolean>({
  key: "loginState",
  default: false,
});

interface IUserInfo {
  accessToken: string,
  refreshToken:string,
}
export const userInfo = atom<IUserInfo>({
  key: "userInfoState",
  default: {
    accessToken: "",
    refreshToken: "",
  }
})