import { StyleSheet, Text, View, TouchableOpacity } from "react-native"
import React, { useState } from "react"
import PMButton from "../../components/PMButton"
import SVGIcon from "../../assets/SVGIcon"
import CustomImage from "../../components/Image"
import Images from "../../assets/Images"
import Colors from "../../assets/Colors"
import { Shadow } from "react-native-shadow-2"
import MButtonGradient from "../../components/MButtonGradient"
import CustomText from "../../components/Text"
import { FontKey } from "../../assets/fonts/FontKey"
import { widthDevice } from "../../utils/DeviceUtil"
import { useDispatch } from "react-redux"
import Icon from "react-native-vector-icons/Ionicons"
import { screenName } from "../../utils/Define"
import { useNavigation } from "@react-navigation/native"
import LinearGradient from "react-native-linear-gradient"

const data = [
  {
    sub: "Hats",
    image: Images.hats,
    isSelect: false
  },
  {
    sub: "Shirts",
    image: Images.shirts,
    isSelect: false
  },
  {
    sub: "Hats",
    image: Images.hats,
    isSelect: false
  },
  {
    sub: "Shirts",
    image: Images.shirts,
    isSelect: false
  },
  {
    sub: "Hats",
    image: Images.hats,
    isSelect: false
  },
  {
    sub: "Shirts",
    image: Images.shirts,
    isSelect: false
  }
]

const MetaGear = () => {
  const dispatch = useDispatch()

  const navigation = useNavigation()

  const [myData, setMyData] = useState(data)

  const handleCheck = ind => {
    const newD = [...myData]
    const modD = newD?.map((item, index) => {
      return {
        ...item,
        isSelect: ind === index ? !item?.isSelect : item?.isSelect
      }
    })
    setMyData(modD)
  }

  const isSingleSelect = myData?.filter(item => item?.isSelect)

  // console.log(isSingleSelect)

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 16
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingVertical: 10
        }}
      >
        <PMButton
          style={{
            paddingHorizontal: 17,
            paddingVertical: 14,
            backgroundColor: Colors.white24,
            borderRadius: 14
          }}
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
        <View style={{ alignSelf: "center" }}>
          <Shadow
            startColor={"rgba(98, 226, 255, 0.2)"}
            // endColor={"rgba(98, 226, 255, 0.15)"}
            style={{
              alignItems: "center",
              justifyContent: "center",
              height: 40,
              borderRadius: 14
            }}
            offset={[0, 3]}
            distance={7}
          >
            <MButtonGradient
              style={{ width: widthDevice / 3.5 }}
              linearStyle={{
                borderRadius: 14
              }}
            >
              <CustomText
                font={FontKey.GothamBold}
                size={10}
                color={Colors.flashWhite}
                style={{
                  lineHeight: 20,
                  fontWeight: "700",
                  letterSpacing: 0.5
                }}
              >
                Connect Wallet
              </CustomText>
            </MButtonGradient>
          </Shadow>
        </View>
      </View>

      {isSingleSelect?.length ? (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 25,
            paddingBottom: 10
          }}
        >
          <TouchableOpacity
            style={[
              styles.filterIcon,
              { flexDirection: "row", alignItems: "center" }
            ]}
            activeOpacity={0.8}
          >
            <Icon name="filter" size={22} color={Colors.flashWhite} />
          </TouchableOpacity>
          <MButtonGradient
            onPress={() =>
              navigation.navigate(screenName.ARScreensApparel, {
                item: {
                  name: "Spartan",
                  sub: "Hats",
                  image: Images.imageOne,
                  h: 160,
                  w: 165
                }
              })
            }
            linearStyle={{
              borderRadius: 3
            }}
            style={{ width: widthDevice / 3.5 }}
          >
            <CustomText
              font={FontKey.GothamBold}
              size={12}
              color={Colors.flashWhite}
              style={{
                lineHeight: 13,
                fontWeight: "700",
                letterSpacing: 0.5
              }}
            >
              View Apparel
            </CustomText>
          </MButtonGradient>
        </View>
      ) : null}

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          flexWrap: "wrap"
        }}
      >
        {myData?.map((item, index) => (
          <TouchableOpacity
            disabled
            key={index}
            activeOpacity={0.6}
            // onPress={() => navigation.navigate(screenName.addItems)}
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
                borderRadius: 8,
                paddingTop: 7
              }}
            >
              <View>
                <CustomImage
                  source={item?.image}
                  style={{
                    width: 100,
                    alignSelf: "center"
                  }}
                  useRNImage
                />
              </View>

              <View
                style={[
                  styles.shadowBottom,
                  {
                    marginTop: -45
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
                        Collection Name
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
                    </View>
                    <CustomText
                      size={10}
                      color={Colors.flashWhite}
                      font={FontKey.GothamBlack}
                    >
                      {item?.sub}
                    </CustomText>
                  </View>
                </LinearGradient>
              </View>
              <TouchableOpacity
                onPress={() => handleCheck(index)}
                style={{
                  position: "absolute",
                  paddingTop: 10,
                  right: 10
                }}
              >
                {item?.isSelect ? (
                  <SVGIcon.IconCheck />
                ) : (
                  <SVGIcon.IconUnCheck />
                )}
              </TouchableOpacity>
            </LinearGradient>
          </TouchableOpacity>
        ))}
      </View>
      <View
        style={{
          paddingBottom: 50
        }}
      />
    </View>
  )
}

export default MetaGear

const styles = StyleSheet.create({
  filterIcon: {
    backgroundColor: Colors.white24,
    paddingHorizontal: 10.5,
    paddingVertical: 10,
    borderRadius: 14
  },
  box: {
    borderRadius: 6,
    justifyContent: "space-around",
    marginVertical: 6,
    width: widthDevice / 2.25
  },
  shadowBottom: {
    borderRadius: 6,
    justifyContent: "flex-end"
  },
  footerText: {
    paddingHorizontal: 6,
    paddingBottom: 4
  }
})
