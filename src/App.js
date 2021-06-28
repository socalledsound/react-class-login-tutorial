import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Header/Header'
import HomePage from './pages/HomePage/HomePage'
import SignInPage from './pages/SignInPage/SignInPage'
class App extends Component {
   
    state = {
        currentUser : null,
        userInfo : null,
    }
   


    setCurrentUser = ({username, email, password}) => {
        console.log(username)
            this.setState({ currentUser : username, userInfo: {username, email, password}})
    }  

    render(){
        const { currentUser, userInfo } = this.state;
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
 
export default App;