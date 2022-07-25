import { View, Text, StyleSheet, Pressable, Platform } from "react-native";

function CategoryGridTile({ category, onPress }) {
  return (
    <View style={[styles.gridItem, { backgroundColor: category.color }]}>
      <Pressable
        style={styles.innerContainer}
        android_ripple={{ color: "#ccc" }}
        onPress={onPress}
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
    flex: 1,
    height: 150,
    elevation: 4,
    margin: 8,
    borderRadius: 10,
    overflow: "hidden", // hide android_ripple corner overflow
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
