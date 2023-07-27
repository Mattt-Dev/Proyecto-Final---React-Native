import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useSelector } from "react-redux";
import ProductItem from "../Components/ProductItem";
import Search from "../Components/Search";

const ItemListCategory = ({ navigation, route }) => {
  const { category } = route.params;

    const productsSelected = useSelector(
      (state) => state.shopReducer.value.productsSelected
  );
  
  console.log(category);

  const [filteredProducts, setFilteredProducts] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [keywordError, setKeywordError] = useState("");

  useEffect(() => {
    const productsFiltered = productsSelected.filter(
      product =>        
        product.title.toLocaleLowerCase().includes(keyword.toLowerCase())
    );
    setFilteredProducts(productsFiltered);
  }, [productsSelected, keyword]);

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
    backgroundColor: "white",
    alignItems: "center",
  },
});
