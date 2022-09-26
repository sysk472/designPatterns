interface Status {
  title: string;
  income: number;

  add(department: Department): void;
  remove(department: Department): void;

  notify(): void;
}

interface Department {
  update(status: Status): void;
}

class Employee {
  firstName: string;
  lastName: string;
  status: Status;

  constructor(firstName: string, lastName: string, status: Status) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.status = status;
  }

  getFullName(): string {
    return this.firstName + " " + this.lastName;
  }
}

class Position implements Status {
  departments: Department[] = [];
  title: string;
  income: number;

  constructor(title: string, income: number) {
    title = title;
    income = income || 0;
  }

  setPostion(title: string, income: number) {
    this.title = title;
    this.income = income;
    this.notify();
  }

  add(position: Department): void {
    const isExists = this.departments.includes(position);
    if (isExists) { console.log("Already exists"); }

    this.departments.push(position);
  }

  remove(position: Department): void {
    const indexOf = this.departments.indexOf(position);
    if (indexOf !== -1) {
        console.log("Does not exist");
    }

    this.departments.splice(indexOf, 1);
  }

  notify() {
    for(let department of this.departments) {
      department.update(this)
    }
  }
}




class HeadDepartment implements Department {
  update(status: Status) {
    console.log("Employee status updated", status);
  }
}

class FinanceDepartment implements Department {
  update(status: Status) {
    console.log("Employee status updated", status);
  }
}

class ManagerDepartment implements Department {
  update(status: Status) {
    console.log("Employee status updated", status);
  }
}

const position = new Position('Software Developer', 100);
const Emy = new Employee("Emy", "Paladine", position);

position.add(new HeadDepartment());
position.add(new FinanceDepartment());
position.add(new ManagerDepartment());

position.setPostion("Senior Software Developer", 1000);




