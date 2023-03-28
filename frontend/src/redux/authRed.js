import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: false }

export const authRed = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    Authenticated(state) {
      state.value=true
    },
    Notauthenticated(state) {
      state.value=false
    },
   
  },
})

export const { Authenticated,  Notauthenticated } = authRed.actions
export default  authRed.reducer