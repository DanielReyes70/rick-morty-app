import './App.css';
import Character from './components/Character';
import Player from './components/Player';
import Nav from './components/Nav';
import AddedList from './components/AddedList';
import {useState} from 'react';
import { firebase } from './firebase'
import { useFetch } from './hooks/useFetch';

const URL = 'https://rickandmortyapi.com/api/character/'
const DB = firebase.firestore();  

function App() {
  const [reload, setReload] = useState(false)
  const {data} = useFetch(URL)
  const addElementToList = async (picture, name) => {
    await DB.collection("characters").add({picture, name});
    await setReload(!reload)
  }

  return (
    <div className='animate__animated animate__fadeInLeft animate__delay-1s'>
      <Nav />
      <Player />
      <h3 className="text-3xl text-center m-8">This is the elements added list</h3>
      <AddedList reload={reload} setReload={setReload}/>
      <h4 className="text-3xl text-center m-8">Choose a character to add to the list</h4>
      {data.results &&       
      <ul className='p-8 flex justify-center flex-wrap'>
        {
          data.results.map(character => (
            <button onClick={() => {addElementToList(character.image, character.name)}}>
              <li>
                <Character picture={character.image} name={character.name} />
              </li>
            </button>
          ))
        }
      </ul>}   
    </div>
  );
}

export default App;
