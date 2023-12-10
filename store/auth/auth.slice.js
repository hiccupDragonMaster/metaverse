import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  user: null,
  token: "",
  isLogin: false,
  profile: null
}

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    markLogin: (state, action) => {
      state.user = action.payload?.user
      state.token = action.payload?.token
      state.profile = action.payload?.profile
      if (action.payload.isLogin) {
        state.isLogin = action.payload.isLogin
      }
    },
    markLogout: state => {
      state.user = null
      state.token = ""
      state.isLogin = false
      state.profile = null
      state.isShowVendor = true
    }
    // markLogout: state => initialState
  }
})

export const { markLogin, markLogout, saveUser } = slice.actions
export default slice
