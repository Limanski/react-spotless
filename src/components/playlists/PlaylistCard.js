import React, { Component } from 'react'
import { Card, Button } from 'semantic-ui-react'
// import CreatePlaylistForm from './CreatePlaylistForm'


const { playlist } = props

class PlayListCard extends Component {
    // const playlistList = playlists && playlists.map((playlist) =>
    render() {
    return (
        <div>
            <Card key={playlist.id}>
                <Card.Content>
                    <Card.Header>{playlist.name}</Card.Header>
                    <Card.Description>Created by {playlist.username}</Card.Description>
                    <Card.Description>{playlist.tracks}</Card.Description>
                </Card.Content>
                <Card.Content buttons>
                    <Button onClick={() => props.editPlaylist(playlist.id)}>Edit Playlist</Button>
                    <Button onClick={() => props.deletePlaylist(playlist.id)}>Delete Playlist</Button>
                </Card.Content>
            </Card>
        </div>
    )}

    // return (
    //     <Card.Group centered>
    //     { playlists }
    //     </Card.Group>
    // )
}

export default PlayList