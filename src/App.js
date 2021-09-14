import React, {Component} from 'react';
//import './App.css';
import Stat_block from './Stat_block/Stat_block';
import Race_block from './Race_block/Race_block.js';
import { withStyles } from '@material-ui/core/styles';
import { Box, Button, Container, Grid, Accordion } from '@material-ui/core';

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
    fontSize: 14,
    height: 60,
    padding: '0px 10px',
    maxWidth: '120px',
  }
  
});

class App extends Component{
  constructor(){
    super();
    this.state={
      points : 27,
      race_selection:{
        selected: false,
        human: "",
        stat1: "",
        stat2: "",
        val1: 0,
        val2: 0
      },
      stats:{
        str: 8,
        dex: 8,
        con: 8,
        int: 8,
        wis: 8,
        cha: 8
      },
      decrease_Points:this.decrease_Points,
      increase_Points:this.increase_Points,
      update_Stat:this.update_Stat,
      update_Stats:this.update_Stats,
      variant_Human: this.variant_Human,
    };

    this.str = React.createRef();
    this.dex = React.createRef();
    this.con = React.createRef();
    this.int = React.createRef();
    this.wis = React.createRef();
    this.cha = React.createRef();

  }

  variant_Human = (selection) =>{
    var newStat = {...this.state.stats};
    var curRace ={...this.state.race_selection};

    if(this.state.race_selection.selected){
      newStat[curRace.stat1] = newStat[curRace.stat1] - [curRace.val1];
      newStat[curRace.stat2] = newStat[curRace.stat2] - [curRace.val2];
      this[curRace.stat1].current.modActer(curRace.val1 * -1);
      this[curRace.stat2].current.modActer(curRace.val2 * -1);

      curRace.val1 = 0;
      curRace.val2 = 0;
      curRace.selected = false;
      
      this.setState({race_selection: curRace});
    }
    if(selection ==="base" && curRace.human != "base"){
      if(curRace.human === 'variant'){
        this.variant_Human("!variant");
      }

      newStat.str = newStat.str +1;
      newStat.dex = newStat.dex +1;
      newStat.con = newStat.con +1;
      newStat.int = newStat.int +1;
      newStat.wis = newStat.wis +1;
      newStat.cha = newStat.cha +1;

      curRace.human = "base";
      this.setState({stats: newStat});
      this.setState({race_selection: curRace});

    }else if (selection === "!base"){
      newStat.str = newStat.str -1;
      newStat.dex = newStat.dex -1;
      newStat.con = newStat.con -1;
      newStat.int = newStat.int -1;
      newStat.wis = newStat.wis -1;
      newStat.cha = newStat.cha -1;

      curRace.human = "";

      this.setState({race_selection: curRace});
      this.setState({stats: newStat});

    }else if(selection === "variant" && curRace.human != "variant"){

      if(curRace.human === 'base'){
        newStat.str = newStat.str - 1;
        newStat.dex = newStat.dex - 1;
        newStat.con = newStat.con - 1;
        newStat.int = newStat.int - 1;
        newStat.wis = newStat.wis - 1;
        newStat.cha = newStat.cha - 1;
      }

      curRace.human = "variant";
      this.setState({stats: newStat});
      this.setState({race_selection: curRace});
      this.setState({points: this.state.points + 2});
    }else if(selection ==="!variant"){
      curRace.human = "";
      
      this.setState({race_selection: curRace});
      this.setState({points: this.state.points - 2});
    }
  }

  update_Stat = (statDir, val) =>{
    //console.log(statDir+val);
    var newStat = {...this.state.stats};
    newStat[statDir] = this.state.stats[statDir] + val;
    this.setState({stats: newStat});

    //console.log(JSON.stringify(this.state));
  }

  update_Stats = (dir1, val1, dir2, val2) =>{
    var newStats = {...this.state.stats};
    var newRace ={...this.state.race_selection};

    if(newRace.human === 'base'){
      newStats.str = newStats.str -1;
      newStats.dex = newStats.dex -1;
      newStats.con = newStats.con -1;
      newStats.int = newStats.int -1;
      newStats.wis = newStats.wis -1;
      newStats.cha = newStats.cha -1;
      newRace.human = '';
      this.setState({race_selection: newRace});
    }else if(newRace.human === 'variant'){
      this.setState({points: this.state.points - 2});
      newRace.human = '';
      this.setState({race_selection: newRace});
    }

    if(!this.state.race_selection.selected){
      newStats[dir1] = newStats[dir1] + val1;
      newStats[dir2] = newStats[dir2] + val2;
  
      this.setState({stats: newStats});
      newRace.selected = true;
      
      this[dir1].current.modActer(val1);
      this[dir2].current.modActer(val2);
    }else{

      if(newRace.stat1 == dir1 && newRace.val1 == val1){
        if(newRace.stat2 == dir2 && newRace.val2 == val2){
          //do nothing
        }else{
          newStats[newRace.stat2] = newStats[newRace.stat2] - [newRace.val2];
          newStats[dir2] = newStats[dir2] + val2;

          this.setState({stats: newStats});
          if(newRace.stat2 == dir2){
            if(newRace.val2 < val2){
              this[dir2].current.modActer(val2);  
            }else{
              this[newRace.stat2].current.modActer(newRace.val2 * -1);
            }
          }else{
            this[newRace.stat2].current.modActer(newRace.val2 * -1);
            this[dir2].current.modActer(val2);  
          }
        }
      }else{
        newStats[newRace.stat1] = newStats[newRace.stat1] - [newRace.val1];
        newStats[newRace.stat2] = newStats[newRace.stat2] - [newRace.val2];
  
        newStats[dir1] = newStats[dir1] + val1;
        newStats[dir2] = newStats[dir2] + val2;
  
        this.setState({stats: newStats});
  
        this[newRace.stat1].current.modActer(newRace.val1 * -1);
        this[newRace.stat2].current.modActer(newRace.val2 * -1);
  
        this[dir1].current.modActer(val1);
        this[dir2].current.modActer(val2);
      }
    }
    
    newRace.stat1 = dir1;
    newRace.stat2 = dir2;
    newRace.val1 = val1;
    newRace.val2 = val2;
    this.setState({race_selection: newRace});
    //console.log(JSON.stringify(this.state));
  } 

  decrease_Points = (val) =>{
    this.setState({points : this.state.points -val});
  }

  increase_Points = (val) =>{
    this.setState({points : this.state.points +val});
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
          
          <Grid item className="Main-table">
            <Box className={`${classes.root} ${classes.sub_head}`}>      
                <h2>Total Points: {this.state.points}</h2>
            </Box>
            
            <Stat_block stat="str" appState={this.state} ref={this.str}/>
            <Stat_block stat="dex" appState={this.state} ref={this.dex}/>
            <Stat_block stat="con" appState={this.state} ref={this.con}/>
            <Stat_block stat="int" appState={this.state} ref={this.int}/>
            <Stat_block stat="wis" appState={this.state} ref={this.wis}/>
            <Stat_block stat="cha" appState={this.state} ref={this.cha}/>
          </Grid>
          
          <Grid item >
            <Box className={classes.root}>
              <Box className={classes.sub_head}>
                <h2>Races: </h2>
              </Box>
            </Box>
            
          </Grid>



          <Race_block appState={this.state}/>

          
            
        </Grid>
        


        
        
      </Container>
    );
  }  
}
//<button  onClick={this.decrease_Points(1)}>Click me</button>
export default withStyles(styles, {withTheme: true})( App);
