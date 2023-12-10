import { PermissionsAndroid, Platform } from "react-native"
import ImagePicker from "react-native-image-crop-picker"
import { launchCamera, launchImageLibrary } from "react-native-image-picker"
import { request, PERMISSIONS, RESULTS } from "react-native-permissions"
import { myLog } from "./helper"
const NO_CAM_PERMISSION = "E_PICKER_NO_CAMERA_PERMISSION"
const NO_PHOTO_PERMISSION = "E_PERMISSION_MISSING"

const permissionCamera = Platform.select({
  android: PERMISSIONS.ANDROID.CAMERA,
  ios: PERMISSIONS.IOS.CAMERA
})

export const CameraConfigOptionDefault = {
  width: 1080,
  height: 1920,
  cropping: true
}
export const requestCameraPermission = async () => {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: "App Camera Permission",
        message: "Move Would like to access your camera",
        buttonNeutral: "Ask Me Later",
        buttonNegative: "Cancel",
        buttonPositive: "OK"
      }
    )
    myLog("granted=>", granted)
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log("Camera permission given")
      return true
    } else {
      console.log("Camera permission denied")
      return false
    }
  } catch (err) {
    console.warn(err)
    return false
  }
}
export const openCamera = (
  pickImageHandler,
  cameraOption = CameraConfigOptionDefault
) => {
  ImagePicker.openCamera(cameraOption)
    .then(image => {
      const imagePath = image ? image.path || image.sourceURL : null
      const mime = image ? image.mime : "image/png"
      pickImageHandler && pickImageHandler(imagePath, mime)
    })
    .catch(e => {
      myLog("openCamera=>error=>", e)
      if (e.code === NO_CAM_PERMISSION || e.code === NO_PHOTO_PERMISSION) {
        // Android only returns code NO_PHOTO_PERMISSION
        alert("No camera permission")
      }
    })
}
export const openLibraryView = (
  pickImageHandler,
  cameraOption = CameraConfigOptionDefault
) => {
  ImagePicker.openPicker({ mediaType: "photo", multiple: true })
    .then(image => {
      pickImageHandler && pickImageHandler(image)
    })
    .catch(e => {
      myLog("openCamera=>error=>", e)
      if (e.code === NO_CAM_PERMISSION || e.code === NO_PHOTO_PERMISSION) {
        // Android only returns code NO_PHOTO_PERMISSION
        alert("No camera permission")
      }
    })
}
export const launchCameraView = async (
  pickImageHandler,
  cameraOption = CameraConfigOptionDefault
) => {
  try {
    const permission = await request(permissionCamera)
    myLog("permission=>", permission)
    if (permission !== RESULTS.GRANTED && permission !== RESULTS.LIMITED) return
    const resImage = await launchCamera({
      saveToPhotos: true,
      cameraType: "back"
    })
    myLog("launchCameraView=>", resImage)
    pickImageHandler && pickImageHandler(resImage)
  } catch (error) {
    myLog("launchCameraView=>e", error)
  }
}
export const launchImageLibraryView = async (
  pickImageHandler,
  cameraOption = CameraConfigOptionDefault
) => {
  try {
    const resImage = await launchImageLibrary({
      mediaType: "photo",
      allowMultiple: true
    })
    myLog("launchImageLibraryView=>", resImage)
    pickImageHandler && pickImageHandler(resImage)
  } catch (error) {
    myLog("launchCameraView=>e", error)
  }
}
