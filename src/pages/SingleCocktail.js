import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fatchSingleCocktails } from "../redux/features/cocktailSlice";

const SingleCocktail = () => {
  const { id } = useParams();
  const [modifyCocktail, setModifyCocktail] = useState([]);
  const { cocktail, loading } = useSelector((state) => ({ ...state.app }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fatchSingleCocktails({ id }));
  }, [id]);

  useEffect(() => {
    if (cocktail.length > 0) {
      const {
        strDrink: name,
        strDrinkThumb: image,
        strAlcoholic: info,
        strCategory: category,
        strGlass: glass,
        strInstructions: instructions,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      } = cocktail[0];
      const ingredients = [
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      ];
      console.log("ingredients", ingredients);
      const newCocktail = {
        name,
        image,
        info,
        category,
        glass,
        instructions,
        ingredients,
      };
      setModifyCocktail(newCocktail);
    } else {
      setModifyCocktail(null);
    }
  }, [cocktail, id]);

  if (!modifyCocktail) {
    return <h2 className="section-title">No Cocktail to Display</h2>;
  } else {
    const { name, image, category, info, glass, instructions, ingredients } =
      modifyCocktail;
    return (
      <>
        {loading ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          <section className="section cocktail-section">
            <Link to="/">
              <button className="btn btn-danger" style={{ marginTop: "2rem" }}>
                Go Back
              </button>
            </Link>
            <h2 className="section-title">{name}</h2>
            <div className="drink">
              <img src={image} alt={name} />
              <div className="drink-info">
                <p>
                  <span className="drink-data">Name: </span> {name}
                </p>
                <p>
                  <span className="drink-data">Category: </span> {category}
                </p>
                <p>
                  <span className="drink-data">Info: </span> {info}
                </p>
                <p>
                  <span className="drink-data">Glass: </span> {glass}
                </p>
                <p>
                  <span className="drink-data">Instructions: </span>{" "}
                  {instructions}
                </p>
                <p>
                  <span className="drink-data">Ingredients: </span>
                  {ingredients &&
                    ingredients.map((item, index) => {
                      return item ? <span key={index}>{item}</span> : null;
                    })}
                </p>
              </div>
            </div>
          </section>
        )}
      </>
    );
  }
};

export default SingleCocktail;
