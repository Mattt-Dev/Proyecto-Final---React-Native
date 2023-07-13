import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../Global/colors";
import { useFonts } from "expo-font";

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>G-Shop</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: "15%",
    width: "100%",
    backgroundColor: colors.darkgrey,
    justifyContent: "center",
    alignItems: "center",
  },

  headerText: {
    color: "white",
    marginTop: 15,
    fontSize: 24,
    fontFamily: "Prompt-BoldItalic",
  },
});
