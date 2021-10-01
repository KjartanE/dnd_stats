import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Box, Button, Typography } from "@material-ui/core";

const styles = (theme) => ({
  classBox: {
    background: theme.palette.primary3Color,
    spaceing: 16,
    fontSize: 20,
    textAlign: "left",
    borderRadius: 8,
    color: "black",
    padding: "0%",
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  info: {
    padding: "2% 5%",
    width: "80%",
  },
  actions: {
    bottom: "0px",
    padding: "2%",
    width: "25%",
    height: "700px",
    backgroundColor: theme.palette.accent1Color,

    textAlign: "center",
  },
  buttons: {
    height: "60px",
    width: "96%",
    padding: "2%",
    margin: "2%",
  },
});

class Ranger extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Ranger",
    };
  }

  render() {
    const { classes } = this.props;

    return (
      <Box className={classes.classBox}>
        <Box className={classes.info}>
          <h2>Ranger Class Features</h2>
          <h3>Hit Points</h3>
          <Typography>
            <strong>Hit Dice:</strong> 1d10 per ranger level
            <br />
            <strong>Hit Points at 1st Level:</strong> 10 + your Constitution
            modifier
            <br />
            <strong>Hit Points at Higher Levels:</strong> 1d10 (or 6) + your
            Constitution modifier per ranger level after 1st
            <br />
          </Typography>
          <h3>Proficiencies</h3>
          <Typography>
            <strong>Armor:</strong> Light armor, medium armor, shields
            <br />
            <strong>Weapons:</strong> Simple weapons, martial weapons
            <br />
            <strong>Tools:</strong> None
            <br />
            <strong>Saving Throws:</strong> Strength, Dexterity
            <br />
            <strong>Skills:</strong> Choose three from Animal Handling,
            Athletics, Insight, Investigation, Nature, Perception, Stealth, and
            Survival
            <br />
          </Typography>
          <h3>Equipment</h3>
          You start with the following equipment, in addition to the equipment
          granted by your background:
          <br />
          <ul>
            <li>(a) scale mail or (b) leather armor</li>
            <li>(a) two shortswords or (b) two simple melee weapons</li>
            <li>(a) a dungeoneer's pack or (b) an explorer's pack</li>
            <li>A longbow and a quiver of 20 arrows</li>
          </ul>
        </Box>
        <Box className={classes.actions}>
          <Button
            variant="contained"
            color="primary"
            className={classes.buttons}
            target="_blank"
            href="http://dnd5e.wikidot.com/ranger"
          >
            DND 5e Wiki
          </Button>

          <Button
            variant="contained"
            color="primary"
            className={classes.buttons}
            onClick={() => {
              this.props.state.update_Class("Ranger", [
                "anim",
                "athl",
                "inti",
                "perc",
                "natu",
                "surv",
              ]);
              this.props.state.PopoverHandler(this.state.name);
            }}
          >
            Select Ranger
          </Button>
        </Box>
      </Box>
    );
  }
}
export default withStyles(styles, { withTheme: true })(Ranger);
