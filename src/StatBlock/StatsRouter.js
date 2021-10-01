import React from "react";

import StatBlock from "./StatBlock";
import { withStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

const styles = (theme) => ({
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
});

class StatsRouter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      points: 27,

      race_points: 0,

      race_selection: {
        selected: "",
        human: "",
        stat1: "",
        stat2: "",
        val1: 0,
        val2: 0,
      },

      access_Stat_Data: this.access_Stat_Data,
      adjust_Race_Points: this.adjust_Race_Points,
      access_Stat_Score: this.access_Stat_Score,
      update_Skill_Score: this.update_Skill_Score,
      adjust_Points: this.adjust_Points,
      variant_Human: this.variant_Human,
      update_Stats: this.update_Stats,
      warning_Alert: this.warning_Alert,
    };
    this.str = React.createRef();
    this.dex = React.createRef();
    this.con = React.createRef();
    this.int = React.createRef();
    this.wis = React.createRef();
    this.cha = React.createRef();
  }

  update_Skill_Score = () => {
    this.props.appState.update_Skill_Score();
  };

  adjust_Race_Points = (val, stat) => {
    var curRace = { ...this.state.race_selection };

    if (val === -2 || (val === -1 && stat === "-")) {
      this.setState((state) => ({
        race_points: state.race_points + val,
      }));
      this.props.appState.update_Stat_Points(this.state.points);
    } else if (val === 2) {
      this.setState((state) => ({
        race_points: state.race_points + val,
      }));
      
    } else if (val === -1) {
      
      if (curRace.val1 === 0) {
        curRace.stat1 = stat;
        curRace.val1 = -val;
        curRace.selected = true;
      } else {
        curRace.stat2 = stat;
        curRace.val2 = -val;
        curRace.selected = true;
      }
      this.setState((state) => ({
        race_points: state.race_points + val,
      }));
      this.setState({ race_selection: curRace });
    }
  };

  adjust_Points = (val) => {
    this.setState((state) => ({
      points: state.points + val,
    }));
    this.props.appState.update_Stat_Points(this.state.points + val);
  };

  variant_Human = (selection) => {
    var curRace = { ...this.state.race_selection };

    if (this.state.race_points >= 2) {
      this.adjust_Race_Points(-2);
    } else if (this.state.race_points === 1) {
      this.adjust_Race_Points(-1, "-");
    }

    if (curRace.selected) {
      if (curRace.stat1) {
        this[curRace.stat1].current.raceStatPoints([curRace.val1] * -1);
      }
      if (curRace.stat2) {
        this[curRace.stat2].current.raceStatPoints([curRace.val2] * -1);
      }

      curRace.val1 = 0;
      curRace.val2 = 0;
      curRace.selected = false;

      this.setState({ race_selection: curRace });
    }
    this.remove_Variance();

    if (selection === "base") {
      this.str.current.raceStatPoints(1);
      this.dex.current.raceStatPoints(1);
      this.con.current.raceStatPoints(1);
      this.int.current.raceStatPoints(1);
      this.wis.current.raceStatPoints(1);
      this.cha.current.raceStatPoints(1);

      curRace.human = "base";
    } else if (selection === "variant") {
      curRace.human = "variant";
      this.adjust_Race_Points(2);
    } else if (selection === "halfelf") {
      curRace.human = "halfelf";
      this.cha.current.raceStatPoints(2);
      this.adjust_Race_Points(2);
    }

    this.setState({ race_selection: curRace });
    this.update_Skill_Score();
  };

  remove_Variance = () => {
    var curRace = { ...this.state.race_selection };

    if (curRace.human === "base") {
      this.str.current.raceStatPoints(-1);
      this.dex.current.raceStatPoints(-1);
      this.con.current.raceStatPoints(-1);
      this.int.current.raceStatPoints(-1);
      this.wis.current.raceStatPoints(-1);
      this.cha.current.raceStatPoints(-1);
    } else if (curRace.human === "variant") {
      if (this.state.race_points === 2) {
        this.adjust_Race_Points(-2);
      } else if (this.state.race_points === 1) {
        this.adjust_Race_Points(-1, "-");
      }
    } else if (curRace.human === "halfelf") {
      if (this.state.race_points === 2) {
        this.adjust_Race_Points(-2);
      } else if (this.state.race_points === 1) {
        this.adjust_Race_Points(-1, "-");
      }
      this.cha.current.raceStatPoints(-2);
    }
  };

  update_Stats = (dir1, val1, dir2, val2) => {
    var curRace = { ...this.state.race_selection };
    curRace.human = "";

    this.remove_Variance();

    if (!this.state.race_selection.selected) {
      this[dir1].current.raceStatPoints(val1);
      this[dir2].current.raceStatPoints(val2);

      curRace.selected = true;
    } else {
      this[curRace.stat1].current.raceStatPoints([curRace.val1] * -1);
      this[curRace.stat2].current.raceStatPoints([curRace.val2] * -1);

      this[dir1].current.raceStatPoints(val1);
      this[dir2].current.raceStatPoints(val2);
    }

    curRace.stat1 = dir1;
    curRace.stat2 = dir2;
    curRace.val1 = val1;
    curRace.val2 = val2;
    this.setState({ race_selection: curRace });
    this.update_Skill_Score();
    //console.log(JSON.stringify(this.state));
  };

  access_Stat_Data = (dir) => {
    const stat_element = this[dir].current;

    return stat_element.accessData();
    //console.log(stat_element.state.score);
  };

  access_Stat_Score = (dir) => {
    const stat_element = this[dir].current;

    return stat_element.accessScore();
    //console.log(stat_element.state.score);
  };

  warning_Alert = (info) => {
    this.props.appState.warning_Alert(info);
  };

  render() {
    const { classes } = this.props;

    return (
      <Box>
        <Box className={`${classes.root} ${classes.sub_head}`}>
          <h2>Stat Points: {this.state.points}
          {this.state.race_points>0 ?"+"+this.state.race_points : ''}
          </h2>
        </Box>
        <Box component="div" className={classes.statSection}>
          <StatBlock stat="str" appState={this.state} ref={this.str} />
          <StatBlock stat="dex" appState={this.state} ref={this.dex} />
          <StatBlock stat="con" appState={this.state} ref={this.con} />
          <StatBlock stat="int" appState={this.state} ref={this.int} />
          <StatBlock stat="wis" appState={this.state} ref={this.wis} />
          <StatBlock stat="cha" appState={this.state} ref={this.cha} />
        </Box>
      </Box>
    );
  }
}
export default withStyles(styles, { withTheme: true })(StatsRouter);
