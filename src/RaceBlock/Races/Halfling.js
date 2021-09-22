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

class Halfling extends React.Component {
  render() {
    return <HalflingBlock updateStats={this.props.updateStats} 
    updateRace={this.props.updateRace}
    />
  }
}
export default Halfling;

export function HalflingBlock(props) {
  const classes = style();
  const [halfing, setHalfing] = useState('');


  return (
    <Grid container direction="row">
      <Box component="div" className={classes.raceInfo}>
        <Typography>
          <strong>Stat Bonus. +2 DEX</strong>
          <br />
          <strong>Size. Small | Speed. 25 ft</strong>
          <br />
          <strong>Lucky.</strong> You may reroll 1’s on attack rolls, ability
          checks, or saving throws. Must use the new roll.
          <br />
          <strong>Brave.</strong> You have advantage on saving throws against
          being frightened.
          <br />
          <strong>Halfling Nimbleness.</strong> You may move through the space
          of any creature that is a size larger than yours.
          <br />
          {halfing === "lightfoot" ? (
            <>
              <strong>Naturally Stealthy.</strong> You can attempt to hide even
              when obscured only by a creature at least 1 size larger than you.{" "}
              <br />
            </>
          ) : halfing === "stout" ? (
            <>
              <strong>Stout Resilience. </strong>
              Advantage on saving throws against poison. Resistance against
              poison damage
              <br />
            </>
          ) : halfing === "ghostwise" ? (
            <>
              <strong>Silent Speech.</strong> You can speak telepathically to
              any creature within 30 ft. Must share a language for it to
              understand you. One creature at a time. <br />
            </>
          ) : (
            <></>
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
              props.updateRace("Lightfoot Halfling");
              setHalfing("lightfoot");
            }}
          >
            Lightfoot Halfling <br />
            +1 CHA
          </Button>
          <Button
            className={classes.button}
            type="button"
            onClick={() => {
              props.updateStats("dex", +2, "con", +1);
              props.updateRace("Stout Halfling");
              setHalfing("stout");
            }}
          >
            Stout Halfling <br />
            +1 CON
          </Button>
          <Button
            className={classes.button}
            type="button"
            onClick={() => {
              props.updateStats("dex", +2, "wis", +1);
              props.updateRace("Ghostwise Halfling");
              setHalfing("ghostwise");
            }}
          >
            Ghostwise Halfling <br />
            +1 WIS
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
              <strong>Size. Small | Speed. 25 ft</strong>
              <br />
              <strong>Lucky.</strong> You may reroll 1’s on attack rolls,
              ability checks, or saving throws. Must use the new roll.
              <br />
              <strong>Brave.</strong> You have advantage on saving throws
              against being frightened.
              <br />
              <strong>Halfling Nimbleness.</strong> You may move through the
              space of any creature that is a size larger than yours.
              <br />
              {halfing === "lightfoot" ? (
                <Box component="div">
                  <strong>Naturally Stealthy.</strong> You can attempt to hide
                  even when obscured only by a creature at least 1 size larger
                  than you. <br />
                </Box>
              ) : halfing === "stout" ? (
                <Box component="div">
                  <strong>Stout Resilience. </strong>
                  Advantage on saving throws against poison. Resistance against
                  poison damage
                  <br />
                </Box>
              ) : halfing === "ghostwise" ? (
                <Box component="div">
                  <strong>Silent Speech.</strong> You can speak telepathically
                  to any creature within 30 ft. Must share a language for it to
                  understand you. One creature at a time. <br />
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
                  setHalfing("lightfoot");
                }}
              >
                Lightfoot Halfling <br />
                +1 CHA
              </Button>
              <Button
                className={classes.button}
                type="button"
                onClick={() => {
                  props.updateStats("dex", +2, "con", +1);
                  setHalfing("stout");
                }}
              >
                Stout Halfling <br />
                +1 CON
              </Button>
              <Button
                className={classes.button}
                type="button"
                onClick={() => {
                  props.updateStats("dex", +2, "wis", +1);
                  setHalfing("ghostwise");
                }}
              >
                Ghostwise Halfling <br />
                +1 WIS
              </Button>
            </ButtonGroup>
          </Box>
  */
