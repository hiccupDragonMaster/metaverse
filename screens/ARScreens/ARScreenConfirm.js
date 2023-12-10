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
import { Shadow } from "react-native-shadow-2"
import LinearGradient from "react-native-linear-gradient"

const ARSConfirm = ({ route: { params } }) => {
  const navigation = useNavigation()
  const { item } = params
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
              paddingBottom: 30
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
                  color={
                    screenIndex === 0 ? Colors.gray4_50 : Colors.flashWhite
                  }
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
                  color={
                    screenIndex === 3 ? Colors.gray4_50 : Colors.flashWhite
                  }
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
                marginTop: -20
              }}
            />
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
                width: widthDevice / 1.09,
                borderRadius: 8,
                paddingVertical: 18,
                paddingLeft: 9
              }}
            >
              <CustomText
                size={24}
                color={Colors.flashWhite}
                font={FontKey.blowBrush}
              >
                25 matic
              </CustomText>
            </LinearGradient>
          </View>

          <View
            style={{
              // backgroundColor: "rgba(76, 76, 76, 0.09)",
              marginTop: 20,
              borderRadius: 15
              // padding: 12
            }}
          >
            <LinearGradient
              start={{ x: 1, y: 0.2 }}
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
                    Contract Address
                  </CustomText>
                  <CustomText
                    size={14}
                    color={Colors.flashWhite}
                    font={FontKey.blowBrush}
                  >
                    Token ID
                  </CustomText>
                  <CustomText
                    size={14}
                    color={Colors.flashWhite}
                    font={FontKey.blowBrush}
                  >
                    Network
                  </CustomText>

                  <CustomText
                    size={14}
                    color={Colors.flashWhite}
                    font={FontKey.blowBrush}
                  >
                    Artist earnings
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
                      lineHeight: 13,
                      paddingBottom: 5
                    }}
                  >
                    0x49cf...b2dc
                  </CustomText>
                  <CustomText
                    size={14}
                    color={Colors.flashWhite}
                    font={FontKey.GothamLight}
                    align="right"
                    style={{
                      fontWeight: "400",
                      lineHeight: 13
                    }}
                  >
                    624235 <SVGIcon.IconARBuySmall />
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
                    Polygon
                  </CustomText>
                  <CustomText
                    size={14}
                    color={Colors.flashWhite}
                    font={FontKey.GothamLight}
                    align="right"
                    style={{
                      fontWeight: "400",
                      lineHeight: 13,
                      paddingTop: 3
                    }}
                  >
                    5%
                  </CustomText>
                </View>
              </View>
              <View style={{ flexDirection: "row", marginVertical: 21 }}>
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
                    onPress={() => refRBSheet.current.open()}
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
                      Confirm
                    </CustomText>
                  </MButtonGradient>
                </Shadow>
                <View />
              </View>
            </LinearGradient>
          </View>
        </ScrollView>
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <MIcon size={25} name="human-handsup" color={Colors.flashWhite} />
          <CustomText
            size={14}
            color={Colors.flashWhite}
            font={FontKey.GothamBlack}
          >
            Buy NFTs
          </CustomText>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <MIcon size={25} name="camera" color={Colors.gray3} />
          <CustomText size={14} color={Colors.gray3} font={FontKey.GothamBlack}>
            Meta Gear
          </CustomText>
        </TouchableOpacity>
      </View>

      <RBSheet
        animationType="slide"
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        openDuration={1000}
        customStyles={{
          wrapper: {
            // backgroundColor: "transparent"
          },
          draggableIcon: {
            backgroundColor: Colors.flashWhite,
            width: 100
          },
          container: {
            backgroundColor: "#525252",
            borderTopLeftRadius: 25,
            borderTopRightRadius: 25,
            height: heightDevice / 2.1
          }
        }}
      >
        <View style={{ flex: 1 }}>
          <CustomImage
            source={Images.bgColorSignIn}
            style={{ position: "absolute", top: -600, left: 0 }}
            useRNImage
          />

          <CustomText
            font={FontKey.blowBrush}
            size={24}
            color={Colors.flashWhite}
            style={{
              letterSpacing: 2,
              textAlign: "center",
              paddingTop: 16,
              paddingBottom: 45
            }}
          >
            Connect Your wallet
          </CustomText>

          <View style={{ paddingHorizontal: 16 }}>
            <TouchableOpacity
              onPress={() => {
                refRBSheet.current.close()
                setIsEnableModal(true)
              }}
              style={[
                styles.waletBox,
                {
                  paddingLeft: 40,
                  paddingVertical: 17
                }
              ]}
            >
              <CustomImage
                source={Images.metamask}
                useRNImage
                style={styles.metaMaskImage}
              />
              <CustomText
                font={FontKey.GothamBlack}
                size={16}
                color={Colors.flashWhite}
                style={{
                  paddingLeft: 47
                }}
              >
                MetaTask
              </CustomText>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                refRBSheet.current.close()
                setIsEnableModal(true)
              }}
              style={[
                styles.waletBox,
                {
                  paddingLeft: 28,
                  marginTop: 0,
                  paddingVertical: 17
                }
              ]}
            >
              <CustomText
                font={FontKey.GothamBlack}
                size={12}
                color={Colors.white}
              >
                coinbase
              </CustomText>
              <CustomText
                font={FontKey.GothamBlack}
                size={16}
                color={Colors.flashWhite}
                style={{
                  paddingLeft: 28
                }}
              >
                Coinbase
              </CustomText>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                refRBSheet.current.close()
                setIsEnableModal(true)
              }}
              style={[
                styles.waletBox,
                {
                  paddingLeft: 40,
                  marginTop: 0,
                  paddingVertical: 17
                }
              ]}
            >
              <CustomImage
                source={Images.wallet}
                useRNImage
                style={{ width: 35 }}
              />
              <CustomText
                font={FontKey.GothamBlack}
                size={16}
                color={Colors.flashWhite}
                style={{
                  paddingLeft: 35
                }}
              >
                Wallet Connect
              </CustomText>
            </TouchableOpacity>
          </View>
        </View>
      </RBSheet>
    </View>
  )
}

export default ARSConfirm

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
