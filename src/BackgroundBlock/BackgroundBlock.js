import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import {Box, Button, ButtonGroup, Grid, List, ListItem, Paper} from '@material-ui/core';

const styles = theme =>({
    listItem:{
        background: theme.palette.primary1Color,
        spaceing: 16,
        border: 0,
        fontSize: 20,
        borderRadius: 3,
        color: 'white',
        padding: '12px 24px ',
        textAlign: 'center',
        margin: 'auto',
        
        
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

        return(
            <Box>
                <List component="nav">
                    <ListItem className={classes.listItem}>
                        <Grid container direction="row" spacing={3} 
                        justifyContent="space-between" alignItems="center">

                            <Grid item>
                                <Button variant='contained' color='primary'
                                onClick ={() =>{
                                    this.props.appState.update_Skill('insi');
                                    this.props.appState.update_Skill('reli');                                    
                                }}>
                                    Acolyte
                                </Button>
                            </Grid>
                            <Grid item>
                                <strong>Languages. </strong> Any Two
                            </Grid>
                            <Grid item>
                                <strong>Tools. </strong> None
                            </Grid>
                            <Grid item>
                                <strong>Skills. </strong> Insight, Religion
                            </Grid>
                        </Grid>
                        

                    </ListItem>
                </List>
            </Box>
        );
    }
}
export  default withStyles(styles, {withTheme: true})(BackgroundBlock);