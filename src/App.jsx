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
    //AddMoods(album);
  }
  function addGenre(){
    const table = document.getElementById('genre-wrapper');

    var row = table.insertRow(0);
    const genre = prompt('Welches Genre möchtest du hinzufügen?');
    if (genre && genre.trim() !== '') {
      setGenres([...genres, genre.trim()]);
    }
    row.innerHTML = "test";
  }
  return (   
    <div className='addAlbum'>
      <form className='inputForm'method="post" onSubmit={handleForward}>
        <div id='top-row'>
          <input type='file' accept='image/*, .pdf' id='input-cover' name='cover' placeholder='cover'/>
          <div id='meta-inputs'>
            <p id=''>Add Ablum</p>
            <input type='text' id='input-name' name='name' placeholder='Name'/>
            <input type='text' id='input-artist' name='artist' placeholder='Artist'/>
            <input type='url' id='input-link' name='link' placeholder='AlbumLink'/>
            <button /*onClick={}*/className='buttons' >Search</button>
          </div>
        </div>
        
        <div id='mid-row'>
            <fieldset className='mid-row-wrapper'>
              <legend>Genres</legend>
              <table id='genre-wrapper' className='table-wrapper'>
                
              </table>
              
              <button onClick={addGenre} className='buttons'>+ Genre</button>
            </fieldset>
            <fieldset className='mid-row-wrapper'>
              <legend>Moods</legend>
            </fieldset>
          
        </div>
          <button type='submit'className='buttons' id='submit-input'>Continue</button>     
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
