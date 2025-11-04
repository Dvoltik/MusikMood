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
      <form className='inputForm'method="post" onSubmit={handleForward}>
        <div id='top-row'>
          <div id='cover-wrapper'>
            <input type='file' accept='image/*, .pdf' id='input-cover' name='cover' placeholder='cover'/>
          </div>
          <div id='meta-inputs'>
            <p id=''>Add Ablum</p>
            <input type='text' id='input-name' name='name' placeholder='Name'/>
            <input type='text' id='input-artist' name='artist' placeholder='Artist'/>
            <input type='url' id='input-link' name='link' placeholder='AlbumLink'/>
          </div>
        </div>
          <button type='submit' id='submit-input'>Continue</button>     
      </form>
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
