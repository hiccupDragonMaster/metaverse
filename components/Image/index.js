import * as React from "react"
import { Platform, Image } from "react-native"
import FastImage from "react-native-fast-image"

export const TYPE_LEVEL_IMAGE = {
  LOW: FastImage.priority.low,
  NORMAL: FastImage.priority.normal,
  HIGH: FastImage.priority.high
}

export const TYPE_IMAGE_RESIZE_MODE = {
  CENTER: "center",
  CONTAIN: "contain",
  COVER: "cover",
  REPEAT: "repeat",
  STRETCH: "stretch"
}

const CustomImage = props => {
  const { useRNImage, children, ...otherProps } = props
  if (useRNImage) {
    return <Image {...otherProps} resizeMode="cover" />
  }
  return (
    <FastImage
      fadeDuration={0}
      fallback={Platform.OS === "android"}
      {...otherProps}
    >
      {children}
    </FastImage>
  )
}

export default CustomImage
