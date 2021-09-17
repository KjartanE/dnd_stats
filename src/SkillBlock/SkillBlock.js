import React from "react"; 
import { makeStyles } from "@material-ui/core/styles";
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

class SkillBlock extends React.Component{
    
    constructor(props){
        super(props);
        
        this.state = {
            score:{
                str: -1,
                dex: -1,
                con: -1,
                int: -1,
                wis: -1,
                cha: -1
            },
            prof: 2,
            prof_bonus: 2,
            access_Score: this.access_Score,
            adjust_Prof: this.adjust_Prof,
            update_Score: this.update_Score,
            warning_Alert: this.props.appState.warning_Alert,
            update_Skill: this.update_Skill,

            acro: false,
            anim: false,
            arca: false,
            athl: false,
            dece: false,
            hist: false,
            insi: false,
            inti: false,
            inve: false,
            medi: false,
            natu: false,
            perc: false,
            perf: false,
            pers: false,
            reli: false,
            slei: false,
            stea: false,
            surv: false,
        }
    }

    adjust_Prof = (val) =>{
        this.setState((state) => ({
            prof: state.prof + val,
        })); 
        //console.log(JSON.stringify(this.state));
    }


    update_Score = () =>{
        this.setState((state) => ({
            score:{
                str: this.access_Score('str'),
                dex: this.access_Score('dex'),
                con: this.access_Score('con'),
                int: this.access_Score('int'),
                wis: this.access_Score('wis'),
                cha: this.access_Score('cha')
            }
        })); 
        //console.log(JSON.stringify(this.state));
    }

    access_Score = (dir) => {
        return(this.props.appState.access_Stat_Score(dir));
    }

    update_Skill = (skill) => {
      this.setState((state) => ({
        [skill]: !this.state[skill]
      })); 
    }

    render(){
        return(
            <CheckboxesGroup state={this.state} />
       );
    }
}

export default SkillBlock;

export function CheckboxesGroup(props) {
    const classes = style();


    const handleChange = (event) => {
        if(!event.target.checked){
          props.state.update_Skill(event.target.name);
          //setState({ ...state, [event.target.name]: event.target.checked });
            props.state.adjust_Prof(1);
        }else{
            if(props.state.prof <= 0){
                props.state.warning_Alert("not enough prof points");
            }else{
                props.state.update_Skill(event.target.name);

                //setState({ ...state, [event.target.name]: event.target.checked });
                props.state.adjust_Prof(-1);
            }
        }
        props.state.update_Score();
        
    };


    return (
      <Box component="div" className={classes.skillbox}>
        <FormControl component="fieldset" className={classes.skillbar}>
          <FormLabel component="legend">
            Select Skills: {props.state.prof}
          </FormLabel>
          <FormGroup>
            <Box component="div" className={classes.skillbar}>
              <StatGrid
                name="acro"
                label="Acrobatics (Dex)"
                dir="dex"
                handleChange={handleChange}
                stat_state={props.state.acro}
                skill_state={props.state}
              />

              <StatGrid
                name="anim"
                label="Animal Handling (Wis)"
                dir="wis"
                handleChange={handleChange}
                stat_state={props.state.anim}
                skill_state={props.state}
              />

              <StatGrid
                name="arca"
                label="Arcana (Int)"
                dir="int"
                handleChange={handleChange}
                stat_state={props.state.arca}
                skill_state={props.state}
              />

              <StatGrid
                name="athl"
                label="Athletics (Str)"
                dir="str"
                handleChange={handleChange}
                stat_state={props.state.athl}
                skill_state={props.state}
              />

            <StatGrid
                name="dece"
                label="Deception (Cha)"
                dir="cha"
                handleChange={handleChange}
                stat_state={props.state.dece}
                skill_state={props.state}
              />

            <StatGrid
                name="hist"
                label="History (Int)"
                dir="int"
                handleChange={handleChange}
                stat_state={props.state.hist}
                skill_state={props.state}
              />

            <StatGrid
                name="insi"
                label="Insight (Wis)"
                dir="wis"
                handleChange={handleChange}
                stat_state={props.state.insi}
                skill_state={props.state}
              />

            <StatGrid
                name="inti"
                label="Intimidation (Cha)"
                dir="cha"
                handleChange={handleChange}
                stat_state={props.state.inti}
                skill_state={props.state}
              />

            <StatGrid
                name="inve"
                label="Investigation (Int)"
                dir="int"
                handleChange={handleChange}
                stat_state={props.state.inve}
                skill_state={props.state}
              />  
              
            <StatGrid
                name="medi"
                label="Medicine (Wis)"
                dir="wis"
                handleChange={handleChange}
                stat_state={props.state.medi}
                skill_state={props.state}
              />
              
            <StatGrid
                name="natu"
                label="Nature (Int)"
                dir="int"
                handleChange={handleChange}
                stat_state={props.state.natu}
                skill_state={props.state}
              />
              
            <StatGrid
                name="perc"
                label="Perception (Wis)"
                dir="wis"
                handleChange={handleChange}
                stat_state={props.state.perc}
                skill_state={props.state}
              />
              
            <StatGrid
                name="perf"
                label="Performance (Cha)"
                dir="cha"
                handleChange={handleChange}
                stat_state={props.state.perf}
                skill_state={props.state}
              />
              
            <StatGrid
                name="pers"
                label="Persuasion (Cha)"
                dir="cha"
                handleChange={handleChange}
                stat_state={props.state.pers}
                skill_state={props.state}
              />
              
            <StatGrid
                name="reli"
                label="Religion (Int)"
                dir="int"
                handleChange={handleChange}
                stat_state={props.state.reli}
                skill_state={props.state}
              />
              
            <StatGrid
                name="slei"
                label="Sleight of Hand (Dex)"
                dir="dex"
                handleChange={handleChange}
                stat_state={props.state.slei}
                skill_state={props.state}
              />
              
            <StatGrid
                name="stea"
                label="Stealth (Dex)"
                dir="dex"
                handleChange={handleChange}
                stat_state={props.state.stea}
                skill_state={props.state}
              />
                            
            <StatGrid
                name="surv"
                label="Survival (Wis)"
                dir="wis"
                handleChange={handleChange}
                stat_state={props.state.surv}
                skill_state={props.state}
              />

            </Box>
          </FormGroup>
          <FormHelperText>Be careful</FormHelperText>
        </FormControl>
      </Box>
    );
}

export function StatGrid(props) {

    return (
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
                checked={props.stat_state} 
                onChange={props.handleChange} 
                name={props.name}
                />
            }
            label={props.label}
          />
        </Grid>
        <Grid item >
          <FormLabel component="modifer">
            {props.stat_state === true
              ? props.skill_state.score[props.dir] + props.skill_state.prof_bonus
              : props.skill_state.score[props.dir]}
          </FormLabel>
        </Grid>
      </Grid>
    );
}