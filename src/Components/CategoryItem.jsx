import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import Card from "./Card";
import { useFonts } from "expo-font";

const CategoryItem = ({ item, setCategorySelected }) => {
  return (
    <Pressable onPress={() => setCategorySelected(item)}>
      <Card>
        <Text style={styles.textCategory}>{item}</Text>
      </Card>
    </Pressable>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  textCategory: {
    fontSize: 20,
    fontFamily: "Prompt-Regular",
  },
});
