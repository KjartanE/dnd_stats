import React, {Component} from 'react';

import StatsRouter from './StatBlock/StatsRouter';
import BackgroundBlock from './BackgroundBlock/BackgroundBlock.js';
import SkillBlock from './SkillBlock/SkillBlock';
import RaceBlock from './RaceBlock/RaceBlock.js';
import ClassBlock from './ClassBlock/ClassBlock.js';
import {AlertProvider} from './Utilities/AlertComponent';

import { withStyles } from '@material-ui/core/styles';
import { Box, Button, Container, Grid } from '@material-ui/core';

const styles = theme => ({
  root: {    
    borderRadius: 3,
    color: 'white',
    boxShadow: '0 3px 5px 2px #1F2D33',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  header:{
    background: theme.palette.primary1Color,
    fontSize: 16,
    width: '100%',
    height: 60,
    paddingTop: 0,
  },
  sub_head: {
    backgroundColor: theme.palette.primary2Color,
    marginBottom: '10px',
    fontSize: 14,
    height: 60,
    width:'100%',
  },
  statSection:{
  },
  statColumn:{
    width:"12%",
  },
  skillSection:{
    width:"20%"
  },
  raceSection:{
    width: "68%"
  }
  
});

class App extends Component{
  constructor(){
    super();
    
    this.state={
      points: "27",

      menu_open: "",

      race_title: "",
      background_title: "",
      class_title: "",
  
      
      variant_Human: this.variant_Human,
      update_Stats:this.update_Stats,
      update_Stat_Points: this.update_Stat_Points,
      update_Race:this.update_Race,
      update_Skill_Score: this.update_Skill_Score,
      access_Stat_Score: this.access_Stat_Score,
      update_Skill_Points: this.update_Skill_Points,
      update_Skills: this.update_Skills,
      update_Class: this.update_Class,
     
    };


    this.stats = React.createRef();
    this.skills = React.createRef();
    this.alert = React.createRef();
  }

  update_Stat_Points = (val) => {
    this.setState((state)=>({
      points: val
    }));
  }

  variant_Human = (selection) =>{
    this.stats.current.variant_Human(selection);
  }

  update_Stats = (dir1, val1, dir2, val2) =>{
    this.stats.current.update_Stats(dir1, val1, dir2, val2);
  } 

  access_Stat_Score = (dir) => {
    return(this.stats.current.access_Stat_Score(dir));
  }

  update_Race = (race) => {
    if(race === 'Base Half-Elf'){
      this.update_Skill_Points(2);
    }else if (race === 'Variant Human'){
      this.update_Skill_Points(1);
    }

    if(this.state.race_title === 'Base Half-Elf'){
      this.update_Skill_Points(-2);
    }else if (this.state.race_title === 'Variant Human'){
      this.update_Skill_Points(-1);
    }

    this.setState((state) =>({
      race_title : race
    }));
  }

  update_Skill_Score = () => {
    this.skills.current.update_Score();
  }

  update_Skill_Points = (val) => {
    this.skills.current.adjust_Prof(val);
  }

  update_Skills = (name, skill1, skill2) => {
    this.setState({
      background_title: name
    });
    this.skills.current.update_Skills(skill1, skill2);
  }

  update_Class = (className, availableSkills) =>{
    //console.log(className+ "  " + availableSkills);
    this.setState((state) =>({
      class_title : className
    }));
    this.skills.current.update_Class(className, availableSkills);
    
  }

  menu_change = (menu) => {
    if (this.state.menu_open === menu) {
      this.setState((state) => ({
        menu_open: ""
      }));
    }else{
      this.setState((state) => ({
        menu_open: menu
      }));
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <Container maxWidth="xl" >
        <Box component='div' className={`${classes.root} ${classes.header}`}>        
            <h1>DND Stat Distribution</h1>
        </Box>
   
        <br/>
        <Grid container direction="row" spacing={3} justifyContent="flex-start" alignItems="flex-start">
          
          <Grid item className={classes.statColumn}>
            <Box className={`${classes.root} ${classes.sub_head}`}>      
              <h2>Stat Points: {this.state.points}</h2>
            </Box>
            <StatsRouter appState={this.state} ref={this.stats} />
          </Grid>
          
          <Grid item className={classes.skillSection}>
            <Box className={`${classes.root} ${classes.sub_head}`}>      
              <h2>Skills:</h2>
            </Box>
            <SkillBlock appState={this.state} ref={this.skills}/>
            
          </Grid>
          <Grid item className={classes.raceSection}>
            <Button variant="contained" color='primary'
            className={`${classes.root} ${classes.sub_head}`}
            onClick={() => this.menu_change('race')}>
              <Box >
                <h2>Race: {this.state.race_title}</h2> 
              </Box>
            </Button>

            {this.state.menu_open === 'race' ? 
              <RaceBlock appState={this.state}/>
            : <Box></Box>
            }
            
            <Button variant="contained" color='primary'
            className={`${classes.root} ${classes.sub_head}`}
            onClick={() =>this.menu_change('back')}>
              <Box >
                <h2>Background: {this.state.background_title}</h2> 

              </Box>
            </Button>
            {this.state.menu_open === 'back' ? 
              <BackgroundBlock appState={this.state}/>
            : <Box></Box>
            }
             <Button variant="contained" color='primary'
            className={`${classes.root} ${classes.sub_head}`}
            onClick={() => this.menu_change('class')}>
              <Box >
                <h2>Class: {this.state.class_title}</h2> 
              </Box>
            </Button>
            {this.state.menu_open === 'class' ? 
              <ClassBlock appState={this.state} />
            : <Box></Box>
            }
            
          </Grid>
        
        </Grid>
      </Container>
    );
  }  
}


//<button  onClick={this.decrease_Points(1)}>Click me</button>
export default withStyles(styles, {withTheme: true})( App);
