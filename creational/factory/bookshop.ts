abstract class BookShop {
  public abstract createBook(): Book;

  public someOperation(): string {
    const book = this.createBook();
    book.buy();

    return "This is the factory"
  }
}

class ITBookCreator extends BookShop {
  public createBook(): Book {
    return new ITBook();
  }
}

class AdventureBookCreator extends BookShop {
  public createBook(): Book {
    return new AdventureBook();
  }
}

interface Book {
  buy(): string;
}

class ITBook implements Book {
  public buy(): string {
    return "ITBook";
  }
}

class AdventureBook implements Book {
  public buy(): string {
    return "AdventureBook";
  }
}

