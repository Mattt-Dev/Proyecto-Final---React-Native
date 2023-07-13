import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../Global/colors";

const Card = ({ children, additionalStyle = [] }) => {
  return <View style={[styles.cardContainer, additionalStyle]}>{children}</View>;
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
    borderRadius: 16,
    borderColor: colors.darkgrey,
    borderWidth: 2,
  },
});
