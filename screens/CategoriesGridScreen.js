import React from "react";
import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy_data";
import CategoryGridTile from "../components/Category/CategoryGridTile";

function CategoriesGridScreen({ navigation }) {
  function renderItem({ item }) {
    // navigate to meals overview screen
    const pressHandler = () => {
      navigation.navigate("MealsOverview", {
        categoryId: item.id,
      });
    };

    return <CategoryGridTile onPress={pressHandler} category={item} />;
  }
  return (
    <View style={styles.screen}>
      <FlatList
        style={styles.flatList}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-around" }}
        horizontal={false}
        data={CATEGORIES}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default CategoriesGridScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 16,
  },
});
