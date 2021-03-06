import React from 'react';
interface IProps {
    people: {
        name: string
        age: number
        about: string
        img: string
    }[]
}
const List: React.FC<IProps> = ({ people }) => {
    return (
        <ul>
            {
                people.map(person => <li className="List">
                    <div className="List-header">
                        <img className="List-img" alt='' src={person.img} />
                        <h2>{person.name}</h2>
                    </div>
                    <p>{person.age} years old</p>
                    <p className="List-note">{person.about}</p>
                </li>)
            }
        </ul>
    );
};

export default List;