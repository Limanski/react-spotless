import React from 'react'
// import { Card, Button } from 'semantic-ui-react'

// import CreatePlaylistForm from '../playlists/CreatePlaylistForm'
import PlaylistCard from './PlaylistCard'

function PlaylistList(props) {
    // console.log(props)
    const { playlists } = props
    const allLists = playlists && playlists.map((playlist) => {
    return (
        <PlaylistCard playlist={playlist} deletePlaylist={props.deletePlaylist}/>
    )})

    return (allLists)
}

export default PlaylistList