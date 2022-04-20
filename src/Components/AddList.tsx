import React, { useState } from 'react';
import { IState as Props } from '../App';
interface Dad {
    setUser: React.Dispatch<React.SetStateAction<Props['people']>>
}
const AddList: React.FC<Dad> = ({ setUser }) => {
    const [single, setSingle] = useState({
        name: '',
        age: 0,
        about: '',
        img: ''
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        console.log(e.target.name);
        setSingle({
            ...single,
            [e.target.name]: e.target.value,
        })

    }
    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setUser(before => [...before, single])
    }
    return (
        <div
            className="AddToList"
        >
            <input type="text" className="AddToList-input" name='name' value={single.name} onChange={handleChange} placeholder='name' />
            <input className="AddToList-input" type="number" name='age' value={single.age} onChange={handleChange} placeholder='number' />
            <input className="AddToList-input" type="text" name='about' value={single.about} onChange={handleChange} placeholder='about' />
            <input className="AddToList-input" type="text" name='img' value={single.img} onChange={handleChange} placeholder='img' />
            <button className="AddToList-btn" onClick={handleClick}>Add user</button>

        </div>
    );
};

export default AddList;