import React from "react";
import { Text } from "react-native-elements";
import { View, SafeAreaView, ScrollView } from "react-native";
import Search from "./Search";
import { StyleSheet } from "react-native";

const Main = ({ navigation }) => {
  return (
    <>
      <SafeAreaView>
        <ScrollView style={styles}>
          <Search navigation={navigation} styles={styles} />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});
