import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import List from "../components/MealDetail/List";
import Subtitle from "../components/MealDetail/Subtitle";
import Details from "../components/Meals/Details";
import HeaderButton from "../components/MealDetail/HeaderButton";
// import { FavoriteContext } from "../store/context/favorite-context";
import { useSelector, useDispatch } from "react-redux";
import {
  addFavorite,
  removeFavorite,
} from "../store/redux/favoriteMeals-slice";
import { MEALS } from "../data/dummy_data";

const MealDetailScreen = ({ route, navigation }) => {
  // const favoriteMealCtx = useContext(FavoriteContext);
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const dispatch = useDispatch();
  const { width: DeviceWidth, height: DeviceHeight } = useWindowDimensions();

  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  console.log(favoriteMealIds);
  const mealIsFavorite = favoriteMealIds.includes(mealId);
  console.log(mealIsFavorite);

  const {
    title,
    imageUrl,
    duration,
    complexity,
    affordability,
    ingredients,
    steps,
  } = selectedMeal;

  const toggleFavoriteMeal = () => {
    if (mealIsFavorite) {
      dispatch(removeFavorite({ id: mealId }));
    } else {
      dispatch(addFavorite({ id: mealId }));
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <HeaderButton
            onPress={toggleFavoriteMeal}
            color="white"
            icon={mealIsFavorite ? "star" : "star-outline"}
          />
        );
      },
    });
  }, [navigation, toggleFavoriteMeal]);

  let marginB = 30;
  let imgHeight = 350;

  if (DeviceHeight < 400) {
    marginB = 8;
  }

  if (DeviceWidth < 350) {
    imgHeight = 200;
  }

  if (DeviceWidth > 350 && DeviceHeight < 400) {
    imgHeight = 250;
  }

  return (
    <View style={[styles.screen, { marginBottom: marginB }]}>
      <ScrollView>
        <View style={[styles.imageContainer, { height: imgHeight }]}>
          <Image style={styles.image} source={{ uri: imageUrl }} />
        </View>
        <Text style={styles.title}>{title}</Text>
        <Details
          style={{ color: "white" }}
          duration={duration}
          complexity={complexity}
          affordability={affordability}
        />
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List list={ingredients} />

          <Subtitle>Steps</Subtitle>
          <List list={steps} />
        </View>
      </ScrollView>
    </View>
  );
};

export default MealDetailScreen;

const deviceWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  screen: {},
  imageContainer: {
    width: "100%",
    marginBottom: 10,
  },
  image: {
    flex: 1,
  },
  title: {
    color: "white",
    textAlign: "center",
    fontSize: deviceWidth < 350 ? 20 : 24,
    fontWeight: "bold",
    margin: 8,
  },
  listContainer: {
    alignSelf: "center",
    maxWidth: deviceWidth < 350 ? "100%" : "95%",
  },
});
