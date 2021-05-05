import { combineReducers } from 'redux';

const songsReducer = () => {
    return [
        { title: 'No Exit', duration: '3:55' },
        { title: 'Runner', duration: '3:36' },
        { title: 'How to Forgive', duration: '3:35' },
        { title: 'Fields of Blue', duration: '3:28' }
    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});