import React from "react";
/*radimo komponentu SearchBox - interactive: SearchBox mora komunicirati CardList-STATE u App.js-an object that describes your app-we are able to change it;za razliku od propsa*/
const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
