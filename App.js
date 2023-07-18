import { useFonts } from "expo-font";
import { useState } from "react";
import { Platform, SafeAreaView, StatusBar, StyleSheet } from "react-native";
import Header from "./src/Components/Header";
import Home from "./src/Screens/Home";
import ItemDetail from "./src/Screens/ItemDetail";
import ItemListCategory from "./src/Screens/ItemListCategory";

export default function App() {
  const [categorySelected, setCategorySelected] = useState("");
  const [productSelected, setProductSelected] = useState("");

  const [fontsLoaded] = useFonts({
    "Prompt-BoldItalic": require("./src/Assets/Fonts/Prompt/Prompt-BoldItalic.ttf"),
    "Prompt-Regular": require("./src/Assets/Fonts/Prompt/Prompt-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title="G-Shop" />
      {categorySelected ? (
        <ItemListCategory
          category={categorySelected}
          setCategory={setCategorySelected}
          setProductSelected={setProductSelected}
        />
      ) : productSelected ? (
        <ItemDetail
          idSelected={productSelected}
          setProductSelected={setProductSelected}
        />
      ) : (
        <Home setCategorySelected={setCategorySelected} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
