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
        height: "40px",
        width: "240px",
      },
      button: {
        padding: "8px",
      },

});

class HalfElf extends React.Component {
    render() {
        return(
            <HalfElfBlock variantHuman={this.props.variantHuman}
            updateRace={this.props.updateRace}
            />
        );
    }
}
export default HalfElf;

export function HalfElfBlock(props){
    const classes = style();
    const [halfELf, setHalfElf] = useState('');

    return (
      <Grid container direction="row">
        <Box component="div" className={classes.raceInfo}>
          <Typography>
            <strong>Stat Bonus. +2 CHA | +1 to Two Other Stats</strong>
            <br />
            <strong>Size. Medium | Speed. 30 ft</strong>
            <br />
            <strong>Languages: </strong> Common, Elvish, and one language of
            your choice
            <br />
            <strong>Darkvision.</strong> 60 ft
            <br />
            <strong>Fey Ancestry.</strong> Advantage on saving throws against
            being charmed. Magic can’t put you to sleep.
            <br />
            {halfELf === "base" ? (
              <Box component="div">
                <strong>Skill Versatility.</strong> Proficiency in two skills of
                your choice
                <br />
              </Box>
            ) : halfELf === "wood" ? (
              <Box component="div">
                <strong>Elf Weapon Training.</strong> Proficiency with
                Longswords, Shortswords, Shortbows, and Longbows
                <br />
                <strong>Mask of the wild.</strong>
                You can attempt to hide when only lightly
                obscured by foliage, heavy rain, falling snow, mist, and other
                natural phenomena.
                <br />
              </Box>
            ) : halfELf === "high" ? (
              <Box component="div">
                <strong>High Elf descent.</strong> Elf Weapon Training, or Cantrip<br />
                <strong>Elf Weapon Training.</strong> Proficiency with
                Longswords, Shortswords, Shortbows, and Longbows
                <br />
              </Box>
            ) : halfELf === "drow" ? (
              <Box component="div">
                <strong>Drow Descent.</strong> Drow Magic<br />
                <strong>Drow Magic.</strong>
                  You know the Dancing Lights (PHB.230) cantrip. At 3rd level,
                  you can cast Faerie Fire (PHB.239) once per day. At 5th level,
                  you can cast the Darkness (PHB.230) spell once per day.
                  Charisma is your spellcasting ability for these spells. <br />
              </Box>
            ) : halfELf === "aquatic" ? (
              <Box component="div">
                <strong>Aquatic.</strong> 30 ft Swim Speed<br />
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
                props.variantHuman("halfelf");
                props.updateRace("Base Half-Elf");
                setHalfElf("base");
              }}
            >
                Base Half-Elf<br />

            </Button>
            <Button
              className={classes.button}
              type="button"
              onClick={() => {
                props.variantHuman("halfelf");
                props.updateRace("Wood Elf Descent Half-Elf");
                setHalfElf("wood");
              }}
            >
              Wood Elf Descent <br />
            </Button>
            <Button
              className={classes.button}
              type="button"
              onClick={() => {
                props.variantHuman("halfelf");
                props.updateRace("High Elf Descent Half-Elf");
                setHalfElf("high");
              }}
            >
              High Elf Descent <br />
            </Button>
            <Button
              className={classes.button}
              type="button"
              onClick={() => {
                props.variantHuman("halfelf");
                props.updateRace("Drow Descent Half-Elf");
                setHalfElf("drow");
              }}
            >
              Drow Descent <br />
            </Button>
            <Button
              className={classes.button}
              type="button"
              onClick={() => {
                props.variantHuman("halfelf");
                props.updateRace("Aquatic Half-Elf");
                setHalfElf("aquatic");
              }}
            >
              Aquatic <br />
            </Button>
          </ButtonGroup>
        </Box>
      </Grid>
    );
}
