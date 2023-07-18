import { StyleSheet, Text, View, Button, Image, useWindowDimensions } from "react-native";
import React, { useEffect, useState } from "react";
import allProducts from "../Data/productsData";

const ItemDetail = ({ idSelected, setProductSelected }) => {
  console.log(idSelected);

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
      <Button onPress={() => setProductSelected("")} title="Go Back" style={styles.goBack}/>
      {product ? <View style={orientation === "portrait" ? styles.mainContainer : styles.mainContainerLandscape}>
        <Image source={product.image} rezizeMode="contain" style={styles.image} />
        <View style={styles.textContainer}>
          <Text>{product.title}</Text>
          <Text>{product.description}</Text>
          <Text>${product.price}</Text>
          <Button title="Add Cart" />
        </View>
      </View>
        : null}
    </View>
  );
};

export default ItemDetail;

const styles = StyleSheet.create({
  goBack: {
  maxWidth: 100,
},
  mainContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    margin: 10,
    height: "75%",


  },
  mainContainerLandscape: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,

  },
  textContainer: {
    flexDirection: "column",

  },
  image: {
    width: 320,
    height: 250,
}});
