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

class Human extends React.Component {
  render() {
    return <HumanBlock variantHuman={this.props.variantHuman}
    updateRace={this.props.updateRace}
    />;
  }
}
export default Human;

export function HumanBlock(props) {
  const classes = style();
  const [human, setHuman] = useState('');

  return (
    <Grid container direction="row">
      <Box component="div" className={classes.raceInfo}>
            <Typography>
              <strong>Size. Medium | Speed. 30ft</strong>
              <br />
              <strong>Languages.</strong> Common, and one of your choice.
              <br />
              {human === "variant" ? (
                <Box component="div">
                  <strong>
                    Replaces the Abliity Score Increase of base human
                  </strong>{" "}
                  <br />
                  <strong>Ability Score Increase.</strong> +1 to two ability
                  scores <br />
                  <strong>Skills.</strong> Proficiency in one skill of your
                  choice <br />
                  <strong>Feat.</strong> One feat of your choice
                </Box>
              ) : (
                <Box component="div">
                  <strong>
                    Stat Bonus. +1 STR | +1 DEX | +1 CON | +1 WIS | +1 CHA{" "}
                  </strong>
                  <br />
                </Box>
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
                className={classes.button}
                type="button"
                onClick={() => {
                  props.variantHuman("base");
                  props.updateRace("Base Human");
                  setHuman("base");
                }}
              >
                Base Human
                <br />
                +1 To All Stats
              </Button>
              <Button
                className={classes.button}
                type="button"
                onClick={() => {
                  props.variantHuman("variant");
                  props.updateRace("Variant Human");
                  setHuman("variant");
                }}
              >
                Variant Human
                <br />
                +1 To Two Stats
              </Button>
            </ButtonGroup>
          </Box>
    </Grid>
  );
}

/*
<Box component="div" className={classes.raceInfo}>
            <Typography>
              <strong>Size. Medium | Speed. 30ft</strong>
              <br />
              <strong>Languages.</strong> Common, and one of your choice.
              <br />
              {human === "variant" ? (
                <Box component="div">
                  <strong>
                    Replaces the Abliity Score Increase of base human
                  </strong>{" "}
                  <br />
                  <strong>Ability Score Increase.</strong> +1 to two ability
                  scores <br />
                  <strong>Skills.</strong> Proficiency in one skill of your
                  choice <br />
                  <strong>Feat.</strong> One feat of your choice
                </Box>
              ) : (
                <Box component="div">
                  <strong>
                    Stat Bonus. +1 STR | +1 DEX | +1 CON | +1 WIS | +1 CHA{" "}
                  </strong>
                  <br />
                </Box>
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
                className={classes.button}
                type="button"
                onClick={() => {
                  props.variantHuman("base");

                  setHuman("base");
                }}
              >
                Base Human
                <br />
                +1 To All Stats
              </Button>
              <Button
                className={classes.button}
                type="button"
                onClick={() => {
                  props.variantHuman("variant");
                  setHuman("variant");
                }}
              >
                Variant Human
                <br />
                +1 To Two Stats
              </Button>
            </ButtonGroup>
          </Box>
  */
