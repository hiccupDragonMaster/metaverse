import { ScrollView, StyleSheet, Text, View } from "react-native"
import React, { useState } from "react"
import Colors from "../../assets/Colors"
import CustomText from "../../components/Text"
import MButtonGradient from "../../components/MButtonGradient"
import { FontKey } from "../../assets/fonts/FontKey"
import PMButton from "../../components/PMButton"
import SVGIcon from "../../assets/SVGIcon"
import { widthDevice } from "../../utils/DeviceUtil"
import Images from "../../assets/Images"
import { useNavigation } from "@react-navigation/native"
import CustomImage from "../../components/Image"
import Loader from "../../components/Loader"
import { showToast } from "../../utils/ToastUtil"
import Toast from "react-native-root-toast"
import { Shadow } from "react-native-shadow-2"

const TermsConditionIndex = () => {
  const navigation = useNavigation()
  const [isLoading, setIsLoading] = useState(false)

  const handleAccept = () => {
    navigation.goBack()
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
              paddingTop: 30
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
            Terms & condition
          </CustomText>

          <CustomText
            font={FontKey.GothamBlack}
            size={14}
            color={Colors.textWhite}
            style={{
              lineHeight: 20,
              fontWeight: "400"
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            ultrices velit quis erat vestibulum fermentum. Nullam ac pulvinar
            lorem. Pellentesque egestas felis et metus molestie aliquet.
            Curabitur at molestie tortor, et mollis elit. Donec nibh dui,
            hendrerit rhoncus purus at, semper luctus ex. Maecenas a neque ac
            ipsum blandit hendrerit vitae id ipsum. Nullam varius odio molestie,
            porta lorem quis, tincidunt metus. Mauris eget sapien augue. Quisque
            aliquet pellentesque augue eget iaculis. Integer eu vestibulum
            risus. Praesent mauris tortor, ornare ac pharetra ac, semper in leo.
            Aliquam suscipit lorem ipsum, vitae elementum augue eleifend ac.
            Integer vitae massa purus. Aenean pharetra eleifend tortor eget
            consequat. Sed porttitor mollis justo, ac vestibulum leo accumsan
            ullamcorper. Vestibulum ullamcorper eros dui, ut consectetur tortor
            posuere a. In semper ante sit amet consequat pretium. In dictum ex
            magna, at fermentum enim vestibulum at.
          </CustomText>

          <View style={{ alignSelf: "center", marginTop: 20 }}>
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
                onPress={() => {
                  Toast.show("You are accepted Terms & Condtions.", {
                    duration: Toast.durations.SHORT,
                    position: Toast.positions.BOTTOM,
                    shadow: true,
                    animation: true,
                    hideOnPress: true,
                    delay: 0.5,
                    backgroundColor: "white",
                    shadowColor: Colors.white,
                    opacity: 1,
                    textColor: "#007C00"
                  })
                  setTimeout(handleAccept, 2000)
                }}
                style={{ width: widthDevice / 1.15 }}
              >
                <CustomText
                  font={FontKey.GothamBold}
                  size={16}
                  color={Colors.flashWhite}
                  style={{
                    lineHeight: 20,
                    fontWeight: "bold"
                  }}
                >
                  Accept
                </CustomText>
              </MButtonGradient>
            </Shadow>
          </View>
        </ScrollView>
      </View>

      {/* <Loader loading={isLoading} /> */}
    </View>
  )
}

export default TermsConditionIndex

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
