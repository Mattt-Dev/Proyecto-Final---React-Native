import { Image, StyleSheet, Text } from "react-native";
import React from "react";
import Card from "./Card";

const ProductItem = ({ item }) => {

  return (
    <Card additionalStyle={styles.additionalStylesCard}>
      <Text style={styles.textCategory}>{item.title}</Text>
      <Image
        resizeMode="cover"
        style={styles.image}
        source={item.image}
      />
    </Card>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
    borderRadius: 8,
  },
  additionalStylesCard: {
    flexDirection: "row",
    height: 120,
    justifyContent: "space-evenly",
  },
  textCategory: {
    fontFamily: "Prompt-Regular",
    fontSize: 16,
    padding: 8,
  }
});
