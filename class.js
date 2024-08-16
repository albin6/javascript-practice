class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  display() {
    console.log(this.name + " " + this.age);
  }

  set getData([name, age]) {
    this.name = name;
    this.age = age;
  }

  get show() {
    console.log(this.name + " " + this.age);
  }

  setValues(name, age) {
    this.name = name;
    this.age = age;
  }
}

const usrOne = new Person("Ajith", 25);

usrOne.display();

usrOne.getData = ["John", 25];

usrOne.show;

usrOne.setValues("mary", 20)

usrOne.show;
