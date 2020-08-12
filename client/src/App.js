import React, {useEffect, useState} from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import Main from './components/Main/Main';
import ShowArtist from './components/Story/ShowArtist/ShowArtist';
import { getOneArtist, getAllArtists } from './services/artists';
import EditArtist from './components/Story/EditArtist/EditArtist';
import HandleSymptoms from './components/Story/CreateArtist/HandleSymptoms';
import { readAllSymptoms } from './services/symptoms';
import CreateArtist from './components/Story/CreateArtist/CreateArtist';

function App() {
  const [artist, setStories] = useState([])
  const [symptoms, displaySymptoms] = useState([])

  useEffect(() => {
    setArtists()
    getSymptoms()
  }, [])

  const setArtists = async () => {
    const data = await getAllArtists()
    setStories(data)
  }

  const getSymptoms = async () => {
    const data = await readAllSymptoms()
    displaySymptoms(data)
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
      <Route path='/artists/new' render={(props) => (
        <CreateArtist 
        {...props}
        artist = {artist}
        symptoms = {symptoms}
        />
      )}/>
      <Route exact path={`/artists/:id/symptoms`} render={() => (
        <HandleSymptoms 
        artist={artist}
        symptoms={symptoms}
        />
      )}/>
    </div>
  );
}

export default App;
