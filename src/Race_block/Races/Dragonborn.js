import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid, Button, ButtonGroup } from "@material-ui/core";
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
    width: "25%",
  },
  buttonGroup: {
    height: "50px",
    width: "240px",
  },
  button: {
    padding: "12px",
  },
});

class Dragonborn extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Dragonborn_block updateStats={this.props.updateStats} />;
  }
}
export default Dragonborn;

export function Dragonborn_block(props) {
  const classes = style();
  const [dragon, setDragon] = useState('');



  return (
    <Grid container direction="row">
      <Box component="div" className={classes.raceInfo}>
            <Typography>
              <strong>Stat Bonus. +2 STR | +1 CHA</strong>
              <br />
              <strong>Size. Medium | Speed. 30ft</strong>
              <br />
              <strong>Languages.</strong> Common, Draconic
              <br />
              <strong>Breath Weapon.</strong> 2d6 Damage, 3d6 at level 6, 4d6
              at level 11, 5d6 at level 16. Damage type based on dragon. Half
              damage on successful save. Once per long/short rest. Saving throw
              DC = 8 + Con. Mod + Proficiency
              <br />
              <strong>Resistance.</strong> Resistance to damage type based on
              the type of dragon
              <br />
              {dragon === "black" ? (
                <Box component="div">
                  <strong></strong> <br />
                </Box>
              ) : dragon === "blue" ? (
                <Box component="div">
                  <strong> </strong>

                  <br />
                </Box>
              ) : dragon === "brass" ? (
                <Box component="div">
                  <strong></strong> <br />
                </Box>
              ) : (
                <Box></Box>
              )}
            </Typography>
          </Box>
          <Box component="div" className={classes.raceButtons}>
            
          </Box>
    </Grid>
  );
}

/*
<Box component="div" className={classes.raceInfo}>
            <Typography>
              <strong>Stat Bonus. +2 STR | +1 CHA</strong>
              <br />
              <strong>Size. Medium | Speed. 30ft</strong>
              <br />
              <strong>Languages.</strong> Common, Draconic
              <br />
              <strong>Breath Weapon.</strong> 2d6 Damage, 3d6 at level 6, 4d6
              at level 11, 5d6 at level 16. Damage type based on dragon. Half
              damage on successful save. Once per long/short rest. Saving throw
              DC = 8 + Con. Mod + Proficiency
              <br />
              <strong>Resistance.</strong> Resistance to damage type based on
              the type of dragon
              <br />
              {dragon === "black" ? (
                <Box component="div">
                  <strong></strong> <br />
                </Box>
              ) : dragon === "blue" ? (
                <Box component="div">
                  <strong> </strong>

                  <br />
                </Box>
              ) : dragon === "brass" ? (
                <Box component="div">
                  <strong></strong> <br />
                </Box>
              ) : (
                <Box></Box>
              )}
            </Typography>
          </Box>
          <Box component="div" className={classes.raceButtons}>
            
          </Box>
  */
