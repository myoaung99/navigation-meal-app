import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";

const MealItem = ({ onPress, meal }) => {
  const { title, imageUrl, duration, complexity, affordability } = meal;

  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={styles.innerContainer}
        android_ripple={{ color: "#ccc" }}
        onPress={onPress}
      >
        <View style={styles.ImageContainer}>
          <Image style={styles.image} source={{ uri: imageUrl }} />
        </View>

        <Text style={styles.title}>{title}</Text>

        <View style={styles.infomation}>
          <Text style={styles.infoText}>{duration}m</Text>
          <Text style={styles.infoText}>{complexity.toUpperCase()}</Text>
          <Text style={styles.infoText}>{affordability.toUpperCase()}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: "white",
    borderRadius: 10,

    marginBottom: 20,
    overflow: "hidden",
  },

  ImageContainer: {
    width: "100%",
    height: 200,
    borderRadius: 10,
  },
  image: {
    flex: 1,

    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontSize: 18,
    padding: 10,
    textAlign: "center",
  },

  infomation: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 20,
  },
  infoText: {
    color: "gray",
    fontSize: 12,
  },
});
