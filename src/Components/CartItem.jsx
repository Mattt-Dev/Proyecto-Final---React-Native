import { Entypo } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../Global/colors";

const CartItem = ({ cartItem }) => {
  console.log(cartItem);
  return (
    <View style={styles.card} onPress={() => {}}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{cartItem.title} ({cartItem.quantity})</Text>
        <Text style={styles.text2}>{cartItem.brand}</Text>
        <Text style={styles.text2}>${cartItem.price}</Text>
      </View>
      <Entypo name="trash" size={30} color="black" />
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  card: {
    height: 100,
    backgroundColor: colors.cream,
    padding: 10,
    margin: 10,
    borderWidth: 2,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textContainer: {
    width: "70%",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  text: {
    fontSize: 19,
    color: colors.grey,
  },
  text2: {
    fontSize: 14,
    color: colors.darkgrey,
  },
});
