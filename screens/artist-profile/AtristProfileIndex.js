import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity
} from "react-native"
import React from "react"
import Colors from "../../assets/Colors"
import CustomImage from "../../components/Image/index"
import Images from "../../assets/Images"
import { widthDevice } from "../../utils/DeviceUtil"
import CustomText from "../../components/Text/index"
import { FontKey } from "../../assets/fonts/FontKey"
import { useNavigation } from "@react-navigation/native"
import { screenName } from "../../utils/Define"
import PMButton from "../../components/PMButton"
import SVGIcon from "../../assets/SVGIcon"

const AtristProfileIndex = ({ route: { params } }) => {
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

  return (
    <ScrollView
      style={{
        backgroundColor: Colors.richBlack,
        flex: 1
      }}
    >
      <CustomImage
        source={Images.bgColorSignIn}
        style={{ position: "absolute", top: -150, left: 0 }}
        useRNImage
      />
      <View>
        {/* {params === undefined ? (
          <View />
        ) : (
          <View style={{ width: 200, backgroundColor: "white" }}>
            <PMButton
              style={{
                paddingHorizontal: 17,
                paddingVertical: 14,
                // backgroundColor: Colors.white24,
                backgroundColor: "white",
                position: "absolute",
                borderRadius: 14
              }}
              onPress={() => navigation?.goBack()}
            >
              <SVGIcon.IconBack />
            </PMButton>
          </View>
        )} */}
        <CustomImage
          source={Images.artistBack}
          style={{ width: widthDevice, height: 150 }}
          useRNImage
        />
        <View
          style={{
            position: "absolute",
            marginTop: 150 - 38,
            flexDirection: "row",
            alignItems: "center",
            paddingLeft: 18
          }}
        >
          <CustomImage
            source={Images.imageArtist1Left}
            style={{ width: 66, height: 66 }}
            useRNImage
          />
          <CustomText
            font={FontKey.blowBrush}
            size={16}
            color={Colors.flashWhite}
            style={styles.nameText}
          >
            @deez
          </CustomText>
        </View>
      </View>

      <View style={{ paddingHorizontal: 14 }}>
        <CustomText
          font={FontKey.GothamBlack}
          style={{ fontWeight: "700", fontSize: 14, marginTop: 40 }}
          size={16}
          color={Colors.flashWhite}
        >
          <CustomText
            font={FontKey.blowBrush}
            size={16}
            color={Colors.flashWhite}
          >
            BIO {"  "}
          </CustomText>
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </CustomText>

        <View style={{ flexDirection: "row", paddingTop: 10 }}>
          <View>
            <CustomText
              font={FontKey.blowBrush}
              size={16}
              color={Colors.flashWhite}
              style={{ letterSpacing: 2 }}
            >
              5
            </CustomText>
            <CustomText
              font={FontKey.GothamLight}
              style={{
                paddingTop: 5
              }}
              size={10}
              color={"#F7F7F7"}
            >
              Collections
            </CustomText>
          </View>

          <View style={{ paddingHorizontal: 20 }}>
            <CustomText
              font={FontKey.blowBrush}
              size={16}
              color={Colors.flashWhite}
              style={{ letterSpacing: 2 }}
            >
              9%
            </CustomText>
            <CustomText
              font={FontKey.GothamLight}
              style={{
                paddingTop: 5
              }}
              size={10}
              color={"#F7F7F7"}
            >
              Listed
            </CustomText>
          </View>

          <View>
            <CustomText
              font={FontKey.blowBrush}
              size={16}
              color={Colors.flashWhite}
              style={{ letterSpacing: 2 }}
            >
              25 Matic
            </CustomText>
            <CustomText
              font={FontKey.GothamLight}
              style={{
                paddingTop: 5
              }}
              size={10}
              color={"#F7F7F7"}
            >
              Floor Price
            </CustomText>
          </View>
        </View>

        <View>
          <CustomText
            font={FontKey.blowBrush}
            size={16}
            color={Colors.flashWhite}
            style={{ letterSpacing: 2, paddingTop: 30, paddingBottom: 20 }}
          >
            Collection
          </CustomText>

          {[1, 2, 4, 4].map((item, index) => (
            <View
              key={index}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingVertical: 4
              }}
            >
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(screenName.addItems, {
                    item: {
                      name: "Spartan",
                      sub: "Hats",
                      image: Images.imageOne,
                      h: 160,
                      w: 165
                    }
                  })
                }
                activeOpacity={0.7}
              >
                <CustomImage
                  source={Images.artistProduct1}
                  style={{
                    width: widthDevice / 2.2,
                    height: widthDevice / 2.2
                  }}
                  useRNImage
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate(screenName.addItems, {
                    item: {
                      name: "Spartan",
                      sub: "Hats",
                      image: Images.imageOne,
                      h: 160,
                      w: 165
                    }
                  })
                }
                activeOpacity={0.7}
              >
                <CustomImage
                  source={Images.artistProduct}
                  style={{
                    width: widthDevice / 2.2,
                    height: widthDevice / 2.2
                  }}
                  useRNImage
                />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </View>
      <View
        style={{
          paddingBottom: 30
        }}
      />
    </ScrollView>
  )
}

export default AtristProfileIndex

const styles = StyleSheet.create({
  nameText: {
    paddingTop: 35,
    paddingLeft: 10
  }
})
