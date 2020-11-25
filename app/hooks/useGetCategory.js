import { useState, useEffect } from "react";
import { cocktailDBCategories } from "../constants/categories";
import { cocktailDBTest } from "../constants/urls";

export const useGetCategory = (categoryLetter) => {
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState("");

  async function getCategory() {
    try {
      if (!categoryLetter.match(/c|g|i|a/)) {
        return setError("No drinks found with that category");
      }
      setIsLoading(true);
      const endpoint = `${cocktailDBTest}/list.php?${categoryLetter}=list`;
      const response = await fetch(endpoint);
      const responseJson = await response.json();
      let categories;

      switch (categoryLetter) {
        case cocktailDBCategories.category:
          categories = responseJson.drinks.map((drink) => drink.strCategory);
          break;
        case cocktailDBCategories.glass:
          categories = responseJson.drinks.map((drink) => drink.strGlass);
          break;
        case cocktailDBCategories.alcohol:
          categories = responseJson.drinks.map((drink) => drink.strAlcoholic);
          break;
        case cocktailDBCategories.ingredient:
          categories = responseJson.drinks.map((drink) => drink.strIngredient1);
          break;
        default:
          categories = responseJson.drinks;
          break;
      }

      if (categories) {
        setIsLoading(false);
        setCategories(categories);
        setError("");
      } else {
        setIsLoading(false);
        setCategories([]);
        setError("No category found");
      }
    } catch (error) {
      console.error(error);
      setError("No category found!");
    }
  }

  return { isLoading, categories, getCategory, error };
};
