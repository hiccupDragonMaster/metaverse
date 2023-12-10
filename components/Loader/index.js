import React from "react"
import { ActivityIndicator, View, StyleSheet } from "react-native"
import Colors from "../../assets/Colors"

const Loader = props => {
  const { loading } = props
  if (!loading) return null
  return (
    <View style={styles.Loader}>
      <ActivityIndicator color={Colors.mysticYellow} size={"large"} />
    </View>
  )
}

const styles = StyleSheet.create({
  Loader: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Colors.mysticYellow36,
    alignItems: "center",
    justifyContent: "center"
  }
})

export default Loader
