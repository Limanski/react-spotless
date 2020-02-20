import React from 'react'
import CreatePlaylistForm from '../components/playlists/CreatePlaylistForm'

function CreatePlaylist(props) {
    return (
        <div>
        <CreatePlaylistForm {...props}/>
        </div>
    )
}

export default CreatePlaylist
