import React from 'react';

const FilteredFruitList = (props) => (
  <ul className="fruit-list">
    {!props.filter || props.filter === 'all'
      ? props.fruit.map((item, index) => <li key={index}>{item.char}</li>)
      : (props.fruit.filter(i => i.fruit_type === props.filter)).map((item, index) => <li key={index}>{item.char}</li>)}
  </ul>
)

FilteredFruitList.defaultProps = {
  fruit: [],
  filter: 'all'
}

export default FilteredFruitList;
