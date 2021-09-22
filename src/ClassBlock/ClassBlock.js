import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import {Box, Card, Grid, Popover,
    CardActionArea, CardMedia, CardContent, Typography} from '@material-ui/core';

import Artificer from './ClassItems/Artificer';

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
            <Grid container direction="row" spacing={2} 
            justifyContent="center" alignItems="flex-start">

                <Grid item>
                    <ClassBlockItem class="Artificer" state={this.state}/>
                </Grid>
                <Grid item>
                    <ClassBlockItem class="Barbarian" state={this.state}/>
                </Grid>
                <Grid item>
                    <ClassBlockItem class="Bard" state={this.state}/>
                </Grid>
                <Grid item>
                    <ClassBlockItem class="Cleric" state={this.state}/>
                </Grid>
                <Grid item>
                    <ClassBlockItem class="Druid" state={this.state}/>
                </Grid>
            </Grid>
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

        <Popover open={props.state.Artificer} 
        anchorReference="anchorPosition"
        anchorPosition={{ top: 200, left: 400 }}
        onClose={() => props.state.PopoverHandler('Artificer')}>
        <Artificer state={props.state}/>
        </Popover>
        <Popover open={props.state.Barbarian} 
        onClose={() => props.state.PopoverHandler('Barbarian')}>
        Barbarian
        </Popover>
        <Popover open={props.state.Bard} 
        onClose={() => props.state.PopoverHandler('Bard')}>
        Bard
        </Popover>
        <Popover open={props.state.Cleric} 
        onClose={() => props.state.PopoverHandler('Cleric')}>
        Cleric
        </Popover>
      </Box>

    );
}