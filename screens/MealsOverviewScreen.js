import React, { useLayoutEffect, useEffect, useState } from "react";
import MealList from "../components/Meals/MealList";
import { MEALS, CATEGORIES } from "../data/dummy_data";

const MealsOverviewScreen = ({ route, navigation }) => {
  const [meals, setMeals] = useState([]);
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

  useEffect(() => {
    const mealsList = MEALS.filter((meal) =>
      meal.categoryIds.includes(categoryId)
    );
    setMeals(mealsList);
  }, []);

  return <MealList items={meals} navigation={navigation} />;
};

export default MealsOverviewScreen;
