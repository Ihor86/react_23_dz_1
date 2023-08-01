import React from 'react';
import './Character.css'
import './Homer.jpg'
const Character = (props) => {
    const {name, surname, age, hobby, photo} = props;
    return (
        <div className={`member`}>
            <h2>{name} {surname}</h2>
            <h4>{age}</h4>
            <h4>{hobby}</h4>
            <img src={photo} alt="`foto`"/>
        </div>
    );
};


export default Character;
