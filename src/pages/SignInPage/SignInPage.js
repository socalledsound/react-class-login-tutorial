import React, { Component } from 'react'
import validateLogin from './validateLogin'
import TextField from '../../components/TextField/TextField'
import './SignInPage.css'
class SignInPage extends Component {
    state = { 
        username: '',
        email: '',
        password: '',
        errors: {},

     }


    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value })
     }

     handleSubmit = (e) => {
         const { setCurrentUser } = this.props
        const {username, email, password } = this.state
        e.preventDefault()
        const values = {username, email, password}
        console.log(values)
        const errors = validateLogin(values)
        console.log(errors)
        const noErrors = Object.keys(errors).length === 0
        if(noErrors){
            this.setState({
                username: '', 
                email: '', 
                password: '', 
                errors: {}
            })
            setCurrentUser(values)
        }else {
            console.error(errors)
            this.setState({values, errors})
        }
   
     }


    render() { 
        const { username, email, password, errors } = this.state
        return ( 
            <div className="sign-in-bg">
                <div className="form-container">
                    <form onSubmit={this.handleSubmit}>
                        <TextField 
                            value={username}
                            required
                            name='username'
                            onChange={this.handleChange}
                            error={errors.name}
                            placeholder='please enter a username'
                        />
                        <TextField 
                            value={email}
                            required
                            name='email'
                            onChange={this.handleChange}
                            error={errors.email}
                            placeholder='please enter an email'
                        />
                        <TextField 
                            value={password}
                            required
                            name='password'
                            onChange={this.handleChange}
                            error={errors.password}
                            placeholder='please enter a password'
                        />
                        <button className='submit-button' type='submit'>submit</button>
                    </form>
                </div>
            </div>
         );
    }
}
 
export default SignInPage;