import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from "redux-zero/react";
import {play,stop,next} from "./actions.js";

const App = ({playlist}) => {
  return (
    <div>
      <h1>Treetunes</h1>
      <ol >
        {
          playlist.map((song,index)=>{
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
      <button onClick={play}>Play</button>
      <button onClick={next}>Next</button>
      <button onClick={stop}>Stop</button>

    </div>
  );
}
const mapToProps = ({ playlist }) => ({ playlist });
export default connect(mapToProps)(App);
