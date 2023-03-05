import { userLogin } from "./userActions";
import { USER_EDIT, USER_LOGIN, USER_LOGOUT } from "./userTypes";
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface user {
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
  userOrOwner: true, // true for user false for owner
  state: "",
  city: "",
  role: "",
  schedual: {},
};

export const userLoginSlice = createSlice({
  name: 'counter',
  // `createSlice` will infer the state type from the `initialState` argument
  initialuser,
  reducers: {
    login: (state: user, action: PayloadAction<user>) => {
      return (
        state.fname = action.payload.fname,
        state.lname = action.payload.lname,
        state.email = action.payload.email,
        state.number = action.payload.number,
        state.password = action.payload.password,
        state.userOrOwner = action.payload.userOrOwner,
        state.state = action.payload.state,
        state.city = action.payload.city,
        state.role = action.payload.role,
        state.schedual = action.payload.schedual
      )
    },
    logout: (state) => {
      return (
        state = initialuser
      )
    }
  }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value

export default counterSlice.reducer