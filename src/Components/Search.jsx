import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Search = ({ onSearch, error = "", goBack }) => {

  const [keyword, setKeyword] = React.useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        value={keyword}
        onChangeText={setKeyword}
      />
      <Pressable onPress={() => onSearch(keyword)}>
        <FontAwesome name="search" size={24} color="black" />
      </Pressable>
      <Pressable onPress={() => setKeyword("")}>
        <FontAwesome5 name="eraser" size={24} color="black" />
      </Pressable>
      <Pressable onPress={goBack}>
        <Ionicons name="chevron-back-circle" size={24} color="black" />
      </Pressable>
      {error ? <Text style={styles.textError}>{error}</Text> : null}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
    container: {
    flexDirection: "row",  
    justifyContent: "center",
    alignItems: "center",
    height: "10%",
    gap: 18
    },
    
    input: {
    width: 200,
      padding: 8,
      fontSize: 18,
      backgroundColor: "white",
    borderRadius: 8,
}});
