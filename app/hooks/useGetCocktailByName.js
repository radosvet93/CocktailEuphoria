import { useState } from "react";
import { cocktailDBTest } from "../constants/urls";

export const useGetCocktailsByName = (name) => {
  const [isLoading, setIsLoading] = useState(false);
  const [cocktails, setCocktails] = useState([]);
  const [error, setError] = useState("");

  async function getCocktails() {
    try {
      setIsLoading(true);
      const endpoint = `${cocktailDBTest}/search.php?s=${name}`;
      const response = await fetch(endpoint);
      const responseJson = await response.json();

      console.log("response", responseJson);

      if (responseJson.drinks) {
        setIsLoading(false);
        setCocktails(responseJson.drinks);
        setError("");
      } else {
        setIsLoading(false);
        setCocktails([]);
        setError(`No drinks found with the name '${name}'`);
      }
    } catch (error) {
      console.error(error);
      setError("No drinks found!");
    }
  }

  return { isLoading, cocktails, getCocktails, error };
};
