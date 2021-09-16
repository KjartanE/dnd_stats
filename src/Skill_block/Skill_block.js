import React, { useState } from "react"; 
import { withStyles, makeStyles } from "@material-ui/core/styles";

import {Box, FormControl, FormLabel, FormGroup, FormControlLabel,
        Checkbox, FormHelperText, Grid } from '@material-ui/core';

const style = makeStyles((theme) => ({
    root: {
        display: 'flex',
      },
      formControl: {
        margin: theme.spacing(2),
      },
      skillbox:{
          width: '90%',
          padding: '5%',
      },
      skillbar:{
          width: '100%',

      }
      
  }));

class Skill_block extends React.Component{
    
    constructor(props){
        super(props);
        
        this.state = {
            prof: 2,
            access_Stats: this.access_Stats,
            adjust_Prof: this.adjust_Prof,
        }
    }

    adjust_Prof = (val) =>{
        this.setState((state) => ({
            prof: state.prof + val,
        })); 
        //console.log(JSON.stringify(this.state));
    }

    access_Stats = () => {
        this.props.appState.access_stat_score();
    }

    render(){
        return(
            <CheckboxesGroup state={this.state} />
       );
    }
}

export default Skill_block;

export function CheckboxesGroup(props) {
    const classes = style();

    const [state, setState] = React.useState({
        acro: false,
        anim: false,
        arca: false,
    });

    const handleChange = (event) => {
        if(!event.target.checked){
            setState({ ...state, [event.target.name]: event.target.checked });
            props.state.adjust_Prof(1);
        }else{
            if(props.state.prof <= 0){
                alert("not enough prof points");
            }else{
                setState({ ...state, [event.target.name]: event.target.checked });
                props.state.adjust_Prof(-1);
            }
        }
        
    };
    const { acro, anim, arca } = state;


    return (
      <Box component="div" className={classes.skillbox}>
        <FormControl component="fieldset" className={classes.skillbar}>
          <FormLabel component="legend">Select Skills:</FormLabel>
          <FormGroup>
            <Box component="div" className={classes.skillbar}>
              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid item>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={acro}
                        onChange={handleChange}
                        name="acro"
                      />
                    }
                    label="Acrobatics (Dex)"
                  />
                </Grid>
                <Grid item className={classes.mod}>
                  <FormLabel component="modifer">
                    {() => {props.state.access_Stats()}}
                  </FormLabel>
                </Grid>
              </Grid>

              <Grid
                container
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                
              >
                <Grid item>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={anim}
                        onChange={handleChange}
                        name="anim"
                      />
                    }
                    label="Animal Handling (Wis)"
                  />
                </Grid>
                <Grid item className={classes.mod}>
                  <FormLabel component="modifer">
                    {[props.state.prof]}
                  </FormLabel>
                </Grid>
              </Grid>
            </Box>

            <FormControlLabel
              control={
                <Checkbox checked={arca} onChange={handleChange} name="arca" />
              }
              label="Arcana (Int)"
            />
          </FormGroup>
          <FormHelperText>Be careful</FormHelperText>
        </FormControl>
      </Box>
    );
}