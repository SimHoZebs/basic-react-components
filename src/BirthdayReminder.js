import React, { useState } from 'react'
import birthdayReminder from './css/birthdayReminder.module.css'

const BirthdayReminder = () => {
    const imageLink = "https://images.unsplash.com/photo-1614270532523-e1978d1f3716?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYxNTQ0ODMxNQ&ixlib=rb-1.2.1&q=85"

    let id = 0

    class Person {
        constructor(image, name, age) {
            this.image = image;
            this.name = name;
            this.age = age;
            this.id = id + 1

            id++;
        }
    }

    const [people, setPeople] = useState([
        new Person(imageLink, "Bertie Yates", 29),
        new Person(imageLink, "Hester Hogan", 32),
        new Person(imageLink, "Larry Little", 36),
        new Person(imageLink, "Sean Walsh", 34),
        new Person(imageLink, "Lola Gardner", 29)
    ]);

    console.log(people);

    function clearAll() {
        setPeople((prev) => []);
    }

    return (
        <main className={birthdayReminder.blockDisplay}>
            <header className={birthdayReminder.header}>
                {people.length} birthdays today
            </header>
            {
                people.map((person) => (
                    <div key={person.id} className={birthdayReminder.personBlock}>
                        <img src={`${person.image}`} alt="" className={birthdayReminder.personBlock__image} />
                        <span className={birthdayReminder.personBlock__text}>
                            <h3 className={birthdayReminder.personBlock__name}>{person.name}</h3>
                            <h5 className={birthdayReminder.personBlock__age}>{person.age} years</h5>
                        </span>
                    </div>
                ))
            }

            <div className={birthdayReminder.btnContainer}>
                < button className={birthdayReminder.button} onClick={clearAll}>
                    Clear All
                </button>
            </div >
        </main >
    );
};

export default BirthdayReminder
