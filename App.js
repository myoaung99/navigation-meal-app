import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import HomeScreen from "./screens/home-screen";

export default function App() {
    return (<SafeAreaView style={styles.screen}>
      <HomeScreen/>
    </SafeAreaView>);
}

const styles = StyleSheet.create({
  screen: {
      flex: 1,
      padding: 16,
      paddingTop: 50,
      alignItems: "center",
  }
});
