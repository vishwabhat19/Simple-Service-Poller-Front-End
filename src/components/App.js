import React, {Component} from 'react';
import UrlList from './UrlList';
import UrlForm from '../forms/UrlForm';
import GoogleLogin from 'react-google-login';
import GoogleLogout from 'react-google-login';

import {
   BrowserRouter as Router,
   Switch,
   Route,
   Link
 } from "react-router-dom";


 

export class App extends Component {

   
constructor(props) {
   super(props)
   this.state = {
       isSignedIn: false,
   }
}

   responseGoogle = (response) => {
      console.log('In response Login');
      this.setState({
         isSignedIn : true
      });


   }

   responseLogout = (response) => {

      console.log('In response logout!');
      this.setState(
         {
            isSignedIn : false
         }
      )
   }

   render(){

      if(this.state.isSignedIn){
         return(
            <div>
               
               <div style={{position : 'absolute', right : '0px', width : '300px'}}>
                  
                        <GoogleLogout clientId='815793166428-m76jpq95pkr1rrgdkhl0gqf1idl9r8l0.apps.googleusercontent.com'
                     buttonText='Logout' onSuccess={this.responseLogout} 
                     
                     />
               </div>
               <div>
               <Router>
                                    <div>
                                       <ul>
                                          <li>
                                              <Link to="/addUrl">Add Url</Link>
                                          </li>
                                          <li>
                                               <Link to="/">Home</Link>
                                          </li>
                                       </ul>
                                       <Switch>
                                            <Route path="/addUrl" exact>
                                                <UrlForm/>
                                            </Route>
                                            <Route path="/" exact>
                                                <UrlList/>
                                            </Route>
                                    </Switch>
                                    </div>
                            </Router>
               </div>
                
            </div>
         );
      }

      else if(!this.state.isSignedIn){
         return(
            <div>


                              
                              <GoogleLogin clientId='815793166428-m76jpq95pkr1rrgdkhl0gqf1idl9r8l0.apps.googleusercontent.com'
                                     buttonText='Login'
                                     onSuccess={this.responseGoogle}
                                     onFailure={this.responseGoogle}
                                     cookiePolicy={'single_host_origin'}
                                     
       
                                     />
                                    
                                  </div>
                                 
               
               
          );
   
      }

      
   }
 
  
 

};




  
    
   
    
    

export default App;
