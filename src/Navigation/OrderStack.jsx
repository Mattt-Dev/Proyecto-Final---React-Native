import React from "react";
import { StyleSheet } from "react-native";
import Header from "../Components/Header";
import OrderScreen from "../Screens/OrderScreen";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const OrderStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="OrderScreen"
      screenOptions={({ route, navigation }) => ({
        header: () => {
          return (
            <Header route={route} navigation={navigation} title={"Orders"} />
          );
        },
      })}
    >
      <Stack.Screen name="OrderScreen" component={OrderScreen} />
    </Stack.Navigator>
  );
};

export default OrderStack;

const styles = StyleSheet.create({});
