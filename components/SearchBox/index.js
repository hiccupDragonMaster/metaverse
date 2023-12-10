/* eslint-disable react-native/no-inline-styles */
import * as React from "react"
import { TextInput } from "react-native"
import { View, StyleSheet } from "react-native"
import Colors from "../../assets/Colors"
import { FontKey } from "../../assets/fonts/FontKey"
import Images from "../../assets/Images"
import CustomImage from "../Image"

const SearchBox = props => {
  const { containerStyle, style, onChange, font, ...otherProps } = props
  const fontFamily = font || FontKey.regular

  return (
    <View
      style={[
        styles.container,
        {
          borderColor: Colors.border
        },
        containerStyle
      ]}
    >
      <TextInput
        style={[
          styles.staticStyle,
          {
            fontFamily,
            color: Colors.border
          },
          style
        ]}
        underlineColorAndroid="transparent"
        allowFontScaling={false}
        placeholderTextColor={Colors.border}
        {...otherProps}
      />
      <CustomImage
        useRNImage
        source={Images.iconFilter}
        style={{ width: 20, height: 20 }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  staticStyle: {
    flex: 1,
    fontSize: 16,
    marginRight: 8
  },
  container: {
    paddingHorizontal: 20,
    borderWidth: 1,
    flexDirection: "row",
    backgroundColor: Colors.bg_page,
    borderRadius: 5,
    overflow: "hidden",
    alignItems: "center",
    height: 55
  }
})

export default SearchBox
