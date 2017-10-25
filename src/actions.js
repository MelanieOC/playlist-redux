import store from './store';
export const play = ()=>{
    let playlist = [...store.getState().playlist];
    let index = store.getState().nowPlayingIndex;
    playlist[index].isPlaying=true;
    store.setState({
        playlist:playlist
    })
}
export const stop = ()=>{
    let playlist = [...store.getState().playlist];
    let index = store.getState().nowPlayingIndex;
    playlist[index].isPlaying=false;
    store.setState({
        playlist:playlist
    })
}

export const next = ()=>{
    stop();
    let index = store.getState().nowPlayingIndex;
    let playlist = [...store.getState().playlist];    
    index++;
    if(index===playlist.length){
        index=0;
    }
    store.setState({
        nowPlayingIndex:index
    })
    play();
}