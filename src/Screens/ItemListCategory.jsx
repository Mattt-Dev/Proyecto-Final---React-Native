import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ProductItem from "../Components/ProductItem";
import Search from "../Components/Search";
import productsData from "../Data/productsData";

const ItemListCategory = ({ category, setCategory }) => {
  const [categorySelected, setCategorySelected] = useState(category);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [keywordError, setKeywordError] = useState("");

  useEffect(() => {
    const productsFiltered = productsData.filter(
     (product) => product.category === categorySelected && product.title.toLocaleLowerCase().includes(keyword.toLowerCase()))
    setFilteredProducts(productsFiltered);
  }, [categorySelected, keyword]);

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
          <Search onSearch={onSearch} error={keywordError} goBack={() => setCategory("")} />
          <FlatList
              data={filteredProducts}
              keyExtractor={(product) => product.id}
              renderItem={({ item }) => <ProductItem item={item} />}
              showsVerticalScrollIndicator={false}
          />
    </View>
  );
};

export default ItemListCategory;

const styles = StyleSheet.create({
    container: {
        height: "90%",
        backgroundColor: "white",
        alignItems: "center",
}});
