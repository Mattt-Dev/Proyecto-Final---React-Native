import { Image, StyleSheet, Text, useWindowDimensions, Pressable } from "react-native";
import React from "react";
import Card from "./Card";

const ProductItem = ({ item, navigation }) => {

  const { height, width } = useWindowDimensions();

  const onSelect = (id) => {
    navigation.navigate('Detail', {productId: item.id});
  }

  return (
    <Pressable onPress={() => onSelect(item.id)}>
      <Card additionalStyle={styles.additionalStylesCard}>
        <Text style={styles.textCategory}>{item.title}</Text>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={item.image}
        />
      </Card>
    </Pressable>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
    borderRadius: 8,
    width: "30%"
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
    width: "60%"
  }
});
