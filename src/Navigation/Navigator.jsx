import React from "react";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import Header from "../Components/Header";
import Home from "../Screens/Home";
import ItemDetail from "../Screens/ItemDetail";
import ItemListCategory from "../Screens/ItemListCategory";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Header title="G-Shop" />
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ItemListCategory" component={ItemListCategory} />
          <Stack.Screen name="Detail" component={ItemDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default Navigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
