import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MealsOverviewScreen = ({ route, navigation }) => {
  const { categoryIds } = route.params;
  return (
    <View style={styles.screen}>
      <Text>
        This is meal overview screen for <Text>{categoryIds}</Text>
      </Text>
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
