
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from './screens/Home'
import CreatePlaylist from './screens/CreatePlaylist'
import PlaylistDetail from './screens/PlaylistDetail'
import Tracks from './screens/Tracks'
import SignIn from './screens/SignIn'
import SignUp from './screens/SignUp'
import Account from './screens/Account'
import NoMatch from './screens/NoMatch'
import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'

import './styles/styles.css'

function App() {
  return (
	  <Router>
	  	<div id="app-content">
	  		<Navbar />
			<div id="router-content">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/playlists/create-playlist" component={CreatePlaylist} />
					<Route path="/playlists/:playlistName" component={PlaylistDetail} />
					<Route path="/tracks" component={Tracks} />
					<Route path="/sign-in" component={SignIn} />
					<Route path="/sign-up" component={SignUp} />
					<Route path="/account/:name" component={Account} />
					<Route component={NoMatch} />
				</Switch>
			</div>
			<Footer />
		</div>
	  </Router>
  	)
}

export default App

