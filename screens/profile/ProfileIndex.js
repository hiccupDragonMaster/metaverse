import {
  Image,
  Modal,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from "react-native"
import React, { useRef, useState } from "react"
import Colors from "../../assets/Colors"
import CustomImage from "../../components/Image"
import Images from "../../assets/Images"
import Icon from "react-native-vector-icons/Feather"
import MIcon from "react-native-vector-icons/MaterialCommunityIcons"
import { heightDevice, widthDevice } from "../../utils/DeviceUtil"
import CustomText from "../../components/Text"
import { FontKey } from "../../assets/fonts/FontKey"
import MButtonGradient from "../../components/MButtonGradient"
import { useNavigation } from "@react-navigation/native"
import { screenName } from "../../utils/Define"
import RBSheet from "react-native-raw-bottom-sheet"
import ModalBase from "../../components/ModalBase"
import { launchCamera, launchImageLibrary } from "react-native-image-picker"
import { useDispatch, useSelector } from "react-redux"
import { markLogin, markLogout } from "../../store/auth/auth.slice"
import { logoutApi, uploadPhoto } from "./utils"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { Shadow } from "react-native-shadow-2"

const ProfileIndex = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const refRBSheet = useRef()
  const refRBSheet2 = useRef()
  const stateStore = useSelector(state => state?.auth)
  const [file, setFile] = useState()
  console.log(JSON.stringify(stateStore, null, 2))

  const [isEnableModal, setIsEnableModal] = useState(false)

  const handleUploadProfileImage = () => {
    const options = {
      mediaType: "photo",
      includeBase64: false,
      selectionLimit: 10,
      maxWidth: 1000,
      maxHeight: 1000,
      quality: 0.7
    }
    launchCamera(options, async res => {
      await uploadPhoto(stateStore?.user?.id, stateStore?.token, res, setFile)
      if (file?.image) {
        dispatch(
          markLogin({
            ...stateStore,
            image: file?.image
          })
        )
      }
    })
  }

  const handleLogOut = async () => {
    const res = logoutApi()
    dispatch(markLogout())
    clearAllData()
    navigation.navigate(screenName.signin)
  }

  function clearAllData() {
    AsyncStorage.getAllKeys()
      .then(keys => AsyncStorage.multiRemove(keys))
      .then(() => console.log(""))
  }
  return (
    <ScrollView>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          refRBSheet.current.close()
          refRBSheet2.current.close()
        }}
      >
        <View style={styles.main}>
          <CustomImage
            source={Images.bgColorSignIn}
            style={{ position: "absolute", top: -150, left: 0 }}
            useRNImage
          />

          <View>
            {stateStore?.profile?.image ? (
              <Image
                source={{
                  uri: `https://silent-moon-34565.botics.co/api/v1/profile/${stateStore?.user?.id}/${stateStore?.profile?.image}`
                }}
                style={styles.profileImage}
              />
            ) : (
              <CustomImage
                source={Images.noImage}
                useRNImage
                style={styles.profileImage}
              />
            )}

            <TouchableOpacity
              onPress={() => refRBSheet2.current.open()}
              style={styles.editIcon}
            >
              <View>
                <Icon
                  size={17}
                  name="edit-2"
                  color={Colors.blueBonnet}
                  style={{
                    fontWeight: "bold"
                  }}
                />
              </View>
            </TouchableOpacity>

            <View style={styles.namePart}>
              <CustomText
                font={FontKey.blowBrush}
                size={16}
                color={Colors.flashWhite}
                style={styles.nameText}
              >
                {stateStore?.user?.name}
              </CustomText>
              <TouchableOpacity activeOpacity={0.6}>
                <Icon
                  size={17}
                  name="edit-2"
                  color={Colors.blueBonnet}
                  style={{
                    fontWeight: "bold"
                  }}
                />
              </TouchableOpacity>
            </View>

            <View style={styles.email}>
              <CustomText
                font={FontKey.flashWhite}
                style={{ fontWeight: "700" }}
                size={16}
                color={Colors.white}
              >
                Email
              </CustomText>

              <View style={styles.emailBox}>
                <CustomText
                  font={FontKey.GothamBlack}
                  style={{
                    fontWeight: "400",
                    paddingTop: 16,
                    paddingBottom: 18,
                    paddingHorizontal: 15
                  }}
                  size={14}
                  color={Colors.placeHolder}
                >
                  {stateStore?.user?.email}
                </CustomText>
              </View>
            </View>

            <View style={{ paddingTop: 20, paddingHorizontal: 12 }}>
              <CustomText
                font={FontKey.blowBrush}
                size={16}
                color={Colors.flashWhite}
                style={{
                  letterSpacing: 2
                }}
              >
                Connected wallets
              </CustomText>

              <View
                style={[
                  styles.waletBox,
                  {
                    paddingLeft: 40
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
              </View>

              <View
                style={[
                  styles.waletBox,
                  {
                    paddingLeft: 28,
                    marginTop: 0
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
              </View>

              <View style={{ alignSelf: "center", marginVertical: 30 }}>
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
                    onPress={() => refRBSheet.current.open()}
                    // style={{
                    //   marginVertical: 30,
                    //   marginHorizontal: 28
                    // }}
                    style={{ width: widthDevice / 1.15 }}
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
                      Connect Wallet
                    </CustomText>
                  </MButtonGradient>
                </Shadow>
              </View>

              <TouchableOpacity
                onPress={() => navigation.navigate(screenName.feedback)}
                activeOpacity={0.6}
                style={[
                  styles.waletBox,
                  {
                    justifyContent: "space-between",
                    paddingHorizontal: 14,
                    marginTop: 0
                  }
                ]}
              >
                <CustomText
                  font={FontKey.GothamBlack}
                  size={16}
                  color={Colors.flashWhite}
                  style={{
                    fontWeight: "700",
                    lineHeight: 18
                  }}
                >
                  Send Feedback
                </CustomText>
                <Icon
                  size={20}
                  name="chevron-right"
                  color={Colors.flashWhite}
                  style={{
                    fontWeight: "700"
                  }}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate(screenName.termConditions)}
                activeOpacity={0.6}
                style={[
                  styles.waletBox,
                  {
                    justifyContent: "space-between",
                    paddingHorizontal: 14,
                    marginTop: 0
                  }
                ]}
              >
                <CustomText
                  font={FontKey.GothamBlack}
                  size={16}
                  color={Colors.blueBonnet}
                  style={{
                    fontWeight: "700",
                    lineHeight: 18
                  }}
                >
                  Terms and Condition
                </CustomText>
                <Icon
                  size={20}
                  name="chevron-right"
                  color={Colors.flashWhite}
                  style={{
                    fontWeight: "700"
                  }}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate(screenName.privacyPolicy)}
                activeOpacity={0.6}
                style={[
                  styles.waletBox,
                  {
                    justifyContent: "space-between",
                    paddingHorizontal: 14,
                    marginTop: 0
                  }
                ]}
              >
                <CustomText
                  font={FontKey.GothamBlack}
                  size={16}
                  color={Colors.blueBonnet}
                  style={{
                    fontWeight: "700",
                    lineHeight: 18
                  }}
                >
                  Privacy Policy
                </CustomText>
                <Icon
                  size={20}
                  name="chevron-right"
                  color={Colors.flashWhite}
                  style={{
                    fontWeight: "700"
                  }}
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => handleLogOut()}
                activeOpacity={0.6}
                style={[
                  styles.waletBox,
                  {
                    justifyContent: "space-between",
                    paddingHorizontal: 14,
                    marginTop: 0
                  }
                ]}
              >
                <CustomText
                  font={FontKey.GothamBlack}
                  size={16}
                  color={Colors.logout}
                  style={{
                    fontWeight: "700",
                    lineHeight: 18,
                    paddingLeft: 3
                  }}
                >
                  Log Out
                </CustomText>
                <Icon
                  size={20}
                  name="chevron-right"
                  color={Colors.flashWhite}
                  style={{
                    fontWeight: "700"
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableOpacity>

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

      <RBSheet
        animationType="slide"
        ref={refRBSheet2}
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
            height: heightDevice / 3.2
          }
        }}
      >
        <View style={{ flex: 1 }}>
          <CustomImage
            source={Images.bgColorSignIn}
            style={{ position: "absolute", top: -600, left: 0 }}
            useRNImage
          />

          <View>
            <CustomText
              font={FontKey.blowBrush}
              size={16}
              color={Colors.flashWhite}
              style={{
                paddingLeft: 47,
                paddingTop: 25
              }}
            >
              Profile Picture
            </CustomText>
          </View>
          <View style={{ paddingHorizontal: 16 }}>
            <TouchableOpacity
              onPress={() => {
                refRBSheet2.current.close()
                handleUploadProfileImage()
              }}
              style={[
                styles.waletBox,
                {
                  paddingLeft: 10,
                  paddingVertical: 10
                }
              ]}
            >
              <View
                style={{
                  padding: 2,
                  borderRadius: 50
                }}
              >
                <CustomImage
                  source={Images.uloadCamera}
                  useRNImage
                  style={{
                    width: 40,
                    height: 40
                  }}
                />
              </View>
              <CustomText
                font={FontKey.GothamBlack}
                size={16}
                color={Colors.flashWhite}
                style={{
                  paddingLeft: 28,
                  fontWeight: "700"
                }}
              >
                Update Profile Picture
              </CustomText>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                refRBSheet2.current.close()
              }}
              style={[
                styles.waletBox,
                {
                  paddingLeft: 10,
                  marginTop: 0,
                  paddingVertical: 10
                }
              ]}
            >
              <View
                style={{
                  backgroundColor: "#404C4C",
                  padding: 9,
                  borderRadius: 16
                }}
              >
                <MIcon
                  name="delete-outline"
                  size={25}
                  color={Colors.flashWhite}
                />
              </View>
              <CustomText
                font={FontKey.GothamBlack}
                size={16}
                color={Colors.flashWhite}
                style={{
                  paddingLeft: 28,
                  fontWeight: "700"
                }}
              >
                Remove Profile Picture
              </CustomText>
            </TouchableOpacity>
          </View>
        </View>
      </RBSheet>
      <Modal visible={isEnableModal} transparent={true} animationType="fade">
        <TouchableWithoutFeedback
          onPress={() => setIsEnableModal(!isEnableModal)}
        >
          <View style={styles.modalWrapper}>
            <TouchableWithoutFeedback>
              <View style={styles.modal}>
                <MIcon
                  size={35}
                  name="exclamation-thick"
                  style={{
                    fontWeight: "bold",
                    color: "#BE212F",
                    textAlign: "center",
                    paddingTop: 40,
                    paddingBottom: 35
                  }}
                />

                <CustomText
                  font={FontKey.blowBrush}
                  size={20}
                  color={Colors.flashWhite}
                  style={{
                    fontWeight: "400",
                    textAlign: "center"
                  }}
                >
                  Heading
                </CustomText>

                <CustomText
                  font={FontKey.GothamBlack}
                  size={14}
                  style={{
                    fontWeight: "500",
                    textAlign: "center",
                    paddingHorizontal: 28,
                    color: "#545F5F",
                    paddingVertical: 20
                  }}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  dui orci ac egestas.
                </CustomText>

                <TouchableOpacity
                  onPress={() => setIsEnableModal(false)}
                  style={{
                    borderRadius: 25,
                    backgroundColor: "red",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingVertical: 16,
                    marginHorizontal: 28,
                    backgroundColor: "#1D2B2B"
                  }}
                >
                  <Text
                    style={{
                      lineHeight: 20,
                      fontWeight: "bold",
                      textAlign: "center",
                      fontFamily: FontKey.GothamBold,
                      color: Colors.flashWhite,
                      fontSize: 16
                    }}
                  >
                    Refuse
                  </Text>
                </TouchableOpacity>

                <MButtonGradient
                  onPress={() => setIsEnableModal(false)}
                  style={{
                    marginVertical: 8,
                    marginHorizontal: 28
                  }}
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
                    Confirm
                  </CustomText>
                </MButtonGradient>
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </ScrollView>
  )
}

export default ProfileIndex

const styles = StyleSheet.create({
  main: {
    backgroundColor: Colors.richBlack,
    flex: 1,
    paddingVertical: 43
  },
  profileImage: {
    width: 90,
    height: 100,
    borderRadius: 12,
    alignSelf: "center"
  },
  editIcon: {
    backgroundColor: Colors.white,
    height: 30,
    width: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    position: "absolute",
    padding: 6,
    left: widthDevice / 1.75,
    top: 100 - 20
  },
  nameText: {
    letterSpacing: 2,
    fontWeight: "400",
    lineHeight: 22,
    paddingRight: 12
  },
  namePart: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 24
  },
  email: {
    paddingHorizontal: 15
  },
  emailBox: {
    backgroundColor: Colors.gray2,
    borderRadius: 6,
    marginTop: 13
  },
  emailText: {
    fontSize: 14,
    lineHeight: 13
  },
  metaMaskImage: {
    width: 24,
    height: 25
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
  modalWrapper: {
    flex: 1,
    backgroundColor: Colors.mysticYellow60,
    justifyContent: "center",
    alignItems: "center"
  },
  modal: {
    width: 272,
    height: 385,
    backgroundColor: Colors.richBlack,
    borderRadius: 10,
    overflow: "hidden"
  }
})
