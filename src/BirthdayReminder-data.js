let id = 0

const imageLink = "https://images.unsplash.com/photo-1614270532523-e1978d1f3716?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNTQ0ODMxNQ&ixlib=rb-1.2.1&q=85"

class Person {
  constructor(image, name, age) {
    this.image = image;
    this.name = name;
    this.age = age;
    this.id = id + 1

    id++;
  }
}

const BirthdayReminderData = [
  new Person(imageLink, "Bertie Yates", 29),
  new Person(imageLink, "Hester Hogan", 32),
  new Person(imageLink, "Larry Little", 36),
  new Person(imageLink, "Sean Walsh", 34),
  new Person(imageLink, "Lola Gardner", 29)
]


export default BirthdayReminderData

