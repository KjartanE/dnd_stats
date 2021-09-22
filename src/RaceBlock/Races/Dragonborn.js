import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid, Button, ButtonGroup, Menu, MenuItem } from "@material-ui/core";
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
  customMenu:{
    width: "450px",
    padding: "10px"
  },
  menuHeader:{
    padding: "5px",
    backgroundColor: "black"
  }
});

class Dragonborn extends React.Component {
  render() {
    return (
    <DragonbornBlock updateStats={this.props.updateStats} 
    updateRace={this.props.updateRace}/>
    );
  }
}
export default Dragonborn;

export function DragonbornBlock(props) {
  const classes = style();
  const [dragon, setDragon] = useState('');

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleStats = () => {
    props.updateStats("str", +2, "cha", +1);
  };


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
          <strong>Breath Weapon.</strong> 2d6 Damage, 3d6 at level 6, 4d6 at
          level 11, 5d6 at level 16. Damage type based on dragon. Half damage on
          successful save. Once per long/short rest. Saving throw DC = 8 + Con.
          Mod + Proficiency
          <br />
          <strong>Resistance.</strong> Resistance to damage type based on the
          type of dragon
          <br />
          {dragon === "black" ? (
            <>
              <strong>Black | Acid | 30ft Line (Dex. Save)</strong><br />
            </>
          ) : dragon === "blue" ? (
            <>
              <strong>Blue | Lightning | 30ft Line (Dex. Save)</strong><br />
            </>
          ) : dragon === "brass" ? (
            <>
              <strong>Brass | Fire | 30ft Line (Dex. Save)</strong><br />
            </>
          ) : dragon === "bronze" ? (
            <>
              <strong>Bronze | Lightning | 30ft Line (Dex. Save)</strong> <br />
            </>
          ) : dragon === "copper" ? (
            <>
              <strong>Copper | Acid | 30ft Line (Dex. Save)</strong> <br />
            </>
          ) : dragon === "gold" ? (
            <>
              <strong>Gold | Fire | 15ft Cone (Dex. Save)</strong> <br />
            </>
          ): dragon === "green" ? (
            <>
              <strong>Green | Poison | 15ft Cone (Con. Save)</strong> <br />
            </>
          ): dragon === "red" ? (
            <>
              <strong>Red | Fire | 15ft Cone (Con. Save)</strong> <br />
            </>
          ): dragon === "silver" ? (
            <>
              <strong>Silver | Cold | 15ft Cone (Con. Save)</strong> <br />
            </>
          ): dragon === "white" ? (
            <>
              <strong>White | Cold | 15ft Cone (Con. Save)</strong> <br />
            </>
          ): (
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
            <Box container='div' style={{backgroundColor: 'black', color: 'white', paddingLeft: '5px'}}>
              <pre>
                <h2>
                  <strong>Dragon | Damage Type | Breath Weapon</strong>
                </h2>
              </pre>
            </Box>
              
            <MenuItem onClick={() =>{
              handleClose();
              handleStats();
              props.updateRace("Black DragonBorn");
              setDragon("black");
            }}>
              <pre>
                <h3>Black | Acid | 30ft Line (Dex. Save)</h3>
              </pre>
            </MenuItem>
            <MenuItem onClick={() =>{
              handleClose();
              handleStats();
              props.updateRace("Blue DragonBorn");
              setDragon("blue");
            }}>
              <pre>
                <h3>Blue | Lightning | 30ft Line (Dex. Save)</h3>
              </pre>
            </MenuItem>
            <MenuItem onClick={() =>{
              handleClose();
              handleStats();
              props.updateRace("Brass DragonBorn");
              setDragon("brass");
            }}>
              <pre>
                <h3>Brass | Fire | 30ft Line (Dex. Save)</h3>
              </pre>
            </MenuItem>
            <MenuItem onClick={() =>{
              handleClose();
              handleStats();
              props.updateRace("Broze DragonBorn");
              setDragon("bronze");
            }}>
              <pre>
                <h3>Bronze | Lightning | 30ft Line (Dex. Save)</h3>
              </pre>
            </MenuItem>
            <MenuItem onClick={() =>{
              handleClose();
              handleStats();
              props.updateRace("Copper DragonBorn");
              setDragon("copper");
            }}>
              <pre>
                <h3>Copper | Acid | 30ft Line (Dex. Save)</h3>
              </pre>
            </MenuItem>
            <MenuItem onClick={() =>{
              handleClose();
              handleStats();
              props.updateRace("Gold DragonBorn");
              setDragon("gold");
            }}>
              <pre>
                <h3>Gold | Fire | 15ft Cone (Dex. Save)</h3>
              </pre>
            </MenuItem>
            <MenuItem onClick={() =>{
              handleClose();
              handleStats();
              props.updateRace("Green DragonBorn");
              setDragon("green");
            }}>
              <pre>
                <h3>Green | Poison | 15ft Cone (Con. Save)</h3>
              </pre>
            </MenuItem>
            <MenuItem onClick={() =>{
              handleClose();
              handleStats();
              props.updateRace("Red DragonBorn");
              setDragon("red");
            }}>
              <pre>
                <h3>Red | Fire | 15ft Cone (Con. Save)</h3>
              </pre>
            </MenuItem>
            <MenuItem onClick={() =>{
              handleClose();
              handleStats();
              props.updateRace("Silver DragonBorn");
              setDragon("silver");
            }}>
              <pre>
                <h3>Silver | Cold | 15ft Cone (Con. Save)</h3>
              </pre>
            </MenuItem>
            <MenuItem onClick={() =>{
              handleClose();
              handleStats();
              props.updateRace("White DragonBorn");
              setDragon("white");
            }}>
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

/*
              <MenuItem onClick={handleClose}>Blue</MenuItem>
              <MenuItem onClick={handleClose}>Brass</MenuItem>

              <MenuItem onClick={handleClose}>Lighting</MenuItem>
              <MenuItem onClick={handleClose}>Fire</MenuItem>

              
              <MenuItem onClick={handleClose}>30ft Line (Dex. Save)</MenuItem>
              <MenuItem onClick={handleClose}>30ft Line (Dex. Save)</MenuItem>
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
