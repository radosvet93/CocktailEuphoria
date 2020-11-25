import React, { useState, useRef, useEffect } from "react";
import { Text, Button, ListItem, Avatar, Input } from "react-native-elements";
import { Keyboard, View, ScrollView, SafeAreaView } from "react-native";
import { useGetCocktailsByName } from "../hooks/useGetCocktailByName";
import { Constants } from "react-native-unimodules";

const Search = ({ styles, navigation }) => {
  const [cocktail, setCocktail] = useState("");
  const { isLoading, cocktails, getCocktails, error } = useGetCocktailsByName(cocktail);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <SafeAreaView>
      <ScrollView contentContainerStyle={styles.container}>
        <View>
          <Text h3>Search for cocktails</Text>
          <Input placeholder="Search for cocktail" onChangeText={(value) => setCocktail(value)} value={cocktail} ref={inputRef} />
        </View>
        <View>
          <Button
            loading={isLoading}
            onPress={() => {
              getCocktails();
              setCocktail("");
              Keyboard.dismiss;
            }}
            title="Search"
          />
          {error || !cocktails ? (
            <Text>{error}</Text>
          ) : (
            <>
              {!!cocktails.length && <Text>Found {cocktails.length} results</Text>}
              {cocktails.map((cocktail) => {
                return (
                  <ListItem
                    key={cocktail.idDrink}
                    bottomDivider
                    onPress={() => {
                      navigation.navigate("Details", { cocktail });
                    }}
                  >
                    <Avatar size="xlarge" source={{ uri: cocktail.strDrinkThumb }} />
                    <ListItem.Content>
                      <ListItem.Title>{cocktail.strDrink}</ListItem.Title>
                      <ListItem.Subtitle>{cocktail.strInstructions}</ListItem.Subtitle>
                    </ListItem.Content>
                  </ListItem>
                );
              })}
            </>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;
