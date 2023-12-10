import React, { useEffect, useState } from "react"
import {
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View
} from "react-native"
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
import MButtonGradient from "../../components/MButtonGradient"
import PMButton from "../../components/PMButton"
import { signupApi } from "./utils"
import { showToast } from "../../utils/ToastUtil"
import Loader from "../../components/Loader"
import { Text } from "react-native"
import Icon from "react-native-vector-icons/MaterialCommunityIcons"
import { Shadow } from "react-native-shadow-2"

const widthImage = widthDevice / 2
const heightImage = widthImage * (198 / 178)

const SignUpScreen = () => {
  const navigation = useNavigation()
  const user = useSelector(state => state?.auth?.user)
  const token = useSelector(state => state?.auth?.token)
  const stateStore = useSelector(state => state)
  const [showPassword, setShowPassword] = useState(false)
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPass, setConfirmPass] = useState("")
  const [name, setName] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isCheck, setIsCheck] = useState(false)

  useEffect(() => {}, [])

  const handleSignUp = async () => {
    if (!email || !password || !name) {
      showToast("Name, Email and Password are required.", Colors.red, 2, -1)
    } else {
      if (password !== confirmPass) {
        showToast("Password doesn't match. Try again.", Colors.red, 2, -1)
      }
      if (!isCheck) {
        showToast("Please check Agree and try again.", Colors.red, 2, -1)
      } else {
        if (handleValidEmail(email)) {
          const payload = {
            name: name,
            email: email,
            password: password
          }
          const res = await signupApi(payload, setIsLoading)
          if (res?.user?.id) {
            navigation.goBack()
          }
        } else {
          showToast("Invalid Email. Try again.", Colors.red, 2, -1)
        }
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
              style={{ marginBottom: 28 }}
            >
              Sign Up
            </CustomText>
            <View>
              <CustomText
                size={16}
                color={Colors.flashWhite}
                font={FontKey.GothamBold}
                style={{ marginBottom: 13 }}
              >
                Full Name
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
                placeholder="Enter your name"
                placeholderTextColor={Colors.placeHolder}
                onChangeText={e => setName(e)}
              />
            </View>
            <View style={{ marginTop: 22 }}>
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
                onChangeText={e => setEmail(e)}
                placeholder="Enter your email"
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
                  onChangeText={e => setPassword(e)}
                  placeholder="Enter your password"
                  placeholderTextColor={Colors.placeHolder}
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
            <View style={{ marginTop: 22 }}>
              <CustomText
                size={16}
                color={Colors.flashWhite}
                font={FontKey.GothamBold}
                style={{ marginBottom: 13 }}
              >
                Confirm Password
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
                  secureTextEntry={!showPasswordConfirm}
                  onChangeText={e => setConfirmPass(e)}
                />
                <PMButton
                  onPress={() => setShowPasswordConfirm(!showPasswordConfirm)}
                >
                  {showPasswordConfirm ? (
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
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "flex-start",
              marginTop: 12
            }}
          >
            {isCheck ? (
              <TouchableOpacity
                onPress={() => setIsCheck(!isCheck)}
                activeOpacity={0.9}
              >
                <SVGIcon.IconCheckboxChecked style={{ marginRight: 12 }} />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => setIsCheck(!isCheck)}
                style={{
                  width: 23,
                  height: 23,
                  borderRadius: 50,
                  backgroundColor: Colors.blueBonnet,
                  marginRight: 13
                }}
                activeOpacity={0.9}
              />
            )}

            <CustomText align="left">
              <CustomText size={14} color={Colors.placeHolder}>
                Agree to
              </CustomText>
              <CustomText
                onPress={() => navigation?.navigate(screenName.termConditions)}
                size={14}
                font={FontKey.GothamBold}
                color={Colors.blueBonnet}
              >
                {" "}
                Terms & Conditions{" "}
              </CustomText>
              <CustomText size={14} color={Colors.placeHolder}>
                and
              </CustomText>

              <CustomText
                onPress={() => navigation?.navigate(screenName.privacyPolicy)}
                size={14}
                font={FontKey.GothamBold}
                color={Colors.blueBonnet}
              >
                {"\n"}
                Privacy Policy{" "}
              </CustomText>
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
                onPress={() => handleSignUp()}
                style={{ width: widthDevice / 1.15 }}
              >
                <CustomText
                  font={FontKey.GothamBold}
                  size={14}
                  color={Colors.flashWhite}
                >
                  Sign Up
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
              I have an account?
            </CustomText>
            <CustomText
              size={16}
              color={Colors.flashWhite}
              font={FontKey.GothamBold}
              onPress={() => navigation?.navigate(screenName.signin)}
            >
              {" "}
              Login
            </CustomText>
          </CustomText>
        </ScrollView>
      </View>
    </View>
  )
}

export default SignUpScreen

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
