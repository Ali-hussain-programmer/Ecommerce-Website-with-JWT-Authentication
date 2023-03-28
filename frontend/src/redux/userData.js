import { createSlice } from '@reduxjs/toolkit'

const initialState = { value:[] }

export const userData = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setuserData(state,actions) {
      state.value=actions.payload
    },
    
  },
})

export const { setuserData } = userData.actions
export default  userData.reducer