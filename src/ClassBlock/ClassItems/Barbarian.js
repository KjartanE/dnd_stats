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

class Barbarian extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Barbarian",
    };
  }

  render() {
    const { classes } = this.props;

    return (
      <Box className={classes.classBox}>
        <Box className={classes.info}>
          <h2>Barbarian Class Features</h2>
          <h3>Hit Points</h3>
          <Typography>
            <strong>Hit Dice:</strong> 1d12 per barbarian level
            <br />
            <strong>Hit Points at 1st Level:</strong> 12 + your Constitution
            modifier
            <br />
            <strong>Hit Points at Higher Levels:</strong> 1d12 (or 7) + your
            Constitution modifier per barbarian level after 1st
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
            <strong>Saving Throws:</strong> Strength, Constitution
            <br />
            <strong>Skills:</strong> Choose two from Animal Handling, Athletics,
            Intimidation, Nature, Perception, and Survival
            <br />
          </Typography>
          <h3>Equipment</h3>
          You start with the following equipment, in addition to the equipment
          granted by your background:
          <br />
          <ul>
            <li>(a) a greataxe or (b) any martial melee weapon</li>
            <li>(a) two handaxes or (b) any simple weapon</li>
            <li>An explorer's pack and four javelins</li>
          </ul>
        </Box>
        <Box className={classes.actions}>
          <Button
            variant="contained"
            color="primary"
            className={classes.buttons}
            target="_blank"
            href="http://dnd5e.wikidot.com/barbarian"
          >
            DND 5e Wiki
          </Button>

          <Button
            variant="contained"
            color="primary"
            className={classes.buttons}
            onClick={() => {
              this.props.state.update_Class("Barbarian", [
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
            Select Barbarian
          </Button>
        </Box>
      </Box>
    );
  }
}
export default withStyles(styles, { withTheme: true })(Barbarian);
