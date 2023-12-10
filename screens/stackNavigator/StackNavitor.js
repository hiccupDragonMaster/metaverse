import { getOptions, OptionsContext } from "@options"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import React from "react"
import { useSelector } from "react-redux"
import { screenName } from "../../utils/Define"
import ARSConfirm from "../ARScreens/ARScreenConfirm"
import ARScreensBuy from "../ARScreens/ARScreensBuy"
import ARScreensApparel from "../ARScreens/ViewApparel"
import AtristProfileIndex from "../artist-profile/AtristProfileIndex"
import DrawNavigator from "../drawernavigator"
import FeedbackIndex from "../feedback/FeedbackIndex"
import AtristProfileHome from "../home/ArtistProfileHome"
import PrivacyPolicyIndex from "../privacy-policy/PrivacyPolicyIndex"
import TabNavigator from "../tabnavigator"
import TermsConditionIndex from "../terms-and-codition/TermsConditionIndex"

const Stack = createStackNavigator()

export const getNavigation = (modules, screens, initialRoute) => {
  const Navigation = () => {
    // console.log("Navigation=>", initialRoute, screens)
    // console.log("modules", JSON.stringify(modules, null, 2))
    const routes = modules.concat(screens).map(mod => {
      const pakage = mod.package
      const name = mod.value.title
      const Navigator = mod.value.navigator

      const Component = () => {
        return (
          <OptionsContext.Provider value={getOptions(pakage)}>
            <Navigator />
          </OptionsContext.Provider>
        )
      }
      return <Stack.Screen key={name} name={name} component={Component} />
    })

    const screenOptions = { headerShown: false }

    const stateStore = useSelector(state => state?.auth)
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={
            stateStore?.isLogin ? screenName.tabNavigator : initialRoute
          }
          screenOptions={screenOptions}
        >
          {routes}
          <Stack.Screen
            name={screenName.privacyPolicy}
            component={PrivacyPolicyIndex}
          />
          <Stack.Screen name={screenName.feedback} component={FeedbackIndex} />
          <Stack.Screen
            name={screenName.termConditions}
            component={TermsConditionIndex}
          />

          <Stack.Screen name={screenName.addItems} component={ARScreensBuy} />
          <Stack.Screen name={screenName.arconfirm} component={ARSConfirm} />
          <Stack.Screen
            name={screenName.atristProfileHome}
            component={AtristProfileHome}
          />

          <Stack.Screen
            name={screenName.ARScreensApparel}
            component={ARScreensApparel}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
  return Navigation
}
