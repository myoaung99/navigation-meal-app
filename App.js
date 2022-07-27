import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesGridScreen from "./screens/CategoriesGridScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavoriteMeals from "./screens/FavoriteMeals";
import { Ionicons } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

const Stack = createNativeStackNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTintColor: "white",
        drawerStyle: {
          backgroundColor: "#4d2f31",
        },
        drawerLabelStyle: {
          color: "white",
        },
        drawerActiveBackgroundColor: "#450b10",
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: "#450b10",
        },
        sceneContainerStyle: {
          backgroundColor: "#4d2f31",
        },
      }}
    >
      <Drawer.Screen
        name="Category"
        component={CategoriesGridScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => {
            return <Ionicons name="grid" color="white" size={size} />;
          },
        }}
      />
      <Drawer.Screen
        name="Favorite"
        component={FavoriteMeals}
        options={{
          drawerIcon: ({ color, size }) => {
            return <Ionicons name="star" color="white" size={size} />;
          },
        }}
      />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="MealsCategories"
          screenOptions={{
            headerTintColor: "white",
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: "#450b10",
            },
            contentStyle: {
              backgroundColor: "#4d2f31",
            },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
          <Stack.Screen
            name="MealDetail"
            component={MealDetailScreen}
            options={{
              title: "Meal Detail",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
