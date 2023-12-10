import axios from "axios"
import { globalOptions } from "../options/options"
import { myLog } from "./helper"

const SERVICE_URL = globalOptions.url // your app back-end url
const baseHeader = {
  Accept: "application/json",
  "Content-Type": "application/json"
}
const baseConfigAxios = {
  withCredentials: false
}

export const baseApi = axios.create({
  baseURL: SERVICE_URL,
  headers: {
    ...baseHeader
  },
  ...baseConfigAxios
})
export const baseApiV1 = axios.create({
  baseURL: SERVICE_URL + "/api/v1",
  headers: {
    ...baseHeader
  },
  ...baseConfigAxios
})
export const baseApiModules = axios.create({
  baseURL: SERVICE_URL + "/modules",
  headers: {
    ...baseHeader
  },
  ...baseConfigAxios
})
export const baseApiAuth = axios.create({
  baseURL: SERVICE_URL + "/rest-auth",
  headers: {
    ...baseHeader
  },
  ...baseConfigAxios
})
export const baseApiUser = axios.create({
  baseURL: SERVICE_URL + "/users",
  headers: {
    ...baseHeader
  },
  ...baseConfigAxios
})

export const apiEndPoint = {
  events: {
    base: "events"
  },
  wishlist: {
    base: "wishlist",
    addItem: "wishlist/add-item"
  },
  group: {
    base: "groups",
    connfirmInvite: "groups/confirm-invite",
    groupsInvitation: "groups-invitation"
  },
  profile: {
    base: "profile"
  },
  profileSetting: {
    base: "profile-settings",
    hobbies: "hobbies"
  },
  restAuth: {
    base: "rest-auth",
    forgotPassword: "password/reset",
    changePassword: "password/change",
    resetConfirm: "password/reset/confirm",
    registration: "registration",
    login: "login",
    logout: "logout"
  },
  cards: {
    base: "cards"
  },
  allUser: {
    base: "all-users"
  },
  login: "login",
  signup: "signup",
  modules: {
    term: "terms-and-conditions",
    privacy: "privacy-policy"
  },
  vendors: "vendors",
  orders: "orders",
  quotes: "quotes",
  userQuotes: "user-quotes"
}

export const setTokenForBaseApi = token => {
  myLog("setTokenForApi=>", token)
  if (!token) {
    baseApiModules.defaults.headers.Authorization = ``
    baseApiUser.defaults.headers.Authorization = ``
    baseApiV1.defaults.headers.Authorization = ``
    baseApiAuth.defaults.headers.Authorization = ``
    baseApi.defaults.headers.Authorization = ``
  } else {
    baseApiModules.defaults.headers.Authorization = `Token ${token}`
    baseApiUser.defaults.headers.Authorization = `Token ${token}`
    baseApiV1.defaults.headers.Authorization = `Token ${token}`
    baseApiAuth.defaults.headers.Authorization = `Token ${token}`
    baseApi.defaults.headers.Authorization = `Token ${token}`
  }
}

export const configMultipartData = {
  "Content-Type": "multipart/form-data"
}
