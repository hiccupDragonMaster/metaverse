import React, { useEffect } from "react"
import { StyleSheet, View } from "react-native"
import Colors from "../../assets/Colors"
import SVGIcon from "../../assets/SVGIcon"
import { heightDevice, widthDevice } from "../../utils/DeviceUtil"
import { useNavigation } from "@react-navigation/native"
import { useSelector } from "react-redux"
import { screenName } from "../../utils/Define"
import { myLog } from "../../utils/helper"
import {
  baseApi,
  baseApiAuth,
  baseApiModules,
  baseApiUser,
  baseApiV1
} from "../../utils/ApiDefine"
import Orientation from "react-native-orientation-locker"
import CustomImage from "../../components/Image"
import CustomText from "../../components/Text"
import Images from "../../assets/Images"
import { FontKey } from "../../assets/fonts/FontKey"

const widthImage = widthDevice / 2
const heightImage = widthImage * (198 / 178)

const SplashScreen = () => {
  const navigation = useNavigation()
  const user = useSelector(state => state?.auth?.user)
  const token = useSelector(state => state?.auth?.token)
  const stateStore = useSelector(state => state)
  myLog("stateStore=>", stateStore)
  useEffect(() => {
    Orientation.lockToPortrait()
    setTimeout(() => {
      if (user) {
        if (token) {
          baseApiModules.defaults.headers.Authorization = `Token ${token}`
          baseApiUser.defaults.headers.Authorization = `Token ${token}`
          baseApiV1.defaults.headers.Authorization = `Token ${token}`
          baseApiAuth.defaults.headers.Authorization = `Token ${token}`
          baseApi.defaults.headers.Authorization = `Token ${token}`
        }
        navigation.reset({
          index: 0,
          routes: [
            {
              name: screenName.drawNavigator
            }
          ]
        })
        return
      } else {
        navigation.reset({
          index: 0,
          routes: [
            {
              name: screenName.signin
            }
          ]
        })
      }
    }, 1000)
  }, [])
  return (
    <View style={styles.container}>
      <CustomImage
        source={Images.bgColorSplash}
        style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
        useRNImage
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "flex-end",
          position: "relative",
          marginTop: 60,
          marginBottom: 80
        }}
      >
        <CustomImage
          source={Images.splashLeft}
          useRNImage
          style={{
            width: widthImage,
            height: heightImage,
            position: "absolute",
            zIndex: 3,
            top: 50,
            left: -(widthImage / 2)
          }}
        />
        <CustomImage
          source={Images.splashCenter}
          useRNImage
          style={{ width: 178, height: 198, zIndex: 2 }}
        />
        <CustomImage
          source={Images.splashRight}
          useRNImage
          style={{
            width: widthImage,
            height: heightImage,
            position: "absolute",
            zIndex: 1,
            top: 60,
            right: -(widthImage / 2)
          }}
        />
      </View>
      <View
        style={{
          flex: 1,
          width: "100%",
          // alignItems: "center",
          justifyContent: "center",
          paddingHorizontal: 48
        }}
      >
        <CustomText
          size={48}
          color={Colors.flashWhite}
          font={FontKey.blowBrush}
          style={{ marginBottom: 10 }}
        >
          Discover NFT apparels
        </CustomText>
        <CustomText
          size={16}
          color={Colors.flashWhite}
          font={FontKey.GothamLight}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </CustomText>
      </View>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  cover: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  container: {
    flex: 1,
    backgroundColor: Colors.richBlack,
    alignItems: "center"
    // justifyContent: "center"
  }
})
