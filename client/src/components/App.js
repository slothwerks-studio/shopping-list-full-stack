// Our convention will be that all of our projects start with an App component in App.js
// These top 2 lines bring in code from other files...
// React is the default export of the 'react' module. Component is another export.
import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShoppingCart from './ShoppingCart';
import AddNewItem from './AddNewItem';
import { addItem } from '../actions';

class App extends Component {

  render() {
    return (
      <div className="App">
        <ShoppingCart items={this.props.items} />
        <AddNewItem onSubmit={this.props.addItem} />
      </div>
    );
  }
}

function mapStateToProps(state) {
    return {
        items: state.items
    };
}

const mapActionsToProps = {
    addItem
};

export default connect(mapStateToProps, mapActionsToProps)(App);

/* Original add to cart code pre-Redux...

addToCart = (item) => {
  this.setState((prevState) => {
    const newItems = prevState.items.slice();
    newItems.push(item);

    return { items: newItems };
  });
};

// Original constructor for state pre-Redux...

constructor(props) {
  super(props);
  this.state = {
    items: [{ name: 'fake item', price: 42 }]
  }
}


*/