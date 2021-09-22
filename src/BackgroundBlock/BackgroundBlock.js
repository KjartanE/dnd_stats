import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Box, Button, Grid, List, ListItem} from '@material-ui/core';

const styles = theme => ({
    listItemStyle:{
        background: theme.palette.primary1Color,
        spaceing: 16,
        fontSize: 20,
        borderRadius: 8,
        color: 'white',
        padding: '9px 20px ',
        textAlign: 'center',
        margin: 'auto',
        marginBottom: '2px'
        
        
    },
});

class BackgroundBlock extends React.Component{
    constructor(props){
        super(props);

        this.state={
        }
    }

    render(){
        const { classes } = this.props;

        return (
          <Box>
            <List component="nav">
              <ListItem className={classes.listItemStyle}>
                <BackgroundListItem
                  name="Acolyte"
                  skills="Insight, Religion"
                  skill1="insi"
                  skill2="reli"
                  lang="Any Two"
                  tools="None"
                  update_Skills={this.props.appState.update_Skills}
                />
              </ListItem>
              <ListItem className={classes.listItemStyle}>
                <BackgroundListItem
                  name="Criminal"
                  skills="Deception, Stealth"
                  skill1="dece"
                  skill2="stea"
                  lang="None"
                  tools="Gaming set, Thieves"
                  update_Skills={this.props.appState.update_Skills}
                />
              </ListItem>
              <ListItem className={classes.listItemStyle}>
                <BackgroundListItem
                  name="Charlatan"
                  skills="Deception, Sleight of Hand"
                  skill1="dece"
                  skill2="slei"
                  lang="None"
                  tools="Disguise kit, Forgery kit"
                  update_Skills={this.props.appState.update_Skills}
                />
              </ListItem>
              <ListItem className={classes.listItemStyle}>
                <BackgroundListItem
                  name="Entertainer"
                  skills="Acrobatics, Performance"
                  skill1="acro"
                  skill2="perf"
                  lang="None"
                  tools="Musical instrument, Disguise kit"
                  update_Skills={this.props.appState.update_Skills}
                />
              </ListItem>
              <ListItem className={classes.listItemStyle}>
                <BackgroundListItem
                  name="Folk Hero"
                  skills="Animal handling, Survival"
                  skill1="anim"
                  skill2="surv"
                  lang="None"
                  tools="Artisan's tool, vehicles (land)"
                  update_Skills={this.props.appState.update_Skills}
                />
              </ListItem>
              <ListItem className={classes.listItemStyle}>
                <BackgroundListItem
                  name="Guild Artisan"
                  skills="Insight, Persuasion"
                  skill1="insi"
                  skill2="pers"
                  lang="Any One"
                  tools="Artisan's tool"
                  update_Skills={this.props.appState.update_Skills}
                />
              </ListItem>
              <ListItem className={classes.listItemStyle}>
                <BackgroundListItem
                  name="Hermit"
                  skills="Religion, Medicine"
                  skill1="reli"
                  skill2="medi"
                  lang="Any One"
                  tools="Herbalism Kit"
                  update_Skills={this.props.appState.update_Skills}
                />
              </ListItem>
              <ListItem className={classes.listItemStyle}>
                <BackgroundListItem
                  name="Noble"
                  skills="History, Persuasion"
                  skill1="hist"
                  skill2="pers"
                  lang="Any One"
                  tools="Gaming set"
                  update_Skills={this.props.appState.update_Skills}
                />
              </ListItem>
              <ListItem className={classes.listItemStyle}>
                <BackgroundListItem
                  name="Outlander"
                  skills="Athletics, Survival"
                  skill1="athl"
                  skill2="surv"
                  lang="Any One"
                  tools="Musical Instrument"
                  update_Skills={this.props.appState.update_Skills}
                />
              </ListItem>
              <ListItem className={classes.listItemStyle}>
                <BackgroundListItem
                  name="Sage"
                  skills="Arcana, History"
                  skill1="arca"
                  skill2="hist"
                  lang="Any Two"
                  tools="Navigator's tools, vehicles"
                  update_Skills={this.props.appState.update_Skills}
                />
              </ListItem>
              <ListItem className={classes.listItemStyle}>
                <BackgroundListItem
                  name="Sailor"
                  skills="Athletics, Perception"
                  skill1="athl"
                  skill2="perc"
                  lang="None"
                  tools="Navigator's tools, vehicles (water)"
                  update_Skills={this.props.appState.update_Skills}
                />
              </ListItem>
              <ListItem className={classes.listItemStyle}>
                <BackgroundListItem
                  name="Soldier"
                  skills="Athletics, Intimidation"
                  skill1="athl"
                  skill2="inti"
                  lang="None"
                  tools="Gaming set, vehicles (land)"
                  update_Skills={this.props.appState.update_Skills}
                />
              </ListItem>
              <ListItem className={classes.listItemStyle}>
                <BackgroundListItem
                  name="Urchin"
                  skills="Sleight of Hand, Stealth"
                  skill1="slei"
                  skill2="stea"
                  lang="None"
                  tools="Disguise kit, Thieves’ tools"
                  update_Skills={this.props.appState.update_Skills}
                />
              </ListItem>
              <ListItem className={classes.listItemStyle}>
                <BackgroundListItem
                  name="Create Your Own"
                  skills="Any Two"
                  skill1="-"
                  skill2="-"
                  lang="Any One"
                  tools="Any One"
                  update_Skills={this.props.appState.update_Skills}
                />
              </ListItem>
            </List>
          </Box>
        );
    }
}
export  default withStyles(styles, {withTheme: true})(BackgroundBlock);

export function BackgroundListItem(props){

    return(
        <Grid container direction="row" spacing={3} 
        justifyContent="flex-start" alignItems="center">

            <Grid item style = {{width: "25%"}}>
                <Button variant='contained' color='primary'
                onClick ={() =>{
                    props.update_Skills(props.name, props.skill1, props.skill2);
                }}>
                    {props.name}
                </Button>
            </Grid>
            <Grid item style = {{width: "20%"}}>
                <strong>Languages. </strong> {props.lang}
            </Grid>
            <Grid item style = {{width: "30%"}}>
                <strong>Tools. </strong> {props.tools}
            </Grid>
            <Grid item style = {{width: "25%"}}>
                <strong>Skills. </strong> {props.skills}
            </Grid>
        </Grid>            
    );
}