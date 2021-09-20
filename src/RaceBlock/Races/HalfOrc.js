import React from "react";
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

class HalfOrc extends React.Component {
    render() {
        return(
            <HalfOrcBlock updateStats={this.props.updateStats}
            updateRace={this.props.updateRace}
             />
        );
    }
}
export default HalfOrc;

export function HalfOrcBlock(props){
    const classes = style();
    return (
      <Grid container direction="row">
        <Box component="div" className={classes.raceInfo}>
          <Typography>
            <strong>Stat Bonus. +2 STR | +1 CON</strong>
            <br />
            <strong>Size. Medium | Speed. 30 ft</strong>
            <br />
            <strong>Languages: </strong> Common, Orc
            <br />
            <strong>Darkvision.</strong> 60 ft
            <br />
            <strong>Menacing.</strong> Proficient in Intimidation
            <br />
            <strong>Relentless Endurance.</strong> When you are reduced to 0 hit
            points but not killed, you can drop to 1 hit point instead. Once per
            long rest
            <br />
            <strong>Savage Attacks.</strong> When you score a critical hit in
            melee, you can roll another of the weapons damage dice and add it to
            the damage
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
                props.updateStats("str", +2, "con", +1);
                props.updateRace("Half-Orc");
              }}
            >
              Half-Orc <br />
              
            </Button>
           
          </ButtonGroup>
        </Box>
      </Grid>
    );
}
