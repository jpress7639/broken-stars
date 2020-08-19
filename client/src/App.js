import React, {useEffect, useState} from 'react';
import {Route} from 'react-router-dom'
import './App.css';
import Main from './components/Main/Main';
import ShowArtist from './components/Story/ShowArtist/ShowArtist';
import { getAllArtists } from './services/artists';
import EditArtist from './components/Story/EditArtist/EditArtist';
import HandleSymptoms from './components/Story/CreateArtist/Handle/HandleSymptoms';
import CreateArtist from './components/Story/CreateArtist/CreateArtist';
import HandleResources from './components/Story/CreateArtist/Handle/HandleResources';
import AddResource from './components/Story/CreateArtist/Handle/AddResource';
import Intro from './components/Main/Intro';

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
      <Intro /> 
      )}/>
      <Route exact path= '/home' render={() => (
        <Main />
      )}/>
        <Route exact path='/artists/new/create' render={(props) => (
        <CreateArtist 
        {...props}
        artist = {artist}
        />
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
      <Route exact path={`/artists/:id/symptoms`} render={(props) => (
        <HandleSymptoms 
        {...props}
        artist={artist}
        />
      )}/>
      <Route exact path={`/artists/:id/resources`} render={(props) => (
        <HandleResources
        {...props}
        artist={artist}
        />
      )}/>
      <Route exact path={`/artists/:id/resources/new`} render={(props) => (
        <AddResource 
        {...props}
        artist={artist}
        />
      )}/>
    </div>
  );
}

export default App;
