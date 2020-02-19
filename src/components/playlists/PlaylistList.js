import React from 'react'
import { Card, Button } from 'semantic-ui-react'

import PlaylistCard from './PlaylistCard'

function PlaylistList(props) {
    console.log(props)
    const { playlist } = props

    const playlistList = playlists && playlists.map((playlist) => {
    return (
        <div>
            xxx
        </div>
    )}
}

export default PlaylistList
