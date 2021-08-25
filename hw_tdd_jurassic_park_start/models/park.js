const Park = function (name, price) {
    this.name = name
    this.price = price
    this.dinosaurs = []
}

Park.prototype.collectionSize = function () {
    return this.dinosaurs.length;
}

Park.prototype.addDino = function (newDino) {
    this.dinosaurs.push(newDino);
}

Park.prototype.removeDino = function (dinoOut) {
    this.dinosaurs.pop(dinoOut);
}

Park.prototype.starAttraction = function () {
    let starDino = this.dinosaurs[0];
    for (dino of this.dinosaurs) {
        if (dino.guestsAttractedPerDay > starDino.guestsAttractedPerDay) {
            starDino = dino
        }
    }
    return starDino
}

Park.prototype.countSpecies = function (species) {
    let newList = [] 
    for (dino of this.dinosaurs) {
        if (dino.species === species) {
            newList.push(dino)
        }
    }
    return newList
}




module.exports = Park;

