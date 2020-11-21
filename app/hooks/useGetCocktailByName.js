import { useState } from "react";
import axios from "axios";
import { cocktailDBTest } from "../constants/urls";

export const useGetCocktailsByName = (name) => {
  const [isLoading, setIsLoading] = useState(false);
  const [cocktails, setCocktails] = useState([]);
  const [error, setError] = useState("");

  async function getCocktails() {
    try {
      setIsLoading(true);
      const path = `${cocktailDBTest}/search.php?s=${name}`;
      const response = await fetch(path);
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
      setError("No drinks found!");
    }
    // axios
    //   .get(path)
    //   .then(({ data: { drinks } }) => {
    //     setIsLoading(false);
    //     if (drinks) {
    //       setCocktails(drinks);
    //     } else {
    //       setCocktails([]);
    //       setError("No drinks founds");
    //     }
    //   })
    //   .catch((error) => {
    //     setError(error);
    //   });
  }

  return { isLoading, cocktails, getCocktails, error };
};
