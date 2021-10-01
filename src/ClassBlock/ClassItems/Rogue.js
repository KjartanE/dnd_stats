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

class Rogue extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Rogue",
    };
  }

  render() {
    const { classes } = this.props;

    return (
      <Box className={classes.classBox}>
        <Box className={classes.info}>
          <h2>Rogue Class Features</h2>
          <h3>Hit Points</h3>
          <Typography>
            <strong>Hit Dice:</strong> 1d8 per rogue level
            <br />
            <strong>Hit Points at 1st Level:</strong> 8 + your Constitution
            modifier
            <br />
            <strong>Hit Points at Higher Levels:</strong> 1d8 (or 5) + your
            Constitution modifier per rogue level after 1st
            <br />
          </Typography>
          <h3>Proficiencies</h3>
          <Typography>
            <strong>Armor:</strong> Light armor
            <br />
            <strong>Weapons:</strong> Simple weapons, hand crossbows,
            longswords, rapiers, shortswords
            <br />
            <strong>Tools:</strong> Thieves' tools
            <br />
            <strong>Saving Throws:</strong> Dexterity, Intelligence
            <br />
            <strong>Skills:</strong> Choose four from Acrobatics, Athletics,
            Deception, Insight, Intimidation, Investigation, Perception,
            Performance, Persuasion, Sleight of Hand, and Stealth
            <br />
          </Typography>
          <h3>Equipment</h3>
          You start with the following equipment, in addition to the equipment
          granted by your background:
          <br />
          <ul>
            <li>(a) a rapier or (b) a shortsword</li>
            <li>(a) a shortbow and quiver of 20 arrows or (b) a shortsword</li>
            <li>(a) a burglar's pack, (b) dungeoneer's pack, or (c) an explorer's pack</li>
            <li>Leather armor, two daggers, and thieves' tools</li>
          </ul>
        </Box>
        <Box className={classes.actions}>
          <Button
            variant="contained"
            color="primary"
            className={classes.buttons}
            target="_blank"
            href="http://dnd5e.wikidot.com/rogue"
          >
            DND 5e Wiki
          </Button>

          <Button
            variant="contained"
            color="primary"
            className={classes.buttons}
            onClick={() => {
              this.props.state.update_Class("Rogue", [
                "acro",
                "athl",
                "dece",
                "insi",
                "inti",
                "inve",
                "perc",
                "perf",
                "pers",
                "slei",
                "stea",
              ]);
              this.props.state.PopoverHandler(this.state.name);
            }}
          >
            Select Rogue
          </Button>
        </Box>
      </Box>
    );
  }
}
export default withStyles(styles, { withTheme: true })(Rogue);
