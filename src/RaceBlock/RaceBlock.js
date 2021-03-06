import React, { useRef } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { Box, Button } from "@material-ui/core";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";

import Dwarf from "./Races/Dwarf.js";
import Elf from "./Races/Elf.js";
import Halfling from "./Races/Halfling.js";
import Human from "./Races/Human.js";
import Dragonborn from "./Races/Dragonborn.js";
import Gnome from "./Races/Gnome.js";
import HalfElf from "./Races/HalfElf.js";
import HalfOrc from "./Races/HalfOrc.js";
import Tiefling from "./Races/Tiefling.js";

const styles = theme =>({
  root: {    
    borderRadius: 3,
    color: 'white',
    boxShadow: '0 3px 5px 2px #1F2D33',
    textAlign: 'center',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  sub_head: {
    backgroundColor: theme.palette.primary2Color,
    marginBottom: '10px',
    fontSize: 14,
    height: 60,
    width:'100%',
  },
});

const Accordion = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    justifyContent: "center",
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    minHeight: "200px",
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

class RaceBlock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      raceData: "",

      updateStats: this.updateStats,
      variantHuman: this.props.appState.variant_Human,
      updateRace: this.props.appState.update_Race,
      saveRaceInfo: this.saveRaceInfo,
      accessRaceInfo: this.accessRaceInfo,
    };
  }

  accessRaceInfo = () => {
    return this.state.raceData;
  };

  saveRaceInfo = (raceData) => {
    this.setState({
      raceData: raceData,
    });
  };

  updateStats = (dir1, val1, dir2, val2) => {
    this.props.appState.update_Stats(dir1, val1, dir2, val2);
  };

  render() {
    const { classes } = this.props;

    return (
      <Box>
        <Button
          variant="contained"
          color="primary"
          className={`${classes.root} ${classes.sub_head}`}
          onClick={() => this.props.appState.menu_change("race")}
        >
          <Box>
            <h2>Race: {this.props.appState.race_title}</h2>
          </Box>
        </Button>
        {this.props.appState.menu_open === "race" ? (
          
          <Box component="div" style={{ marginBottom: "8px" }}>
            <CustomizedAccordions raceState={this.state} />
          </Box>
          
        ) : (
          <></>
        )}

        
      </Box>
    );
  }
}


export default withStyles(styles, {withTheme: true})(RaceBlock);

export function CustomizedAccordions(props) {
  //const classes = style();

  const [expanded, setExpanded] = React.useState("panel1");
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    //className={classes.root}
    <Box >
      <Accordion
        square
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Dwarf</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Dwarf raceState={props.raceState} />
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Elf</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Elf raceState={props.raceState} />
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Halfing</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Halfling raceState={props.raceState} />
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <Typography>Human</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Human raceState={props.raceState} />
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel5"}
        onChange={handleChange("panel5")}
      >
        <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
          <Typography>Dragonborn</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Dragonborn raceState={props.raceState} />
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel6"}
        onChange={handleChange("panel6")}
      >
        <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
          <Typography>Gnome</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Gnome raceState={props.raceState} />
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel7"}
        onChange={handleChange("panel7")}
      >
        <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
          <Typography>Half-Elf</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <HalfElf raceState={props.raceState} />
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel8"}
        onChange={handleChange("panel8")}
      >
        <AccordionSummary aria-controls="panel8d-content" id="panel8d-header">
          <Typography>Half-Orc</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <HalfOrc raceState={props.raceState} />
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel9"}
        onChange={handleChange("panel9")}
      >
        <AccordionSummary aria-controls="panel9d-content" id="panel9d-header">
          <Typography>Tiefling</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Tiefling raceState={props.raceState} />
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
