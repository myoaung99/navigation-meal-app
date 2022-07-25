import React from "react";
import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy_data";
import CategoryGridTile from "../components/CategoryGridTile";

function CategoriesGridScreen(props) {
  const pressHandler = () => {
    console.log("Press");
  };
  return (
    <FlatList
      numColumns={2}
      columnWrapperStyle={{ justifyContent: "space-around" }}
      horizontal={false}
      data={CATEGORIES}
      renderItem={({ item }) => (
        <CategoryGridTile onPress={pressHandler} category={item} />
      )}
      keyExtractor={(item) => item.id}
    />
  );
}

export default CategoriesGridScreen;

const styles = StyleSheet.create({});
