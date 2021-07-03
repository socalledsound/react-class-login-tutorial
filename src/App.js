import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Header/Header'
import HomePage from './pages/HomePage/HomePage'
import SignInPage from './pages/SignInPage/SignInPage'
import { setUserInfo} from './redux/actions'
class App extends Component {
   
    state = {
        currentUser : null,
        userInfo : null,
    }
   


    setCurrentUser = ({username, email, password}) => {
        const { setUserInfo } = this.props
            // this.setState({ currentUser : username, userInfo: {username, email, password}})
            // setCurrentUser(username)
            setUserInfo({username, email, password})
    }  

    render(){
        // const { currentUser, userInfo } = this.state;
        const { currentUser, userInfo } = this.props
        console.log(currentUser);
        return ( 
            <div>
                <Header currentUser={currentUser} />
                <Switch>
                    <Route exact path='/' render={() => <HomePage currentUser={currentUser} userInfo={userInfo}/>} />
                    <Route 
                        exact path='/login'
                        render={() => currentUser ? (
                            <Redirect to='/' />
                        ) : (
                            <SignInPage setCurrentUser={this.setCurrentUser}/>
                        )}
                    />
                </Switch>
            </div>
            );
    }

}


const mapStateToProps = (state) => ({
    currentUser: state.currentUser,
    userInfo: state.userInfo
})

const mapDispatchToProps = (dispatch) => ({
    setUserInfo: (values) => dispatch(setUserInfo(values))
})

// const mapDispathToProps = {

// }

 
export default connect(mapStateToProps, mapDispatchToProps)(App);