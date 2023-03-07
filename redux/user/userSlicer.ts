import { userLogin } from "./userActions";
import { USER_EDIT, USER_LOGIN, USER_LOGOUT } from "./userTypes";
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface user {
  fname: string,
  lname: string,
  email: string,
  number: number,
  password: string,
  userOrOwner: boolean,
  state: string,
  city: string,
  role: string,
  schedual: object
}

const initailState: user = {
  fname: "",
  lname: "",
  email: "",
  number: 0,
  password: "",
  userOrOwner: true, // true for user false for owner
  state: "",
  city: "",
  role: "",
  schedual: {}
};

const userLoginSlice = createSlice({
  name: "counter",
  initialState: initailState,
  reducers: {
    logout: () => initailState,
    login: (state, action: PayloadAction<user>) => action.payload,
    shift: (state, action: PayloadAction<any>) => { return ({ ...state, [action.payload.name]: action.payload.data }) }
  }
})

export const { login, logout, shift } = userLoginSlice.actions

export default userLoginSlice.reducer