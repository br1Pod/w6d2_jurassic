const Park = function (name, price) {
    this.name = name
    this.price = price
    this.dinosaurs = []
}

Park.prototype.addDino = function (newDino) {
    this.dinosaurs.push(newDino);
}

Park.prototype.collectionSize = function () {
    return this.dinosaurs.length;
}

Park.prototype.removeDino = function (dinoOut) {
    this.dinosaurs.pop(dinoOut);
}

module.exports = Park;