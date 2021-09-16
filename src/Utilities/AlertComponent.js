import React, { Component } from 'react';
import {Snackbar, Box } from '@material-ui/core/';
import MuiAlert from '@material-ui/lab/Alert';

import { makeStyles } from '@material-ui/core/styles';

class AlertComponent extends Component{
  constructor(props){
    super(props);

    this.state={
      alert: false,
      msg: "",
      alert_On: this.alert_On,
      alert_Off: this.alert_Off
    }

  }

  alert_On = (info) => {
    this.setState({
      alert: true,
      msg: info
    });
  }

  alert_Off = () => {
    this.setState({
      alert: false
    });
  }
 
  render(){

    return(
      <Box component ='div'>
        
        <CustomizedSnackbars state={this.state}/>
          
      </Box>
    );
  }
}
export default AlertComponent;
 

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export function CustomizedSnackbars(props) {
  const classes = useStyles();

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    props.state.alert_Off();
  };

  return (
    <div className={classes.root}>
      
      <Snackbar open={props.state.alert} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="warning">
          {props.state.msg}
        </Alert>
      </Snackbar>
      
    </div>
  );
}