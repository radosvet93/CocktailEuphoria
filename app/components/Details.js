import React from "react";
import { Text, Card, ListItem } from "react-native-elements";
import { View } from "react-native";

const Details = ({ route }) => {
  console.log("cocktail", route.params);
  const detail = route.params.cocktail;

  return (
    <>
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
      </Card>
      {/* <View>
        <Text h3>{detail.strDrink}</Text>
        <Image source={{ uri: detail.strDrinkThumb }} />
      </View> */}
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

export default Details;
