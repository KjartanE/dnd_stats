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

class Monk extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Monk",
    };
  }

  render() {
    const { classes } = this.props;

    return (
      <Box className={classes.classBox}>
        <Box className={classes.info}>
          <h2>Monk Class Features</h2>
          <h3>Hit Points</h3>
          <Typography>
            <strong>Hit Dice:</strong> 1d8 per monk level
            <br />
            <strong>Hit Points at 1st Level:</strong> 8 + your Constitution
            modifier
            <br />
            <strong>Hit Points at Higher Levels:</strong> 1d8 (or 5) + your
            Constitution modifier per monk level after 1st
            <br />
          </Typography>
          <h3>Proficiencies</h3>
          <Typography>
            <strong>Armor:</strong> None
            <br />
            <strong>Weapons:</strong> Simple weapons, shortswords
            <br />
            <strong>Tools:</strong> Choose one type of artisan's tools or one
            musical instrument
            <br />
            <strong>Saving Throws:</strong> Strength, Dexterity
            <br />
            <strong>Skills:</strong> Choose two from Acrobatics, Athletics,
            History, Insight, Religion, and Stealth
            <br />
          </Typography>
          <h3>Equipment</h3>
          You start with the following equipment, in addition to the equipment
          granted by your background:
          <br />
          <ul>
            <li>(a) a shortsword or (b) any simple weapon</li>
            <li>(a) a dungeoneer's pack or (b) an explorer's pack</li>
            <li>10 darts</li>
          </ul>
        </Box>
        <Box className={classes.actions}>
          <Button
            variant="contained"
            color="primary"
            className={classes.buttons}
            target="_blank"
            href="http://dnd5e.wikidot.com/monk"
          >
            DND 5e Wiki
          </Button>

          <Button
            variant="contained"
            color="primary"
            className={classes.buttons}
            onClick={() => {
              this.props.state.update_Class("Monk", [
                "acro",
                "athl",
                "hist",
                "insi",
                "reli",
                "stea",
              ]);
              this.props.state.PopoverHandler(this.state.name);
            }}
          >
            Select Monk
          </Button>
        </Box>
      </Box>
    );
  }
}
export default withStyles(styles, { withTheme: true })(Monk);
