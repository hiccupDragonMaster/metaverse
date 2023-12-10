import { useIsFocused, useNavigation } from "@react-navigation/native"
import React, { useState } from "react"
import { useEffect } from "react"
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native"
import Icon from "react-native-vector-icons/Ionicons"
import { useDispatch, useSelector } from "react-redux"
import Colors from "../../assets/Colors"
import { FontKey } from "../../assets/fonts/FontKey"
import Images from "../../assets/Images"
import SVGIcon from "../../assets/SVGIcon"
import CustomImage from "../../components/Image"
import PMButton from "../../components/PMButton"
import CustomText from "../../components/Text"
import { screenName } from "../../utils/Define"
import MIcon from "react-native-vector-icons/MaterialCommunityIcons"
import LinearGradient from "react-native-linear-gradient"
import MetaGear from "./MetaGear"
import { heightDevice } from "../../utils/DeviceUtil"

const ARScreensIndex = () => {
  let data = [
    {
      name: "Spartan",
      sub: "Hats",
      image: Images.imageOne,
      h: 160,
      w: 165
    },
    {
      name: "Urban",
      sub: "Shirts",
      image: Images.imageTwo,
      h: 165,
      w: 210
    },
    {
      name: "Gladiators",
      sub: "Shoes",
      image: Images.imageThree,
      h: 150,
      w: 165
    }
  ]

  const navigation = useNavigation()
  const isFocused = useIsFocused()
  const [isToggle, setIsToggle] = useState(true)
  const dispatch = useDispatch()
  const stateStore = useSelector(state => state?.auth)
  const [isShow, setIsShow] = useState(true)

  useEffect(() => {
    setIsToggle(true)
    if (isShow) {
      setIsShow(false)
    }
  }, [isFocused])

  const [isNFT, setIsNFT] = useState(true)

  return (
    <View style={styles.main}>
      <CustomImage
        source={Images.bgColorSignIn}
        style={{ position: "absolute", top: -150, left: 0 }}
        useRNImage
      />
      <ScrollView>
        {isNFT ? (
          <>
            <View
              style={{
                flex: 1,
                paddingHorizontal: 16,
                paddingTop: 10
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingBottom: 10
                }}
              >
                {/* {!stateStore?.isShowVendor ? ( */}
                <TouchableOpacity
                  onPress={() => {
                    navigation?.reset({
                      index: 0,
                      routes: [
                        {
                          name: screenName.drawNavigator
                        }
                      ]
                    })
                  }}
                  style={{
                    paddingHorizontal: 17,
                    paddingVertical: 14,
                    backgroundColor: Colors.white24,
                    borderRadius: 14
                  }}
                >
                  <SVGIcon.IconBack />
                </TouchableOpacity>
                {/* ) : null} */}

                <View />
                <CustomImage
                  source={Images.blackLogo}
                  useRNImage
                  style={{
                    width: 55,
                    height: 55
                  }}
                />
                <TouchableOpacity
                  style={[
                    styles.filterIcon,
                    { flexDirection: "row", alignItems: "center" }
                  ]}
                  activeOpacity={0.8}
                  onPress={() => setIsToggle(!isToggle)}
                >
                  <Icon name="filter" size={22} color={Colors.flashWhite} />
                  {!isToggle ? (
                    <CustomText
                      size={10}
                      color={Colors.flashWhite}
                      font={FontKey.GothamBlack}
                      style={{
                        paddingLeft: 3
                      }}
                    >
                      By Collection
                    </CustomText>
                  ) : null}
                </TouchableOpacity>
              </View>

              {data?.map((item, index) => (
                <TouchableOpacity
                  activeOpacity={0.6}
                  onPress={() =>
                    navigation.navigate(screenName.addItems, {
                      item
                    })
                  }
                  key={index}
                  style={styles.box}
                >
                  <LinearGradient
                    start={{ x: 1, y: 5 }}
                    end={{ x: 1, y: 0 }}
                    colors={[
                      "rgba(76, 76, 76, 0.26) -7.77%",
                      "rgba(202, 202, 202, 0.09) 126.5%"
                    ]}
                    style={{
                      // width: widthDevice,
                      borderRadius: 8,
                      paddingTop: 7
                    }}
                  >
                    <View>
                      <CustomImage
                        source={item?.image}
                        style={{
                          height: item?.h,
                          width: item.w,
                          alignSelf: "center"
                        }}
                        useRNImage
                      />
                    </View>

                    <View
                      style={[
                        styles.shadowBottom,
                        {
                          marginTop: -40
                        }
                      ]}
                    >
                      <LinearGradient
                        start={{ x: 1, y: 0 }}
                        end={{ x: 10, y: 4 }}
                        colors={[
                          "rgba(76, 76, 76, 0.6)",
                          "rgba(202, 202, 202, 0.01)"
                        ]}
                        style={{
                          // width: widthDevice,
                          borderRadius: 8,
                          paddingTop: 5,
                          paddingBottom: 10
                        }}
                      >
                        <View style={styles.footerText}>
                          <View>
                            <CustomText
                              size={14}
                              color={Colors.flashWhite}
                              font={FontKey.blowBrush}
                              style={{
                                letterSpacing: 0.99999
                              }}
                            >
                              {item?.name}
                            </CustomText>
                            <CustomText
                              size={10}
                              color={Colors.flashWhite}
                              font={FontKey.GothamBlack}
                              style={{
                                paddingVertical: 2
                              }}
                            >
                              @Deez
                            </CustomText>
                            <CustomText
                              size={10}
                              color={Colors.flashWhite}
                              font={FontKey.GothamBlack}
                            >
                              {item?.sub}
                            </CustomText>
                          </View>
                          <CustomText
                            size={14}
                            color={Colors.flashWhite}
                            font={FontKey.GothamBold}
                            style={{
                              fontWeight: "700"
                            }}
                          >
                            25 MATIC
                          </CustomText>
                        </View>
                      </LinearGradient>
                    </View>
                  </LinearGradient>
                </TouchableOpacity>
              ))}
            </View>
          </>
        ) : (
          <MetaGear />
        )}
      </ScrollView>

      {!isShow ? (
        <>
          <View style={styles.footer}>
            <TouchableOpacity
              disabled={isNFT ? true : false}
              onPress={() => setIsNFT(true)}
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <MIcon
                size={25}
                name="human-handsup"
                color={!isNFT ? Colors.gray3 : Colors.flashWhite}
              />
              <CustomText
                size={14}
                color={!isNFT ? Colors.gray3 : Colors.flashWhite}
                font={FontKey.GothamBlack}
              >
                Buy NFTs
              </CustomText>
            </TouchableOpacity>
            <TouchableOpacity
              disabled={!isNFT ? true : false}
              onPress={() => setIsNFT(false)}
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              {/* <MIcon size={25} name="camera" color={Colors.gray3} /> */}
              {isNFT ? <SVGIcon.Metagear /> : <SVGIcon.MetagearWhite />}

              <CustomText
                size={14}
                color={isNFT ? Colors.gray3 : Colors.flashWhite}
                font={FontKey.GothamBlack}
              >
                Meta Gear
              </CustomText>
            </TouchableOpacity>
          </View>
          {!isNFT ? (
            <TouchableOpacity
              style={{
                position: "absolute",
                bottom: 5,
                alignSelf: "center"
              }}
            >
              <SVGIcon.IconMetaGear />
            </TouchableOpacity>
          ) : null}
        </>
      ) : null}
    </View>
  )
}

export default ARScreensIndex

const styles = StyleSheet.create({
  main: {
    backgroundColor: Colors.richBlack,
    flex: 1
    // paddingVertical: 43
  },
  box: {
    // backgroundColor: "#1A2828",
    borderRadius: 6,
    // borderWidth: 1,
    // borderColor: "#1A2828",
    // elevation: 10,
    justifyContent: "space-around",
    marginVertical: 6
  },
  shadowBottom: {
    borderRadius: 6,
    justifyContent: "flex-end"
    // backgroundColor: "rgba(202, 202, 202, 0.1)",
    // paddingVertical: 10
  },
  footerText: {
    paddingHorizontal: 8,
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
  }
})
