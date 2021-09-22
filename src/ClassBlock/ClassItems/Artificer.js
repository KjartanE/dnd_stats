import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {Box, Button, Typography} from '@material-ui/core';


const styles = theme => ({
    classBox:{
        background: theme.palette.primary3Color,
        spaceing: 16,
        fontSize: 20,
        textAlign: 'left',
        borderRadius: 8,
        color: 'black',
        padding: '0%',
        height: '100%',
        width: '100%',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    info:{
        padding: '2% 5%',
        width: '80%'
    },
    actions:{    
        bottom: '0px',
        padding: '2%',
        width: '25%',
        height: '700px',
        backgroundColor: theme.palette.accent1Color,
        
        textAlign:'center',
        
    },
    buttons:{
        height: '60px',
        width: '96%',
        padding: '2%',
        margin: '2%',
        
    }
});


class Artificer extends React.Component{
    constructor(props){
        super(props);

        this.state={
            name: 'Artificer'
           
        }
    }

    
    render(){
        const { classes } = this.props;

        return (
          <Box className={classes.classBox}>
            <Box className={classes.info}>
                
                <h2>Artificer Class Features</h2>
                <h3>Hit Points</h3>
                <Typography>
                    <strong>Hit Dice:</strong> 1d8 per artificer level<br/>
                    <strong>Hit Points at 1st Level:</strong> 8 + your Constitution modifier<br/>
                    <strong>Hit Points at Higher Levels:</strong> 1d8 (or 5) + your Constitution modifier per artificer level after 1st<br/>
                </Typography>
                <h3>Proficiencies</h3>
                <Typography>
                    <strong>Armor:</strong> Light armor, medium armor, shields<br/>
                    <strong>Weapons:</strong> Simple weapons<br/>
                    <strong>Tools:</strong> Thieves’ tools, tinker’s tools, one type of artisan’s tools of your choice<br/>
                    <strong>Saving Throws:</strong> Constitution, Intelligence<br/>
                    <strong>Skills:</strong> Choose two from Arcana, History, Investigation, Medicine, Nature, Perception, Sleight of Hand<br/>
                </Typography>
                    <h3>Equipment</h3>
                    You start with the following equipment, in addition to the equipment granted by your background:<br/>

                    <ul>
                        <li>any two simple weapons</li>
                        <li>a light crossbow and 20 bolts</li>
                        <li>(a) studded leather armor or (b) scale mail</li>
                        <li>thieves’ tools and a dungeoneer’s pack</li>
                    </ul>

            </Box>
            <Box className={classes.actions} >
                
                <Button variant='contained' color='primary' className={classes.buttons}
                target="_blank" href='http://dnd5e.wikidot.com/artificer'>
                    DND 5e Wiki
                </Button>
            
                <Button variant='contained' color='primary' className={classes.buttons}
                onClick={() =>{
                    this.props.state.update_Class('Artificer',['arca','hist','inve','medi','natu','perc','slei']);
                    this.props.state.PopoverHandler(this.state.name)
                }}>
                    Select Artificer
                </Button>

            </Box>
          </Box>
        );
    }
}
export  default withStyles(styles, {withTheme: true})(Artificer);
