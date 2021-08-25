const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dino1 = new Dinosaur ('t-rex', 'carnivore', 80);
  let dino2 = new Dinosaur ('diplodoculous', 'herbivore', 30);
  let dino3 = new Dinosaur ('stegosaurus', 'herbivore', 45)
  let dinoList = [dino1, dino2, dino3]
  
  beforeEach(function () {
    park = new Park('JS_sic Park', 25, dinoList);

  })

  it('should have a name', function() {
    const actual = park.name
    assert.strictEqual(actual, 'JS_sic Park');
  });

  it('should have a ticket price', function() {
    const actual = park.price
    assert.strictEqual(actual, 25)
  });

  describe('dinosaurs', function (){

    it('should have a collection of dinosaurs', function() {
    const actual = park.dinosaurs
    assert.deepStrictEqual(actual, [])
    });

    it('should be able to add a dinosaur to its collection', function(){
      park.addDino('raptor', 'carnivore', 60);
      const actual = park.collectionSize();
      assert.strictEqual(actual, 1)
    });

    it('should be able to remove a dinosaur from its collection', function () {
      park.removeDino('raptor', 'carnivore', 60);
      const actual = park.collectionSize();
      assert.deepStrictEqual(actual, 0)
    });

    it('should be able to find the dinosaur that attracts the most visitors', function () {
      let dino1 = new Dinosaur('triceratops', 'herbivore', 55);
      let dino2 = new Dinosaur('brontosaurus', 'herbivore', 50);
      let dino3 = new Dinosaur('pteranodon', 'carnivore', 60);
      park.addDino(dino1)
      park.addDino(dino2)
      park.addDino(dino3)

      const actual = park.starAttraction()
      assert.strictEqual(actual, dino3)
    });

    it('should be able to find all dinosaurs of a particular species', function () {
      let dino1 = new Dinosaur('triceratops', 'herbivore', 55);
      let dino2 = new Dinosaur('brontosaurus', 'herbivore', 50);
      let dino3 = new Dinosaur('pteranodon', 'carnivore', 60);
      let dino4 = new Dinosaur('pteranodon', 'carnivore', 35);
      let dino5 = new Dinosaur('pteranodon', 'carnivore', 42);
      park.addDino(dino1)
      park.addDino(dino2)
      park.addDino(dino3)
      park.addDino(dino4)
      park.addDino(dino5)

      const actual = park.countSpecies('pteranodon')
      assert.deepStrictEqual(actual, [dino3, dino4, dino5])
    });

    it('should be able to calculate the total number of visitors per day', function () {
      
    });

    it('should be able to calculate the total number of visitors per year');

    it('should be able to calculate total revenue for one year');
  })
});
