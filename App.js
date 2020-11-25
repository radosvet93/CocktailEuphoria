import React from "react";
import { ThemeProvider, Header } from "react-native-elements";
import { ScrollView, SafeAreaView } from "react-native";
import Constants from "expo-constants";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { StyleSheet } from "react-native";

import Search from "./app/components/Search";
import Categories from "./app/components/Categories";
import Random from "./app/components/Random";
import Details from "./app/components/Details";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Home = ({ navigation }) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Search">{(props) => <Search {...props} styles={styles} navigation={navigation} />}</Tab.Screen>
      <Tab.Screen name="Categories">{(props) => <Categories {...props} styles={styles} navigation={navigation} />}</Tab.Screen>
      <Tab.Screen name="Random">{(props) => <Random {...props} styles={styles} navigation={navigation} />}</Tab.Screen>
    </Tab.Navigator>
  );
};
const theme = {
  Button: {
    raised: true,
  },
};

const title = Constants.manifest.name;

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={Home} options={{ title }} />
          <Stack.Screen name="Details">{(props) => <Details {...props} styles={styles} />}</Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#e4e4e4",
  },
});
