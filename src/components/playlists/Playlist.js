import React, { Component } from 'react'
import PlaylistList from './PlaylistList'


class Playlist extends Component {
    state = {
        lists: []
    }

    deletePlaylist = async (e, id) => {
        console.log('hitting delete playlist from child')
        const deletePlaylistResponse = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/playlists/${id}`, {
            method: 'DELETE',
            credentials: 'include'
        });

        const deletePlaylistParsed = await deletePlaylistResponse.json();
        // Now that the db has deleted our item, we need to remove it from state using .filter()
        this.setState({
            lists: this.state.lists.filter((playlist) => playlist.id !== id)
        })
    }

    componentDidMount(){
        this.getPlaylists();
    }

    getPlaylists = async () => {
        try {
            const lists = await fetch(`${process.env.REACT_APP_API_URL}/api/v1/playlists/`, { credentials: 'include' });
            const parsedLists = await lists.json();
            console.log(parsedLists)
            this.setState({
                lists: parsedLists.data
            },()=>{
                console.log(this.state.lists)
            })
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        return (
            <div>
                <PlaylistList playlists={this.state.lists} deletePlaylist={this.deletePlaylist}/>
            </div>
        )
    }   
}

export default Playlist
