import React, { useEffect, useState } from "react";
import { Button, Card, Col, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fatchCocktails } from "../redux/features/cocktailSlice";

const CocktailList = () => {
  const { cocktails, loading } = useSelector((state) => ({ ...state.app }));
  const [modifyCocktail, setModififyCocktail] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fatchCocktails());
  }, []);

  useEffect(() => {
    if (cocktails) {
      const newCocktails = cocktails.map((item) => {
        const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } =
          item;
        return {
          id: idDrink,
          name: strDrink,
          image: strDrinkThumb,
          info: strAlcoholic,
          glass: strGlass,
        };
      });

      setModififyCocktail(newCocktails);
    } else {
      setModififyCocktail([]);
    }
  }, [cocktails]);

  if (loading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  if (!cocktails) {
    return (
      <h2 className="text-center text-danger">
        No Coaktails Match your search Criteria
      </h2>
    );
  }

  return (
    <div className="container">
      <div className="row row-cols-md-3 row-cols-1">
        {modifyCocktail.map((item) => {
          const { id, name, image, info, glass } = item;
          return (
            <Col key={id} className="mb-4">
              <Card>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <Card.Title>{glass}</Card.Title>
                  <Card.Text>{info}</Card.Text>
                  <Link to={`/cocktail-details/${id}`}>
                    <Button variant="primary">Details</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </div>
    </div>
  );
};

export default CocktailList;
