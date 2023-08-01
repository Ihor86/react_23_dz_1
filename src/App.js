// import logo from './logo.svg';
import './App.css';
import Character from "./Characters/Character";
import './Characters/Homer.jpg'
import './Characters/Marge_Simpson.png'
import './Characters/Bart_simpson.png'
import './Characters/Liza.jpg'

function App() {
  return (
    <div className="App">
      <Character className="characterFotoApp" name={`Homer`} surname={`Simpson`} age={35} hobby={`lorem w hsdjh hvscjh shjcv hja jhv jhv`} photo={"https://upload.wikimedia.org/wikipedia/uk/0/02/Homer_Simpson_2006.png"}/>
      <Character className="characterFotoApp" name={`Marg`} surname={`Simpson`} age={34} hobby={`lorem w hsdjh v`} photo={'https://static.simpsonswiki.com/images/thumb/8/8d/Marge_mopping.png/200px-Marge_mopping.png'}/>
        <Character className="characterFotoApp" name={`Bart`} surname={`Simpson`} age={13} hobby={`lorem w hsh shjcv hja jhv jhv`} photo={"https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png"}/>
      <Character className="characterFotoApp" name={`Liza`} surname={`Simpson`} age={11} hobby={`lorem w hsdjh a jhv jhv`} photo={'https://teg.com.ua/wp-content/uploads/image_dfv1951.jpg'}/>

        <div>
        <img src={"./Characters/Bart_simpson.png"} alt=""/>

        </div>



    </div>
  );
}

export default App;
