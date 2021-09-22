import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import {Box, Button, ButtonGroup, Paper} from '@material-ui/core';

const styles = theme =>({
    stat:{
        background: theme.palette.primary1Color,
        spaceing: 16,
        border: 0,
        fontSize: 20,
        borderRadius: 3,
        color: 'white',
        height: 132,
        padding: '12px 24px ',
        textAlign: 'center',
        margin: 'auto',
        marginTop:'2.5%',
        
        maxWidth: '120px',
        
    },
    score:{
        background: theme.palette.primary2Color,
        border: 0,
        fontSize: 24,
        borderRadius: 100,
        color: 'white',
        height: 20,
        paddingBottom: '8px ',
        textAlign: 'center',
        margin: '5px',

    }
});

class StatBlock extends React.Component{
    
    constructor(props){
        super(props);
        
        this.state={
            stat : 8,
            score : -1,
            points_added: 0,
        };
        
    }
    

    accessScore = () => {
        return this.state.score; 
    } 

    modCalc = (val) =>{
        return Math.floor((val-10)/2);
    }
    
    adjustStat = (val) => {
        this.setState((state) => ({
            stat: state.stat + val,
            score: this.modCalc(state.stat + val)
        }));
    }

    decreasePoints = () =>{
        if(this.state.points_added >0){

            if(this.state.stat >13){
                this.props.appState.adjust_Points(2);
            }else{
                this.props.appState.adjust_Points(1);
            }

            this.setState((state) => ({
                stat: state.stat -1,
                score: this.modCalc(state.stat -1),
                points_added: state.points_added -1,
            })); 
            this.props.appState.update_Skill_Score();
        }else{
            this.props.appState.warning_Alert("To Few Stat Points Left!");
        }
    }

    increasePoints = () =>{
        if(this.state.points_added >= 7){
            this.props.appState.warning_Alert("Maximum Bonus Reached!");            
        }else if((this.state.stat+ 1)>13){
            if(this.props.appState.points > 1){
                this.props.appState.adjust_Points(-2); 
                this.setState((state) => ({
                    stat: state.stat + 1,
                    score: this.modCalc(state.stat + 1),
                    points_added: state.points_added +1
                }));            
                this.props.appState.update_Skill_Score();

            }else{
                this.props.appState.warning_Alert("Not Enough Stat Points!");
            }
        }else{
            if (this.props.appState.race_points > 0) {
                this.props.appState.adjust_Race_Points(-1, this.props.stat);            
                this.setState((state) => ({
                    stat: state.stat + 1,
                    score: this.modCalc(state.stat + 1),
                    points_added: state.points_added 
                }));
                this.props.appState.update_Skill_Score();
            }else if(this.props.appState.points > 0){
                this.props.appState.adjust_Points(-1);            
                this.setState((state) => ({
                    stat: state.stat + 1,
                    score: this.modCalc(state.stat + 1),
                    points_added: state.points_added +1
                }));
                this.props.appState.update_Skill_Score();
            }else{
                this.props.appState.warning_Alert("Not Enough Stat Points!");
            }
        }
    }

    render () {
        const { classes } = this.props;
        

        return (    
        <Paper elevation={3} className={classes.stat}>
            {(this.props.stat).toUpperCase()}
            <br/>
            <ButtonGroup size="small" color="primary" variant="contained">
                <Button type="button" onClick={() =>this.decreasePoints()}>-</Button> 
                <Button type="button" onClick={() =>this.increasePoints()}>+</Button>
            </ButtonGroup>
            <br/>
            Points: {this.state.stat}
            <br/>
            Score: 
            <Box className={classes.score}>
                {this.state.score}
            </Box>

        </Paper>      
        );
        
    }

}
export default withStyles(styles, {withTheme: true})(StatBlock);

