import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Subtitle = ({ children }) => {
  return (
    <View style={styles.subtitleContainer}>
      <Text style={styles.subtitle}>{children}</Text>
    </View>
  );
};

export default Subtitle;

const styles = StyleSheet.create({
  subtitleContainer: {
    marginVertical: 8,
    marginHorizontal: 24,
    padding: 6,
    borderBottomWidth: 2,
    borderBottomColor: "#d9dc36",
  },
  subtitle: {
    color: "#d9dc36",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
