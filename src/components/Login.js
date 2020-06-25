import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class Login extends Component {
constructor(props){
  super(props);
  this.state={
  username:'',
  email:'',
  password:'',
  message : 'Hello Team'
  }
 }
 changeMessage()
    {
        this.setState(
            {
                message: 'Thank you for visiting the Site'
            }
        )
    }
render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
          <AppBar
             title="Login"
           />
           <TextField
             hintText="Enter your Username"
             floatingLabelText="Username"
             onChange = {(event,newValue) => {this.setState({username:newValue},()=>{console.log(this.state.username)})}}
             />
            <br/>
             <TextField
               hintText="Enter your email"
               floatingLabelText="email"
               onChange = {(event,newValue) => this.setState({email:newValue})}
               />
             <br/>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
         </div>
         <div>
            <h3>
            {this.state.message}
            </h3>
            <RaisedButton label="Submit" primary={true} style={style} onClick={() => this.changeMessage()}/>
            </div>
         </MuiThemeProvider>
         
      </div>
    );
  }
}
const style = {
 margin: 15,
};
export default Login;