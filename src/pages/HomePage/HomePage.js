import React from 'react'
import './HomePage.css'

const HomePage = ({ currentUser, userInfo }) => {
    return ( 
        <React.Fragment>
        <div className="bg-main" >
        {!currentUser ? (
            <div className="intro-container">
                <p>You know why you're here.  Click the login button in the header and let's do this.</p>
            </div>
         ) : (
             <div className="logged-in-container">
                <p style={{color: 'yellow'}}> hello { currentUser}.  thanks for logging in.</p>  
                <p style={{color: 'yellow'}}> your email: { userInfo.email}</p>  
                <p style={{color: 'yellow'}}> your password: {userInfo.password}</p>  
            </div>
         )
        }
        </div>
    </React.Fragment>
     );
}
 
export default HomePage
