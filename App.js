import React from "react";
import { ThemeProvider, Header } from "react-native-elements";
import { ScrollView, SafeAreaView } from "react-native";
import Constants from "expo-constants";
import Main from "./app/components/Main";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Details from "./app/components/Details";

const Stack = createStackNavigator();

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
        <Stack.Navigator>
          <Stack.Screen name="Main" component={Main} options={{ title }} />
          <Stack.Screen name="Details" component={Details} options={{ title }} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
