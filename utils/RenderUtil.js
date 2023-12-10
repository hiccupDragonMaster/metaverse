import React from "react"
import { isEqual } from "lodash"
import { StyleSheet, View } from "react-native"
import Images from "../assets/Images"
import SVGIcon from "../assets/SVGIcon"
import CustomImage, { TYPE_IMAGE_RESIZE_MODE } from "../components/Image"
import { heightDevice, STATUS_BAR_HEIGHT, widthDevice } from "./DeviceUtil"
import { Image } from "react-native"
import CustomText from "../components/Text"
import PMButton from "../components/PMButton"
import { FontKey } from "../assets/fonts/FontKey"
import CustomAvatar from "../components/CustomAvatar"
import Colors from "../assets/Colors"
import { myLog } from "./helper"

function areEqual(prevProps, nextProps) {
  const { style: prevStyle, ...prevRest } = prevProps
  const { style: nextStyle, ...nextRest } = nextProps

  return isEqual(prevStyle, nextStyle) && isEqual(prevRest, nextRest)
}

export function shouldComponentUpdate(nextProps, nextState) {
  return !areEqual(this.props, nextProps) || !isEqual(this.state, nextState)
}

export const renderTopCover = () => {
  return (
    <View style={styles.topCoverContainer}>
      <SVGIcon.BgHeader width={widthDevice} />
    </View>
  )
}

export const renderScreenUnderCover = () => {
  return (
    <Image
      style={styles.logo}
      resizeMode={TYPE_IMAGE_RESIZE_MODE.STRETCH}
      source={Images.splash}
    />
  )
}

const styles = StyleSheet.create({
  topCoverLogo: {
    top: 51,
    position: "absolute"
  },
  topCover: {
    width: widthDevice,
    height: widthDevice
  },
  topCoverContainer: {
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    alignItems: "center"
  },
  logo: {
    width: widthDevice,
    height: 0.69 * heightDevice,
    position: "absolute",
    bottom: 0
  }
})
