export enum EUserRole {
    ADMIN = 'admin',
    APPROVER = 'aprobador',
    AFFILIATOR = 'afiliador',
  }
  

import { PayloadAction, createSlice } from '@reduxjs/toolkit'



export interface ILoggedUser {
  id: number;
  name: string
  role?: EUserRole
  email: string
  photoURL?: string
}

interface IAuthState {
  token?: string
  expiresIn?: number
  isLogged?: boolean
  userLogged?: ILoggedUser
  isFirsLogin?: boolean
}

const initialState: IAuthState = {}

const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setTokenToApi: (
      state,
      action: PayloadAction<{
        token: string
        expiresIn?: number
        userLogged?: ILoggedUser
        isLogged?: boolean
      }>,
    ) => {
      state.token = action.payload.token
      state.expiresIn = action.payload.expiresIn
      state.isLogged = true
      state.userLogged = action.payload.userLogged as ILoggedUser
      state.isLogged = action.payload.isLogged
    },
    doLogout: (state) => {
      state.isLogged = undefined
      state.token = undefined
      state.expiresIn = undefined
      state.userLogged = undefined
      state.isFirsLogin = undefined
    },
    setFirstLogin: (
      state,
      action: PayloadAction<{
        isFirstLogin?: boolean
      }>,
    ) => {
      state.isFirsLogin = action.payload.isFirstLogin
    },
  },
})

export const { doLogout, setTokenToApi, setFirstLogin } =
  authSlice.actions

const AuthReducer = authSlice.reducer

export default AuthReducer
