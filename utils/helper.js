import moment from "moment"
import { Alert } from "react-native"
import { AlertType } from "./Define"

const isDebug = true
export const myLog = (...arg) => {
  if (isDebug) {
    console.log(moment().format("DD-MM-YYYY HH:mm:sss"), ...arg)
  }
}

export const getValueFromObjectByKeys = (
  obj = {},
  keys = [],
  defaultValue = undefined
) => {
  const length = keys.length
  if (!obj || length === 0 || Object.keys(obj).length === 0) {
    return defaultValue
  }
  let output = obj
  for (let i = 0; i < length; i++) {
    output = output[keys[i]]
    if (output === 0) {
      return 0
    }
    if (!output) {
      return defaultValue
    }
  }
  if (output === 0) {
    return 0
  }
  if (!output) {
    return defaultValue
  }
  return output || defaultValue
}

export const urlToObject = async image => {
  const response = await fetch(image)
  // here image is url/location of image
  const blob = await response.blob()
  const file = new File([blob], "image.jpg", { type: blob.type })
  myLog("file=>", file)
  return file
}

export const formatImageUrl = (url = "") => {
  return url
}

export const alertConfirm = ({
  onOk,
  onCancel,
  title,
  message,
  textOK = "Yes",
  textCancel = "No",
  type = AlertType.notice
}) => {
  switch (type) {
    case AlertType.delete:
      Alert.alert(
        title || "Delete",
        message || "Do you want to delete this item?",
        [
          {
            text: textOK,
            onPress: () => {
              onOk && onOk()
            }
          },
          {
            text: textCancel
          }
        ]
      )
      break
    case AlertType.confirm:
      Alert.alert(title || "Confirm", message || "Message", [
        {
          text: textOK,
          onPress: () => {
            onOk && onOk()
          }
        },
        {
          text: textCancel
        }
      ])
      break
    case AlertType.notice:
      Alert.alert(title || "Notice", message || "Notice", [
        {
          text: textOK,
          onPress: () => {
            onOk && onOk()
          }
        }
      ])
      break
    default:
      break
  }
}
export const getErrorMessage = (error, defaultMessage = "error") => {
  let messageError = defaultMessage,
    isErrorServer = false
  const dataError = getValueFromObjectByKeys(error, ["data"])
  if (dataError && typeof dataError === "object") {
    Object.values(dataError).map(errorDetail => {
      if (errorDetail && !isErrorServer) {
        if (typeof errorDetail === "string") {
          messageError = errorDetail
          isErrorServer = true
        } else if (Array.isArray(errorDetail) && errorDetail.length) {
          messageError = errorDetail.join("\n")
          isErrorServer = true
        }
      }
    })
  }
  return messageError
}
export const makeHitSlop = size => ({
  top: size,
  left: size,
  bottom: size,
  right: size
})
