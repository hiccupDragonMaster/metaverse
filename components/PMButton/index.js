import React from "react"
import { StyleSheet, Pressable } from "react-native"
import { makeHitSlop } from "../../utils/helper"

const PMButton = props => {
  const { element, children, style, ...otherProps } = props
  const ButtonElement = element || Pressable
  return (
    <ButtonElement
      hitSlop={makeHitSlop(10)}
      style={[styles.container, style]}
      {...otherProps}
    >
      {children}
    </ButtonElement>
  )
}

const styles = StyleSheet.create({
  container: {}
})

export default PMButton
