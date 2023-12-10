import * as React from "react"
import { View, StyleSheet, KeyboardAvoidingView } from "react-native"
import Modal from "react-native-modal"
import Colors from "../../assets/Colors"
import { FontKey } from "../../assets/fonts/FontKey"
import { IS_ANDROID, widthDevice } from "../../utils/DeviceUtil"
import CustomText from "../Text"
import { RootSiblingParent } from "react-native-root-siblings"

export const HEADER_HEIGHT = 40

const ModalBase = props => {
  const { enable, setEnable, title, onDismiss, ...otherProps } = props
  return (
    <Modal
      useNativeDriver
      style={styles.MODAL}
      onBackdropPress={() => setEnable(false)}
      onBackButtonPress={() => setEnable(false)}
      isVisible={enable}
      backdropOpacity={0.6}
      onDismiss={() => onDismiss && onDismiss()}
      backdropColor={Colors.mysticYellow}
      avoidKeyboard
      {...otherProps}
    >
      <RootSiblingParent>
        <KeyboardAvoidingView
        // behavior={!IS_ANDROID ? "padding" : "position"}
        // keyboardVerticalOffset={IS_ANDROID ? 0 : 40}
        >
          <View style={styles.content}>
            <CustomText font={FontKey.semiBold} style={styles.title}>
              {title}
            </CustomText>
            {props.children}
          </View>
        </KeyboardAvoidingView>
      </RootSiblingParent>
    </Modal>
  )
}

const styles = StyleSheet.create({
  cancel: {
    height: 44,
    borderRadius: 12,
    backgroundColor: Colors.grape,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    marginLeft: 12
  },
  create: {
    height: 44,
    borderRadius: 12,
    backgroundColor: Colors.mysticGreen,
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    marginRight: 12
  },
  buttonRow: {
    marginTop: 24,
    flexDirection: "row",
    width: "100%"
  },
  radioRow: {
    flexDirection: "row",
    width: "100%",
    marginTop: 32,
    justifyContent: "space-between"
  },
  title: {
    fontSize: 18,
    lineHeight: 24,
    color: Colors.grape,
    textAlign: "center"
  },
  content: {
    borderRadius: 15,
    width: widthDevice - 50,
    backgroundColor: Colors.white,
    padding: 32
  },
  MODAL: {
    flex: 1,
    margin: 0,
    alignItems: "center",
    justifyContent: "center"
  }
})

export default ModalBase
