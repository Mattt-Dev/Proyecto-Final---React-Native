import React, { useEffect, useState } from "react";
import { Button, Image, StyleSheet, Text, View, useWindowDimensions } from "react-native";
import allProducts from "../Data/productsData";

const ItemDetail = ({navigation, route }) => {

const {productId: idSelected} = route.params

  const [product, setProduct] = useState({});
  const [orientation, setOrientation] = useState("portrait");
  const{width, height} = useWindowDimensions();

  useEffect(() => {
    if (width > height) {
      setOrientation("landscape");
    } else {
      setOrientation("portrait");
    }
  }, [width, height]);


  useEffect(() => {
    const productSelected = allProducts.find(
      (product) => product.id === idSelected
    );
    setProduct(productSelected);
  }, [idSelected]);

  return (
    <View>
      {product ? <View style={orientation === "portrait" ? styles.mainContainer : styles.mainContainerLandscape}>
      <Button onPress={() => navigation.goBack()} title="Go Back" style={styles.goBack}/>
        <Image source={product.image} rezizeMode="contain" style={styles.image} />
        <View style={styles.textContainer}>
          <Text>{product.title}</Text>
          <Text>{product.description}</Text>
          <Text>${product.price}</Text>
          <Button title="Add Cart" style={styles.addToCart}/>
        </View>
      </View>
        : null}
    </View>
  );
};

export default ItemDetail;

const styles = StyleSheet.create({
  goBack: {
    alignItems: "center",
  },
  mainContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  mainContainerLandscape: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  textContainer: {
    flexDirection: "column",
    alignItems: "center",
    padding: 20,
    marginBottom: 10,
  },
  image: {
    width: 320,
    height: 250,
    marginTop: 20,
  },

  addToCart: {
    marginTop: 140,
  },
});
