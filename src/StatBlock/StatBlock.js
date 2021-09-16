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
        var data = this.state.score;
        return(data);
    } 

    modCalc = (val) =>{
        
        switch (val) {
            case 1:
                return(-5);
            case 2:
            case 3:
                return(-4);
            case 4:
            case 5:
                return(-3);
            case 6:
            case 7:
                return(-2);
            case 8:
            case 9:
                return(-1);
            case 10:
            case 11:          
                return(0);
            case 12:
            case 13:
                return(1);
            case 14:
            case 15:
                return(2);
            case 16:
            case 17:
                return(3);
            case 18:
            case 19:
                return(4);
            case 20:
            case 21:
                return(5);               
            default:
                break;
        }
        return;
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
            this.props.appState.warning_Alert("To Few Points Left!");
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
                this.props.appState.warning_Alert("Not Enough Points!");
            }
        }else{
            if(this.props.appState.points > 0){
                this.props.appState.adjust_Points(-1);            
                this.setState((state) => ({
                    stat: state.stat + 1,
                    score: this.modCalc(state.stat + 1),
                    points_added: state.points_added +1
                }));
                this.props.appState.update_Skill_Score();
            }else{
                this.props.appState.warning_Alert("Not Enough Points!");
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

