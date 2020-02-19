import React, { Component } from 'react'


class SignUpForm extends Component {
    state = {
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: ''
    }

    registerNewUser = async (user) => {
        console.log('register hit', user)
        const response = await fetch(`{process.env.REACT_APP_API_URL}/api/v1/playlists/`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user),
        })
        console.log(response)
    }

    handleChange = (e) => {
        // destructure event target
        const {
            name,
            value
        } = e.target

        // update state
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e) => {
        // prevent page re-load
        e.preventDefault()

        // destructure state
        const {
            firstname,
            lastname,
            username,
            email,
            password
        } = this.state

        // create payload object
        const payload = {
            firstname: firstname,
            lastname: lastname,
            username: username,
            email: email,
            password: password
        }

        // register new user
        this.registerNewUser(payload)
    }

    render() {
        // destructure state
        const {
            firstname,
            lastname,
            username,
            email,
            password
        } = this.state
        
        return (
            <div className="container">
                <div className="row">
                    <form className="col s12" onSubmit={this.handleSubmit}>
                        <div className="row">
                            <div className="input-field col s6">
                                <input
                                    placeholder="First name"
                                    name="firstname"
                                    onChange={this.handleChange}
                                    type="text"
                                    value={firstname}
                                />
                            </div>
                            <div className="input-field col s6">
                                <input
                                    placeholder="Last name"
                                    name="lastname"
                                    onChange={this.handleChange}
                                    type="text"
                                    value={lastname}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input
                                    placeholder="Username"
                                    name="username"
                                    onChange={this.handleChange}
                                    type="text"
                                    value={username}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input
                                    placeholder="Email address"
                                    name="email"
                                    onChange={this.handleChange}
                                    type="email"
                                    value={email}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input
                                    placeholder="Password"
                                    name="password"
                                    onChange={this.handleChange}
                                    type="password"
                                    value={password}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col s12">
                                <button className="btn" type="submit">Sign Up</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default SignUpForm
