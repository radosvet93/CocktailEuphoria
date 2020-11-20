import React, { useState, useRef, useEffect } from "react";
import { Text, Button, ListItem, Avatar, Input } from "react-native-elements";
import { View, ScrollView, SafeAreaView } from "react-native";
import { useGetCocktailsByName } from "../services/useGetCocktailByName";

const Search = ({ styles, navigation }) => {
  const [cocktail, setCocktail] = useState("");
  const { isLoading, cocktails, getCocktails, error } = useGetCocktailsByName(cocktail);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <View>
        <Text h3>Search for cocktails</Text>
        <Input placeholder="Search for cocktail" onChangeText={(value) => setCocktail(value)} value={cocktail} ref={inputRef} />
      </View>
      <View style={styles}>
        <Button
          loading={isLoading}
          onPress={() => {
            getCocktails();
            setCocktail("");
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
    </>
  );
};

export default Search;
