import React, {Component} from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Grid from '@material-ui/core/Grid';

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
            <Grid container spacing={2}>
            <Grid item xs={12}>
           <TextField
             hintText="Enter your Username"
             floatingLabelText="Username"
             onChange = {(event,newValue) => this.setState({username:newValue})}
             />
            <br/>
            </Grid>
            <Grid item xs={12}>
             <TextField
               hintText="Enter your email"
               floatingLabelText="email"
               onChange = {(event,newValue) => this.setState({email:newValue})}
               />
             <br/>
             </Grid>
             <Grid item xs={12}>
             <TextField
               type="password"
               hintText="Enter your Password"
               floatingLabelText="Password"
               onChange = {(event,newValue) => this.setState({password:newValue})}
               />
             <br/>
             </Grid>
             <Grid item xs={11}>
             <InputLabel id="label">Subscription</InputLabel>
                <Select labelId="label" id="select" value="20">
                <MenuItem value="1 Month">1 Month</MenuItem>
                <MenuItem value="2 Months">2 Months</MenuItem>
            </Select>
            <br/>
            </Grid>
            </Grid>
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