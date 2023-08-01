import React from 'react';
import Character from "./Characters/Character";

const App = () => {
    return (
        <div>
            <Character id={1} name={"Rick Sanchez"} status={"Alive"} species={"Human"} gender={"Male"} image={"https://rickandmortyapi.com/api/character/avatar/1.jpeg"}/>
            <Character id={2} name={"Morty Smith"} status={"Alive"} species={"Human"} gender={"Male"} image={"https://rickandmortyapi.com/api/character/avatar/2.jpeg"}/>
            <Character id={3} name={"Summer Smith"} status={"Alive"} species={"Human"} gender={"Female"} image={"https://rickandmortyapi.com/api/character/avatar/3.jpeg"}/>

        </div>
    );
};

export default App;
