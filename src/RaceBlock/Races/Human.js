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
    <strong>Size. Medium | Speed. 30ft</strong>
    <br />
    <strong>Languages.</strong> Common, and one of your choice.
    <br />
  </>
);

function subHuman(sub) {
  var subInfo = "";

  if (sub === "Variant") {
    subInfo = (
      <>
        <strong>Replaces the Abliity Score Increase of base human</strong>{" "}
        <br />
        <strong>Ability Score Increase.</strong> +1 to two ability scores <br />
        <strong>Skills.</strong> Proficiency in one skill of your choice <br />
        <strong>Feat.</strong> One feat of your choice
      </>
    );
  } else {
    subInfo = (
      <>
        <strong>Stat Bonus. +1 STR | +1 DEX | +1 CON | +1 WIS | +1 CHA </strong>
        <br />
      </>
    );
  }
  return subInfo;
}

export function exportHuman(sub) {
  return (
    <>
      {raceInfo}
      {subHuman(sub)}
    </>
  );
}

export default function Human(props) {
  const classes = style();
  const [human, setHuman] = useState("");

  const saveRaceInfo = (sub) => {
    var raceData = new Object({
      title: "Human",
      sub: sub,
    });
    return raceData;
  };

  return (
    <Grid container direction="row">
      <Box component="div" className={classes.raceInfo}>
        <Typography>{exportHuman(human)}</Typography>
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
              setHuman("Base");
              props.raceState.variantHuman("base");
              props.raceState.updateRace("Base Human");
              props.raceState.saveRaceInfo(saveRaceInfo("Base"));
            }}
          >
            Base Human
            <br />
            +1 To All Stats
          </Button>
          <Button
            className={classes.button}
            type="button"
            onClick={() => {
              setHuman("Variant");
              props.raceState.variantHuman("variant");
              props.raceState.updateRace("Variant Human");
              props.raceState.saveRaceInfo(saveRaceInfo("Variant"));
            }}
          >
            Variant Human
            <br />
            +1 To Two Stats
          </Button>
        </ButtonGroup>
      </Box>
    </Grid>
  );
}
