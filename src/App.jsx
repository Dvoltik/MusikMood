import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function AddAlbum(){
  function handleForward(a){
    a.preventDefault();

    const form = a.target;
    const formData = new FormData(form);

    const album = Object.fromEntries(formData.entries());
    AddMoods(album);
  }
  return (   
    <div className='addAlbum'>
      <form method="post" onSubmit={handleForward}>
        <label htmlFor='link-input'>
          <input id='input' name='name' placeholder='Name'/>
          <input id='input' name='artist' placeholder='Artist'/>
          <input id='input' name='Link' placeholder='AlbumLink'/>
          <button type='submit'>Continue</button>
        </label>
      </form>
    </div>
  )
} 

function AddMoods(album){
  const name = album.name;
  return (
    <div className='addMoods'>
      <p>{album.name}</p>
    </div>
  )
}

function App() {
  return (
    <>
      <AddAlbum/>
    </>
  )
}

export default App
