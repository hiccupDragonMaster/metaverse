import React from "react"
import { StyleSheet, Text } from "react-native"
import Colors from "../../assets/Colors"
import { FontKey } from "../../assets/fonts/FontKey"

const CustomText = props => {
  const {
    style,
    color,
    children,
    // bold,
    font,
    size,
    weight,
    underline,
    align,
    ...otherProps
  } = props
  const staticStyle = {}
  staticStyle.color = Colors.white
  if (color) {
    staticStyle.color = color
  }
  if (size) {
    staticStyle.fontSize = size
  }
  if (weight) {
    staticStyle.fontWeight = weight
  }
  if (align) {
    staticStyle.textAlign = align
  }
  if (underline) {
    staticStyle.textDecorationLine = "underline"
  }
  const fontFamily = font || FontKey.GothamLight
  staticStyle.fontFamily = fontFamily
  return (
    <Text
      style={[styles.defaultText, staticStyle, style]}
      allowFontScaling={false}
      {...otherProps}
    >
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({
  defaultText: {
    color: Colors.black
  }
})

export default CustomText
