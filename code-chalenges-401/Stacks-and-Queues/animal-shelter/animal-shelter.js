'use strict'
const Queue = require('../lib/queues')

class AnimalShelter {
    constructor() {
        this.cats = new Queue
        this.dogs = new Queue
    }

    enqueue(animal) {
        if (animal.type === 'dog') {
            this.dogs.enqueue(animal);
            return this.dogs;
        } else if (animal.type === 'cat') {
            this.cats.enqueue(animal);
            return this.cats;
        } else {
            return 'we just accepte dogs and cats';
        }
    }

    dequeue(pref) {
        if (pref === 'dog') {
            this.dogs.dequeue();
        } else if (pref === 'cat') {
            this.cats.dequeue();
        } else {
            return null;
        }
    }



}

module.exports = AnimalShelter