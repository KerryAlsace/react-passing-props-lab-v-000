import React from 'react';

import FruitBasket from './FruitBasket';

export default class App extends React.Component {
  constructor() {
    super()

    this.state = {
      filters: [],
      currentFilter: null,
      fruit: []
    }
  }

  componentDidMount() {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }));
    this.fetchFilters();
  }

  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  handleFilterChange = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ currentFilter: event.target.value });
  }

  render() {
    const fruit = !this.state.currentFilter || this.state.currentFilter === 'all'
      ? this.state.fruit
      : this.state.fruit.filter(i => i.fruit_type === this.state.currentFilter)

    return (
      <FruitBasket
        updateFilterCallback={this.handleFilterChange}
        filters={this.state.filters}
        currentFilter={this.state.currentFilter}
        fruit={fruit} />
    )
  }
}
