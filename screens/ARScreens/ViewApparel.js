import { useNavigation } from "@react-navigation/native"
import React, { useRef, useState } from "react"
import { ScrollView, StyleSheet, Text, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import Icon from "react-native-vector-icons/Entypo"
import Colors from "../../assets/Colors"
import Images from "../../assets/Images"
import SVGIcon from "../../assets/SVGIcon"
import CustomImage from "../../components/Image"
import PMButton from "../../components/PMButton"
import MIcon from "react-native-vector-icons/MaterialCommunityIcons"
import CustomText from "../../components/Text"
import { FontKey } from "../../assets/fonts/FontKey"
import MButtonGradient from "../../components/MButtonGradient"
import RBSheet from "react-native-raw-bottom-sheet"
import { heightDevice, widthDevice } from "../../utils/DeviceUtil"
import { screenName } from "../../utils/Define"
import { Shadow } from "react-native-shadow-2"
import LinearGradient from "react-native-linear-gradient"

const ARScreensApparel = ({ route: { params } }) => {
  const navigation = useNavigation()
  const { item } = params || {
    item: {
      name: "Spartan",
      sub: "Hats",
      image: Images.imageOne,
      h: 160,
      w: 165
    }
  }
  const [isCofirm, setIsConfirm] = useState(false)
  const refRBSheet = useRef()

  const scrollViewRef = useRef(null)
  let screenIndex = 0
  const toNextPage = () => {
    screenIndex += 1
    scrollViewRef.current?.scrollTo({
      x: (widthDevice / 1.28) * screenIndex,
      animated: true
    })
  }
  const toPrePage = () => {
    screenIndex -= 1
    scrollViewRef.current?.scrollTo({
      x: (widthDevice / 1.28) * screenIndex,
      animated: true
    })
  }

  return (
    <View style={styles.main}>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 16,
          paddingTop: 10
        }}
      >
        <CustomImage
          source={Images.bgColorSignIn}
          style={{ position: "absolute", top: -150, left: 0 }}
          useRNImage
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingBottom: 10
          }}
        >
          {params === undefined ? (
            <View />
          ) : (
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
          )}
          <CustomImage
            source={Images.blackLogo}
            useRNImage
            style={{
              width: 55,
              height: 55
            }}
          />
          <View />
        </View>

        <ScrollView>
          <View
            style={{
              backgroundColor: "rgba(54, 63, 96, 0.2)",
              paddingHorizontal: 16,
              paddingTop: 14,
              marginBottom: 13,
              paddingBottom: 14
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <TouchableOpacity
                // disabled={screenIndex === 0 ? true : false}
                onPress={() => {
                  if (screenIndex !== 0) {
                    toPrePage()
                  }
                }}
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.04)",
                  padding: 12,
                  borderRadius: 50
                }}
              >
                <Icon
                  size={27}
                  name="chevron-with-circle-left"
                  color={Colors.gray4_50}
                />
              </TouchableOpacity>

              <CustomText
                size={14}
                color={Colors.flashWhite}
                font={FontKey.blowBrush}
              >
                HATS
              </CustomText>

              <TouchableOpacity
                onPress={() => {
                  if (screenIndex !== 4) {
                    toNextPage()
                  }
                }}
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.36)",
                  padding: 12,
                  borderRadius: 50
                }}
              >
                <Icon
                  size={27}
                  name="chevron-with-circle-right"
                  color={Colors.flashWhite}
                />
              </TouchableOpacity>
            </View>

            <ScrollView ref={scrollViewRef} horizontal>
              {[1, 2, 2, 2, 2]?.map((i, index) => (
                <View key={index} style={{ width: widthDevice / 1.3 }}>
                  <CustomImage
                    source={item?.image}
                    style={{
                      height: item.h,
                      width: item.w,
                      alignSelf: "center",
                      marginTop: 20
                    }}
                    useRNImage
                  />
                </View>
              ))}
            </ScrollView>

            <CustomImage
              source={Images.circle}
              useRNImage
              style={{
                alignSelf: "center",
                marginTop: -25
              }}
            />

            <View
              style={{
                flexDirection: "row",
                justifyContent: "flex-end",
                paddingTop: 16
              }}
            >
              <Shadow
                startColor={"rgba(98, 226, 255, 0.3)"}
                // endColor={"000000"}
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
                  //   onPress={() =>
                  //     navigation.navigate(screenName.arconfirm, {
                  //       item
                  //     })
                  //   }
                  style={{
                    width: 150
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
                    Add
                  </CustomText>
                </MButtonGradient>
              </Shadow>
              <View />
            </View>
          </View>

          <View
            style={{
              borderRadius: 15
            }}
          >
            <LinearGradient
              start={{ x: 1, y: 0 }}
              end={{ x: 1, y: 1.2 }}
              colors={["rgba(202, 202, 202, 0.26)", "rgba(76, 76, 76, 0.09)"]}
              style={{
                width: widthDevice / 1.1,
                borderRadius: 8,
                paddingTop: 7
              }}
            >
              <CustomText
                size={14}
                color={Colors.flashWhite}
                font={FontKey.blowBrush}
                style={{
                  paddingLeft: 8
                }}
              >
                More in this collection
              </CustomText>
              <ScrollView horizontal>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((i, index) => (
                  <View
                    key={index}
                    style={{
                      backgroundColor: "black",
                      height: 65,
                      width: 65,
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: 100,
                      borderWidth: index === 0 ? 4 : 0,
                      borderColor: "#2F2F2F",
                      marginHorizontal: 5,
                      marginTop: 10
                    }}
                  >
                    <CustomImage
                      source={item?.image}
                      style={{
                        height: 50,
                        width: 50
                      }}
                      useRNImage
                    />
                  </View>
                ))}
              </ScrollView>
            </LinearGradient>
          </View>

          <View
            style={{
              marginTop: 20,
              borderRadius: 15
            }}
          >
            <LinearGradient
              start={{ x: 1, y: 0.1 }}
              end={{ x: 1, y: 1.2 }}
              colors={["rgba(202, 202, 202, 0.26)", "rgba(76, 76, 76, 0.09)"]}
              style={{
                padding: 12,
                borderRadius: 8,
                paddingTop: 7
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingTop: 10
                }}
              >
                <View>
                  <CustomText
                    size={14}
                    color={Colors.flashWhite}
                    font={FontKey.blowBrush}
                  >
                    Collection Name
                  </CustomText>
                  <CustomText
                    size={14}
                    color={Colors.flashWhite}
                    font={FontKey.blowBrush}
                  >
                    Artist Name
                  </CustomText>
                  <CustomText
                    size={14}
                    color={Colors.flashWhite}
                    font={FontKey.blowBrush}
                  >
                    No of items owned
                  </CustomText>
                </View>
                <View>
                  <CustomText
                    size={14}
                    color={Colors.flashWhite}
                    font={FontKey.GothamLight}
                    align="right"
                    style={{
                      textDecorationLine: "underline",
                      fontWeight: "400",
                      lineHeight: 13
                    }}
                  >
                    Hats
                  </CustomText>
                  <CustomText
                    size={14}
                    color={Colors.flashWhite}
                    font={FontKey.GothamLight}
                    align="right"
                    style={{
                      paddingTop: 3,
                      fontWeight: "400",
                      lineHeight: 13
                    }}
                  >
                    @ Deez
                  </CustomText>

                  <CustomText
                    size={14}
                    color={Colors.flashWhite}
                    font={FontKey.GothamLight}
                    align="right"
                    style={{
                      fontWeight: "400",
                      lineHeight: 13,
                      paddingTop: 2
                    }}
                  >
                    25
                  </CustomText>
                </View>
              </View>
              <TouchableOpacity
                // onPress={() =>
                //   navigation.navigate(screenName.addItems, {
                //     item
                //   })
                // }
                activeOpacity={0.8}
              >
                <CustomText
                  size={16}
                  color={Colors.blueBonnet}
                  font={FontKey.GothamBlack}
                  align="center"
                  style={{
                    fontWeight: "400",
                    lineHeight: 13,
                    paddingTop: 14
                  }}
                >
                  Explore Collection
                </CustomText>
              </TouchableOpacity>
            </LinearGradient>
          </View>
          <View
            style={{
              paddingBottom: 20
            }}
          />
        </ScrollView>
      </View>

      {params === undefined ? (
        <View />
      ) : (
        <View style={styles.footer}>
          <TouchableOpacity
            disabled
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <MIcon size={25} name="human-handsup" color={Colors.gray3} />
            <CustomText
              size={14}
              color={Colors.gray3}
              font={FontKey.GothamBlack}
            >
              Buy NFTs
            </CustomText>
          </TouchableOpacity>
          <TouchableOpacity
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <SVGIcon.MetagearWhite />
            <CustomText
              size={14}
              font={FontKey.GothamBlack}
              color={Colors.flashWhite}
            >
              Meta Gear
            </CustomText>
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}

export default ARScreensApparel

const styles = StyleSheet.create({
  main: {
    backgroundColor: Colors.richBlack,
    flex: 1,
    justifyContent: "space-around"
  },
  box: {
    backgroundColor: "#1A2828",
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#1A2828",
    elevation: 10,
    justifyContent: "space-around",
    marginVertical: 6
  },
  shadowBottom: {
    borderRadius: 6,
    justifyContent: "flex-end",
    backgroundColor: "rgba(202, 202, 202, 0.1)",
    paddingVertical: 10
  },
  footerText: {
    paddingHorizontal: 16,
    justifyContent: "space-between",
    flexDirection: "row"
  },
  filterIcon: {
    backgroundColor: Colors.white24,
    paddingHorizontal: 10.5,
    paddingVertical: 10,
    borderRadius: 14
  },
  footer: {
    backgroundColor: "rgba(0, 0, 0, 0.55)",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 55,
    height: 82,
    alignItems: "center"
  },
  waletBox: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: Colors.boxBorder,
    marginTop: 16,
    flexDirection: "row",
    paddingVertical: 20,
    alignItems: "center"
  },
  metaMaskImage: {
    width: 24,
    height: 25
  }
})
