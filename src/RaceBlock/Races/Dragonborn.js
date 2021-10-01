import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  Grid,
  Button,
  ButtonGroup,
  Menu,
  MenuItem,
} from "@material-ui/core";
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
  customMenu: {
    width: "450px",
    padding: "10px",
  },
  menuHeader: {
    padding: "5px",
    backgroundColor: "black",
  },
});

var raceInfo = (
  <>
    <strong>Stat Bonus. +2 STR | +1 CHA</strong>
    <br />
    <strong>Size. Medium | Speed. 30ft</strong>
    <br />
    <strong>Languages.</strong> Common, Draconic
    <br />
    <strong>Breath Weapon.</strong> 2d6 Damage, 3d6 at level 6, 4d6 at level 11,
    5d6 at level 16. Damage type based on dragon. Half damage on successful
    save. Once per long/short rest. Saving throw DC = 8 + Con. Mod + Proficiency
    <br />
    <strong>Resistance.</strong> Resistance to damage type based on the type of
    dragon
    <br />
  </>
);

export function exportDragonborn(sub) {
  return (
    <>
      {raceInfo}
      {subDragon(sub)}
    </>
  );
}

function subDragon(sub) {
  var subRace = "";
  switch (sub) {
    case "Black":
      subRace = "Black | Acid | 30ft Line (Dex. Save)";
      break;
    case "Blue":
      subRace = "Blue | Lightning | 30ft Line (Dex. Save)";
      break;
    case "Brass":
      subRace = "Brass | Fire | 30ft Line (Dex. Save)";
      break;
    case "Bronze":
      subRace = "Bronze | Lightning | 30ft Line (Dex. Save)";
      break;
    case "Copper":
      subRace = "Copper | Acid | 30ft Line (Dex. Save)";
      break;
    case "Gold":
      subRace = "Gold | Fire | 15ft Cone (Dex. Save)";
      break;
    case "Green":
      subRace = "Green | Poison | 15ft Cone (Con. Save)";
      break;
    case "Red":
      subRace = "Red | Fire | 15ft Cone (Con. Save)";
      break;
    case "Silver":
      subRace = "Silver | Cold | 15ft Cone (Con. Save)";
      break;
    case "White":
      subRace = "White | Cold | 15ft Cone (Con. Save)";
      break;

    default:
      break;
  }
  return <strong>{subRace}</strong>;
}

export default function Dragonborn(props) {
  const classes = style();
  const [dragon, setDragon] = useState("");

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleStats = () => {
    props.raceState.updateStats("str", +2, "cha", +1);
  };

  const saveRaceInfo = (sub) => {
    var raceData = new Object({
      title: "Dragonborn",
      sub: sub,
    });
    return raceData;
  };

  return (
    <Grid container direction="row">
      <Box component="div" className={classes.raceInfo}>
        <Typography id="dragoonInfo">{exportDragonborn(dragon)}</Typography>
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
            aria-controls="dragonborn-menu"
            aria-haspopup="true"
            className={`${classes.buttonGroup} ${classes.button}`}
            onClick={handleClick}
          >
            Draconic Ancestry
          </Button>
        </ButtonGroup>
        <Menu
          id="dragonborn-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <Grid
            container
            direction="column"
            spacing={2}
            className={classes.customMenu}
          >
            <Box
              container="div"
              style={{
                backgroundColor: "black",
                color: "white",
                paddingLeft: "5px",
              }}
            >
              <pre>
                <h2>
                  <strong>Dragon | Damage Type | Breath Weapon</strong>
                </h2>
              </pre>
            </Box>

            <MenuItem
              onClick={() => {
                handleClose();
                handleStats();
                props.raceState.updateRace("Black DragonBorn");
                setDragon("Black");
                props.raceState.saveRaceInfo(saveRaceInfo("Black"));
              }}
            >
              <pre>
                <h3>Black | Acid | 30ft Line (Dex. Save)</h3>
              </pre>
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                handleStats();
                props.raceState.updateRace("Blue DragonBorn");
                setDragon("Blue");
                props.raceState.saveRaceInfo(saveRaceInfo("Blue"));
              }}
            >
              <pre>
                <h3>Blue | Lightning | 30ft Line (Dex. Save)</h3>
              </pre>
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                handleStats();
                props.raceState.updateRace("Brass DragonBorn");
                setDragon("Brass");
                props.raceState.saveRaceInfo(saveRaceInfo("Brass"));
              }}
            >
              <pre>
                <h3>Brass | Fire | 30ft Line (Dex. Save)</h3>
              </pre>
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                handleStats();
                props.raceState.updateRace("Broze DragonBorn");
                setDragon("Bronze");
                props.raceState.saveRaceInfo(saveRaceInfo("Bronze"));
              }}
            >
              <pre>
                <h3>Bronze | Lightning | 30ft Line (Dex. Save)</h3>
              </pre>
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                handleStats();
                props.raceState.updateRace("Copper DragonBorn");
                setDragon("Copper");
                props.raceState.saveRaceInfo(saveRaceInfo("Copper"));
              }}
            >
              <pre>
                <h3>Copper | Acid | 30ft Line (Dex. Save)</h3>
              </pre>
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                handleStats();
                props.raceState.updateRace("Gold DragonBorn");
                setDragon("Gold");
                props.raceState.saveRaceInfo(saveRaceInfo("Gold"));
              }}
            >
              <pre>
                <h3>Gold | Fire | 15ft Cone (Dex. Save)</h3>
              </pre>
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                handleStats();
                props.raceState.updateRace("Green DragonBorn");
                setDragon("Green");
                props.raceState.saveRaceInfo(saveRaceInfo("Green"));
              }}
            >
              <pre>
                <h3>Green | Poison | 15ft Cone (Con. Save)</h3>
              </pre>
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                handleStats();
                props.raceState.updateRace("Red DragonBorn");
                setDragon("Red");
                props.raceState.saveRaceInfo(saveRaceInfo("Red"));
              }}
            >
              <pre>
                <h3>Red | Fire | 15ft Cone (Con. Save)</h3>
              </pre>
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                handleStats();
                props.raceState.updateRace("Silver DragonBorn");
                setDragon("Silver");
                props.raceState.saveRaceInfo(saveRaceInfo("Silver"));
              }}
            >
              <pre>
                <h3>Silver | Cold | 15ft Cone (Con. Save)</h3>
              </pre>
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                handleStats();
                props.raceState.updateRace("White DragonBorn");
                setDragon("White");
                props.raceState.saveRaceInfo(saveRaceInfo("White"));
              }}
            >
              <pre>
                <h3>White | Cold | 15ft Cone (Con. Save)</h3>
              </pre>
            </MenuItem>
          </Grid>
        </Menu>
      </Box>
    </Grid>
  );
}
