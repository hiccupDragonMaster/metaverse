import Toast from "react-native-root-toast"
import Colors from "../assets/Colors"

export const showToast = (
  message,
  textColor,
  delay = 1,
  position = Toast.positions.BOTTOM
) => {
  Toast.show(message, {
    duration: Toast.durations.SHORT,
    position,
    shadow: true,
    animation: true,
    hideOnPress: true,
    delay: delay,
    backgroundColor: "white",
    shadowColor: Colors.white,
    opacity: 1,
    textColor: textColor
  })
}
