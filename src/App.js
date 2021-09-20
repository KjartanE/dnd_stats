import React, {Component} from 'react';
import StatBlock from './StatBlock/StatBlock';
import BackgroundBlock from './BackgroundBlock/BackgroundBlock.js';
import SkillBlock from './SkillBlock/SkillBlock';
import RaceBlock from './RaceBlock/RaceBlock.js';
import AlertComponent from './Utilities/AlertComponent.js';

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
      points : 27,
      race_open: false,
      race_title: "",
      race_selection:{
        selected: "",
        human: "",
        stat1: "",
        stat2: "",
        val1: 0,
        val2: 0
      },
      background_open: false,
      background_title: "",

      adjust_Points:this.adjust_Points,
      variant_Human: this.variant_Human,
      update_Stats:this.update_Stats,
      update_Race:this.update_Race,
      update_Skill_Score: this.update_Skill_Score,
      access_Stat_Score: this.access_Stat_Score,
      update_Skills: this.update_Skills,
      warning_Alert: this.warning_Alert
    };

    this.str = React.createRef();
    this.dex = React.createRef();
    this.con = React.createRef();
    this.int = React.createRef();
    this.wis = React.createRef();
    this.cha = React.createRef();

    this.skills = React.createRef();
    this.alert = React.createRef();
  }

  adjust_Points = (val) =>{
    this.setState((state) =>({
      points : state.points +val
    }));
  }

  variant_Human = (selection) =>{
    var curRace ={...this.state.race_selection};

    if(this.state.race_selection.selected){
      this[curRace.stat1].current.adjustStat([curRace.val1]*-1);
      this[curRace.stat2].current.adjustStat([curRace.val2]*-1);

      curRace.val1 = 0;
      curRace.val2 = 0;
      curRace.selected = false;
      
      this.setState({race_selection: curRace});
    }else if(curRace.human === 'base'){
      this.str.current.adjustStat(-1);
      this.dex.current.adjustStat(-1);
      this.con.current.adjustStat(-1);
      this.int.current.adjustStat(-1);
      this.wis.current.adjustStat(-1);
      this.cha.current.adjustStat(-1);
      curRace.human = '';
      this.setState({race_selection: curRace});
    }else if(curRace.human === 'variant'){
      this.adjust_Points(-2);
      curRace.human = '';
      this.setState({race_selection: curRace});
    } else if(curRace.human ==="halfelf"){
      this.cha.current.adjustStat(-2);
      curRace.human = "";
      this.setState({race_selection: curRace});
      this.adjust_Points(-2);
    }

    if(selection ==="base"){
      this.str.current.adjustStat(1);
      this.dex.current.adjustStat(1);
      this.con.current.adjustStat(1);
      this.int.current.adjustStat(1);
      this.wis.current.adjustStat(1);
      this.cha.current.adjustStat(1);

      curRace.human = "base";
      this.setState({race_selection: curRace});

    }else if(selection === "variant" ){
        curRace.human = "variant";
        this.setState({race_selection: curRace});
        this.adjust_Points(2);
      }else if(selection === 'halfelf'){
        curRace.human = "halfelf";
        this.cha.current.adjustStat(2);
        this.setState({race_selection: curRace});
        this.adjust_Points(2);
      } 

    this.update_Skill_Score();
  }

  update_Stats = (dir1, val1, dir2, val2) =>{
    var curRace ={...this.state.race_selection};

    if(curRace.human === 'base'){
      this.str.current.adjustStat(-1);
      this.dex.current.adjustStat(-1);
      this.con.current.adjustStat(-1);
      this.int.current.adjustStat(-1);
      this.wis.current.adjustStat(-1);
      this.cha.current.adjustStat(-1);
      curRace.human = '';
      this.setState({race_selection: curRace});
    }else if(curRace.human === 'variant'){
      this.adjust_Points(-2);
      curRace.human = '';
      this.setState({race_selection: curRace});
    } else if(curRace.human ==="halfelf"){
      this.cha.current.adjustStat(-2);
      curRace.human = "";
      this.setState({race_selection: curRace});
      this.adjust_Points(-2);
    }

    if(!this.state.race_selection.selected){
      this[dir1].current.adjustStat(val1);
      this[dir2].current.adjustStat(val2);
  
      curRace.selected = true;
    }else{
      this[curRace.stat1].current.adjustStat([curRace.val1]*-1);
      this[curRace.stat2].current.adjustStat([curRace.val2]*-1);

      this[dir1].current.adjustStat(val1);
      this[dir2].current.adjustStat(val2);
    }
    
    curRace.stat1 = dir1;
    curRace.stat2 = dir2;
    curRace.val1 = val1;
    curRace.val2 = val2;
    this.setState({race_selection: curRace});
    this.update_Skill_Score();
    //console.log(JSON.stringify(this.state));
  } 

  update_Race = (race) => {
    this.setState((state) =>({
      race_title : race
    }));
  }

  update_Skill_Score = () => {
    this.skills.current.update_Score();
  }

  access_Stat_Score = (dir) => {
    const stat_element = this[dir].current;
    
    return(stat_element.accessScore());
    //console.log(stat_element.state.score);
  }

  update_Skills = (name, skill1, skill2) => {
    this.setState({
      background_title: name
    });
    this.skills.current.update_Skills(skill1, skill2);
  }

  warning_Alert = (info) => {
    this.alert.current.alert_On(info);
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
            <Box component='div' className={classes.statSection}>
              <StatBlock stat="str" appState={this.state} ref={this.str}/>
              <StatBlock stat="dex" appState={this.state} ref={this.dex}/>
              <StatBlock stat="con" appState={this.state} ref={this.con}/>
              <StatBlock stat="int" appState={this.state} ref={this.int}/>
              <StatBlock stat="wis" appState={this.state} ref={this.wis}/>
              <StatBlock stat="cha" appState={this.state} ref={this.cha}/>
            </Box>
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
            onClick={() =>this.setState((state) => ({
              race_open: !state.race_open
            }))}>
              <Box >
                <h2>Race: {this.state.race_title}</h2> 

              </Box>
            </Button>
            {this.state.race_open ? 
              <RaceBlock appState={this.state}/>
            : <Box></Box>
            }
            
            <Button variant="contained" color='primary'
            className={`${classes.root} ${classes.sub_head}`}
            onClick={() =>this.setState((state) => ({
              background_open: !state.background_open
            }))}>
              <Box >
                <h2>Background: {this.state.background_title}</h2> 

              </Box>
            </Button>
            {this.state.background_open ? 
              <BackgroundBlock appState={this.state}/>
            : <Box></Box>
            }
            
          </Grid>
        
        </Grid>
        <AlertComponent ref={this.alert}/>
      </Container>
    );
  }  
}
//<button  onClick={this.decrease_Points(1)}>Click me</button>
export default withStyles(styles, {withTheme: true})( App);
