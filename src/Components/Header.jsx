import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import { colors } from "../Global/colors";
import { useFonts } from "expo-font";

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
    flex: 1,
    flexDirection: "column",
    height: "20%",
    width: "100%",
    backgroundColor: colors.darkgrey,
    justifyContent: "center",
    alignItems: "center",
  },

  headerText: {
    color: "white",
    // marginTop: 15,
    fontSize: 24,
    fontFamily: "Prompt-BoldItalic",
  },

  headerImage: {
    height: 50,
  }
});
