import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  useWindowDimensions,
  Platform,
} from "react-native";

function CategoryGridTile({ category, onPress }) {
  const { width, height } = useWindowDimensions();

  let cardWidth = width / 2 - 40;

  return (
    <View style={[styles.gridItem, { width: cardWidth }]}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) =>
          pressed && Platform.OS === "android"
            ? [styles.outerContainer, styles.pressed]
            : styles.outerContainer
        }
      >
        <View style={[styles.button, { backgroundColor: category.color }]}>
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
    backgroundColor: "black",
    margin: 8,
    borderRadius: 10,
    elevation: 5,

    shadowColor: "black", // ios drop shadow
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,

    overflow: "hidden", // hide android_ripple overflow
  },
  outerContainer: {
    flex: 1,
  },
  button: {
    flex: 1,
    borderRadius: 10,
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
