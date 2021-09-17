import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Box, Grid, Button, ButtonGroup} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";


const style = makeStyles({
    raceInfo: {
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: "75%",
      },
      raceButtons: {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-start",
        width:"25%",
      },
      buttonGroup: {
        height: "50px",
        width: "240px",
      },
      button: {
        padding: "12px",
      },

});

class Tiefling extends React.Component {
    render() {
        return(
            <TieflingBlock updateStats={this.props.updateStats} 
            updateRace={this.props.updateRace}
            />
        );
    }
}
export default Tiefling;

export function TieflingBlock(props){
    const classes = style();
    return (
      <Grid container direction="row">
        <Box component="div" className={classes.raceInfo}>
          <Typography>
            <strong>Stat Bonus. +2 CHA | +1 INT</strong>
            <br />
            <strong>Size. Medium | Speed. 30 ft</strong>
            <br />
            <strong>Languages: </strong> Common, Infernal
            <br />
            <strong>Darkvision.</strong> 60 ft
            <br />
            <strong>Hellish Resistance.</strong> Resistance to Fire Damage
            <br />
            <strong>Infernal Legacy.</strong> You know the Thaumaturgy (PHB.282)
            cantrip. Once you reach 3rd level, you can cast the Hellish Rebuke
            (PHB.250) spell once per day as a 2nd-level spell. Once you reach 5th
            level, you can also cast the Darkness (PHB.230) spell once per long
            rest. Charisma is your spellcasting ability for these spells.
            <br />
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
                props.updateRace("Teifling");
                props.updateStats("cha", +2, "int", +1);
              }}
            >
              Teifling <br />
            </Button>
          </ButtonGroup>
        </Box>
      </Grid>
    );
}
