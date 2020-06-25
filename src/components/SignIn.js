import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';


const GreenCheckbox = withStyles({
    root: {
      color: green[400],
      '&$checked': {
        color: green[600],
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: '',
    checkedA: false,
    checkedB: false
  });

  const handleChange = (event) => {
    const age = event.target.name;
    setState({
      ...state,
      [age]: event.target.value,
    });
  };

  const handleChangeCheck = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Subscription Plan
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>

              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
           <Grid item xs={12} sm={6}>
            <FormControlLabel
           control={<GreenCheckbox checked={state.checkedA} onChange={handleChangeCheck} name="checkedA" />}
           label="Movies"
           />
           </Grid>
           <Grid item xs={12} sm={6}>
            <FormControlLabel
        control={<GreenCheckbox checked={state.checkedB} onChange={handleChangeCheck} name="checkedB" />}
        label="Web Series"
           />
           </Grid>

            <Grid item xs={12} spacing={2}>
           <RadioGroup row aria-label="position" name="position" defaultValue="top">
        <FormControlLabel
          value="top"
          control={<Radio color="primary/fill/600" />}
          label="English"
          labelPlacement="top"
        />
        <FormControlLabel
          value="start"
          control={<Radio color="primary" />}
          label="Telugu"
          labelPlacement="top"
        />
        <FormControlLabel
          value="bottom"
          control={<Radio color="primary" />}
          label="Hindi"
          labelPlacement="top"
        />
        <FormControlLabel value="end" control={<Radio color="primary" />} label="Tamil" labelPlacement="top"/>
      </RadioGroup>
      </Grid>

         </Grid>
            <Grid item xs={12}>
            <FormControl variant="filled" className={classes.formControl}>
        <InputLabel htmlFor="filled-age-native-simple">Plan</InputLabel>
        <Select
          native
          value={state.age}
          onChange={handleChange}
          inputProps={{
            name: 'age',
            id: 'filled-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value={1}>1 Month</option>
          <option value={6}>6 Months</option>
          <option value={12}>1 year</option>
        </Select>
      </FormControl>
            </Grid>
            <Grid item xs={12} >
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Show results based on my customizations"
              />
            </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Subscribe
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="https://www.netflix.com/" variant="body2">
                Already have a Plan? Get Started
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}