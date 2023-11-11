import React from "react"; // You need to import React from 'react' when working with JSX
import { View, StyleSheet, Button, Alert } from "react-native";

export default function ButtonStyle({ name }) {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.lightblueBox]}>
        <Button
          title={"name"}
          onPress={() => {
            Alert.alert({ name }, " Message", "This is a professional alert.");
          }}
          color="#111" // Set button text color
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0", // Use a light background color
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    width: 200,
    height: 80,
    backgroundColor: "#3498db", // Use a professional color
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5, // Add a subtle shadow for depth
  },
  lightblueBox: {
    backgroundColor: "#3498db", // Use a professional color
  },
});
