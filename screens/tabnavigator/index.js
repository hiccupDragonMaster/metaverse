import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import * as React from "react"
import { View } from "react-native"
import { useSelector } from "react-redux"
import { screenName } from "../../utils/Define"
import ARScreensBuy from "../ARScreens/ARScreensBuy"
import ARScreensIndex from "../ARScreens/ARScreensIndex"
import AtristProfileIndex from "../artist-profile/AtristProfileIndex"
import Home from "../home"
import ProfileIndex from "../profile/ProfileIndex"
import { TabBar } from "./TabBar"
import { useIsFocused } from "@react-navigation/native"

const screenOptionsConfig = {
  headerShown: false
}

const Tab = createBottomTabNavigator()
function TabNavigator() {
  return (
    <Tab.Navigator
      backBehavior="initialRoute"
      screenOptions={{
        tabBarStyle: { display: "none" },
        headerShown: false
      }}
      tabBar={props => <TabBar {...props} />}
    >
      <Tab.Screen name={screenName.homeTab} component={Home} />
      <Tab.Screen name={screenName.vendorTab} component={AtristProfileIndex} />
      <Tab.Screen name={screenName.messageTab} component={ARScreensIndex} />
      <Tab.Screen name={screenName.profileTab} component={ProfileIndex} />
    </Tab.Navigator>
  )
}
export default TabNavigator
