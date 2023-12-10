import React, { useEffect } from "react"
import { createDrawerNavigator } from "@react-navigation/drawer"
import TabNavigator from "../tabnavigator"
import { View, StyleSheet } from "react-native"
import Colors from "../../assets/Colors"
import { insets } from "../../utils/DeviceUtil"
import { screenName } from "../../utils/Define"
import { StatusBar } from "react-native"
import { myLog } from "../../utils/helper"
import { useDispatch, useSelector } from "react-redux"
import { unwrapResult } from "@reduxjs/toolkit"

const Drawer = createDrawerNavigator()
function DrawNavigator() {
  // const dispatch = useDispatch()
  // const api = useSelector(state => state.auth.api)
  // const user = useSelector(state => state.auth.user)
  // useEffect(() => {}, [])
  return (
    <Drawer.Navigator
      drawerPosition="left"
      overlayColor={Colors.mysticGreen60}
      drawerStyle={styles.drawerStyle}
      screenOptions={{
        headerShown: false
      }}
      drawerContent={() => {
        return <View style={styles.contentContainer}></View>
      }}
    >
      <Drawer.Screen name={screenName.tabNavigator} component={TabNavigator} />
    </Drawer.Navigator>
  )
}
export default DrawNavigator

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: Colors.white
  },
  logout: {
    fontSize: 16,
    color: Colors.grape,
    marginLeft: 12
  },
  logoutButton: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 30,
    marginBottom: insets.bottom + 30
  },
  content: {
    flex: 1,
    marginLeft: 30,
    marginTop: 58,
    marginBottom: 36
  },
  pickMeLogo: {
    alignSelf: "center",
    marginTop: insets.top + 30
  },
  settingTitle: {
    fontSize: 16,
    color: Colors.grape,
    marginLeft: 16
  },
  settingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 36
  },
  drawerStyle: {
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15
  }
})
