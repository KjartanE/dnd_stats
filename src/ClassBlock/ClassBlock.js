import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {Box, Card, Grid, Popover,
    CardActionArea, CardMedia, CardContent, Typography} from '@material-ui/core';

import Artificer from './ClassItems/Artificer';
import Barbarian from './ClassItems/Barbarian';
import Bard from './ClassItems/Bard';
import Cleric from './ClassItems/Cleric';
import Druid from './ClassItems/Druid';
import Fighter from './ClassItems/Fighter';
import Monk from './ClassItems/Monk';
import Paladin from './ClassItems/Paladin';
import Ranger from './ClassItems/Ranger';
import Rogue from './ClassItems/Rogue';
import Sorcerer from './ClassItems/Sorcerer';
import Warlock from './ClassItems/Warlock';
import Wizard from './ClassItems/Wizard';


const styles = theme => ({
    classBox:{
        background: theme.palette.primary3Color,
        spaceing: 16,
        fontSize: 20,
        textAlign: 'center',
        borderRadius: 8,
        color: 'white',
        padding: '1%',

        width: '98%'
    },
});

const Mkstyle = makeStyles({
    classTile:{
        
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        
    }
});

class ClassBlock extends React.Component{
    constructor(props){
        super(props);

        this.state={
            Artificer: false,
            Barbarian: false,
            Bard: false,
            Cleric: false,
            Druid: false,
            Fighter: false,
            Monk: false,
            Paladin: false,
            Ranger: false,
            Rogue: false,
            Sorcerer: false,
            Warlock: false,
            Wizard: false,

            PopoverHandler: this.PopoverHandler,
            update_Class: this.update_Class
        }
    }

    update_Class = (className, availableSkills) =>{
        this.props.appState.update_Class(className, availableSkills);
      }


    PopoverHandler = (className) => {
        this.setState((state) => ({
            [className]: !this.state[className]
        }));
    }

    render(){
        const { classes } = this.props;

        return (
          <Box className={classes.classBox}>
            <Grid
              container
              direction="row"
              spacing={2}
              justifyContent="center"
              alignItems="flex-start"
            >
              <Grid item>
                <ClassBlockItem class="Artificer" state={this.state} />
              </Grid>
              <Grid item>
                <ClassBlockItem class="Barbarian" state={this.state} />
              </Grid>
              <Grid item>
                <ClassBlockItem class="Bard" state={this.state} />
              </Grid>
              <Grid item>
                <ClassBlockItem class="Cleric" state={this.state} />
              </Grid>
              <Grid item>
                <ClassBlockItem class="Druid" state={this.state} />
              </Grid>
              <Grid item>
                <ClassBlockItem class="Fighter" state={this.state} />
              </Grid>
              <Grid item>
                <ClassBlockItem class="Monk" state={this.state} />
              </Grid>
              <Grid item>
                <ClassBlockItem class="Paladin" state={this.state} />
              </Grid>
              <Grid item>
                <ClassBlockItem class="Ranger" state={this.state} />
              </Grid>
              <Grid item>
                <ClassBlockItem class="Rogue" state={this.state} />
              </Grid>
              <Grid item>
                <ClassBlockItem class="Sorcerer" state={this.state} />
              </Grid>
              <Grid item>
                <ClassBlockItem class="Warlock" state={this.state} />
              </Grid>
              <Grid item>
                <ClassBlockItem class="Wizard" state={this.state} />
              </Grid>
            </Grid>

            <Popover
              open={this.state.Artificer}
              anchorReference="anchorPosition"
              anchorPosition={{ top: 200, left: 400 }}
              onClose={() => this.state.PopoverHandler("Artificer")}
            >
              <Artificer state={this.state} />
            </Popover>
            <Popover
              open={this.state.Barbarian}
              anchorReference="anchorPosition"
              anchorPosition={{ top: 200, left: 400 }}
              onClose={() => this.state.PopoverHandler("Barbarian")}
            >
              <Barbarian state={this.state} />
            </Popover>
            <Popover
              open={this.state.Bard}
              anchorReference="anchorPosition"
              anchorPosition={{ top: 200, left: 400 }}
              onClose={() => this.state.PopoverHandler("Bard")}
            >
              <Bard state={this.state} />
            </Popover>
            <Popover
              open={this.state.Cleric}
              anchorReference="anchorPosition"
              anchorPosition={{ top: 200, left: 400 }}
              onClose={() => this.state.PopoverHandler("Cleric")}
            >
              <Cleric state={this.state} />
            </Popover>
            <Popover
              open={this.state.Druid}
              anchorReference="anchorPosition"
              anchorPosition={{ top: 200, left: 400 }}
              onClose={() => this.state.PopoverHandler("Druid")}
            >
              <Druid state={this.state} />
            </Popover>
            <Popover
              open={this.state.Fighter}
              anchorReference="anchorPosition"
              anchorPosition={{ top: 200, left: 400 }}
              onClose={() => this.state.PopoverHandler("Fighter")}
            >
              <Fighter state={this.state} />
            </Popover>
            <Popover
              open={this.state.Monk}
              anchorReference="anchorPosition"
              anchorPosition={{ top: 200, left: 400 }}
              onClose={() => this.state.PopoverHandler("Monk")}
            >
              <Monk state={this.state} />
            </Popover>
            <Popover
              open={this.state.Paladin}
              anchorReference="anchorPosition"
              anchorPosition={{ top: 200, left: 400 }}
              onClose={() => this.state.PopoverHandler("Paladin")}
            >
              <Paladin state={this.state} />
            </Popover>
            <Popover
              open={this.state.Ranger}
              anchorReference="anchorPosition"
              anchorPosition={{ top: 200, left: 400 }}
              onClose={() => this.state.PopoverHandler("Ranger")}
            >
              <Ranger state={this.state} />
            </Popover>
            <Popover
              open={this.state.Rogue}
              anchorReference="anchorPosition"
              anchorPosition={{ top: 200, left: 400 }}
              onClose={() => this.state.PopoverHandler("Rogue")}
            >
              <Rogue state={this.state} />
            </Popover>
            <Popover
              open={this.state.Sorcerer}
              anchorReference="anchorPosition"
              anchorPosition={{ top: 200, left: 400 }}
              onClose={() => this.state.PopoverHandler("Sorcerer")}
            >
              <Sorcerer state={this.state} />
            </Popover>
            <Popover
              open={this.state.Warlock}
              anchorReference="anchorPosition"
              anchorPosition={{ top: 200, left: 400 }}
              onClose={() => this.state.PopoverHandler("Warlock")}
            >
              <Warlock state={this.state} />
            </Popover>
            <Popover
              open={this.state.Wizard}
              anchorReference="anchorPosition"
              anchorPosition={{ top: 200, left: 400 }}
              onClose={() => this.state.PopoverHandler("Wizard")}
            >
              <Wizard state={this.state} />
            </Popover>

          </Box>
        );
    }
}
export  default withStyles(styles, {withTheme: true})(ClassBlock);

export function ClassBlockItem(props){
    const classes  = Mkstyle(props);
 

    return(
        <Box className={classes.classTile}>
        <Card rasied={3}>
          <CardActionArea onClick={()=> (props.state.PopoverHandler(props.class))}>
            <CardMedia
              component="img"
              height="200"
              image={require("../images/icons/"+[props.class]+".svg").default}
              alt={[props.class]}
            />

            <CardContent>
              <Typography style={{textTransform: 'capitalize'}}>{[props.class]}</Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      
      </Box>

    );
}