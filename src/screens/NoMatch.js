import React from 'react'
const SamsApt = require('../images/SamsApt.jpg')

function NoMatch() {
    return (
        <div>
            <div className="row">
            <div className="center-align"><span className="flow-text, red-text">Error 404: You've found my apartment.</span></div>
            <div className="center-align"><img src={SamsApt} alt="Sams Apt" height="300" width="300"/></div>
            </div>
        </div>
    );
}

export default NoMatch
