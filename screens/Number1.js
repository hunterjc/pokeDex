import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { FontFamily, Border, Color } from "../GlobalStyles";

const Number1 = () => {
  return (
    <View style={styles.number}>
      <Image
        style={[styles.maskGroupIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/mask-group.png")}
      />
      <View style={[styles.barsHomeIndicatorIphone, styles.barsPosition]}>
        <View style={styles.homeIndicator2} />
      </View>
      <View style={[styles.parent, styles.parentLayout]}>
        <Text style={styles.text1}>+880</Text>
        <Image
          style={[styles.groupChild, styles.border1Layout]}
          contentFit="cover"
          source={require("../assets/rectangle-11.png")}
        />
        <Image
          style={[styles.groupItem, styles.parentLayout]}
          contentFit="cover"
          source={require("../assets/vector-2.png")}
        />
      </View>
      <Text style={[styles.enterYourMobile1, styles.mobileTypo]}>
        Enter your mobile number
      </Text>
      <View style={[styles.statusBar, styles.timePosition]}>
        <View style={styles.battery}>
          <View style={[styles.border1, styles.border1Layout]} />
          <Image
            style={[styles.capIcon1, styles.capIcon1Layout]}
            contentFit="cover"
            source={require("../assets/cap.png")}
          />
          <View style={styles.capacity1} />
        </View>
        <Image
          style={styles.wifiIcon1}
          contentFit="cover"
          source={require("../assets/wifi.png")}
        />
        <Image
          style={styles.cellularConnectionIcon1}
          contentFit="cover"
          source={require("../assets/cellular-connection.png")}
        />
        <View style={styles.timeStyle}>
          <Text style={[styles.time, styles.timePosition]}>9:41</Text>
        </View>
      </View>
      <Image
        style={styles.frameIcon1}
        contentFit="cover"
        source={require("../assets/frame.png")}
      />
      <View style={[styles.numberChild, styles.capIcon1Layout]} />
      <Text style={[styles.mobileNumber, styles.mobileTypo]}>
        Mobile Number
      </Text>
      <Pressable style={styles.wrapper} onPress={() => {}}>
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/group-6802.png")}
        />
      </Pressable>
      <Image
        style={[styles.ubereatsV1246111Icon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/ubereats-v-12461-1-1.png")}
      />
      <View style={styles.numberItem} />
      <View style={[styles.barsHomeIndicatorIphone1, styles.barsPosition]}>
        <View style={styles.homeIndicator2} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconPosition: {
    width: 414,
    left: 0,
    position: "absolute",
  },
  barsPosition: {
    opacity: 0.1,
    width: 148,
    left: 133,
    position: "absolute",
  },
  parentLayout: {
    width: 364,
    position: "absolute",
  },
  border1Layout: {
    borderRadius: 3,
    position: "absolute",
  },
  mobileTypo: {
    textAlign: "left",
    fontFamily: FontFamily.gilroy,
    fontWeight: "600",
    lineHeight: 29,
    left: 25,
    position: "absolute",
  },
  timePosition: {
    top: "50%",
    position: "absolute",
  },
  capIcon1Layout: {
    width: 1,
    position: "absolute",
  },
  maskGroupIcon: {
    top: 0,
    height: 896,
  },
  homeIndicator2: {
    marginLeft: -67,
    bottom: 8,
    left: "50%",
    borderRadius: Border.br_81xl,
    backgroundColor: Color.colorGray_200,
    width: 134,
    height: 5,
    position: "absolute",
  },
  barsHomeIndicatorIphone: {
    top: 859,
    height: 37,
  },
  text1: {
    left: 46,
    fontSize: 18,
    fontFamily: FontFamily.gilroyMedium,
    textAlign: "center",
    color: Color.colorGray_200,
    lineHeight: 29,
    top: 0,
    position: "absolute",
  },
  groupChild: {
    top: 1,
    width: 34,
    height: 24,
    left: 0,
  },
  groupItem: {
    top: 39,
    height: 1,
    left: 0,
  },
  parent: {
    height: 40,
    left: 25,
    top: 236,
  },
  enterYourMobile1: {
    top: 140,
    fontSize: 26,
    color: Color.colorGray_200,
  },
  border1: {
    right: 2,
    borderColor: Color.colorBlack,
    borderWidth: 1,
    width: 22,
    opacity: 0.35,
    borderStyle: "solid",
    height: 11,
    top: 0,
  },
  capIcon1: {
    top: 4,
    right: 0,
    height: 4,
    opacity: 0.4,
  },
  capacity1: {
    top: 2,
    right: 4,
    borderRadius: 1,
    backgroundColor: Color.colorBlack,
    width: 18,
    height: 7,
    position: "absolute",
  },
  battery: {
    top: 17,
    right: 15,
    width: 24,
    height: 11,
    position: "absolute",
  },
  wifiIcon1: {
    width: 17,
    height: 11,
  },
  cellularConnectionIcon1: {
    width: 19,
    height: 11,
  },
  time: {
    marginTop: -7.5,
    fontSize: 14,
    letterSpacing: 0,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: FontFamily.montserratMedium,
    color: Color.colorBlack,
    width: 60,
    textAlign: "center",
    left: 0,
  },
  timeStyle: {
    height: "47.73%",
    width: "14.4%",
    top: "20.45%",
    right: "80%",
    bottom: "31.82%",
    left: "5.6%",
    position: "absolute",
  },
  statusBar: {
    marginTop: -443.17,
    right: "0.04%",
    left: "-0.04%",
    height: 44,
    width: "100%",
  },
  frameIcon1: {
    top: 57,
    width: 10,
    height: 18,
    left: 25,
    position: "absolute",
    overflow: "hidden",
  },
  numberChild: {
    left: 114,
    borderColor: Color.colorGray_100,
    borderRightWidth: 1,
    height: 23,
    borderStyle: "solid",
    top: 236,
  },
  mobileNumber: {
    top: 197,
    fontSize: 16,
    color: Color.colorGray_100,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  wrapper: {
    left: 322,
    top: 498,
    width: 67,
    height: 67,
    position: "absolute",
  },
  ubereatsV1246111Icon: {
    top: 595,
    height: 301,
  },
  numberItem: {
    top: 878,
    left: 120,
    backgroundColor: "#e0e1e7",
    width: 177,
    height: 19,
    position: "absolute",
  },
  barsHomeIndicatorIphone1: {
    top: 880,
    height: 16,
  },
  number: {
    backgroundColor: "#fcfcfc",
    flex: 1,
    overflow: "hidden",
    height: 896,
    width: "100%",
  },
});

export default Number1;
