abstract class Creator {
  public abstract factoryMethod(): Product;

  public someOperation(): string {
    const product = this.factoryMethod();

    return `Creator: The same creator's code has just worked with ${product.operation}`
  }
}

class ConcreteCreator1 extends Creator {
  public factoryMethod(): Product {
    return new Product1();
  }
}

class ConcreteCreator2 extends Creator {
  public factoryMethod(): Product {
    return new Product2();
  }
}


interface Product {
  operation(): string;
}

class Product1 implements Product {
  public operation(): string {
    return "I am the product 1"
  }
}

class Product2 implements Product {
  public operation(): string {
    return "I am the product 2"
  }
}

