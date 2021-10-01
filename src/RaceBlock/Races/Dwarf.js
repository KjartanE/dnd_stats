import React, { useState, forwardRef } from "react";
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
    <strong>Stat Bonus. +2 CON</strong>
    <br />
    <strong>Size. Medium | Speed. 25 ft</strong>
    <br />
    <strong>Languages: </strong> Common, Dwarvish
    <br />
    <strong>Stout.</strong> Speed is not reduced by wearing heavy armour
    <br />
    <strong>Darkvision.</strong> 60 ft
    <br />
    <strong>Dwarven Resilience.</strong> Advantage on saving throws against
    poison. Resistance against poison damage
    <br />
    <strong>Dwarven Combat Training.</strong> Proficiency with Battleaxes,
    Handaxes, Light Hammers, and Warhammers
    <br />
    <strong>Tool Proficiency.</strong> Proficiency with Smith’s Tools, Brewer’s
    Supplies, or Mason’s Tools
    <br />
    <strong>Stonecunning.</strong> Considered proficient on History checks
    relating to origin of stonework and add double proficiency bonus to such
    checks.
    <br />
  </>
);

var subRace1 = (
  <>
    <strong>Dwarven Toughness.</strong> +1 Maximum hit points every level
    (Including level 1)
  </>
);

var subRace2 = (
  <>
    <strong>Dwarven Armor Training.</strong> Proficiency with light and medium
    armor.
  </>
);

var subRace3 = (
  <>
    <strong>Superior Darkvision.</strong> 120 ft <br />
    <strong>Duergar Resilience.</strong> Advantage on saving throws against
    illusions and against being charmed or paralysed. <br />
    <strong>Duergar Magic.</strong> 3rd level, you can cast Enlarge/ Reduce
    (PHB.237) spell on yourself, using only the enlarge option, once per long
    rest. At 5th level, you can cast Invisibility (PHB.254) on yourself, once
    per long rest You do not require material components for either spell, and
    you can’t cast them in direct sunlight. Intelligence is your spellcasting
    ability for these spells. <br />
    <strong>Sunlight Sensitivity.</strong> Disadvantage on attack rolls and
    perception checks that rely on sight when you or your target are in direct
    sunlight
  </>
);

export function exportDwarf(sub) {
  return (
    <>
      {raceInfo}
      {subDwarf(sub)}
    </>
  );
}

function subDwarf(sub) {
  var subInfo = "";

  switch (sub) {
    case "Hill":
      subInfo = subRace1;
      break;
    case "Mountain":
      subInfo = subRace2;
      break;
    case "Duergar":
      subInfo = subRace3;
      break;
    default:
      break;
  }
  return subInfo;
}

export default function Dwarf(props) {
  const classes = style();
  const [dwarf, setDwarf] = useState("");

  const saveRaceInfo = (sub) => {
    var raceData = new Object({
      title: "Dwarf",
      sub: sub,
    });
    return raceData;
  };

  return (
    <Grid container direction="row">
      <Box className={classes.raceInfo}>
        <Typography id="dwarfInfo">{exportDwarf(dwarf)}</Typography>
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
              setDwarf("Hill");
              props.raceState.updateStats("con", +2, "wis", +1);
              props.raceState.updateRace("Hill Dwarf");
              props.raceState.saveRaceInfo(saveRaceInfo("Hill"));
            }}
          >
            Hill Dwarf <br />
            +1 WIS
          </Button>
          <Button
            className={classes.button}
            type="button"
            onClick={() => {
              setDwarf("Mountain");
              props.raceState.updateStats("con", +2, "str", +2);
              props.raceState.updateRace("Mountain Dwarf");
              props.raceState.saveRaceInfo(saveRaceInfo("Mountain"));
            }}
          >
            Mountain Dwarf <br />
            +2 STR
          </Button>
          <Button
            className={classes.button}
            type="button"
            onClick={() => {
              setDwarf("Duergar");
              props.raceState.updateStats("con", +2, "str", +1);
              props.raceState.updateRace("Duergar");
              props.raceState.saveRaceInfo(saveRaceInfo("Duergar"));
            }}
          >
            Duergar <br />
            +1 STR
          </Button>
        </ButtonGroup>
      </Box>
    </Grid>
  );
}
