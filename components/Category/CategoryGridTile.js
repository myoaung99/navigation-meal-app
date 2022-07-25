import React from "react";
import { View, Text, StyleSheet, Pressable, Platform } from "react-native";

function CategoryGridTile({ category, onPress }) {
  return (
    <View
      style={[
        styles.gridItem,
        Platform.select({ android: { backgroundColor: category.color } }),
      ]}
    >
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={styles.innerContainer}
        onPress={onPress}
      >
        <View
          style={[
            styles.button,
            Platform.select({ ios: { backgroundColor: category.color } }),
          ]}
        >
          <Text style={styles.title}>{category.title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    height: 150,
    ...Platform.select({
      android: { elevation: 4 },
      ios: {
        backgroundColor: "black",
        shadowColor: "black",
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        shadowOpacity: 0.75,
      },
    }),
    flex: 1,

    margin: 8,
    borderRadius: 10,
    overflow: "hidden", // hide android_ripple overflow
  },
  innerContainer: {
    flex: 1,
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 14,
    fontWeight: "bold",
  },

  pressed: {
    opacity: 0.75,
  },
});
