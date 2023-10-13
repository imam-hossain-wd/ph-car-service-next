import { setToLocalStorage } from "@/utils/localStorage";

export const storeUserInto = ({accessToken}:{accessToken:string})=> {
    console.log(accessToken);
    setToLocalStorage("accessToken", accessToken as string)

}