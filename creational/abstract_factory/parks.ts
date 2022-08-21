class Tree {
  constructor(public type: string){}
}

class Bush {
  constructor(public type: string){}
}

class Grass {
  constructor(public type: string){}
}

class Stones {
  constructor(public type: string){}
}

interface ParkFactory {
  createTree(): Tree;
  createBush(): Bush;
  createGrass(): Grass;
  createStones(): Stones;
}

class JurassicPark implements ParkFactory {
  createTree(): Tree {
    return new Tree('Jurassic');
  }

  createBush(): Bush {
    return new Bush('Jurassic');
  }

  createStones(): Stones {
    return new Stones('Jurassic');
  }

  createGrass(): Grass {
    return new Grass('Jurassic');
  }
};


class DanielsPark implements ParkFactory {
  createTree(): Tree {
    return new Tree('Expensive');
  }

  createBush(): Bush {
    return new Bush('Expensive');
  }

  createGrass(): Grass {
    return new Grass('Expensive');
  }

  createStones(): Stones {
    return new Stones('Expensive');
  }
}

class Client {
  constructor(public factory: ParkFactory) {}

  someOperation() {
    this.factory.createTree();
  }
}