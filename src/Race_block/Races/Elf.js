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

class Elf extends React.Component {
    constructor(props) {
      super(props);
  
      
    }
    render() {
        return(
            <Elf_block updateStats={this.props.updateStats} />
        );
       
    }
}
export default Elf;

export function Elf_block(props){
    const classes = style();
    const [elf, setElf] = useState('');


    return (
        <Grid container direction="row">
          <Box component="div" className={classes.raceInfo}>
            <Typography>
              <strong>Stat Bonus. +2 DEX</strong>
              <br />
              <strong>Size. Medium | Speed. 25 ft</strong>
              <br />
              <strong>Languages.</strong> Common, Elvish
              <br />
              <strong>Darkvision.</strong> 60 ft
              <br />
              <strong>Keen Senses.</strong> Proficiency in Perception <br />
              <strong>Fey Ancestry.</strong> Advantage on saving throws against
              being charmed. Magic can’t put you to sleep.
              <br />
              <strong>Trance. </strong>Dont need to sleep. Instead require 4
              hours of semi conscious meditation.
              <br />
              {elf === "high" ? (
                <Box component="div">
                  <strong>Extra Languages</strong> One of your choice <br />
                  <strong>Elf Weapon Training.</strong> Proficiency with
                  Longswords, Shortswords, Shortbows, and Longbows <br />
                  <strong>Cantrip.</strong> One cantrip of your choice from the
                  wizard spell list. Intelligence is your spellcasting ability
                  for it. <br />
                </Box>
              ) : elf === "wood" ? (
                <Box component="div">
                  <strong>Elf Weapon Training.</strong> Proficiency with
                  Longswords, Shortswords, Shortbows, and Longbows
                  <br />
                  <strong>Mask of the wild.</strong> You can attempt to hide
                  when only lightly obscured by foliage, heavy rain, falling
                  snow, mist, and other natural phenomena. <br />
                </Box>
              ) : elf === "dark" ? (
                <Box component="div">
                  <strong>Superior Darkvision.</strong> 120 ft <br />
                  <strong>Sunlight Sensitivity.</strong> Disadvantage on attack
                  rolls and Perception checks that rely on sight when you or
                  your target are in direct sunlight. <br />
                  <strong>Drow Magic.</strong>
                  You know the Dancing Lights (PHB.230) cantrip. At 3rd level,
                  you can cast Faerie Fire (PHB.239) once per day. At 5th level,
                  you can cast the Darkness (PHB.230) spell once per day.
                  Charisma is your spellcasting ability for these spells. <br />
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
                  props.updateStats("dex", +2, "int", +1);
                  setElf("high");
                }}
              >
                High Elf <br />
                +1 INT
              </Button>
              <Button
                className={classes.button}
                type="button"
                onClick={() => {
                  props.updateStats("dex", +2, "wis", +1);
                  setElf("wood");
                }}
              >
                Wood Elf <br />
                +1 WIS
              </Button>
              <Button
                className={classes.button}
                type="button"
                onClick={() => {
                  props.updateStats("dex", +2, "cha", +1);
                  setElf("dark");
                }}
              >
                Dark Elf <br />
                +1 CHA
              </Button>
            </ButtonGroup>
          </Box>
        </Grid>
      );
}


  /*
<Box component="div" className={classes.raceInfo}>
            <Typography>
              <strong>Stat Bonus. +2 DEX</strong>
              <br />
              <strong>Size. Medium | Speed. 25 ft</strong>
              <br />
              <strong>Languages.</strong> Common, Elvish
              <br />
              <strong>Darkvision.</strong> 60 ft
              <br />
              <strong>Keen Senses.</strong> Proficiency in Perception <br />
              <strong>Fey Ancestry.</strong> Advantage on saving throws against
              being charmed. Magic can’t put you to sleep.
              <br />
              <strong>Trance. </strong>Dont need to sleep. Instead require 4
              hours of semi conscious meditation.
              <br />
              {elf === "high" ? (
                <Box component="div">
                  <strong>Extra Languages</strong> One of your choice <br />
                  <strong>Elf Weapon Training.</strong> Proficiency with
                  Longswords, Shortswords, Shortbows, and Longbows <br />
                  <strong>Cantrip.</strong> One cantrip of your choice from the
                  wizard spell list. Intelligence is your spellcasting ability
                  for it. <br />
                </Box>
              ) : elf === "wood" ? (
                <Box component="div">
                  <strong>Elf Weapon Training.</strong> Proficiency with
                  Longswords, Shortswords, Shortbows, and Longbows
                  <br />
                  <strong>Mask of the wild.</strong> You can attempt to hide
                  when only lightly obscured by foliage, heavy rain, falling
                  snow, mist, and other natural phenomena. <br />
                </Box>
              ) : elf === "dark" ? (
                <Box component="div">
                  <strong>Superior Darkvision.</strong> 120 ft <br />
                  <strong>Sunlight Sensitivity.</strong> Disadvantage on attack
                  rolls and Perception checks that rely on sight when you or
                  your target are in direct sunlight. <br />
                  <strong>Drow Magic.</strong>
                  You know the Dancing Lights (PHB.230) cantrip. At 3rd level,
                  you can cast Faerie Fire (PHB.239) once per day. At 5th level,
                  you can cast the Darkness (PHB.230) spell once per day.
                  Charisma is your spellcasting ability for these spells. <br />
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
                  props.updateStats("dex", +2, "int", +1);
                  setElf("high");
                }}
              >
                High Elf <br />
                +1 INT
              </Button>
              <Button
                className={classes.button}
                type="button"
                onClick={() => {
                  props.updateStats("dex", +2, "wis", +1);
                  setElf("wood");
                }}
              >
                Wood Elf <br />
                +1 WIS
              </Button>
              <Button
                className={classes.button}
                type="button"
                onClick={() => {
                  props.updateStats("dex", +2, "cha", +1);
                  setElf("dark");
                }}
              >
                Dark Elf <br />
                +1 CHA
              </Button>
            </ButtonGroup>
          </Box>
  */