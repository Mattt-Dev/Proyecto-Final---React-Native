import React from "react";
import { StyleSheet } from "react-native";
import Header from "../Components/Header";
import Cart from "../Screens/Cart";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const CartStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="Cart"
      screenOptions={({ route, navigation }) => ({
        header: () => {
          return <Header route={route} navigation={navigation} title={"Cart"} />;
        },
      })}
    >
      <Stack.Screen name="CartScreen" component={Cart} />
      
    </Stack.Navigator>
  );
};

export default CartStack;

const styles = StyleSheet.create({});
