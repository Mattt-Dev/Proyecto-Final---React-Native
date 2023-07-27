import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import CategoryItem from "../Components/CategoryItem";
import categories from "../Data/categories.json";

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <FlatList
        style={styles.list}
        data={categories}
        keyExtractor={(category) => category}
        renderItem={({ item }) => CategoryItem({ item, navigation })}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },

  list: {
    marginTop: 20,
  },
});
