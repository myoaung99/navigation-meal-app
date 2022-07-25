import React from "react";
import { View, Text } from "react-native";

const MealDetailScreen = ({ route }) => {
  const { id } = route.params.meal;
  return (
    <View>
      <Text>Meal detail for {id}</Text>
    </View>
  );
};

export default MealDetailScreen;
