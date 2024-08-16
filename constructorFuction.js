function Person(name, age) {
    this.name = name
    this.age = age

    this.display = () => {
        console.log(this.name, this.age)
    }
}

const user1 = new Person('john', 30)

const user2 = new Person('mary', 25)

console.log(user1.name)

user1.display()
user2.display()