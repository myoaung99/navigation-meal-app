import { View, Text, StyleSheet, Pressable, Platform, Dimensions } from "react-native";

function CategoryGridTile({ category, onPress }) {
  return (
    <View style={[styles.gridItem, Platform.OS === 'android' ? { backgroundColor: category.color } : null]}>
      <Pressable
        style={({ pressed }) =>
            pressed
                ? Platform.OS === 'ios' ? [styles.innerContainer, styles.pressed] : styles.innerContainer
                : styles.innerContainer
        }
        android_ripple={{ color: "#ccc" }}
        onPress={onPress}
      >
        <View style={[styles.button, Platform.OS === 'ios' ? { backgroundColor: category.color } : null]}>
          <Text style={styles.title}>{category.title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGridTile;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    height: deviceWidth < 350 ? 120: 150,
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.5,
    margin: 8,
    borderRadius: 10,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible', // hide android_ripple corner overflow
  },
  innerContainer: {
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
