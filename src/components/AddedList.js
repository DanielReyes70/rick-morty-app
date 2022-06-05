import { useEffect, useState } from 'react'
import { firebase } from '../firebase'
import Character from './Character';

const DB = firebase.firestore();  

function AddedList({reload, setReload}) {
  const [charactersArray, setCharactersArray] = useState([])
  const [updateName, setUpdateName] = useState("");

  useEffect(() => {
    const getCharactersList = async () => {
      const data = await DB.collection("characters").get();
      const arrayData = data.docs.map((item) => ({
        id: item.id,
        ...item.data(),
      }));
      console.warn('DATA FETCHED CHARACTERS LIST', arrayData)
      setCharactersArray(arrayData)
    }
    getCharactersList()
  }, [reload])

  const deleteElement = async (id) => {
    await DB.collection("characters").doc(id).delete();
    setReload(!reload)
  }

  const updateElement = async (character, id, newName) => {
    await DB.collection("characters").doc(id).update({
      picture: character.picture,
      name: newName,
    });
    setUpdateName('')
    setReload(!reload)
  }

  function handleChange(evt) {
    setUpdateName(evt.target.value);
  }



  return (
    <ul className='p-8 flex justify-center flex-wrap'>
      {
        charactersArray.map(character => (
          <li className='flex justify-center items-center flex-col m-12'>
            <Character picture={character.picture} name={character.name} /> 
            <form onSubmit={(event) => {
              event.preventDefault()
              updateElement(character, character.id, updateName)
            }}
            className='flex justify-center items-center flex-col'
            >
              <label className='flex justify-center items-center flex-col m-2'>
                Update character name:
                <input
                  type="text"
                  onChange={handleChange}
                  className='m-2 rounded-md p-2'
                />
              </label>
              <button className='m-2' type='submit'>update name</button>
              <button className='m-2' type='reset'>clear</button>
            </form>
            <button className='m-2' onClick={()=> deleteElement(character.id)}>Delete</button>
          </li>
        ))
      }
    </ul>        
  )
}

export default AddedList