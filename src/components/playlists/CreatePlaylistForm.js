import React, { Component } from 'react'
import { Form, Button, Header } from 'semantic-ui-react'

class CreatePlaylistForm extends Component {
    state = {
        name: '',
        tracks: '',
        created_by: 1
    }

    handleChange = e => {
        this.setState({
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    clearForm = () => {
        this.setState({
            name: '',
            tracks: '',
            created_by: ''
        })
    }

    addPlaylist = async (e, newPlaylist) => {
        e.preventDefault();

        try {
            const createdPlaylistResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/playlists/`, {
                method: 'POST',
                body: JSON.stringify(newPlaylist),
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            });

            const parsedResponse = await createdPlaylistResponse.json();

            this.setState({
                playlists: [...this.state.palylists, parsedResponse.data]
            })

        } catch (err) {
            console.log('error: ', err)
        }
    }
        // this.props.history.push

    render() {
        return (
            <div>
                    <Header>Create a new Playlist</Header>
                        <Form size='large' onSubmit={(e) => this.addPlaylist(e, this.state)}>
                            <Form.Field>
                                <Form.Input type="text"
                                    name="name"
                                    placeholder="name"
                                    value={this.state.name}
                                    onChange={this.handleChange}/>
                                <Form.Input type="text"
                                    name="tracks"
                                    placeholder="tracks"
                                    value={this.state.tracks}
                                    onChange={this.handleChange}/>
                            </Form.Field>
                            <Button type='submit'>Submit</Button>
                        </Form>
            </div>
        )
    }
}

export default CreatePlaylistForm