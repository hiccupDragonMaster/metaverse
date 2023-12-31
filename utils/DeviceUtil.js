import { Dimensions, Platform, PixelRatio, StatusBar } from "react-native"
import RNDeviceInfo from "react-native-device-info"
import StaticSafeAreaInsets from "react-native-static-safe-area-insets"

export const IS_ANDROID = Platform.OS === "android"

export const insets = {
  top: StaticSafeAreaInsets.safeAreaInsetsTop,
  bottom: StaticSafeAreaInsets.safeAreaInsetsBottom,
  left: StaticSafeAreaInsets.safeAreaInsetsLeft,
  right: StaticSafeAreaInsets.safeAreaInsetsRight
}

export const IPX_HEIGHT = 812

export const IS_TABLET = RNDeviceInfo.isTablet()

const { width, height } = Dimensions.get("screen")
export const widthDevice = width < height ? width : height
export const heightDevice = width > height ? width : height

const width_window = Dimensions.get("window").width
const height_window = Dimensions.get("window").height
export const widthWindow =
  width_window < height_window ? width_window : height_window
export const heightWindow =
  width_window > height_window ? width_window : height_window

export const DRAWER_WIDTH = IS_TABLET ? widthDevice * 0.5 : widthDevice * 0.7

const listNewIpModel = [
  "iPhone X",
  "iPhone XS",
  "iPhone XR",
  "iPhone XS Max",
  "iPhone 11",
  "iPhone 11 Pro",
  "iPhone 11 Pro Max",
  "iPhone 12",
  "iPhone 12 Pro",
  "iPhone 12 Pro Max",
  "iPhone 13"
]

const getResponsiveValue = ratio => {
  return PixelRatio.roundToNearestPixel((widthDevice * ratio) / 100)
}

export const getSizeResposive = size => {
  const defaultWidth = 360
  const ratio = (size / defaultWidth) * 100
  const responsiveWidth = getResponsiveValue(ratio)
  return responsiveWidth
}

export const getDecelerationRate = Platform.select({
  ios: 0.995,
  android: 0.98
})

export const dvWidthPx = PixelRatio.getPixelSizeForLayoutSize(widthDevice)
export const dvHeightPx = PixelRatio.getPixelSizeForLayoutSize(heightDevice)
export const TAB_HEIGHT = 36
export const iosDevicesInch = {
  // 1st Gen
  // 3G
  // 3GS
  // 4
  iPhone4: 3.5,
  // 4S
  iPhone4s: 3.5,
  // 5
  iPhone5: 4,
  // 5c
  iPhone5c: 4,
  // 5s
  iPhone5s: 4,
  // 6 Plus
  iPhone6Plus: 5.5,
  // 6
  iPhone6: 4.7,
  // 6s
  iPhone6s: 4.7,
  // 6s Plus
  iPhone6sPlus: 5.5,
  // SE
  iPhoneSE: 4,
  // 7
  iPhone7: 4.7,
  // 7 Plus
  iPhone7Plus: 5.5,
  // 8
  iPhone8: 4.7,
  // 8 Plus
  iPhone8Plus: 5.5,
  // X
  iPhoneX: 5.8,
  // XR
  iPhoneXR: 6.1,
  // XS
  iPhoneXS: 5.8,
  // XS Max
  iPhoneXSMax: 6.5,
  // 11
  iPhone11: 6.1,
  // 11 Pro
  iPhone11Pro: 5.8,
  // 11 Pro Max
  iPhone11ProMax: 6.5,
  // 1
  iPad: 9.7,
  // 2
  iPad2: 9.7,
  // Mini
  iPadMini: 7.9,
  // 3
  iPad3: 9.7,
  // 4
  iPad4: 9.7,
  // Air
  iPadAir: 9.7,
  // Mini 2
  iPadMini2: 7.9,
  // Mini 3
  iPadMini3: 7.9,
  // Mini 4
  iPadMini4: 7.9,
  // Air 2
  iPadAir2: 9.7,
  // Pro 12.9-inch
  "iPadPro12.9-inch": 12.9,
  // Pro 9.7-inch
  "iPadPro9.7-inch": 9.7,
  // iPad 5th Gen, 2017
  // Pro 12.9-inch, 2017
  "iPadPro12.9-inch": 12.9,
  // Pro 10.5-inch, 2017
  "iPadPro10.5-inch": 10.5,
  // iPad 6th Gen, 2018
  "iPad(6thgeneration)": 9.7,
  // iPad 7th Gen, 2019
  "iPad(7thgeneration)": 10.2,
  // iPad Pro 3rd Gen 11-inch, 2018
  // iPad Pro 3rd Gen 11-inch 1TB, 2018
  "iPadPro11-inch(3rdgeneration)": 11,
  // iPad Pro 3rd Gen 12.9-inch, 2018
  // iPad Pro 3rd Gen 12.9-inch 1TB, 2018
  "iPadPro12.9-inch(3rdgeneration)": 12.9,
  // Mini 5
  iPadMini5: 7.9,
  // Air 3
  iPadAir3: 9.7
}

export const enableStatusBar = isEnable => StatusBar.setHidden(!isEnable)

export const HOME_INDICATOR_HEIGHT = 14
export const iconTabSize = 30

export const TABBAR_HEIGHT = 70

export const STATUS_BAR_HEIGHT = !IS_ANDROID ? 44 : StatusBar.currentHeight
