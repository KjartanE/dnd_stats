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

var raceInfo = (
  <>
    <strong>Stat Bonus. +2 DEX</strong>
    <br />
    <strong>Size. Small | Speed. 25 ft</strong>
    <br />
    <strong>Lucky.</strong> You may reroll 1’s on attack rolls, ability checks,
    or saving throws. Must use the new roll.
    <br />
    <strong>Brave.</strong> You have advantage on saving throws against being
    frightened.
    <br />
    <strong>Halfling Nimbleness.</strong> You may move through the space of any
    creature that is a size larger than yours.
    <br />
  </>
);

function subHalfing(sub) {
  var subRace = "";
  var subInfo = "";

  switch (sub) {
    case "Lightfoot":
      subRace = "Naturally Stealthy. ";
      subInfo =
        "You can attempt to hide even when obscured only by a creature at least 1 size larger than you.";
      break;
    case "Stout":
      subRace = "Stout Resilience. ";
      subInfo =
        "Advantage on saving throws against poison. Resistance against poison damage";
      break;
    case "Ghostwise":
      subRace = "Silent Speech. ";
      subInfo =
        "You can speak telepathically to any creature within 30 ft. Must share a language for it to understand you. One creature at a time. ";
      break;

    default:
      break;
  }

  return (
    <>
      <strong>{subRace}</strong>
      {subInfo}
    </>
  );
}

export function exportHalfling(sub) {
  return (
    <>
      {raceInfo}
      {subHalfing(sub)}
    </>
  );
}

export default function Halfling(props) {
  const classes = style();
  const [halfing, setHalfing] = useState("");

  const saveRaceInfo = (sub) => {
    var raceData = new Object({
      title: "Halfing",
      sub: sub,
    });
    return raceData;
  };

  return (
    <Grid container direction="row">
      <Box component="div" className={classes.raceInfo}>
        <Typography>{exportHalfling(halfing)}</Typography>
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
              setHalfing("Lightfoot");
              props.raceState.updateStats("dex", +2, "cha", +1);
              props.raceState.updateRace("Lightfoot Halfling");
              props.raceState.saveRaceInfo(saveRaceInfo("Lightfoot"));
            }}
          >
            Lightfoot Halfling <br />
            +1 CHA
          </Button>
          <Button
            className={classes.button}
            type="button"
            onClick={() => {
              setHalfing("Stout");
              props.raceState.updateStats("dex", +2, "con", +1);
              props.raceState.updateRace("Stout Halfling");
              props.raceState.saveRaceInfo(saveRaceInfo("Stout"));
            }}
          >
            Stout Halfling <br />
            +1 CON
          </Button>
          <Button
            className={classes.button}
            type="button"
            onClick={() => {
              setHalfing("Ghostwise");
              props.raceState.updateStats("dex", +2, "wis", +1);
              props.raceState.updateRace("Ghostwise Halfling");
              props.raceState.saveRaceInfo(saveRaceInfo("Ghostwise"));
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
