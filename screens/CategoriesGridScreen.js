import React from "react";
import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy_data";
import CategoryGridTile from "../components/CategoryGridTile";

function CategoriesGridScreen({ navigation }) {
  function renderItem({ item }) {
    // navigate to meals overview screen
    const pressHandler = () => {
      navigation.navigate("MealsOverview", {
        categoryIds: item.id,
      });
    };

    return <CategoryGridTile onPress={pressHandler} category={item} />;
  }
  return (
    <FlatList
      style={styles.flatlist}
      numColumns={2}
      columnWrapperStyle={{ justifyContent: "space-around" }}
      horizontal={false}
      data={CATEGORIES}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
}

export default CategoriesGridScreen;

const styles = StyleSheet.create({
  flatlist: {
    padding: 16,
  },
});
