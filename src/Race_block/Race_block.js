import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import { Box, FormHelperText, Button, ButtonGroup } from "@material-ui/core";
import MuiAccordion from "@material-ui/core/Accordion";
import MuiAccordionSummary from "@material-ui/core/AccordionSummary";
import MuiAccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";



const style = makeStyles({
  root: {
    width: "70%",
    
    backgroundColor: "green",
    margin: '12px',
  },
  buttonGroup:{
    height: "60px", 
    width:"240px",   
  },
  button:{
    padding: "12px",
  }
});

const Accordion = withStyles({
  root: {
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expanded: {},
})(MuiAccordion);

const AccordionSummary = withStyles({
  root: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
  },
  content: {
    justifyContent: "center",
    "&$expanded": {
      margin: "12px 0",
    },
  },
  expanded: {},
})(MuiAccordionSummary);

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails);

/*
sendStat = (props, stat, val) => {
    this.props.update_Stat(stat,val);
}
*/
class Race_block extends React.Component{
    
    constructor(props){
        super(props);
        
        this.state={

        }
    }

    updateStats = (dir1, val1, dir2, val2) =>{
        this.props.appState.update_Stats(dir1, val1, dir2, val2);
    }

    render(){
        return(
            <CustomizedAccordions updateStats={this.updateStats}/>
        )
    }

}
export default Race_block;



export function CustomizedAccordions(props) {
  const classes = style();
  const [expanded, setExpanded] = React.useState("panel1");
  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box className={classes.root}>
      <Accordion
        square
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <Typography>Dwarf</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
              <strong>Stat Bonus.  +2 CON</strong>
              <br/>
            <strong>Stout.</strong> Speed is not reduced by wearing heavy armour
            <br />
            <strong>Darkvision.</strong> 60 ft 
            <br />
            <strong>Dwarven Resilience.</strong> Advantage on saving throws against poison. Resistance against poison damage  
            <br/>
            <strong>Dwarven Combat Training.</strong>Proficiency with Battleaxes, Handaxes, Light Hammers, and
            Warhammers 
            <br/>
            <strong>Tool Proficiency.</strong> Proficiency with Smith’s Tools,
            Brewer’s Supplies, or Mason’s Tools 
            <br/>
            <strong>Stonecunning.</strong> Considered
            proficient on History checks relating to origin of stonework and add
            double proficiency bonus to such checks.
          </Typography>
          <ButtonGroup className={classes.buttonGroup} orientation='vertical' size="small" color="primary" variant="contained">
                <Button className={classes.button} type="button" 
                onClick={() =>props.updateStats('con',+2, 'wis',+1)}>
                    Hill Dwarf <br/>+1 WIS
                    </Button> 
                <Button className={classes.button} type="button" 
                onClick={() =>props.updateStats('con',+2, 'str',+2)}>
                    Mountain Dwarf <br/>+2 STR
                    </Button>
                <Button className={classes.button} type="button"
                 onClick={() =>props.updateStats('con',+2, 'str',+1)}>
                     Duergar <br/>+1 STR
                     </Button>

            </ButtonGroup>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <Typography>Collapsible Group Item #2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography></Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        square
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <Typography>Collapsible Group Item #3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography></Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
}
