var React = require('react');
var JSE = require('jekyll-store-engine');

var AddToBasket = React.createClass({
  getInitialState: function() { return { quantity: 1 }; },
  add: function() {
    window.location = this.props.link;
  },
  render: function() {
    return (
      <form>
        <button type='button' onClick={this.add}>BUY</button>
      </form>
    );
  }
});

module.exports = AddToBasket;
