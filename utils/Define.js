import Colors from "../assets/Colors"
import Images from "../assets/Images"

export const INFINITY_NUMBER = 99999

export const MONTH_NAME = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
]

export const MONTH_NAME_SHORT = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
]

export const LOTTIE_INTERVAL_REPLAY = 10000

export const MOMENT_DATE_FORMAT = "MM/DD/YY"
export const MOMENT_TIME_FORMAT = "h:mm a"

export const MODAL_DELAY = 500

export const BUTTON_COMMON_HEIGHT = 40

export const IMAGE_MIME = {
  PNG: "image/png",
  JPG: "image/jpg",
  JPEG: "image/jpeg",
  HEIC: "image/heic",
  GIF: "image/gif"
}

export const KEYBOARD_TYPE = {
  NUMERIC: "numeric",
  DEFAULT: "default",
  NUMBER_PAD: "number-pad",
  DECIMAL: "decimal-pad",
  EMAIL: "email-address",
  PHONE_PAD: "phone-pad"
}

export const limitBase = 10

export const keyItemShop = {
  amazon: "amazon",
  bestbuy: "bestbuy",
  walmart: "walmart",
  target: "target"
}

export const listItemShop = [
  {
    id: keyItemShop.amazon,
    url: "https://www.amazon.com/",
    image: Images.amazon
  },
  {
    id: keyItemShop.bestbuy,
    url: "https://www.bestbuy.com/",
    image: Images.bestbuy
  },
  {
    id: keyItemShop.walmart,
    url: "https://www.walmart.com/",
    image: Images.walmart
  },
  {
    id: keyItemShop.target,
    url: "https://www.target.com/",
    image: Images.target
  }
]

export const AlertType = {
  delete: "delete",
  notice: "notice",
  confirm: "confirm"
}
export const groupMap = {
  myGroup: 1,
  joined: 2
}
export const screenName = {
  homeTab: "homeTab",
  wishListTab: "wishListTab",
  groupTab: "groupTab",
  calendarTab: "calendarTab",
  settingTab: "settingTab",
  shopView: "shopView",
  setupAccount: "setupAccount",
  profileSetting: "profileSetting",
  calendar: "calendar",
  eventDetail: "eventDetail",
  userDetail: "userDetail",
  groupDetail: "groupDetail",
  notifications: "notifications",
  addItems: "addItems",
  forgotPassword: "forgotpassword",
  privacyPolicy: "privacy",
  termConditions: "terms",
  eCards: "eCards",
  wishRegistriesList: "wishRegistriesList",
  wishListDetail: "wishListDetail",
  loginSignup: "loginSignup",
  changePassword: "changePassword",
  home: "home",
  drawNavigator: "drawernavigator",
  tabNavigator: "tabnavigator",
  welcome: "welcome",
  signInSignUp: "signInSignUp",
  vendorTab: "vendorTab",
  vendors: "vendors",
  selectVendor: "selectVendor",
  messageTab: "messageTab",
  profileTab: "profileTab",
  createProfile: "createProfile",
  createOrder: "createOrder",
  completePayment: "completePayment",
  paymentMethod: "paymentMethod",
  orderDetailPending: "orderDetailPending",
  orderDetailFulfillment: "orderDetailFulfillment",
  orderQuotes: "orderQuotes",
  myProfile: "myProfile",
  notification: "notification",
  signin: "signin",
  splash: "splash",
  signup: "signup",
  feedback: "feedback",
  arconfirm: "arconfirm",
  atristProfileIndex: "atristProfileIndex",
  atristProfileHome: "atristProfileHome",
  ARScreensApparel: "ARScreensApparel"
}
export const stateOrder = {
  pending: "PENDING",
  delivered: "DELIVERED",
  processing: "PROCESSING",
  cancel: "CANCELLED",
  ns: "NS"
}

export const getColorStateOrder = state => {
  switch (state) {
    case stateOrder.pending:
      return Colors.pending
    case stateOrder.delivered:
      return Colors.delivered
    case stateOrder.processing:
      return Colors.processing
    case stateOrder.cancel:
      return Colors.cancel
    default:
      return Colors.pending
  }
}

export const eventEmitterKey = {
  createdNewOrder: "createdNewOrder"
}

export const quotesStatus = {
  SENT: "SENT",
  ACCEPTED: "ACCEPTED",
  DECLINED: "DECLINED",
  NS: "NS"
}
