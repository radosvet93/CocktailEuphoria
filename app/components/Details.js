import React, { useCallback, useState } from "react";
import { Text, Card, ListItem, Avatar, Button } from "react-native-elements";
import { View, SafeAreaView, ScrollView } from "react-native";
import { getIngredientImg } from "../helpers/getIngredientImg";
import YoutubePlayer from "react-native-youtube-iframe";
import { StyleSheet } from "react-native";

const Details = ({ route }) => {
  const [playing, setPlaying] = useState(false);
  console.log("cocktail", route.params);
  const detail = route.params.cocktail;

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
    }
  }, []);

  return (
    <>
      <SafeAreaView>
        <ScrollView style={styles}>
          <Card>
            <Card.Title>{detail.strDrink}</Card.Title>
            <Card.Image source={{ uri: detail.strDrinkThumb }} />
            <ListItem bottomDivider>
              <ListItem.Content>
                <ListItem.Title>Glass: {detail.strGlass}</ListItem.Title>
                <ListItem.Subtitle>{detail.strInstructions}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
            <ListItem bottomDivider>
              <Avatar size="xlarge" source={{ uri: getIngredientImg(detail.strIngredient1, "medium") }} containerStyle={{ border: "1px solid black" }} />
              <ListItem.Content>
                <ListItem.Title>{detail.strIngredient1}</ListItem.Title>
                <ListItem.Subtitle>{detail.strMeasure1}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
            <ListItem bottomDivider>
              <ListItem.Content>
                <ListItem.Title>{detail.strIngredient2}</ListItem.Title>
                <ListItem.Subtitle>{detail.strMeasure2}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
            <ListItem>
              <ListItem.Content>
                <ListItem.Title>{detail.strIngredient3}</ListItem.Title>
                <ListItem.Subtitle>{detail.strMeasure3}</ListItem.Subtitle>
              </ListItem.Content>
            </ListItem>
            <Text>{detail.strVideo}</Text>
            <View>
              <YoutubePlayer style={{ flex: 1 }} height={200} play={playing} videoId={"ApMR3IWYZHI"} onChangeState={onStateChange} />
            </View>
          </Card>

          {/* <View>
        <Text h3>{detail.strDrink}</Text>
        <Image source={{ uri: detail.strDrinkThumb }} />
      </View> */}
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});

// I was able to get WebView in react native apps to work with unavailable videos by loading the source via html and adding the baseUrl property. ( Note that originWhiteList needs to be set to ['*'] per WebView docs)
// <code><WebView
// originWhitelist={['*']}

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

export default Details;
