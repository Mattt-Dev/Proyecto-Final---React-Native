import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import categories from "../Data/categories.json";
import { colors } from "../Global/colors";
import CategoryItem from "../Components/CategoryItem";

const Home = () => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={categories}
        keyExtractor={(category) => category}
        renderItem={({ item }) => CategoryItem({ item })}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    height: "85%",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },

  list: {
    marginTop: 20,
  },
});
