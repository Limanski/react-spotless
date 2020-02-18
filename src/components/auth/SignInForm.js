import React, { Component } from 'react'

class SignInForm extends Component {
    state = {
        email: '',
        password: ''
    }

    signIn = async (payload) => {
        // const response = await fetch('http://localhost:8000/api/v1/users/login')
        // console.log(response)


        console.log(payload)

        const response = await fetch('http://localhost:8000/api/v1/users/login', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        console.log(response)
        const parsedLoginResponse = await response.json()

        if (parsedLoginResponse.status.code === 200) {
            this.props.history.push('/')
        } else {
            console.log('Login Failed: ', parsedLoginResponse)
        }
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
            email,
            password
        } = this.state

        // create payload object
        const payload = {
            email: email,
            password: password
        }

        // register new user
        this.signIn(payload)
    }

    render() {
        // destructure state
        const {
            email,
            password
        } = this.state
        
        return (
            <div className="container">
                <div className="row">
                    <form className="col s12" onSubmit={this.handleSubmit}>
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
                                <button className="btn" type="submit">Sign In</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default SignInForm
