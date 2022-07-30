import React from "react";
import MealItem from "./MealItem";
import { View, useWindowDimensions, StyleSheet, FlatList } from "react-native";

const MealList = ({ items, navigation }) => {
  const { height: DeviceHeight } = useWindowDimensions();

  let paddingV = 16;
  if (DeviceHeight < 400) {
    paddingV = 8;
  }

  const renderItem = ({ item }) => {
    const pressHandler = () => {
      navigation.navigate("MealDetail", {
        mealId: item.id,
      });
    };
    return <MealItem meal={item} onPress={pressHandler} />;
  };

  return (
    <View style={[styles.screen, { paddingVertical: paddingV }]}>
      <FlatList
        style={styles.flatList}
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default MealList;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingVertical: 0,
  },
  flatList: {
    paddingHorizontal: 16,
  },
});
