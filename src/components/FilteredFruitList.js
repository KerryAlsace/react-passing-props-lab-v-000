import React from 'react';

const FilteredFruitList = (props) => (
  <ul className="fruit-list">
    {props.fruits.map((item, index) => <li key={index}>{item.char}</li>)}
  </ul>
)

export default FilteredFruitList;
