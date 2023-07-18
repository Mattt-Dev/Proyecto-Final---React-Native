import { useFonts } from "expo-font";
import { StyleSheet } from "react-native";
import Navigator from "./src/Navigation/Navigator";

export default function App() {

  const [fontsLoaded] = useFonts({
    "Prompt-BoldItalic": require("./src/Assets/Fonts/Prompt/Prompt-BoldItalic.ttf"),
    "Prompt-Regular": require("./src/Assets/Fonts/Prompt/Prompt-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
   <Navigator/>
  );
}

const styles = StyleSheet.create();
