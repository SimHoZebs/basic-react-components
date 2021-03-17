import React, { useState } from 'react'
import style from './css/birthdayReminder.module.css'
import bdayReminderData from './BirthdayReminder-data'

const BirthdayReminder = () => {
    const [people, setPeople] = useState(bdayReminderData);

    function clearAll() {
        setPeople((prev) => []);
    }

    return (
        <div className={style.container}>

            <main className={style.blockDisplay}>
                <header className={style.header}>
                    {people.length} birthdays today
            </header>
                {
                    people.map((person) => (
                        <div key={person.id} className={style.personBlock}>
                            <img src={`${person.image}`} alt="" className={style.personBlock__image} />
                            <span className={style.personBlock__text}>
                                <h3 className={style.personBlock__name}>{person.name}</h3>
                                <h5 className={style.personBlock__age}>{person.age} years</h5>
                            </span>
                        </div>
                    ))
                }

                <div className={style.btnContainer}>
                    < button className={style.button} onClick={clearAll}>
                        Clear All
                </button>
                </div >
            </main >
        </div>
    );
};

export default BirthdayReminder
