import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  Platform,
    useWindowDimensions
} from "react-native";

const MealItem = ({ onPress, meal }) => {
  const { title, imageUrl, duration, complexity, affordability } = meal;

  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) =>
          pressed && Platform.OS === "ios" && styles.pressed
        }
        android_ripple={{ color: "#ccc" }}
        onPress={onPress}
      >
        <View style={styles.ImageContainer}>
          <Image style={styles.image} source={{ uri: imageUrl }} />
        </View>

        <Text style={styles.title}>{title}</Text>

        <View style={styles.details}>
          <Text style={styles.detailText}>{duration}m</Text>
          <Text style={styles.detailText}>{complexity.toUpperCase()}</Text>
          <Text style={styles.detailText}>{affordability.toUpperCase()}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: 450,
    maxWidth: '100%',
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 20,
    elevation: 4,

    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.5,

    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  ImageContainer: {
    flex: 1,
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  image: {
    flex: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    paddingHorizontal: 16,
  },
  details: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 16,
  },
  detailText: {
    color: 'black',
    fontSize: 10,
    marginHorizontal: 4,
  },
});
