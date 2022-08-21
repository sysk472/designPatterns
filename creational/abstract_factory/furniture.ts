class Bed {

}

class Chair {

}

class Wardrobe {

}

interface FurnitureFactory {
  createBed(): Bed;
  createChair(): Chair;
  createWardrobe(): Wardrobe;
}


class ModernFurnitureFactory implements FurnitureFactory {
  createBed(): Bed {
    return new Bed();
  }

  createChair(): Chair {
    return new Bed();
  }

  createWardrobe(): Wardrobe {
    return new Wardrobe();
  }
}

