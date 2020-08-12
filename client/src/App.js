import React, {useEffect, useState} from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import Main from './components/Main/Main';
import ShowArtist from './components/Story/ShowArtist/ShowArtist';
import { getOneArtist, getAllArtists } from './services/artists';
import EditArtist from './components/Story/EditArtist/EditArtist';

function App() {
  const [artist, setStories] = useState([])

  useEffect(() => {
    setArtists()
  }, [])

  const setArtists = async () => {
    const data = await getAllArtists()
    setStories(data)
  }

  return (

    <div>
      <Route exact path= '/' render={() => (
      <Main /> 
      )}/>
      <Route exact path= '/artists/:id/' render={(props) => (
      <ShowArtist 
      {...props}
      artist={artist}
      />
      )}/>
      <Route exact path='/artists/:id/edit' render={(props) => (
        <EditArtist
        {...props} 
        artist={artist}
        />
      )}/>
    </div>
  );
}

export default App;
