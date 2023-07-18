import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { colors } from "../Global/colors";

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Image source={require("../Assets/Images/G_Logo.png")} resizeMode="contain" style={styles.headerImage}/>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: colors.darkgrey,
    justifyContent: "center",
    alignItems: "center",
    padding: 12
  },

  headerText: {
    color: "white",
    fontSize: 24,
    fontFamily: "Prompt-BoldItalic",
  },

  headerImage: {
    height: 50,
  }
});
