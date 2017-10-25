import createStore from 'redux-zero';
const songs = [
    {
        title:"Here Comes the Sun",
        artist:"The Beatles",
        duration:"2:54",
        isPlaying:false
    },
    {
        title:"Walking on Sunshine",
        artist:"Katrina and the Waves",
        duration:"3:43",
        isPlaying:false
    },
    {
        title:"Sunshine",
        artist:"Katrina",
        duration:"3:43",
        isPlaying:false
    }
]

const initialState = {
    playlist: songs,
    nowPlayingIndex: 0
};

const store = createStore(initialState);

export default store;
