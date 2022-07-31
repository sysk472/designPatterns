abstract class CarDealer {
  public abstract getCar(): Car;

  public getDealerOffer(): string {
    const car = this.getCar();

    car.displayOffer();
    return "Yay it it factoryMethod"
  }
}

class JaguarDealer extends CarDealer {
  public getCar() {
    return new Jaguar();
  }
}

class ToyotaDealer extends CarDealer {
  public getCar() {
    return new Toyota();
  }
}

interface Car {
  displayOffer(): string;
}

class Jaguar implements Car {
  displayOffer(): string {
    return "This is Jaguar. Cost 200k $"
  }
}

class Toyota implements Car {
  displayOffer(): string {
    return "This is Toyota. Cost 30k $"
  }
}
