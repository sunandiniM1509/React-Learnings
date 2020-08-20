import React from 'react'
import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    inputRoot: { 
        color:'#344563',
        fontSize:14,
        fontFamily:'Roboto Condensed'
    },
    labelRoot: {
      fontSize: 12,
      letterSpacing: 0,
      fontWeight:'bold',
      color: "#979DA9",
      "&$labelFocused": {
        color: "#979DA9",
        fontSize:15,
        fontWeight: 'bold',
        letterSpacing: 0,
        fontFamily:'Roboto Condensed'
      },
      fontFamily:'Roboto Condensed'
    },
    labelFocused: {}
});


function KLTextField(props) {
    const classes = useStyles();
    return (
        <TextField required={props.required} label={props.label}
            type={props.type}
            fullWidth={true}
            InputProps={{ classes: { root: classes.inputRoot } }}
            inputProps={{ min: "0" }}
            InputLabelProps={{
                classes: {
                    root: classes.labelRoot,
                    focused: classes.labelFocused
                }
            }}
            value={props.value} name={props.name} onChange={props.onChange}
            error={props.error} helperText={props.helperText}
        />
    );
}

export default KLTextField