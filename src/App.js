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
    justifyContent: 'center'
  },
  header:{
    background: theme.palette.primary1Color,
    fontSize: 16,
    width: '100%'
  },
  sub_head: {
    backgroundColor: theme.palette.primary2Color,
    fontSize: 14,
    height: 80,
    padding: '0px 10px',
    maxWidth: '120px',
  }
  
});

class App extends Component{
  constructor(){
    super();
    this.state={
      points : 27,
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
      update_Stats:this.update_Stats
    };

    this.str = React.createRef();
    this.dex = React.createRef();
    this.con = React.createRef();
    this.int = React.createRef();
    this.wis = React.createRef();
    this.cha = React.createRef();

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
    newStats[dir1] = this.state.stats[dir1] + val1;
    newStats[dir2] = this.state.stats[dir2] + val2;

    this.setState({stats: newStats});

    this[dir1].current.modActer(val1);
    this[dir2].current.modActer(val2);

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
      <Container maxWidth="lg" >
        <Box className={classes.root}>
          <Box className={classes.header}>
            <h1>DND Stat Distribution</h1>
          </Box>
        </Box>

        
        
        <br/>
        <Grid container direction="row" spacing={3} justifyContent="flex-start" alignItems="flex-start">
          
          <Grid item direction="column" justifyContent="flex-start" alignItems="flex-start" className="Main-table">
            <Box className={classes.root}>
              <Box className={classes.sub_head}>
                <h2>Total Points: {this.state.points}</h2>
              </Box>
            </Box>
            
            <Stat_block stat="str" appState={this.state} ref={this.str}/>
            <Stat_block stat="dex" appState={this.state} ref={this.dex}/>
            <Stat_block stat="con" appState={this.state} ref={this.con}/>
            <Stat_block stat="int" appState={this.state} ref={this.int}/>
            <Stat_block stat="wis" appState={this.state} ref={this.wis}/>
            <Stat_block stat="cha" appState={this.state} ref={this.cha}/>
          </Grid>
          
          <Grid item direction="row" justifyContent="flex-start" alignItems="flex-start">
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
