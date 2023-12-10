import { DrawerActions, useIsFocused } from "@react-navigation/native"
import React, { useEffect, useState } from "react"
import { StyleSheet, Keyboard } from "react-native"
import { View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import Colors from "../../assets/Colors"
import Images from "../../assets/Images"
import SVGIcon from "../../assets/SVGIcon"
import CustomImage from "../../components/Image"
import PMButton from "../../components/PMButton"
import { screenName } from "../../utils/Define"
import { myLog } from "../../utils/helper"

export const BOTTOM_TAB_HEIGHT = 91

export const TabBar = ({ state, navigation, descriptors }) => {
  const [visible, setVisible] = useState(true)
  const focusedOptions = descriptors[state.routes[state.index].key].options

  // useEffect(async () => {
  // Keyboard.addListener("keyboardDidShow", keyboardWillShow)
  // Keyboard.addListener("keyboardDidHide", keyboardWillHide)
  // return () => {}
  // }, [])

  // const keyboardWillShow = () => {
  //   setVisible(false)
  // }
  // const keyboardWillHide = () => {
  //   setVisible(true)
  // }
  const activeList = [
    <SVGIcon.IconTabHomeActive width={24} height={24} />,
    <SVGIcon.IconTabBookActive width={24} height={24} />,
    <SVGIcon.IconTabSnowActive width={24} height={24} />,
    <SVGIcon.IconTabUserActive width={24} height={24} />
  ]
  const inActiveList = [
    <SVGIcon.IconTabHome width={24} height={24} />,
    <SVGIcon.IconTabBook width={24} height={24} />,
    <SVGIcon.IconTabSnow width={24} height={24} />,
    <SVGIcon.IconTabUser width={24} height={24} />
  ]
  const _onPress = (route, index) => {
    const isFocused = state.index === index
    const event = navigation.emit({
      type: "tabPress",
      target: route.key,
      canPreventDefault: true
    })
    if (!isFocused && !event.defaultPrevented) {
      if (index === 2) {
        if (focusedOptions?.tabBarStyle?.display === "none") {
          setVisible(false)
          navigation.navigate(route?.name)
        }
      } else {
        if (focusedOptions?.tabBarStyle?.display === "none") {
          setVisible(true)
          navigation.navigate(route?.name)
        }
      }
    }
  }

  return (
    <View
      style={{
        flexDirection: "row",
        width: "100%",
        display: !visible ? "none" : "flex"
      }}
    >
      {state.routes.map((route, index) => {
        const isFocused = state.index === index
        // const _onLongPress = () => {
        //   navigation.emit({ type: "tabLongPress", target: route.key })
        // }
        const icon = isFocused ? activeList[index] : inActiveList[index]
        return (
          <>
            <View style={[styles.bottomContainer]}>
              <PMButton
                disabled={isFocused ? true : false}
                key={`TAB_BAR_${index}`}
                accessibilityRole="button"
                accessibilityState={{ selected: isFocused }}
                onPress={() => {
                  _onPress(route, index)
                }}
                // onLongPress={_onLongPress}
                style={[styles.ButtonContainer]}
              >
                <View style={[styles.wrapIconTab]}>{icon}</View>
              </PMButton>
            </View>
          </>
        )
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  wrapIconTab: {
    flex: 1,
    justifyContent: "center"
  },
  fakeView: { width: 42, height: 4 },
  ButtonContainer: {
    flex: 1,
    alignItems: "center"
  },
  bottomContainer: {
    // flexDirection: "row",
    height: BOTTOM_TAB_HEIGHT,
    // justifyContent: "center",
    backgroundColor: Colors.richBlack,
    // marginBottom: -1,
    // paddingHorizontal: 20,
    display: "flex",
    width: "25%"
  }
})
