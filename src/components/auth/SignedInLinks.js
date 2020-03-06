import React from 'react'

function SignedInLinks() {
    return (
        <div>
            <li><a className="yellow-text" href="/account/:name">Account</a></li>
            <li><a className="yellow-text" href="/playlists">All Playlists</a></li>
        </div>
    )
}

export default SignedInLinks
