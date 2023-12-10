import { useNavigation } from "@react-navigation/native"
import React, { useState } from "react"
import { ScrollView, StyleSheet, TextInput, View } from "react-native"
import { useDispatch } from "react-redux"
import Colors from "../../assets/Colors"
import { FontKey } from "../../assets/fonts/FontKey"
import Images from "../../assets/Images"
import SVGIcon from "../../assets/SVGIcon"
import CustomImage from "../../components/Image"
import Loader from "../../components/Loader"
import MButtonGradient from "../../components/MButtonGradient"
import PMButton from "../../components/PMButton"
import CustomText from "../../components/Text"
import { markLogin } from "../../store/auth/auth.slice"
import { screenName } from "../../utils/Define"
import { widthDevice } from "../../utils/DeviceUtil"
import { showToast } from "../../utils/ToastUtil"
import { loginApi } from "./utils"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { Shadow } from "react-native-shadow-2"

const widthImage = widthDevice / 2
const heightImage = widthImage * (198 / 178)

const SignInScreen = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  // const user = useSelector(state => state?.auth?.user)
  // const token = useSelector(state => state?.auth?.token)

  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async () => {
    if (!email || !password) {
      showToast(
        "Email and Password are required. Try again.",
        Colors.red,
        2,
        -1
      )
    }
    if (email && password) {
      if (handleValidEmail(email)) {
        const payload = {
          email: email,
          password: password
        }
        const res = await loginApi(payload, setIsLoading)
        // console.log(JSON.stringify(res, null, 2))
        if (res?.user?.id) {
          const modifiedRes = {
            user: {
              ...res?.user
            },
            profile: {
              ...res?.profile
            },
            isLogin: true,
            token: res?.key
          }
          dispatch(markLogin(modifiedRes))
          navigation.navigate(screenName.drawNavigator)
          // navigation?.reset({
          //   index: 0,
          //   routes: [
          //     {
          //       name: screenName.drawNavigator
          //     }
          //   ]
          // })
        } else {
          showToast(
            "Your email or password is incorrect. Try again.",
            Colors.red,
            2,
            -1
          )
        }
      } else {
        showToast("Invalid email. Try again.", Colors.red, 2, -1)
      }
    }
  }

  const handleValidEmail = val => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/
    if (reg.test(val) === false) {
      return false
    } else if (reg.test(val) === true) {
      return true
    }
  }

  return (
    <View style={styles.container}>
      <CustomImage
        source={Images.bgColorSignIn}
        style={{ position: "absolute", top: -150, left: 0 }}
        useRNImage
      />

      <View style={{ flex: 1, paddingHorizontal: 15 }}>
        <Loader loading={isLoading} />
        <ScrollView contentContainerStyle={{ width: widthDevice - 30 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-start",
              position: "relative",
              marginTop: 60
            }}
          >
            <View style={{ flex: 1, opacity: 0 }}>
              <CustomImage
                source={Images.logoSignIn}
                useRNImage
                style={{
                  width: 50,
                  height: 62,
                  zIndex: 2
                }}
              />
            </View>
            <CustomImage
              source={Images.avatarSignIn}
              useRNImage
              style={{ width: 178, height: 198, zIndex: 2 }}
            />
            <View style={{ flex: 1, alignItems: "center" }}>
              <CustomImage
                source={Images.logoSignIn}
                useRNImage
                style={{
                  width: 50,
                  height: 62,
                  zIndex: 2
                }}
              />
            </View>
          </View>
          <View
            style={{
              flex: 1,
              width: "100%",
              // alignItems: "center",
              // justifyContent: "center",
              paddingTop: 40
            }}
          >
            <CustomText
              size={48}
              color={Colors.flashWhite}
              font={FontKey.blowBrush}
              style={{ marginBottom: 10 }}
            >
              login
            </CustomText>
            <View>
              <CustomText
                size={16}
                color={Colors.flashWhite}
                font={FontKey.GothamBold}
                style={{ marginBottom: 13 }}
              >
                Email
              </CustomText>
              <TextInput
                style={{
                  height: 47,
                  width: "100%",
                  backgroundColor: Colors.gray2,
                  borderRadius: 6,
                  paddingLeft: 15,
                  color: Colors.white
                }}
                placeholder="Enter your email"
                onChangeText={e => setEmail(e)}
                placeholderTextColor={Colors.placeHolder}
              />
            </View>
            <View style={{ marginTop: 22 }}>
              <CustomText
                size={16}
                color={Colors.flashWhite}
                font={FontKey.GothamBold}
                style={{ marginBottom: 13 }}
              >
                Password
              </CustomText>
              <View
                style={{
                  height: 47,
                  width: "100%",
                  backgroundColor: Colors.gray2,
                  borderRadius: 6,
                  flexDirection: "row",
                  alignItems: "center",
                  paddingRight: 15
                }}
              >
                <TextInput
                  style={{
                    height: 47,
                    flex: 1,
                    backgroundColor: Colors.gray2,
                    borderRadius: 6,
                    paddingLeft: 15,
                    color: Colors.white
                  }}
                  placeholder="Enter your password"
                  placeholderTextColor={Colors.placeHolder}
                  onChangeText={e => setPassword(e)}
                  secureTextEntry={!showPassword}
                />
                <PMButton onPress={() => setShowPassword(!showPassword)}>
                  {showPassword ? (
                    <Icon name="eye" color={Colors.white} size={16} />
                  ) : (
                    <SVGIcon.IconEyePassword />
                  )}
                </PMButton>
              </View>
            </View>
          </View>
          <View
            style={{
              alignItems: "flex-end",
              justifyContent: "flex-end",
              paddingTop: 12
            }}
          >
            <CustomText
              onPress={() => navigation.navigate(screenName.forgotPassword)}
              size={14}
              color={Colors.placeHolder}
            >
              Forgot Password ?{" "}
            </CustomText>
          </View>

          <View style={{ alignSelf: "center", marginTop: 50 }}>
            <Shadow
              startColor={"rgba(98, 226, 255, 0.3)"}
              endColor={"000000"}
              style={{
                alignItems: "center",
                justifyContent: "center",
                height: 50,
                borderRadius: 25
              }}
              offset={[1, 2]}
              distance={9}
              stretch={true}
            >
              <MButtonGradient
                onPress={() => handleLogin()}
                style={{ width: widthDevice / 1.15 }}
              >
                <CustomText
                  font={FontKey.GothamBold}
                  size={14}
                  color={Colors.flashWhite}
                >
                  Login
                </CustomText>
              </MButtonGradient>
            </Shadow>
          </View>

          <CustomText style={{ marginTop: 30 }} align="center">
            <CustomText
              size={16}
              color={Colors.placeHolder}
              font={FontKey.GothamLight}
            >
              Don’t have an account?
            </CustomText>
            <CustomText
              size={16}
              color={Colors.flashWhite}
              font={FontKey.GothamBold}
              onPress={() => navigation?.navigate(screenName.signup)}
            >
              {" "}
              Sign up
            </CustomText>
          </CustomText>
        </ScrollView>
      </View>
    </View>
  )
}

export default SignInScreen

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
