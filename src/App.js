import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import songs from './store.js';

class App extends Component {
  render() {
    return (
      <div>
        <h1>Treetunes</h1>
        <ol id="playlist">
          {
            songs.map((song,index)=>{
              return(
                <li key={index} className={song.isPlaying ? "current" : ''}>
                {song.title}-{song.artist}
                <span className="duration">
                  {song.duration}
                </span></li>
              );
            })
          }
        </ol>
        <button id="play">Play</button>
        <button id="next">Next</button>
        <button id="stop">Stop</button>

      </div>
    );
  }
}

export default App;
