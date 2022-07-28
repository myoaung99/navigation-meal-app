import React, { useLayoutEffect } from "react";
import {View, Text, StyleSheet, Image, ScrollView, Dimensions, useWindowDimensions} from "react-native";
import List from "../components/MealDetail/List";
import Subtitle from "../components/MealDetail/Subtitle";
import Details from "../components/Meals/Details";
import HeaderButton from "../components/MealDetail/HeaderButton";

const MealDetailScreen = ({ route, navigation }) => {
  const {width: DeviceWidth, height: DeviceHeight} = useWindowDimensions();
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

  let marginB = 30;
  let imgHeight = 350;

  if(DeviceHeight < 350){
    marginB = 8;
  }

  if(DeviceWidth < 350){
    imgHeight = 200
  }

  if(DeviceWidth > 350 && DeviceHeight < 350){
    imgHeight = 200
  }

  return (
    <View style={[styles.screen, {marginBottom: marginB}]}>
      <ScrollView>
        <View style={[styles.imageContainer, {height: imgHeight}]}>
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

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  screen: {

  },
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
