import { StyleSheet, Text, View, FlatList } from "react-native";
import React, { useState , useEffect } from "react";
import productsRaw from "../Data/products.json";
import ProductItem from "../Components/ProductItem";
import Search from "../Components/Search";
import {colors} from "../Global/colors";

const ItemListCategory = ({ category, setCategory }) => {
  const [categorySelected, setCategorySelected] = useState(category);
  const [products, setProducts] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [keywordError, setKeywordError] = useState("");

  useEffect(() => {
    const productsFiltered = productsRaw.filter(
      product => product.category === categorySelected && product.title.toLocaleLowerCase().includes(keyword.toLowerCase()))
    setProducts(productsFiltered);
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
              data={products}
              keyExtractor={product => product.id}
              renderItem={({ item }) => ProductItem({ item })}
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
