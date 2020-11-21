import { cocktailDBImages } from "../constants/urls";

export const getIngredientImg = (ingredient, size) => {
  const imagePath = cocktailDBImages + ingredient;
  const imageExt = ".png";

  switch (size) {
    case "small":
      return imagePath + "-small" + imageExt;
    case "medium":
      return imagePath + "-medium" + imageExt;
    default:
      return imagePath + imageExt;
  }
};
