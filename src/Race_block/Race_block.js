import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { Box } from "@material-ui/core";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";

import Dwarf from './Races/Dwarf.js';
import Elf from './Races/Elf.js';
import Halfling from './Races/Halfling.js';
import Human  from './Races/Human.js';
import Dragonborn  from './Races/Dragonborn.js';

const style = makeStyles({
  root: {
    width: "70%",

    backgroundColor: "green",
    margin: "12px",
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


class Race_block extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        updateStats: this.updateStats
    };
  }

  updateStats = (dir1, val1, dir2, val2) => {
    this.props.appState.update_Stats(dir1, val1, dir2, val2);
  };

  render() {
    return <CustomizedAccordions updateStats={this.updateStats} variantHuman={this.props.appState.variant_Human} />;
  }
}
export default Race_block;

export function CustomizedAccordions(props) {
  const classes = style();
  

  const [expanded, setExpanded] = React.useState("panel1");
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box className={classes.root}>
      <Accordion
        square
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Dwarf</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Dwarf updateStats={props.updateStats}/>
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
            <Elf updateStats={props.updateStats}/>
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
            <Halfling updateStats={props.updateStats}/>
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
            <Human variantHuman={props.variantHuman}/>
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
            <Dragonborn updateStats={props.updateStats}/>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}

/*
<Accordion
        square
        expanded={expanded === "panel#"}
        onChange={handleChange("panel#")}
      >
        <AccordionSummary aria-controls="panel#d-content" id="panel#d-header">
          <Typography></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box component="div" className={classes.raceInfo}>
            <Typography>
              <strong></strong>
              <br />
              <strong></strong>
              <br />
              <strong></strong> 
              <br />
              { === "" ? (
                <Box component="div">
                  <strong></strong> <br />
                </Box>
              ) :  === "" ? (
                <Box component="div">
                  <strong> </strong>
                  
                  <br />
                </Box>
              ) :  === "" ? (
                <Box component="div">
                  <strong></strong>  <br />
                </Box>
              ) : (
                <Box></Box>
              )}
            </Typography>
          </Box>
          <Box component="div" className={classes.raceButtons}>
            <ButtonGroup
              className={classes.buttonGroup}
              orientation="vertical"
              size="small"
              color="primary"
              variant="contained"
            >
              <Button
                className={classes.button}
                type="button"
                onClick={() => {
                  props.updateStats("dex", +2, "cha", +1);
                  set("");
                }}
              >
                <br />
                
              </Button>
              <Button
                className={classes.button}
                type="button"
                onClick={() => {
                  props.updateStats("dex", +2, "con", +1);
                  ("");
                }}
              >
                <br />
                
              </Button>
              <Button
                className={classes.button}
                type="button"
                onClick={() => {
                  props.updateStats("dex", +2, "wis", +1);
                  ("");
                }}
              >
                 <br />
                
              </Button>
            </ButtonGroup>
          </Box>
        </AccordionDetails>
      </Accordion>
*/