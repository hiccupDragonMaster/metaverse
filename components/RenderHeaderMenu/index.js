import { DrawerActions, useNavigation } from "@react-navigation/native"
import React from "react"
import { View, StyleSheet } from "react-native"
import { useSelector } from "react-redux"
import Colors from "../../assets/Colors"
import { FontKey } from "../../assets/fonts/FontKey"
import SVGIcon from "../../assets/SVGIcon"
import { STATUS_BAR_HEIGHT } from "../../utils/DeviceUtil"
import CustomAvatar from "../CustomAvatar"
import CustomImage from "../Image"
import PMButton from "../PMButton"
import CustomText from "../Text"

const RenderHeaderMenu = ({
  text,
  isBack,
  renderCenter,
  disableRight,
  centerStyle = {},
  containerStyle = {},
  isBackBlack,
  isShowAvatarCenter = false
}) => {
  const navigation = useNavigation()
  const user = useSelector(state => state.auth.user)
  const renderCenterAvatar = () => {
    return (
      <View style={{ alignItems: "center", paddingBottom: 11 }}>
        <CustomImage
          style={{
            width: 112,
            height: 112,
            backgroundColor: Colors.mysticYellow60,
            borderRadius: 112,
            marginBottom: 9
          }}
          source={{ uri: user && user.profile_image ? user.profile_image : "" }}
        />
        <CustomText color={Colors.white} font={FontKey.bold} size={14}>
          {user && user.user && user.user.name ? user.user.name : ""}
        </CustomText>
      </View>
    )
  }
  return (
    <View
      style={[
        renderCenter || isShowAvatarCenter
          ? styles.containerStart
          : styles.containerNormal,
        containerStyle
      ]}
    >
      {isBack ? (
        <PMButton style={styles.btnLeft} onPress={() => navigation.goBack()}>
          {isBackBlack ? (
            <SVGIcon.IconArrowLeftBlack />
          ) : (
            <SVGIcon.IconArrowLeft />
          )}
        </PMButton>
      ) : (
        <View style={styles.btnLeft} />
      )}
      {renderCenter ? (
        renderCenter()
      ) : isShowAvatarCenter ? (
        renderCenterAvatar()
      ) : (
        <CustomText style={centerStyle} font={FontKey.bold} size={22}>
          {text}
        </CustomText>
      )}
      {disableRight || !user ? (
        <View style={styles.rightEmpty} />
      ) : (
        <View style={styles.wrapRight}>
          <View style={{ width: 24 }}>
            <CustomAvatar
              size={24}
              name={
                user && user.user && user.user.email
                  ? user.user.email
                  : "No Name"
              }
            />
          </View>
        </View>
      )}
    </View>
  )
}
export default RenderHeaderMenu

const styles = StyleSheet.create({
  wrapRight: {
    width: 50,
    alignItems: "flex-end",
    justifyContent: "center",
    height: 50
  },
  rightEmpty: { width: 50 },
  btnLeft: {
    width: 50,
    height: 50,
    justifyContent: "center"
  },
  containerStart: {
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexDirection: "row",
    marginTop: STATUS_BAR_HEIGHT,
    paddingHorizontal: 20
  },
  containerNormal: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    marginTop: STATUS_BAR_HEIGHT,
    paddingHorizontal: 20
  }
})

// <PMButton
//   style={styles.btnLeft}
//   onPress={() => {
//     navigation.dispatch(DrawerActions.toggleDrawer())
//   }}
// >
//   <SVGIcon.IconMenu />
// </PMButton>
