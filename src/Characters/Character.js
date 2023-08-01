import React from 'react';
import './Character.css'
const Character = (props) => {
    let {id,name,status,species,gender,image} = props;
    return (
        <div className={`member`}>
            <h2>{id} {name}</h2>
            <p>{status} {gender} {species}</p>
            <img src={image} alt="{name}"/>
        </div>
    );
};

export default Character;
