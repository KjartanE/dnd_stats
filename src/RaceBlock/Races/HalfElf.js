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
    height: "40px",
    width: "240px",
  },
  button: {
    padding: "8px",
  },
});

var raceInfo = (
  <>
    <strong>Stat Bonus. +2 CHA | +1 to Two Other Stats</strong>
    <br />
    <strong>Size. Medium | Speed. 30 ft</strong>
    <br />
    <strong>Languages: </strong> Common, Elvish, and one language of your choice
    <br />
    <strong>Darkvision.</strong> 60 ft
    <br />
    <strong>Fey Ancestry.</strong> Advantage on saving throws against being
    charmed. Magic can’t put you to sleep.
    <br />
  </>
);

function subHalfElf(sub) {
  var subInfo = "";

  switch (sub) {
    case "Base":
      subInfo = (
        <>
          <strong>Skill Versatility.</strong> Proficiency in two skills of your
          choice
          <br />
        </>
      );
      break;
    case "Wood":
      subInfo = (
        <>
          <strong>Elf Weapon Training.</strong> Proficiency with Longswords,
          Shortswords, Shortbows, and Longbows
          <br />
          <strong>Mask of the wild.</strong>
          You can attempt to hide when only lightly obscured by foliage, heavy
          rain, falling snow, mist, and other natural phenomena.
          <br />
        </>
      );
      break;
    case "High":
      subInfo = (
        <>
          <strong>High Elf descent.</strong> Elf Weapon Training, or Cantrip
          <br />
          <strong>Elf Weapon Training.</strong> Proficiency with Longswords,
          Shortswords, Shortbows, and Longbows
          <br />
        </>
      );
      break;
    case "Drow":
      subInfo = (
        <>
          <strong>Drow Descent.</strong> Drow Magic
          <br />
          <strong>Drow Magic.</strong>
          You know the Dancing Lights (PHB.230) cantrip. At 3rd level, you can
          cast Faerie Fire (PHB.239) once per day. At 5th level, you can cast
          the Darkness (PHB.230) spell once per day. Charisma is your
          spellcasting ability for these spells. <br />
        </>
      );
      break;
    case "Aquatic":
      subInfo = (
        <>
          <strong>Aquatic.</strong> 30 ft Swim Speed
          <br />
        </>
      );
      break;

    default:
      break;
  }
  return subInfo;
}

export function exportHalfElf(sub) {
  return (
    <>
    {raceInfo}
    {subHalfElf(sub)}
    </>
  );
}

export default function HalfElf(props) {
  const classes = style();
  const [halfELf, setHalfElf] = useState("");

  const saveRaceInfo = (sub) => {
    var raceData = new Object({
      title: "HalfElf",
      sub: sub,
    });
    return raceData;
  };

  return (
    <Grid container direction="row">
      <Box component="div" className={classes.raceInfo}>
        <Typography>{exportHalfElf(halfELf)}</Typography>
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
              setHalfElf("Base");
              props.raceState.variantHuman("halfelf");
              props.raceState.updateRace("Base Half-Elf");
              props.raceState.saveRaceInfo(saveRaceInfo("Base"));
            }}
          >
            Base Half-Elf
            <br />
          </Button>
          <Button
            className={classes.button}
            type="button"
            onClick={() => {
              setHalfElf("Wood");
              props.raceState.variantHuman("halfelf");
              props.raceState.updateRace("Wood Elf Descent Half-Elf");
              props.raceState.saveRaceInfo(saveRaceInfo("Wood"));
            }}
          >
            Wood Elf Descent <br />
          </Button>
          <Button
            className={classes.button}
            type="button"
            onClick={() => {
              setHalfElf("High");
              props.raceState.variantHuman("halfelf");
              props.raceState.updateRace("High Elf Descent Half-Elf");
              props.raceState.saveRaceInfo(saveRaceInfo("High"));
            }}
          >
            High Elf Descent <br />
          </Button>
          <Button
            className={classes.button}
            type="button"
            onClick={() => {
              setHalfElf("Drow");
              props.raceState.variantHuman("halfelf");
              props.raceState.updateRace("Drow Descent Half-Elf");
              props.raceState.saveRaceInfo(saveRaceInfo("Drow"));
            }}
          >
            Drow Descent <br />
          </Button>
          <Button
            className={classes.button}
            type="button"
            onClick={() => {
              setHalfElf("Aquatic");
              props.raceState.variantHuman("halfelf");
              props.raceState.updateRace("Aquatic Half-Elf");
              props.raceState.saveRaceInfo(saveRaceInfo("Aquatic"));
            }}
          >
            Aquatic <br />
          </Button>
        </ButtonGroup>
      </Box>
    </Grid>
  );
}
