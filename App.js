import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import Navigator from "./src/Navigation/Navigator";
import store from "./src/Store/store";

export default function App() {

  const [fontsLoaded] = useFonts({
    "Prompt-BoldItalic": require("./src/Assets/Fonts/Prompt/Prompt-BoldItalic.ttf"),
    "Prompt-Regular": require("./src/Assets/Fonts/Prompt/Prompt-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}

