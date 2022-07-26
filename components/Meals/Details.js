import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Details = ({ complexity, affordability, duration, style }) => {
  return (
    <View style={styles.details}>
      <Text style={[styles.detailText, style]}>{duration}m</Text>
      <Text style={[styles.detailText, style]}>{complexity.toUpperCase()}</Text>
      <Text style={[styles.detailText, style]}>
        {affordability.toUpperCase()}
      </Text>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    justifyContent: "center",
  },
  detailText: {
    color: "gray",
    fontSize: 12,
    marginHorizontal: 4,
  },
});
