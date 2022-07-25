import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";

const MealItem = ({ onPress, meal }) => {
  const { title, imageUrl } = meal;

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
      </Pressable>
    </View>
  );
};

export default MealItem;

const styles = StyleSheet.create({
  outerContainer: {
    backgroundColor: "white",
    borderRadius: 10,
    elevation: 4,
    marginBottom: 20,
  },

  innerContainer: {
    paddingBottom: 20,
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
    fontSize: 20,
    padding: 10,
  },
});
