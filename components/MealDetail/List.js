import React from "react";
import { View, Text, StyleSheet } from "react-native";

const List = ({ list }) => {
  return (
    <View>
      {list.map((item) => (
        <View key={item} style={styles.list}>
          <Text style={styles.listItem}>{item}</Text>
        </View>
      ))}
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  list: {
    backgroundColor: "#cc9397",
    marginVertical: 6,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginHorizontal: 24,
    borderRadius: 6,
  },
  listItem: {
    color: "#450b10",
    textAlign: "center",
  },
});
