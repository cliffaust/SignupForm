import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Signup from "./src/screen/Signup";

export default function App() {
  return (
    <View style={styles.container}>
      <Signup></Signup>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "blue",
  },
});
