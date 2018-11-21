const assert = require('assert');
const expect = require('chai').expect;

const Stack = require('../Stack.js');

describe('Stack', () => {
  let myStack;

  beforeEach(() => {
    myStack = new Stack();
  });

  it('should be a first in last out structure', () => {
    myStack.push(1);
    myStack.push(2);
    myStack.push(3);

    expect(myStack.pop()).to.equal(3);
    expect(myStack.pop()).to.equal(2);
    expect(myStack.pop()).to.equal(1);

    expect(myStack.pop()).to.be.undefined;
  });

  describe('#empty()', () => {
    it('should be true at instance creation', () => {
      expect(myStack.isEmpty()).to.be.true;
    });

    it('should be true when popping the last item', () => {
      myStack.push(1);
      myStack.pop();
      expect(myStack.isEmpty()).to.be.true;
    });

    it('should be false when stack has one item', () => {
      myStack.push(42);
      expect(myStack.isEmpty()).to.be.false;
    });

    it('should be false when stack has multiple items', () => {
      myStack.push(1);
      myStack.push(2);
      expect(myStack.isEmpty()).to.be.false;
    });
  });

  describe('#pop()', () => {
    it('should return undefined when the stack is empty', () => {
      expect(myStack.pop()).to.be.undefined;
    });

    it('should return the only item contained by the stack', () => {
      const expected = 12;
      myStack.push(expected);

      expect(myStack.pop()).to.equal(expected);
    });
  });

  describe('#push()', () => {
    it('should throw a TypeError exception when it is called with anything else than a number', () => {
      expect(myStack.push.bind(myStack, [])).to.throw(TypeError);
      expect(myStack.push.bind(myStack, 'a string')).to.throw(TypeError);
    });
  });
});

