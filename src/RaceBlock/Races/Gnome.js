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
    <strong>Stat Bonus. +2 INT</strong>
    <br />
    <strong>Size. Small | Speed. 25 ft</strong>
    <br />
    <strong>Languages: </strong> Common, Gnomish
    <br />
    <strong>Darkvision.</strong> 60 ft
    <br />
    <strong>Gnome Cunning.</strong> Advantage on all Intelligence, Wisdom, and
    Charisma saving throws against magic.
    <br />
  </>
);

function subGnome(sub) {
  var subInfo = "";

  switch (sub) {
    case "Forest":
      subInfo = (
        <>
          <strong>Natural Illusionist.</strong> You know the Minor Illusion
          (PHB.260) cantrip. Intelligence is your spellcasting ability for this
          spell. <br />
          <strong>Speak with Small Beasts.</strong>
          You can communicate simple ideas with small or smaller beasts
        </>
      );
      break;
    case "Rock":
      subInfo = (
        <>
          <strong>Artificer’s Lore.</strong>
          Double proficiency bonus on History checks related to magic items,
          alchemical objects, or technological devices
          <br />
          <strong>Tinker.</strong> Proficiency with Tinker’s Tools. Spend 1 Hour
          and 10 gp of materials to construct a Tiny Clockwork Device (AC5,
          1HP). Ceases to function after 24 hours. Up to 3 at a time, from the
          following options: Clockwork Toy. Small animal/person/monster. Moves 5
          ft on the ground in a random direction every turn. Makes Noise Fire
          Starter. Produces a miniature flame, which can be used to light a
          fire. Takes an action to use Music Box. Plays a single song at
          moderate volume when opened. Stops when closed or the song ends
          <br />
        </>
      );
      break;
    case "Deep":
      subInfo = (
        <>
          <strong>Superior Darkvision.</strong> 120 ft <br />
          <strong>Stone Camouflage. </strong> Advantage on Stealth checks to
          hide in rocky terrain
          <br />
        </>
      );
      break;

    default:
      break;
  }
  return subInfo;
}

export function exportGnome(sub) {
  return (
    <>
      {raceInfo}
      {subGnome(sub)}
    </>
  );
}

export default function Gnome(props) {
  const classes = style();
  const [gnome, setGnome] = useState("");

  const saveRaceInfo = (sub) => {
    var raceData = new Object({
      title: "Gnome",
      sub: sub,
    });
    return raceData;
  };

  return (
    <Grid container direction="row">
      <Box component="div" className={classes.raceInfo}>
        <Typography id="gnomeInfo">{exportGnome(gnome)}</Typography>
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
              setGnome("Forest");
              props.raceState.updateStats("int", +2, "dex", +1);
              props.raceState.updateRace("Forest Gnome");
              props.raceState.saveRaceInfo(saveRaceInfo("Forest"));
            }}
          >
            Forest Gnome <br />
            +1 DEX
          </Button>
          <Button
            className={classes.button}
            type="button"
            onClick={() => {
              setGnome("Rock");
              props.raceState.updateStats("int", +2, "con", +1);
              props.raceState.updateRace("Rock Gnome");
              props.raceState.saveRaceInfo(saveRaceInfo("Rock"));
            }}
          >
            Rock Gnome <br />
            +1 CON
          </Button>
          <Button
            className={classes.button}
            type="button"
            onClick={() => {
              setGnome("Deep");
              props.raceState.updateStats("int", +2, "dex", +1);
              props.raceState.updateRace("Deep Gnome");
              props.raceState.saveRaceInfo(saveRaceInfo("Deep"));
            }}
          >
            Deep Gnome <br />
            +1 DEX
          </Button>
        </ButtonGroup>
      </Box>
    </Grid>
  );
}
