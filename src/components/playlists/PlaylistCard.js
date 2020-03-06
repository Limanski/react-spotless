import React, { Component } from 'react'
import { Card, Button } from 'semantic-ui-react'

class PlayListCard extends Component {
    render() {
    const { playlist } = this.props;
    return (
        <div>
            <Card key={playlist.id}>
                <Card.Content>
                    <Card.Header>{playlist.name}</Card.Header>
                    <Card.Description>Created by {playlist.created_by.username}</Card.Description>
                    <Card.Description>{playlist.tracks}</Card.Description>
                </Card.Content>
                <Card.Content buttons>
                    <Button >Edit Playlist</Button>
                    <Button onClick={(e) => this.props.deletePlaylist(e,playlist.id)}>Delete Playlist</Button>
                </Card.Content>
            </Card>
        </div>
    )}
}

// onClick={() => this.props.editPlaylist(playlist.id)}
export default PlayListCard