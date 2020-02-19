import React from 'react'
import CreatePlaylistForm from '../components/playlists/CreatePlaylistForm'

function CreatePlaylist(props) {
    return (
        <div>
        CreatePlaylist
        <CreatePlaylistForm {...props}/>
        </div>
    )
}

export default CreatePlaylist
