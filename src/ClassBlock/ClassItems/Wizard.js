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

class Wizard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Wizard",
    };
  }

  render() {
    const { classes } = this.props;

    return (
      <Box className={classes.classBox}>
        <Box className={classes.info}>
          <h2>Wizard Class Features</h2>
          <h3>Hit Points</h3>
          <Typography>
            <strong>Hit Dice:</strong> 1d6 per wizard level
            <br />
            <strong>Hit Points at 1st Level:</strong> 6 + your Constitution modifier
            <br />
            <strong>Hit Points at Higher Levels:</strong> 1d6 (or 4) + your Constitution modifier per wizard level after 1st
            <br />
          </Typography>
          <h3>Proficiencies</h3>
          <Typography>
            <strong>Armor:</strong> None
            <br />
            <strong>Weapons:</strong> Daggers, darts, slings, quarterstaffs, light crossbows
            <br />
            <strong>Tools:</strong> None
            <br />
            <strong>Saving Throws:</strong> Intelligence, Wisdom
            <br />
            <strong>Skills:</strong> Choose two from Arcana, History, Insight, Investigation, Medicine, and Religion
            <br />
          </Typography>
          <h3>Equipment</h3>
          You start with the following equipment, in addition to the equipment
          granted by your background:
          <br />
          <ul>
            <li>(a) a quarterstaff or (b) a dagger</li>
            <li>(a) a component pouch or (b) an arcane focus</li>
            <li>(a) a scholar's pack or (b) an explorer's pack</li>
            <li>A spellbook</li>
          </ul>
        </Box>
        <Box className={classes.actions}>
          <Button
            variant="contained"
            color="primary"
            className={classes.buttons}
            target="_blank"
            href="http://dnd5e.wikidot.com/wizard"
          >
            DND 5e Wiki
          </Button>

          <Button
            variant="contained"
            color="primary"
            className={classes.buttons}
            onClick={() => {
              this.props.state.update_Class("Wizard", [
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
            Select Wizard
          </Button>
        </Box>
      </Box>
    );
  }
}
export default withStyles(styles, { withTheme: true })(Wizard);
