import React from 'react'
import SignedInLinks from '../auth/SignedInLinks'
const TrebleBass = require('../../images/TrebleBass.png')

function Navbar() {
    return (
        <nav className="purple">
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <div className="nav-wrapper">
                            <a href="/" className="brand-logo right yellow-text"><img id="nav" src={TrebleBass} alt="Spot-less App" width='40' height='40' /> Spot-less App</a>
                            <ul id="nav-mobile" className="left hide-on-med-and-down">
                                <SignedInLinks />
                            </ul>
                            {/* { <ul id="nav-mobile" className="left hide-on-med-and-down"> 
                            <SignedOutLinks />
                            </ul> } */}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
