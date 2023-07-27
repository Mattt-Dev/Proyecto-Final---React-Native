import React from "react";
import { StyleSheet } from "react-native";
import Home from "../Screens/Home";
import ItemDetail from "../Screens/ItemDetail";
import ItemListCategory from "../Screens/ItemListCategory";
import Header from "../Components/Header";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const ShopStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={({ route, navigation }) => ({
        header: () => {
          return <Header route={route} navigation={navigation} title={"G-Shop"} />;
        },
      })}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="ItemListCategory" component={ItemListCategory} />
      <Stack.Screen name="Detail" component={ItemDetail} />
    </Stack.Navigator>
  );
};

export default ShopStack;

const styles = StyleSheet.create({});
