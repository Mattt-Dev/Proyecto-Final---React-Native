import { useFonts } from 'expo-font';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './src/Components/Header';
import Home from './src/Screens/Home';
import ItemListCategory from './src/Screens/ItemListCategory';

export default function App() {

  const [categorySelected, setCategorySelected] = useState("")

  const [fontsLoaded] = useFonts({
    'Prompt-BoldItalic': require('./src/Assets/Fonts/Prompt/Prompt-BoldItalic.ttf'),
    'Prompt-Regular': require('./src/Assets/Fonts/Prompt/Prompt-Regular.ttf')
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <View style={styles.container}>
      <Header />
      {
        categorySelected ? 
        <ItemListCategory
          category={categorySelected}
          setCategory={setCategorySelected}
        />: 
          <Home
          setCategorySelected={setCategorySelected}
        />
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
