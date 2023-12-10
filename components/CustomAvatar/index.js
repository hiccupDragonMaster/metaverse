import * as React from "react"
import UserAvatar from "react-native-user-avatar"
import Colors from "../../assets/Colors"

const CustomAvatar = props => {
  const { size, style } = props
  const formatName = () => {
    const { keyConnectName, name } = props
    if (!name) return "No Name"
    let nameReturn = ""
    let arrName = name.split(keyConnectName)
    if (arrName && arrName.length && arrName.length > 2) {
      nameReturn = arrName[0] + " " + arrName[1]
    } else {
      nameReturn = name
    }
    return nameReturn
  }
  return (
    <UserAvatar
      bgColor={Colors.white}
      size={Math.round(size)}
      style={style}
      name={formatName()}
      textColor={Colors.yellow_light}
    />
  )
}
export default CustomAvatar
