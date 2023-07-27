import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import OrderItem from "../Components/OrderItem";
import OrderData from "../Data/orders.json";

const OrderScreen = () => {
  return (
    <View>
      <FlatList
        data={OrderData}
        keyExtractor={(orderItem) => orderItem.id}
        renderItem={({ item }) => {
          return <OrderItem order={item} />;
        }}
      />
    </View>
  );
};

export default OrderScreen;

const styles = StyleSheet.create({});
