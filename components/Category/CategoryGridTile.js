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
        // android_ripple={{ color: "#ccc" }}
        // style={[styles.outerContainer, { backgroundColor: category.color }]}
        style={({ pressed }) =>
          pressed
            ? Platform.OS === "android" && [
                [
                  styles.outerContainer,
                  styles.pressed,
                  { backgroundColor: category.color },
                ],
              ]
            : [styles.outerContainer, { backgroundColor: category.color }]
        }
      >
        <View style={[styles.button]}>
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

    shadowColor: "black", // ios drop shadow
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,

    margin: 8,
    borderRadius: 10,
    overflow: "hidden", // hide android_ripple overflow
  },
  outerContainer: {
    flex: 1,
    elevation: 5,
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
