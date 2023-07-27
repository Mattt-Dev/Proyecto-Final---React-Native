import React from "react";
import ShopStack from "./ShopStack";
import CartStack from "./CartStack";
import { colors } from "../Global/colors";

import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView, StatusBar, StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5, FontAwesome, Entypo } from "@expo/vector-icons";
import OrderStack from "./OrderStack";

const Tab = createBottomTabNavigator();

const Navigator = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: styles.tabBar,
          }}
        >
          <Tab.Screen
            name="Shop"
            component={ShopStack}
            options={{
              tabBarIcon: ({ focused }) => {
                return (
                  <View>
                    <FontAwesome5
                      name="store"
                      size={24}
                      color={focused ? "white" : "gray"}
                    />
                  </View>
                );
              },
            }}
          />
          <Tab.Screen
            name="Cart"
            component={CartStack}
            options={{
              tabBarIcon: ({ focused }) => {
                return (
                  <View>
                    <FontAwesome
                      name="shopping-cart"
                      size={30}
                      color={focused ? "white" : "gray"}
                    />
                  </View>
                );
              },
            }}
          />
          <Tab.Screen
            name="Orders"
            component={OrderStack}
            options={{
              tabBarIcon: ({ focused }) => {
                return (
                  <View>
                    <Entypo name="text-document" size={24} color={focused ? "white" : "grey"} />
                  </View>
                );
              },
            }}
          />
        </Tab.Navigator>
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
  tabBar: {
    backgroundColor: colors.darkgrey,
    shadowColor: "#000",
    elevation: 4,
    position: "absolute",
    bottom: 15,
    left: 15,
    right: 15,
    height: 60,
    borderRadius: 20,
  },
});
