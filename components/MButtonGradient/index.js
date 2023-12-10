import React from "react"
import { StyleSheet, Pressable } from "react-native"
import LinearGradient from "react-native-linear-gradient"
import Colors from "../../assets/Colors"

const MButtonGradient = props => {
  const { element, children, style, linearStyle = {}, ...otherProps } = props
  const ButtonElement = element || Pressable
  return (
    <ButtonElement style={[styles.container, style]} {...otherProps}>
      <LinearGradient
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        colors={Colors.gradient.btnBase}
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: 50,
          borderRadius: 25,
          ...linearStyle
        }}
      >
        {children}
      </LinearGradient>
    </ButtonElement>
  )
}

const styles = StyleSheet.create({
  container: {}
})

export default MButtonGradient
