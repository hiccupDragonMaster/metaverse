import { useNavigation } from "@react-navigation/native"
import React, { useState } from "react"
import { ScrollView, StyleSheet, TextInput, View } from "react-native"
import { useSelector } from "react-redux"
import Colors from "../../assets/Colors"
import { FontKey } from "../../assets/fonts/FontKey"
import Images from "../../assets/Images"
import SVGIcon from "../../assets/SVGIcon"
import CustomImage from "../../components/Image"
import MButtonGradient from "../../components/MButtonGradient"
import PMButton from "../../components/PMButton"
import CustomText from "../../components/Text"
import { widthDevice } from "../../utils/DeviceUtil"
import { showToast } from "../../utils/ToastUtil"
import { resetPasswordApi } from "./utils"
import { Shadow } from "react-native-shadow-2"

const widthImage = widthDevice / 2
const heightImage = widthImage * (198 / 178)

const SignInScreen = () => {
  const navigation = useNavigation()
  const user = useSelector(state => state?.auth?.user)
  const token = useSelector(state => state?.auth?.token)
  const stateStore = useSelector(state => state)
  const [email, setEmail] = useState("")

  const handleResetPassword = async () => {
    if (!email) {
      showToast("Email is required. Try again.", Colors.red, 2, -1)
    } else {
      if (handleValidEmail(email)) {
        const res = await resetPasswordApi(email)
        if (res?.detail) {
          showToast(res?.detail, Colors.black, 2, -1)
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
        <ScrollView contentContainerStyle={{ width: widthDevice - 30 }}>
          <View
            style={{
              alignItems: "flex-start",
              justifyContent: "flex-start",
              paddingTop: 40
            }}
          >
            <PMButton
              style={{
                paddingHorizontal: 17,
                paddingVertical: 14,
                backgroundColor: Colors.white24,
                borderRadius: 14
              }}
              onPress={() => navigation?.goBack()}
            >
              <SVGIcon.IconBack />
            </PMButton>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
              marginTop: 60
            }}
          >
            <CustomText
              font={FontKey.blowBrush}
              size={40}
              color={Colors.flashWhite}
              align="center"
            >
              forgot password
            </CustomText>
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
                placeholderTextColor={Colors.placeHolder}
                onChangeText={e => setEmail(e)}
              />
            </View>
          </View>

          <View
            style={{ alignSelf: "center", marginTop: 50, marginBottom: 20 }}
          >
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
                onPress={() => handleResetPassword()}
                style={{ width: widthDevice / 1.15 }}
              >
                <CustomText
                  font={FontKey.GothamBold}
                  size={14}
                  color={Colors.flashWhite}
                >
                  Reset Password
                </CustomText>
              </MButtonGradient>
            </Shadow>
          </View>
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
