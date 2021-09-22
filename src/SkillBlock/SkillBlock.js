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
            prof: 0,
            prof_bonus: 2,
            access_Score: this.access_Score,
            adjust_Prof: this.adjust_Prof,
            update_Score: this.update_Score,
            warning_Alert: this.props.appState.warning_Alert,
            update_Skill: this.update_Skill,
            update_Class: this.update_Class,
            disable_Disable: this.disable_Disable ,

            background_Selected:{
              background1: "",
              background2: ""
            },

            class_Selected:{
              during: false,
              count: 0,
              class: "",
              classSkill1: "",
              classSkill2: ""
            },

            disabled_iter:[
              "acro","anim","arca","athl","dece","hist","insi","inti","inve",
              "medi","natu","perc","perf","pers","reli","slei","stea","surv"
            ],

            disabled:{
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
            },

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

    update_Skills = (skill1, skill2) => {

      if(this.state.background_Selected.background1 === '-'){
        this.adjust_Prof(-2);
      }
      if( skill1 === '-'){
        this.adjust_Prof(2);
      }

      if(!this.state.background_Selected.background1 && 
      !this.state.background_Selected.background2 ){
          
        if(this.state[skill1]){
          this.adjust_Prof(1);  
        }
        if(this.state[skill2]){
          this.adjust_Prof(1);
        }
          this.setState((state) => ({
          [skill1]: true,
          [skill2]: true
        })); 
      }else{

        if(this.state[skill1] 
          && skill1 !== this.state.background_Selected.background1
          && skill1 !== this.state.background_Selected.background2){
              this.adjust_Prof(1);  
        }
        if(this.state[skill2]
          && skill2 !== this.state.background_Selected.background1
          && skill2 !== this.state.background_Selected.background2){
          this.adjust_Prof(1);
        }
       
        this.setState((state) => ({
          [this.state.background_Selected.background1]: false,
          [this.state.background_Selected.background2]: false
        })); 
        this.setState((state) => ({
          [skill1]: true,
          [skill2]: true
        })); 
      }

      
      var setSkills ={...this.state.background_Selected};
      setSkills.background1 = skill1;
      setSkills.background2 = skill2;
      
      this.setState((state) => ({
        background_Selected: setSkills
      })); 
      
      //console.log(skill1 + " " + skill2);
    }

    update_Skill = (skill, val) => {
      //console.log(JSON.stringify(this.state.class_Selected));

      if (this.state.class_Selected.during === true && val === -1) {
        var class_Selected = {...this.state.class_Selected};
        if (this.state.class_Selected.count === 2) {
          class_Selected.classSkill1 = skill;    

          class_Selected.count = 1;
        } else if (this.state.class_Selected.count === 1) {
          class_Selected.classSkill2 = skill; 
          class_Selected.during = false; 
          class_Selected.count = 0;
          this.state.disable_Disable();  
        }

        this.setState({
          class_Selected: class_Selected
        });
      }

      if(this.state.background_Selected.background1 !== skill &&
      this.state.background_Selected.background2 !== skill &&
      this.state.class_Selected.classSkill1 !== skill && 
      this.state.class_Selected.classSkill2 !== skill 
      ){
        this.setState((state) => ({
          [skill]: !this.state[skill]
        }));
        this.state.adjust_Prof(val);
      }else{
        this.props.appState.warning_Alert("Cannot Remove Class or Background Skill");
      }
        
      //console.log(JSON.stringify(this.state.background_Selected));
        
    }
    
    update_Class = (className, availableSkills) =>{
      var class_Selected = {...this.state.class_Selected};
      var disabled = {...this.state.disabled};

      if (this.state.class_Selected.classSkill1 !== "") {        
        
        this.setState((state) => ({
          [this.state.class_Selected.classSkill1]: false,
          [this.state.class_Selected.classSkill2]: false
        }));

        class_Selected.classSkill1 = "";
        class_Selected.classSkill2 = "";
      }

      this.adjust_Prof(2);
      
      for (let i = 0; i < this.state.disabled_iter.length; i++) {
        const element = this.state.disabled_iter[i];
        for (let y = 0; y < availableSkills.length; y++) {
          const avail = availableSkills[y];
          if (avail === element) {
            disabled[element]= false;
            break;
          }else{
            disabled[element]= true;
          }
        }
      }    

      
      class_Selected.during = true;
      class_Selected.count =2;
      class_Selected.class = className;

      this.setState({
        disabled: disabled,
        class_Selected: class_Selected
      });
      

      //console.log(JSON.stringify(disabled));
    }

    disable_Disable = () => {
      var disabled = {...this.state.disabled};
 
      for (let i = 0; i < this.state.disabled_iter.length; i++) {
        const element = this.state.disabled_iter[i];
        disabled[element] = false;
      }
      this.setState({
        disabled: disabled,
      });
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
          props.state.update_Skill(event.target.name ,1);
        }else{
            if(props.state.prof <= 0){
                props.state.warning_Alert("No Available Skill Points");
            }else{
                props.state.update_Skill(event.target.name ,-1);
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
                dis_state={props.state.disabled.acro}
                skill_state={props.state}
              />

              <StatGrid
                name="anim"
                label="Animal Handling (Wis)"
                dir="wis"
                handleChange={handleChange}
                stat_state={props.state.anim}
                dis_state={props.state.disabled.anim}
                skill_state={props.state}
              />

              <StatGrid
                name="arca"
                label="Arcana (Int)"
                dir="int"
                handleChange={handleChange}
                stat_state={props.state.arca}
                dis_state={props.state.disabled.arca}
                skill_state={props.state}
              />

              <StatGrid
                name="athl"
                label="Athletics (Str)"
                dir="str"
                handleChange={handleChange}
                stat_state={props.state.athl}
                dis_state={props.state.disabled.athl}
                skill_state={props.state}
              />

            <StatGrid
                name="dece"
                label="Deception (Cha)"
                dir="cha"
                handleChange={handleChange}
                stat_state={props.state.dece}
                dis_state={props.state.disabled.dece}
                skill_state={props.state}
              />

            <StatGrid
                name="hist"
                label="History (Int)"
                dir="int"
                handleChange={handleChange}
                stat_state={props.state.hist}
                dis_state={props.state.disabled.hist}
                skill_state={props.state}
              />

            <StatGrid
                name="insi"
                label="Insight (Wis)"
                dir="wis"
                handleChange={handleChange}
                stat_state={props.state.insi}
                dis_state={props.state.disabled.insi}
                skill_state={props.state}
              />

            <StatGrid
                name="inti"
                label="Intimidation (Cha)"
                dir="cha"
                handleChange={handleChange}
                stat_state={props.state.inti}
                dis_state={props.state.disabled.inti}
                skill_state={props.state}
              />

            <StatGrid
                name="inve"
                label="Investigation (Int)"
                dir="int"
                handleChange={handleChange}
                stat_state={props.state.inve}
                dis_state={props.state.disabled.inve}
                skill_state={props.state}
              />  
              
            <StatGrid
                name="medi"
                label="Medicine (Wis)"
                dir="wis"
                handleChange={handleChange}
                stat_state={props.state.medi}
                dis_state={props.state.disabled.medi}
                skill_state={props.state}
              />
              
            <StatGrid
                name="natu"
                label="Nature (Int)"
                dir="int"
                handleChange={handleChange}
                stat_state={props.state.natu}
                dis_state={props.state.disabled.natu}
                skill_state={props.state}
              />
              
            <StatGrid
                name="perc"
                label="Perception (Wis)"
                dir="wis"
                handleChange={handleChange}
                stat_state={props.state.perc}
                dis_state={props.state.disabled.perc}
                skill_state={props.state}
              />
              
            <StatGrid
                name="perf"
                label="Performance (Cha)"
                dir="cha"
                handleChange={handleChange}
                stat_state={props.state.perf}
                dis_state={props.state.disabled.perf}
                skill_state={props.state}
              />
              
            <StatGrid
                name="pers"
                label="Persuasion (Cha)"
                dir="cha"
                handleChange={handleChange}
                stat_state={props.state.pers}
                dis_state={props.state.disabled.pers}
                skill_state={props.state}
              />
              
            <StatGrid
                name="reli"
                label="Religion (Int)"
                dir="int"
                handleChange={handleChange}
                stat_state={props.state.reli}
                dis_state={props.state.disabled.reli}
                skill_state={props.state}
              />
              
            <StatGrid
                name="slei"
                label="Sleight of Hand (Dex)"
                dir="dex"
                handleChange={handleChange}
                stat_state={props.state.slei}
                dis_state={props.state.disabled.slei}
                skill_state={props.state}
              />
              
            <StatGrid
                name="stea"
                label="Stealth (Dex)"
                dir="dex"
                handleChange={handleChange}
                stat_state={props.state.stea}
                dis_state={props.state.disabled.stea}
                skill_state={props.state}
              />
                            
            <StatGrid
                name="surv"
                label="Survival (Wis)"
                dir="wis"
                handleChange={handleChange}
                stat_state={props.state.surv}
                dis_state={props.state.disabled.surv}
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
                disabled={props.dis_state}
                onChange={props.handleChange} 
                name={props.name}
                />
            }
            label={props.label}
          />
        </Grid>
        <Grid item >
          <FormLabel >
            {props.stat_state === true
              ? props.skill_state.score[props.dir] + props.skill_state.prof_bonus
              : props.skill_state.score[props.dir]}
          </FormLabel>
        </Grid>
      </Grid>
    );
}