import React from 'react'
import { Form, Button, Header } from 'semantic-ui-react';

function EditPlaylist(props) {
    return (
        <div>
        <Header>Edit Playlist</Header>
        <Form size='large' 
        onSubmit={props.updatePlaylist}>
            <Form.Field>
                <Form.Input
                    type="text"
                    name="name"
                    placeholder="Edit Playlist Name"
                    value={props.playlistToEdit.name}
                    onChange={props.handleEditChange}/>
                <Form.Input
                    type="text"
                    name="tracks"
                    placeholder="Edit Tracks"
                    value={props.playlistToEdit.tracks}
                    onChange={props.handleEditChange}/>
            </Form.Field>
            <Button type='submit'>Submit</Button>
        </Form>
        </div>
    )
}

export default EditPlaylist