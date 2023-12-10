import React, { useEffect, useState } from "react"
import {
  ScrollView,
  StyleSheet,
  TextInput,
  View,
  FlatList,
  TouchableOpacity
} from "react-native"
import Colors from "../../assets/Colors"
import SVGIcon from "../../assets/SVGIcon"
import { heightDevice, widthDevice } from "../../utils/DeviceUtil"
import { useIsFocused, useNavigation } from "@react-navigation/native"
import { useDispatch, useSelector } from "react-redux"
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
import Carousel, { Pagination } from "react-native-snap-carousel"
import CustomImage from "../../components/Image"
import CustomText from "../../components/Text"
import Images from "../../assets/Images"
import { FontKey } from "../../assets/fonts/FontKey"
import MButtonGradient from "../../components/MButtonGradient"
import PMButton from "../../components/PMButton"
import LinearGradient from "react-native-linear-gradient"
import { useRef } from "react"

const widthImageSlide = widthDevice - 50
const heightImageSlide = widthImageSlide * (203 / 305)

const HomeScreen = () => {
  const navigation = useNavigation()
  // const user = useSelector(state => state?.auth?.user)
  // const token = useSelector(state => state?.auth?.token)
  // const listTop10Ref = useRef()
  const [activeSlide, setActiveSlide] = useState(0)
  const [indexFlatlist, setIndexFlatlist] = useState(0)

  // console.log(JSON.stringify(stateStore, null, 2))

  const onViewCallBack = React.useCallback(({ viewableItems }) => {
    // myLog("viewableItems=>", viewableItems)
    const listViewableItem = viewableItems.filter(x => x?.isViewable)
    const lastIndexViewable = listViewableItem.length
      ? listViewableItem[listViewableItem.length - 1]?.index
      : 0
    setIndexFlatlist(lastIndexViewable)
    // Use viewable items in state or as intended
  }, []) // any dependencies that require the function to be "redeclared"

  const listTop10Ref = React.useRef({ viewAreaCoveragePercentThreshold: 50 })

  return (
    <View style={styles.container}>
      <CustomImage
        source={Images.bgColorSignIn}
        style={{ position: "absolute", top: -150, left: 0 }}
        useRNImage
      />
      <View style={{ flex: 1, paddingHorizontal: 25 }}>
        <ScrollView contentContainerStyle={{ width: widthDevice - 50 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-start",
              position: "relative",
              justifyContent: "space-between",
              marginTop: 10
            }}
          >
            <View
              style={{
                flex: 1,
                alignItems: "flex-start",
                justifyContent: "flex-start"
              }}
            >
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
            <View
              style={{
                flex: 1,
                alignItems: "flex-end",
                justifyContent: "flex-end"
              }}
            >
              <PMButton
                style={{
                  padding: 6,
                  borderRadius: 6,
                  backgroundColor: Colors.white18
                }}
              >
                <SVGIcon.IconSearch />
              </PMButton>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              width: "100%",
              // alignItems: "center",
              // justifyContent: "center",
              paddingTop: 9,
              position: "relative"
            }}
          >
            <Carousel
              sliderWidth={widthImageSlide}
              sliderHeight={heightImageSlide}
              itemHeight={heightImageSlide}
              itemWidth={widthImageSlide}
              data={[
                {
                  title: "Mystery Box",
                  subTitle: "Saskehh Rio",
                  textButton: "Grab Now!"
                },
                {
                  title: "Spartan",
                  subTitle: "Deez",
                  textButton: "View Collection"
                },
                {
                  title: "Mystery Box",
                  subTitle: "Saskehh Rio",
                  textButton: "View Website"
                }
              ]}
              pagingEnabled
              renderItem={({ item }) => {
                return (
                  <PMButton
                    style={{ alignItems: "center", justifyContent: "center" }}
                  >
                    <View
                      style={{
                        height: heightImageSlide,
                        width: widthImageSlide,
                        backgroundColor: Colors.richBlack,
                        borderRadius: 10,
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      <CustomText
                        size={16}
                        color={Colors.white}
                        font={FontKey.blowBrush}
                      >
                        {item.title}
                      </CustomText>
                      <CustomText
                        style={{ marginTop: 6 }}
                        size={16}
                        color={Colors.gray6}
                      >
                        {item.subTitle}
                      </CustomText>
                      <LinearGradient
                        colors={[Colors.white9, Colors.white5]}
                        style={{
                          marginTop: 23,
                          padding: 1,
                          borderRadius: 6
                        }}
                        start={{ x: 0, y: 0 }}
                        end={{ x: -1, y: 0 }}
                      >
                        <PMButton
                          style={{
                            backgroundColor: Colors.richBlack,
                            paddingHorizontal: 22.5,
                            paddingVertical: 11,
                            borderRadius: 6
                          }}
                        >
                          <CustomText
                            font={FontKey.GothamBold}
                            style={{}}
                            size={10}
                            color={Colors.white}
                          >
                            {item.textButton}
                          </CustomText>
                        </PMButton>
                      </LinearGradient>
                    </View>
                  </PMButton>
                )
              }}
              onSnapToItem={index => {
                setActiveSlide(index)
              }}
            />
            <View
              style={{
                position: "absolute",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                bottom: 0
              }}
            >
              <Pagination
                dotsLength={3}
                activeDotIndex={activeSlide}
                dotContainerStyle={{ padding: 0, margin: 0 }}
                dotStyle={{
                  width: 5,
                  height: 5,
                  borderRadius: 5,
                  padding: 0,
                  marginHorizontal: 0,
                  backgroundColor: Colors.dotColor
                }}
                inactiveDotStyle={
                  {
                    // Define styles for inactive dots here
                  }
                }
                inactiveDotOpacity={0.4}
                inactiveDotScale={1}
                inactiveDotColor={Colors.TRANSPARENT}
              />
            </View>
          </View>
          <View style={{ marginTop: 11 }}>
            <CustomText
              font={FontKey.blowBrush}
              size={16}
              color={Colors.flashWhite}
            >
              Top 10 NFT Collection
            </CustomText>
            <View>
              <FlatList
                style={{ marginTop: 15 }}
                horizontal
                data={[
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
                ]}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => {
                  return (
                    <PMButton style={{ marginRight: 5 }}>
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate(screenName.addItems, {
                            item
                          })
                        }
                        style={{
                          width: 150,
                          height: 165,
                          borderRadius: 6,
                          backgroundColor: Colors.richBlack,
                          alignItems: "flex-end",
                          justifyContent: "flex-end"
                        }}
                      >
                        <CustomImage
                          source={item.image}
                          style={{ height: 100, width: 130 }}
                          useRNImage
                        />
                        <LinearGradient
                          colors={[Colors.dotColor26, Colors.dotColor26]}
                        >
                          <View
                            style={{
                              width: 150,
                              height: 35,
                              paddingHorizontal: 7
                            }}
                          >
                            <CustomText
                              size={14}
                              color={Colors.flashWhite}
                              font={FontKey.blowBrush}
                            >
                              {item.name}
                            </CustomText>
                            <CustomText
                              size={10}
                              color={Colors.flashWhite}
                              font={FontKey.GothamBold}
                              align="right"
                            >
                              25 MATIC
                            </CustomText>
                          </View>
                        </LinearGradient>
                      </TouchableOpacity>
                    </PMButton>
                  )
                }}
                ref={listTop10Ref}
                onScroll={e => {
                  // myLog("onScroll10=>", e.nativeEvent)
                }}
                onScrollEndDrag={e => {
                  myLog("onScrollEnd=>", e.nativeEvent)
                }}
                // onViewableItemsChanged={onViewCallBack}
              />
              {indexFlatlist < 2 ? (
                <PMButton
                  style={{
                    position: "absolute",
                    zIndex: 3,
                    top: 165 / 2 - 10,
                    right: 10
                  }}
                  onPress={() => {
                    myLog("onPressScroll=>", listTop10Ref)
                    listTop10Ref?.current?.scrollToIndex({
                      animated: true,
                      index: Math.min(2, indexFlatlist + 2)
                    })
                    setIndexFlatlist(2)
                  }}
                >
                  <View
                    style={{
                      paddingHorizontal: 14,
                      paddingVertical: 10,
                      borderRadius: 8,
                      backgroundColor: Colors.white18
                    }}
                  >
                    <SVGIcon.IconArrowRightScroll />
                  </View>
                </PMButton>
              ) : null}
            </View>
          </View>
          <View style={{ marginTop: 20 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 10
              }}
            >
              <CustomText
                size={16}
                color={Colors.flashWhite}
                font={FontKey.blowBrush}
              >
                featured artisits
              </CustomText>
              <CustomText size={14} color={Colors.viewAll}>
                View all
              </CustomText>
            </View>
            <FlatList
              data={[
                {
                  title: "Gladiators",
                  artist: "@Deez",
                  left: Images.imageArtist1Left,
                  right: Images.imageArtist1Right
                },
                {
                  title: "Gladiators",
                  artist: "@Adi",
                  left: Images.imageArtist1Left,
                  right: Images.imageArtist1Right
                }
              ]}
              renderItem={({ item, index }) => {
                return (
                  <LinearGradient
                    colors={[Colors.grayCA0, Colors.grayCA]}
                    style={{
                      height: 84,
                      borderRadius: 6,
                      marginBottom: 10
                    }}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                  >
                    <TouchableOpacity
                      activeOpacity={0.9}
                      onPress={() =>
                        navigation.navigate(
                          screenName.atristProfileHome
                          //   {
                          //   item: {
                          //     name: "Spartan",
                          //     sub: "Hats",
                          //     image: Images.imageOne,
                          //     h: 160,
                          //     w: 165
                          //   }
                          // }
                        )
                      }
                      style={{
                        flexDirection: "row",
                        alignItems: "center",
                        height: "100%",
                        paddingHorizontal: 9,
                        justifyContent: "space-between"
                      }}
                    >
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <CustomImage
                          useRNImage
                          source={item?.left}
                          style={{ width: 66, height: 66, borderRadius: 6 }}
                        />
                        <View style={{ paddingLeft: 17 }}>
                          <CustomText
                            size={16}
                            color={Colors.white}
                            font={FontKey.blowBrush}
                          >
                            {item?.title}
                          </CustomText>
                          <CustomText
                            style={{ marginTop: 5 }}
                            size={14}
                            color={Colors.white60}
                          >
                            {item?.artist}
                          </CustomText>
                        </View>
                      </View>
                      <CustomImage
                        useRNImage
                        source={item?.right}
                        style={{ width: 116, height: 66, borderRadius: 6 }}
                      />
                    </TouchableOpacity>
                  </LinearGradient>
                )
              }}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

export default HomeScreen

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
