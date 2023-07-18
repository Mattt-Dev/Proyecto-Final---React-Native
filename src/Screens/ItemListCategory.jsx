import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ProductItem from "../Components/ProductItem";
import Search from "../Components/Search";
import productsData from "../Data/productsData";

const ItemListCategory = ({ navigation, route }) => {
  const { category } = route.params;

  console.log(category);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [keywordError, setKeywordError] = useState("");

  useEffect(() => {
    const productsFiltered = productsData.filter(
      (product) =>
        product.category === category &&
        product.title.toLocaleLowerCase().includes(keyword.toLowerCase())
    );
    setFilteredProducts(productsFiltered);
  }, [category, keyword]);

  const onSearch = (input) => {
    const expression = /^[a-zA-Z0-9\ ]*$/;
    const evaluation = expression.test(input);

    if (evaluation) {
      setKeyword(input);
      setKeywordError("");
    } else {
      console.log("Solo letras y numeros.");
      setKeywordError("Solo letras y números");
    }
  };

  return (
    <View style={styles.container}>
      <Search onSearch={onSearch} error={keywordError} goBack={() => navigation.goBack()} />
      <FlatList
        data={filteredProducts}
        keyExtractor={(product) => product.id}
        renderItem={({ item }) => (
          <ProductItem item={item} navigation={navigation} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default ItemListCategory;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    marginTop: 20,
    backgroundColor: "white",
    alignItems: "center",
  },
});
