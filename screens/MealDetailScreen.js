import React, { useLayoutEffect } from "react";
import { View, Text, StyleSheet, Image, ScrollView, Button } from "react-native";
import List from "../components/MealDetail/List";
import Subtitle from "../components/MealDetail/Subtitle";
import Details from "../components/Meals/Details";
import HeaderButton from "../components/MealDetail/HeaderButton";

const MealDetailScreen = ({ route, navigation }) => {
  const {
    id,
    title,
    imageUrl,
    duration,
    complexity,
    affordability,
    ingredients,
    steps,
  } = route.params.meal;

  const headerButtonPressHandler = () => {
    console.log('headerPressHandler pressed!!')
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: ()=>{
        return <HeaderButton onPress={headerButtonPressHandler} color="white" icon="star"/>
      },
    });
  }, [navigation]);


  return (
    <View style={styles.screen}>
      <ScrollView>
        <View style={styles.imageContainer}>
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

const styles = StyleSheet.create({
  screen: {
    marginBottom: 30,
  },
  imageContainer: {
    width: "100%",
    height: 350,
    marginBottom: 10,
  },
  image: {
    flex: 1,
  },
  title: {
    color: "white",
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    margin: 8,
  },
  listContainer: {
    alignSelf: "center",
    maxWidth: "95%",
  },
});
