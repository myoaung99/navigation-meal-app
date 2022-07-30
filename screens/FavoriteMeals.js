import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
// import { FavoriteContext } from "./../store/context/favorite-context";
import { useSelector } from "react-redux";
import { MEALS } from "../data/dummy_data";
import MealList from "../components/Meals/MealList";

const FavoriteMeals = ({ navigation }) => {
  const [favoriteMeals, setFavoriteMeals] = useState([]);

  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);

  useEffect(() => {
    const filteredFavoriteMeals = MEALS.filter((meal) =>
      favoriteMealIds.includes(meal.id)
    );
    setFavoriteMeals(filteredFavoriteMeals);
  }, [favoriteMealIds]);

  const browseMealsHandler = () => {
    navigation.navigate("Category");
  };

  if (favoriteMeals.length <= 0) {
    return (
      <View style={styles.textContainer}>
        <Text style={styles.text}>There is no favorite meals yet.</Text>
        <Button
          color={"#450b10"}
          title="Browse Meals"
          onPress={browseMealsHandler}
        />
      </View>
    );
  }
  return <MealList items={favoriteMeals} navigation={navigation} />;
};

export default FavoriteMeals;

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    color: "white",
    marginBottom: 10,
  },
});
