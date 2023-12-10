import React from "react"
import { View } from "react-native"
import Colors from "../../assets/Colors"
const Dot = props => {
  const {
    status,
    pending,
    delivered,
    processing,
    cancelled,
    color,
    style = {}
  } = props
  let background = Colors.pending
  if (delivered) {
    background = Colors.delivered
  }
  if (processing) {
    background = Colors.processing
  }
  if (cancelled) {
    background = Colors.cancel
  }
  if (color) {
    background = color
  }
  return (
    <View
      style={{
        width: 6,
        height: 6,
        backgroundColor: background,
        borderRadius: 6,
        ...style
      }}
    ></View>
  )
}

export default Dot
