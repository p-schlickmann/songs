import { combineReducers } from 'redux'


const songsReducer = () => {
    return [
        {title: 'Não se esqueca', duration: '2:30'},
        {title: 'Miadama', duration: '3:30'},
        {title: 'Porsche', duration: '5:20'},
    ]
}

const selectedSongReducer = (selectedSong=null, action) => {
    if (action.type === "SONG_SELECTED") {
        return action.payload
    }

    return selectedSong
}

export default combineReducers({
    songs:songsReducer,
    selectedSong: selectedSongReducer
})


