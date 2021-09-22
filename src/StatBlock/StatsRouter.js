import React from "react";

import StatBlock from "./StatBlock";
import { withStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";

const styles = (theme) => ({
  statSection: {},
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

  adjust_Race_Points = (val, stat) =>{

    var curRace = { ...this.state.race_selection };

    if(val ===2){
        this.setState((state) => ({
            race_points: state.race_points + val,
          }));
        this.props.appState.update_Stat_Points(
            this.state.points + " + "+ (this.state.race_points + val)
        );
    } else if (val === -1) {
        this.setState((state) => ({
            race_points: state.race_points + val
        }));
        this.props.appState.update_Stat_Points(
            this.state.points + " + "+ (this.state.race_points + val)
        );

        if(curRace.stat1 === ''){
            curRace.stat1 = stat;
            curRace.val1 = -val;
            curRace.selected = true;
            this.setState({ race_selection: curRace });
        }else{
            curRace.stat2 = stat;
            curRace.val2 = -val;
            curRace.selected = true;
            this.setState({ race_selection: curRace });
        }
    } else if ( val === -2){

        this.props.appState.update_Stat_Points(
            this.state.points 
        );
    }

    console.log(JSON.stringify(this.state));
    
  }

  adjust_Points = (val) => {
    this.setState((state) => ({
      points: state.points + val,
    }));
    this.props.appState.update_Stat_Points(
      (this.state.points + val)  + this.state.race_points
    );

    console.log(JSON.stringify(this.state));

  }

  variant_Human = (selection) => {
    var curRace = { ...this.state.race_selection };

    if (this.state.race_selection.selected) {
      this[curRace.stat1].current.adjustStat([curRace.val1] * -1);
      this[curRace.stat2].current.adjustStat([curRace.val2] * -1);

      curRace.val1 = 0;
      curRace.val2 = 0;
      curRace.selected = false;

      this.setState({ race_selection: curRace });
    } else if (curRace.human === "base") {
      this.str.current.adjustStat(-1);
      this.dex.current.adjustStat(-1);
      this.con.current.adjustStat(-1);
      this.int.current.adjustStat(-1);
      this.wis.current.adjustStat(-1);
      this.cha.current.adjustStat(-1);
      curRace.human = "";
      this.setState({ race_selection: curRace });

    } else if (curRace.human === "variant") {
      this.adjust_Race_Points(-2);
      curRace.human = "";
      this.setState({ race_selection: curRace });

    } else if (curRace.human === "halfelf") {
      this.cha.current.adjustStat(-2);
      curRace.human = "";
      this.setState({ race_selection: curRace });
      this.adjust_Race_Points(-2);
    }

    if (selection === "base") {
      this.str.current.adjustStat(1);
      this.dex.current.adjustStat(1);
      this.con.current.adjustStat(1);
      this.int.current.adjustStat(1);
      this.wis.current.adjustStat(1);
      this.cha.current.adjustStat(1);

      curRace.human = "base";
      this.setState({ race_selection: curRace });
    } else if (selection === "variant") {
      curRace.human = "variant";
      this.setState({ race_selection: curRace });
      this.adjust_Race_Points(2);
    } else if (selection === "halfelf") {
      curRace.human = "halfelf";
      this.cha.current.adjustStat(2);
      this.setState({ race_selection: curRace });
      this.adjust_Race_Points(2);
    }

    this.update_Skill_Score();
  };

  update_Stats = (dir1, val1, dir2, val2) => {
    var curRace = { ...this.state.race_selection };

    if (curRace.human === "base") {
      this.str.current.adjustStat(-1);
      this.dex.current.adjustStat(-1);
      this.con.current.adjustStat(-1);
      this.int.current.adjustStat(-1);
      this.wis.current.adjustStat(-1);
      this.cha.current.adjustStat(-1);
      curRace.human = "";
      this.setState({ race_selection: curRace });
    } else if (curRace.human === "variant") {
      this.adjust_Race_Points(-2);
      curRace.human = "";
      this.setState({ race_selection: curRace });
    } else if (curRace.human === "halfelf") {
      this.cha.current.adjustStat(-2);
      curRace.human = "";
      this.setState({ race_selection: curRace });
      this.adjust_Race_Points(-2);
    }

    if (!this.state.race_selection.selected) {
      this[dir1].current.adjustStat(val1);
      this[dir2].current.adjustStat(val2);

      curRace.selected = true;
    } else {
      this[curRace.stat1].current.adjustStat([curRace.val1] * -1);
      this[curRace.stat2].current.adjustStat([curRace.val2] * -1);

      this[dir1].current.adjustStat(val1);
      this[dir2].current.adjustStat(val2);
    }

    curRace.stat1 = dir1;
    curRace.stat2 = dir2;
    curRace.val1 = val1;
    curRace.val2 = val2;
    this.setState({ race_selection: curRace });
    this.update_Skill_Score();
    //console.log(JSON.stringify(this.state));
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
      <Box component="div" className={classes.statSection}>
        <StatBlock stat="str" appState={this.state} ref={this.str} />
        <StatBlock stat="dex" appState={this.state} ref={this.dex} />
        <StatBlock stat="con" appState={this.state} ref={this.con} />
        <StatBlock stat="int" appState={this.state} ref={this.int} />
        <StatBlock stat="wis" appState={this.state} ref={this.wis} />
        <StatBlock stat="cha" appState={this.state} ref={this.cha} />
      </Box>
    );
  }
}
export default withStyles(styles, { withTheme: true })(StatsRouter);
