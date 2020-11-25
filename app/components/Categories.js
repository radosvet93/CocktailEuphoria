import React, { useCallback, useState, useLayoutEffect, useEffect } from "react";
import { Text, Card, ListItem, Avatar, Button } from "react-native-elements";
import { View, SafeAreaView, ScrollView, ActivityIndicator } from "react-native";
import { getIngredientImg } from "../helpers/getIngredientImg";
import YoutubePlayer from "react-native-youtube-iframe";
import { useGetCategory } from "../hooks/useGetCategory";
import { cocktailDBCategories } from "../constants/categories";
import { FlatList } from "react-native-gesture-handler";

const Categories = ({ styles, navigation }) => {
  // TODO: use the getCategories
  const { isLoading: isCategoryLoading, getCategory, categories } = useGetCategory(cocktailDBCategories.category);
  const { isLoading: isIngredientLoading, categories: ingredients } = useGetCategory(cocktailDBCategories.ingredient);
  const { isLoading: isGlassLoading, categories: glasses } = useGetCategory(cocktailDBCategories.glass);
  const { isLoading: isAlcoholLoading, categories: alcohols } = useGetCategory(cocktailDBCategories.alcohol);

  console.log("categories", categories);
  console.log("ingredients", ingredients);
  console.log("glasses", glasses);
  console.log("alcohols", alcohols);

  useEffect(() => {
    getCategory();
  }, []);

  const renderCategories = (list) => {
    return (
      list &&
      list.map((category, i) => {
        return (
          <ListItem key={i + category} bottomDivider>
            <ListItem.Content>
              <ListItem.Title>{category}</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        );
      })
    );
  };

  return (
    <>
      <SafeAreaView>
        <ScrollView contentContainerStyle={styles.container}>
          <Text h3>All categories</Text>
          <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap", alignItems: "flex-start" }}>
            <Card containerStyle={{ flex: 1, marginRight: 10 }}>
              <Card.Title>Categories</Card.Title>
              <Button title="Get all categories" type="clear" />
              {/* TODO: Create a new component and navigate on button click passing all the categories, or doing the logic there!?!?!? */}
              {isCategoryLoading ? <ActivityIndicator color="#0000ff" size="large" /> : renderCategories(categories)}
            </Card>
            <Card containerStyle={{ flex: 1, marginLeft: 10 }}>
              <Card.Title>Ingredients</Card.Title>
              <Button title="Get all ingredients" type="clear" />
              {isIngredientLoading ? <ActivityIndicator color="#0000ff" size="large" /> : renderCategories(ingredients)}
            </Card>
          </View>
          <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap", alignItems: "flex-start" }}>
            <Card containerStyle={{ flex: 1, marginRight: 10 }}>
              <Card.Title>Alcohols</Card.Title>
              <Button title="Get all alcohols" type="clear" />
              {isAlcoholLoading ? <ActivityIndicator color="#0000ff" size="large" /> : renderCategories(alcohols)}
            </Card>
            <Card containerStyle={{ flex: 1, marginLeft: 10 }}>
              <Card.Title>Glasses</Card.Title>
              <Button title="Get all glasses" type="clear" />
              {isGlassLoading ? <ActivityIndicator color="#0000ff" size="large" /> : renderCategories(glasses)}
            </Card>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

// dateModified: "2017-02-20 15:07:58"
// idDrink: "12726"
// strAlcoholic: "Non alcoholic"
// strCategory: "Other/Unknown"
// strCreativeCommonsConfirmed: "No"
// strDrink: "Tomato Tang"
// strDrinkAlternate: null
// strDrinkDE: null
// strDrinkES: null
// strDrinkFR: null
// strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/869qr81487603278.jpg"
// strDrinkZH-HANS: null
// strDrinkZH-HANT: null
// strGlass: "Highball glass"
// strIBA: null
// strIngredient1: "Tomato juice"
// strIngredient2: "Lemon juice"
// strIngredient3: "Celery salt"
// strIngredient4: null
// strIngredient5: null
// strIngredient6: null
// strIngredient7: null
// strIngredient8: null
// strIngredient9: null
// strIngredient10: null
// strIngredient11: null
// strIngredient12: null
// strIngredient13: null
// strIngredient14: null
// strIngredient15: null
// strInstructions: "Place all ingredients in the blender jar - cover and whiz on medium speed until well blended. Pour in one tall, 2 medium or 3 small glasses and drink up."
// strInstructionsDE: "Alle Zutaten in den Mixer geben - abdecken und bei mittlerer Geschwindigkeit schaumig schlagen, bis sie gut vermischt sind. In ein großes, 2 mittlere oder 3 kleine Gläser füllen und geniessen."
// strInstructionsES: null
// strInstructionsFR: null
// strInstructionsZH-HANS: null
// strInstructionsZH-HANT: null
// strMeasure1: "2 cups "
// strMeasure2: "1-2 tblsp "
// strMeasure3: "1 dash "
// strMeasure4: null
// strMeasure5: null
// strMeasure6: null
// strMeasure7: null
// strMeasure8: null
// strMeasure9: null
// strMeasure10: null
// strMeasure11: null
// strMeasure12: null
// strMeasure13: null
// strMeasure14: null
// strMeasure15: null
// strTags: null
// strVideo: null

export default Categories;
