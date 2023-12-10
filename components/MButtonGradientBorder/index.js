import React from "react"
import { StyleSheet, Pressable, View } from "react-native"
import LinearGradient from "react-native-linear-gradient"
import Colors from "../../assets/Colors"

const MButtonGradientBorder = props => {
  const { element, children, style, linearStyle = {}, ...otherProps } = props
  const ButtonElement = element || Pressable
  return (
    <ButtonElement style={[styles.container, style]} {...otherProps}>
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={Colors.gradient.btnBase}
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: 50,
          borderRadius: 8,
          padding: 1,
          ...linearStyle
        }}
      >
        <View
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: Colors.white,
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 7
          }}
        >
          {children}
        </View>
      </LinearGradient>
    </ButtonElement>
  )
}

const styles = StyleSheet.create({
  container: {}
})

export default MButtonGradientBorder
