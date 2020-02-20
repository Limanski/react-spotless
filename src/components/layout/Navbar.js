import React from 'react'
const TrebleBass = require('./images/TrebleBass.png')

function Navbar() {
    return (
        <nav>
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <div className="nav-wrapper">
                            <a href="/" class="brand-logo right"><img src={TrebleBass} alt="Spot-less App" width='40' height='40' /> Spot-less App</a>
                            <ul id="nav-mobile" class="left hide-on-med-and-down">
                                {/* <li><a href="sass.html">Sass</a></li>
                                <li><a href="badges.html">Components</a></li>
                                <li><a href="collapsible.html">JavaScript</a></li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
