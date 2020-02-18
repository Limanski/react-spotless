import React from 'react'
const SamsApt = require('../images/SamsApt.jpg')

function NoMatch() {
    return (
        <div>
            <div className="row">
            <div className="center-align"><span className="flow-text, red-text"><h2>Error 404:</h2></span></div>
            <div className="center-align"><span className="flow-text, red-text"><h2>You've found my apartment.</h2></span></div>
            <div className="center-align"><img src={SamsApt} alt="Sams Apt" height="500" width="500"/></div>
            </div>
        </div>
    );
}

export default NoMatch
