import React, { useLayoutEffect, useEffect, useState } from "react";
import {View, Text, StyleSheet, FlatList, useWindowDimensions} from "react-native";
import MealItem from "../components/Meals/MealItem";
import { MEALS, CATEGORIES } from "../data/dummy_data";

const MealsOverviewScreen = ({ route, navigation }) => {
  const [meals, setMeals] = useState([]);
  const {width: DeviceWidth, height: DeviceHeight} = useWindowDimensions();
  const { categoryId } = route.params;

  // set navigation options dynamically
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);

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

  let paddingV = 16;

  if(DeviceHeight < 350){
    paddingV = 8;
  }

  return (
    <View style={[styles.screen, {paddingVertical: paddingV}]}>
      <FlatList
        style={styles.flatList}
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
    paddingVertical: 0,
  },
  flatList: {
    paddingHorizontal: 16,
  },
});
