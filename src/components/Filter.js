import React from 'react';

function Filter(props) {
  return (
    <select onChange={props.onCategoryChange}>
      <option value="all">All Items</option>
      <option value="fruit">Fruits</option>
      <option value="vegetable">Vegetables</option>
    </select>
  );
}

export default Filter;