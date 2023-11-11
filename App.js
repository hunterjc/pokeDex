// import { useState } from "react";
// import {
//   View,
//   Text,
//   ScrollView,
//   Image,
//   Button,
//   Pressable,
//   Modal,
//   StatusBar,
// } from "react-native";
// const logoImg = require("./assets/splash.png");
// export default function App() {
//   const [isModelVisiable, setModelVisiable] = useState(false);
//   return (
//     <View
//       style={{n
//         flex: 1,
//         alignItems: "center",
//         backgroundColor: "plum",
//         padding: 60,
//       }}>
//       <StatusBar backgroundColor="black" barStyle="light-content" />
//       <Image
//         source={{ uri: "https://picsum.photos/300" }}
//         style={{ width: 300, height: 300 }}
//       />
//       <Button
//         title="Click Me"
//         onPress={() => setModelVisiable(true)}
//         style={{ width: 30 }}
//       />
//       <Modal
//         visible={isModelVisiable}
//         onRequestClose={() => setModelVisiable(false)}
//         animationType="slide">
//         <View
//           style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//           <Text>Modal content</Text>
//           <Button title="Close Modal" onPress={() => setModelVisiable(false)} />
//         </View>
//       </Modal>
//     </View>
//   );
// }
import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  Alert,
  Dimensions,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>HI Its A </Text>
      </View>
    </View>
  );
}
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0", // Use a light background color
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: windowWidth > 500 ? "70%" : "90%",
    height: windowHeight > 600 ? "60" : "90%",
    height: "40%",
    backgroundColor: "#3498db", // Use a professional color
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5, // Add a subtle shadow for depth
  },
  text: {
    fontSize: windowWidth > 500 ? 50 : 24,
    // fontSize: windowHeight > 600 ? "60" : "90%",
  },
  lightblueBox: {
    backgroundColor: "#3498db", // Use a professional color
  },
});
