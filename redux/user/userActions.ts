import { USER_LOGIN, USER_LOGOUT, USER_EDIT } from "./userTypes"

interface user {
    fname: string;
    lname: string;
    email: string;
    number: number;
    password: string;
    userOrOwner: boolean;
    state: string;
    city: string;
    role: string;
    schedual: object;
}

export const userLogin = (fullUser : user) : {type : string, payload: user} => {
    return{
        type : USER_LOGIN,
        payload: fullUser
    }
}