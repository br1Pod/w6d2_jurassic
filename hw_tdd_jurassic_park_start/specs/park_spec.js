const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dino1 = ('t-rex', 'carnivore', 80);
  let dino2 = ('diplodoculous', 'herbivore', 30);
  let dino3 = ('stegosaurus', 'herbivore', 45)

  
  beforeEach(function () {
    park = new Park('JS_sic Park', 25, [dino1, dino2, dino3]);

  })

  it('should have a name', function() {
    const actual = park.name
    assert.strictEqual(actual, 'JS_sic Park');
  });

  it('should have a ticket price', function() {
    const actual = park.price
    assert.strictEqual(actual, 25)
  });

  it('should have a collection of dinosaurs');

  it('should be able to add a dinosaur to its collection');

  it('should be able to remove a dinosaur from its collection');

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to calculate the total number of visitors per day');

  it('should be able to calculate the total number of visitors per year');

  it('should be able to calculate total revenue for one year');

});
