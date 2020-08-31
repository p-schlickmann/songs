import React from 'react'
import {connect} from 'react-redux' 


const SongDetail = ({selectedSong}) => {
    if (!selectedSong) {
        return <div></div>
    }
    return (
        <div>
            {selectedSong.title}
            {selectedSong.duration}
        </div>
    )
}

const mapStateToProps = state => {
    return {selectedSong: state.selectedSong} 
}

export default connect(mapStateToProps)(SongDetail)