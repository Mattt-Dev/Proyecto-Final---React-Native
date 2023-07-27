import React from "react";
import { FlatList, Pressable, StyleSheet, Text, View } from "react-native";
import CartItem from "../Components/CartItem";
import CartData from "../Data/cart.json";

const Cart = () => {
  const totalPrice = CartData.reduce(
    (acumulador, currentItem) =>
      (acumulador += currentItem.price * currentItem.quantity),
    0
  );

  const totalProducts = CartData.reduce(
    (acc, currentItem) => (acc += currentItem.quantity),
    0
  );

  return (
    <View>
      <FlatList
        data={CartData}
        keyExtractor={(cartItem) => cartItem.id}
        renderItem={({ item }) => {
          return <CartItem cartItem={item} />;
        }}
      />
      <View style={styles.totalContainer}>
        <Pressable>
          <Text style={styles.confirm}>Confirm</Text>
        </Pressable>
        <Text>Total: ${totalPrice}</Text>
        <Text>Total Products: {totalProducts}</Text>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  totalContainer: {
    flexDirection: "column",
    alignItems: "center",
    marginTop: 20,
  },
  confirm: {
    backgroundColor: "lightgreen",
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
});
