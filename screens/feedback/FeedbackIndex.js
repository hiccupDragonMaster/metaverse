import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native"
import React, { useState } from "react"
import CustomImage from "../../components/Image"
import Images from "../../assets/Images"
import Colors from "../../assets/Colors"
import PMButton from "../../components/PMButton"
import SVGIcon from "../../assets/SVGIcon"
import { widthDevice } from "../../utils/DeviceUtil"
import { useNavigation } from "@react-navigation/native"
import CustomText from "../../components/Text"
import { FontKey } from "../../assets/fonts/FontKey"
import MButtonGradient from "../../components/MButtonGradient"
import Loader from "../../components/Loader"
import { launchCamera, launchImageLibrary } from "react-native-image-picker"
import { useSelector } from "react-redux"
import { showToast } from "../../utils/ToastUtil"

const FeedbackIndex = () => {
  const navigation = useNavigation()
  const [isLoading, setIsLoading] = useState(false)
  const stateStore = useSelector(state => state?.auth)

  const [subjectText, setSubjectText] = useState("")
  const [feedbackText, setFeedbackText] = useState("")

  const handleAccept = () => {
    if (!subjectText || !feedbackText) {
      showToast(
        "Subject and feedback are required. Try again.",
        Colors.red,
        2,
        -1
      )
    } else {
      setIsLoading(true)
      setTimeout(handleAcceptFeedback, 1000)
    }
  }

  const handleAcceptFeedback = () => {
    showToast("Your feedback successfully sent.", Colors.black, 2, -1)
    setIsLoading(false)
    // navigation.goBack()
  }

  const handleUploadProfileImage = () => {
    const options = {
      mediaType: "photo",
      includeBase64: false,
      selectionLimit: 10,
      maxWidth: 1000,
      maxHeight: 1000,
      quality: 0.7,
      presentationStyle: "pageSheet"
    }
    launchImageLibrary(options, async res => {
      if (!res?.didCancel) {
        showToast("Your file is uploaded successfully.", Colors.black, 2, -1)
      }
      console.log("res", res)
    })
  }
  return (
    <View style={styles.container}>
      <CustomImage
        source={Images.bgColorSignIn}
        style={{ position: "absolute", top: -150, left: 0 }}
        useRNImage
      />

      <View style={{ flex: 1, paddingHorizontal: 15 }}>
        <ScrollView
          contentContainerStyle={{ width: widthDevice - 30, paddingBottom: 30 }}
        >
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

          <CustomText
            font={FontKey.blowBrush}
            size={24}
            color={Colors.flashWhite}
            style={styles.nameText}
          >
            Feedback
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
              editable={false}
              style={{
                height: 47,
                width: "100%",
                backgroundColor: Colors.gray2,
                borderRadius: 6,
                paddingLeft: 15,
                color: Colors.white
              }}
              placeholder={stateStore?.user?.email}
              placeholderTextColor={Colors.placeHolder}
            />
          </View>

          <View>
            <CustomText
              size={16}
              color={Colors.flashWhite}
              font={FontKey.GothamBold}
              style={{ marginVertical: 10 }}
            >
              Name
            </CustomText>
            <TextInput
              editable={false}
              style={{
                height: 47,
                width: "100%",
                backgroundColor: Colors.gray2,
                borderRadius: 6,
                paddingLeft: 15,
                color: Colors.white
              }}
              placeholder={stateStore?.user?.name}
              placeholderTextColor={Colors.placeHolder}
            />
          </View>

          <View>
            <CustomText
              size={16}
              color={Colors.flashWhite}
              font={FontKey.GothamBold}
              style={{ marginVertical: 10 }}
            >
              Subject
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
              value={subjectText}
              placeholder="Subject"
              placeholderTextColor={Colors.placeHolder}
              onChangeText={e => setSubjectText(e)}
            />
          </View>

          <View>
            <CustomText
              size={16}
              color={Colors.flashWhite}
              font={FontKey.GothamBold}
              style={{ marginVertical: 10 }}
            >
              Feedback
            </CustomText>
            <TextInput
              style={{
                width: "100%",
                backgroundColor: Colors.gray2,
                borderRadius: 6,
                paddingLeft: 15,
                paddingBottom: 100,
                color: Colors.white
              }}
              value={feedbackText}
              placeholder="Share your thought"
              placeholderTextColor={Colors.placeHolder}
              onChangeText={e => setFeedbackText(e)}
            />
          </View>

          <View
            style={{
              borderRadius: 6,
              borderStyle: "dashed",
              borderWidth: 3,
              borderColor: "#384343",
              paddingVertical: 16,
              marginTop: 16
            }}
          >
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => handleUploadProfileImage()}
            >
              <CustomImage
                source={Images.upload}
                useRNImage
                style={styles.uploadImage}
              />
              <CustomText
                size={12}
                color={Colors.flashWhite}
                font={FontKey.GothamBold}
                style={{ fontWeight: "500", alignSelf: "center" }}
              >
                Tap me upload
              </CustomText>
            </TouchableOpacity>
          </View>

          <MButtonGradient
            onPress={() => {
              // setIsLoading(true)
              setFeedbackText("")
              setSubjectText("")
              handleAccept()
            }}
            style={{
              marginVertical: 30
            }}
          >
            <CustomText
              font={FontKey.GothamBold}
              size={17}
              color={Colors.flashWhite}
              style={{
                lineHeight: 20,
                fontWeight: "700",
                letterSpacing: 0.5
              }}
            >
              Send
            </CustomText>
          </MButtonGradient>
        </ScrollView>
      </View>

      <Loader loading={isLoading} />
    </View>
  )
}

export default FeedbackIndex

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.richBlack,
    alignItems: "center"
    // justifyContent: "center"
  },
  nameText: {
    lineHeight: 24,
    letterSpacing: 2,
    paddingVertical: 24
  },
  uploadImage: {
    width: 120,
    height: 86,
    alignSelf: "center",
    marginBottom: 10
  }
})
