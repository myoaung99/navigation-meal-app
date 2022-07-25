import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import MealItem from "../components/Meals/MealItem";
import { MEALS } from "../data/dummy_data";

const MealsOverviewScreen = ({ route, navigation }) => {
  const [meals, setMeals] = useState([]);
  const { categoryId } = route.params;

  const renderItem = ({ item }) => {
    const pressHandler = () => {
      navigation.navigate("MealDetail", {
        meal: item,
      });
    };
    return <MealItem meal={item} onPress={pressHandler} />;
  };

  useEffect(() => {
    const mealsList = MEALS.filter((meal) =>
      meal.categoryIds.includes(categoryId)
    );
    setMeals(mealsList);
  }, []);

  return (
    <View style={styles.screen}>
      <FlatList
        style={styles.screen}
        data={meals}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 16,
  },
});
