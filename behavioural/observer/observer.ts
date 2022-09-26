interface Employee {
  add(observer: Observer): void;
  remove(observer: Observer): void;

  notify(): void;
}

interface Observer {
  update(employee: Employee): void;
}

class HRDepartment implements Observer {
  update(employee: Employee) {
    console.log(`Got promoted, change wage and title of this employee ${employee}`);
  }
}

class HarryEmployee implements Employee {
  private name: string;
  private observers:  Observer[] = []

  add(observer: Observer) {
    const isExists = this.observers.includes(observer);
    if (isExists) {
      console.log("Observer already exists");
    }

    this.observers.push(observer);
  }

  remove(observer: Observer) {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex == -1) {
      return console.log("Nonexistent observer");
    }

    this.observers.splice(observerIndex, 1);
  }

  notify(): void {
    for(const observer of this.observers) {
      observer.update(this);
    }
  }

  getName(): string {
    return this.name;
  }

}