import React, { Component } from "react";
import { Box, Button } from "@material-ui/core/";

/*
import { exportDragonborn } from "../RaceBlock/Races/Dragonborn";
import { exportElf } from "../RaceBlock/Races/Elf";
import { exportGnome } from "../RaceBlock/Races/Gnome";
import { exportHalfElf } from "../RaceBlock/Races/HalfElf";
import { exportHalfling } from "../RaceBlock/Races/Halfling";
import { exportHalfOrc } from "../RaceBlock/Races/HalfOrc";
import { exportHuman } from "../RaceBlock/Races/Human";
*/
import { exportDwarf } from "../RaceBlock/Races/Dwarf";

import { exportTiefling } from "../RaceBlock/Races/Tiefling";

export default class SaveCharacter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Stats: {
        str: {
          stat: 8,
          race_stat: 0,
          score: -1,
        },
        dex: {
          stat: 8,
          race_stat: 0,
          score: -1,
        },
        con: {
          stat: 8,
          race_stat: 0,
          score: -1,
        },
        int: {
          stat: 8,
          race_stat: 0,
          score: -1,
        },
        wis: {
          stat: 8,
          race_stat: 0,
          score: -1,
        },
        cha: {
          stat: 8,
          race_stat: 0,
          score: -1,
        },
      },
      Skills: {
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
      Race: {
        title: "",
        sub: "",
      },
      Background: {
        name: "",
        skills: "",
        lang: "",
        tools: "",
      },
      Class: {
        title: "",
        skills: [],
        data: {},
      },

      testing: [],
    };
  }

  collect_stats = () => {
    var stats = { ...this.props.appState.stats.current.state };

    var str = stats.access_Stat_Data("str");
    var dex = stats.access_Stat_Data("dex");
    var con = stats.access_Stat_Data("con");
    var int = stats.access_Stat_Data("int");
    var wis = stats.access_Stat_Data("wis");
    var cha = stats.access_Stat_Data("cha");

    this.setState((state) => ({
      Stats: {
        str: str,
        dex: dex,
        con: con,
        int: int,
        wis: wis,
        cha: cha,
      },
    }));
  };

  collect_skills = () => {
    var skills = { ...this.props.appState.skills.current.state };

    this.setState((state) => ({
      Skills: {
        acro: skills.acro,
        anim: skills.anim,
        arca: skills.arca,
        athl: skills.athl,
        dece: skills.dece,
        hist: skills.hist,
        insi: skills.insi,
        inti: skills.inti,
        inve: skills.inve,
        medi: skills.medi,
        natu: skills.natu,
        perc: skills.perc,
        perf: skills.perf,
        pers: skills.pers,
        reli: skills.reli,
        slei: skills.slei,
        stea: skills.stea,
        surv: skills.surv,
      },
    }));
  };

  collect_race = () => {
    if (this.props.appState.races.current) {
      var races = { ...this.props.appState.races.current.state };

      var raceData = races.accessRaceInfo();
      this.setState({ Race: raceData });
    }
  };

  collect_background = () => {
    if (this.props.appState.background.current) {
      var background = { ...this.props.appState.background.current.state };

      this.setState({
        Background: {
          name: background.name,
          skills: background.skills,
          lang: background.lang,
          tools: background.tools,
        },
      });
    }
  };

  save_Info = () => {
    this.collect_stats();
    this.collect_skills();
    this.collect_race();
    this.collect_background();
    console.log(JSON.stringify(this.state));
  };

  testShit = () => {
    return <Box>{exportDwarf(this.state.Race.sub)}</Box>;
  };

  render() {
    return (
      <Box>
        <Button
          size="large"
          color="primary"
          variant="contained"
          onClick={() => this.save_Info()}
        >
          Save Character
        </Button>

        {this.testShit()}
      </Box>
    );
  }
}
