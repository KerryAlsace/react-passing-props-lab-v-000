import React from 'react';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = (props) => (
  <div className="fruit-basket">
    <Filter
      handleChange={props.updateFilterCallback}
      filters={props.filters} />
    <FilteredFruitList
      fruits={props.fruit}
      filter={props.currentFilter} />
  </div>
)

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: 'all',
  updateFilterCallback: () => { }
}

export default FruitBasket;
