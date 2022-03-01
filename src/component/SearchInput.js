import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { fatchSearchCocktails } from "../redux/features/cocktailSlice";
import "./search.css";

const SearchInput = () => {
  const searchValue = useRef();
  const dispatch = useDispatch();
  const handleChange = () => {
    const searchText = searchValue.current.value;
    dispatch(fatchSearchCocktails({ searchText }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Search Cocktail</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
            ref={searchValue}
          />
        </div>
      </form>
    </section>
  );
};

export default SearchInput;
