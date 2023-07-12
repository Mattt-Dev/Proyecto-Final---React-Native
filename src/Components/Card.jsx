import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../Global/colors";

const Card = ({ children }) => {
  return <View style={styles.cardContainer}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    height: 70,
    width: 300,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.cream,
    marginTop: 20,
  },
});
