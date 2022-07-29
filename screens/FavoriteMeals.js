import React, { useContext, useEffect, useState } from "react";
import { View, FlatList, StyleSheet, useWindowDimensions } from "react-native";
import MealItem from "../components/Meals/MealItem";
import { FavoriteContext } from "./../store/context/favorite-context";
import { MEALS } from "../data/dummy_data";

const FavoriteMeals = ({ navigation }) => {
  const { height: DeviceHeight } = useWindowDimensions();

  const [favoriteMeals, setFavoriteMeals] = useState([]);

  const favoriteMealCtx = useContext(FavoriteContext);
  const favoriteMealIds = favoriteMealCtx.ids;

  useEffect(() => {
    const filteredFavoriteMeals = MEALS.filter((meal) =>
      favoriteMealIds.includes(meal.id)
    );

    setFavoriteMeals(filteredFavoriteMeals);
  }, [favoriteMealIds]);

  const renderItem = ({ item }) => {
    const pressHandler = () => {
      navigation.navigate("MealDetail", {
        mealId: item.id,
      });
    };
    return <MealItem meal={item} onPress={pressHandler} />;
  };

  let paddingV = 16;

  if (DeviceHeight < 400) {
    paddingV = 8;
  }

  return (
    <View style={[styles.screen, { paddingVertical: paddingV }]}>
      <FlatList
        key={favoriteMeals}
        style={styles.flatList}
        data={favoriteMeals}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default FavoriteMeals;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingVertical: 0,
  },
  flatList: {
    paddingHorizontal: 16,
  },
});
