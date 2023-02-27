import { userLogin } from "./userActions";
import { USER_EDIT, USER_LOGIN, USER_LOGOUT } from "./userTypes";

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

const initialuser: user = {
  fname: "",
  lname: "",
  email: "",
  number: 0,
  password: "",
  userOrOwner: false,
  state: "",
  city: "",
  role: "",
  schedual: {},
};

export const userReducer = (initialuser : user, action : {type : string, payload : user})=>{

    switch(action.type){
        case USER_LOGIN:
            return {
                fname   : action.payload.fname,
                lname   : action.payload.lname,
                email   : action.payload.email,
                number  : action.payload.number,
                password: action.payload.password,
                userOrOwner: action.payload.userOrOwner,
                state   : action.payload.state,
                city    : action.payload.city,
                role    : action.payload.role,
                schedual: action.payload.schedual,
            }
        case USER_LOGOUT:
        case USER_EDIT:
    }
}