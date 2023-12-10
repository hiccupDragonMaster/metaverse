import * as React from "react"
import {
  Keyboard,
  RefreshControl,
  ScrollView,
  TouchableWithoutFeedback
} from "react-native"
import { View } from "react-native"
import Colors from "../../assets/Colors"
import { insets } from "../../utils/DeviceUtil"
import { renderScreenUnderCover } from "../../utils/RenderUtil"

const Screen = props => {
  const {
    unSafe,
    children,
    disableCover,
    style,
    dismissKeyboard,
    isScroll,
    ...otherProps
  } = props
  if (dismissKeyboard) {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View
          style={[
            {
              paddingTop: unSafe ? 0 : insets.top + 42,
              backgroundColor: Colors.white,
              flex: 1
            },
            style
          ]}
        >
          {!disableCover && renderScreenUnderCover()}
          {children}
        </View>
      </TouchableWithoutFeedback>
    )
  }
  if (isScroll) {
    return (
      <ScrollView
        contentContainerStyle={[
          {
            paddingTop: unSafe ? 0 : insets.top + 42,
            backgroundColor: Colors.white
            // flex: 1
          },
          style
        ]}
        {...otherProps}
      >
        {!disableCover && renderScreenUnderCover()}
        {children}
      </ScrollView>
    )
  }
  return (
    <View
      style={[
        {
          paddingTop: unSafe ? 0 : insets.top + 42,
          backgroundColor: Colors.white,
          flex: 1
        },
        style
      ]}
    >
      {!disableCover && renderScreenUnderCover()}
      {children}
    </View>
  )
}

export default Screen
