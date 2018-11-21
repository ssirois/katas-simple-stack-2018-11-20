let Stack = function() {
  let _items = [];

  this.isEmpty = function() {
    return _items.length === 0
  }

  this.pop = function() {
    return _items.pop();
  }

  this.push = function(item) {
    if (typeof(item) !== 'number') {
      throw new TypeError();
    }

    _items.push(item);
  }
};

module.exports = Stack;


