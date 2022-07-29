import React, {useEffect, useState} from "react";
import { View, Text, StyleSheet, ScrollView, FlatList, useWindowDimensions } from "react-native";
import { CATEGORIES } from "../data/dummy_data";
import CategoryGridTile from "../components/Category/CategoryGridTile";

function CategoriesGridScreen({ navigation }) {
  const {width: DeviceWidth, height: DeviceHeight} = useWindowDimensions();
  const [columns, setColumns] = useState(2);

  console.log(DeviceWidth, DeviceHeight);

  useEffect(() => {
    DeviceHeight < 400 && DeviceWidth > 400 ? setColumns(3) : setColumns(2);
  },[DeviceHeight]);

  function renderItem({ item }) {
    // navigate to meals overview screen
    const pressHandler = () => {
      navigation.navigate("MealsOverview", {
        categoryId: item.id,
      });
    };

    return <CategoryGridTile onPress={pressHandler} category={item} />;
  }
  return (
    <View style={styles.screen}>
      <FlatList
        style={styles.flatList}
        numColumns = {columns}
        key={columns}
        columnWrapperStyle={{ justifyContent: "space-around" }}
        horizontal={false}
        data={CATEGORIES}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

export default CategoriesGridScreen;

const styles = StyleSheet.create({
  screen: {
    padding: 16,
  },
});
