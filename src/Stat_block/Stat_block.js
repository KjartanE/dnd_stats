import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import {Box, Button, ButtonGroup} from '@material-ui/core';

const styles = theme =>({
    stat:{
        background: "#282A3E",
        spaceing: 16,
        border: 0,
        fontSize: 18,
        borderRadius: 3,
        color: 'white',
        height: 132,
        padding: '10px 20px ',
        textAlign: 'center',
        margin: '5px',
        boxShadow: '0 3px 5px 2px #1F2D33'
    },
    score:{
        background: theme.palette.primary2Color,
        border: 0,
        fontSize: 18,
        borderRadius: 100,
        color: 'white',
        height: 20,
        padding: '5px 5px ',
        textAlign: 'center',
        margin: '5px',

    }
});

class Stat_block extends React.Component{
    
    constructor(props){
        super(props);
        
        this.state={
            stat : 8,
            score : -1
        };
    }

    componentDidMount(){
        window.addEventListener("onClick", this.modActer);
    }

    modActer = (val) =>{
        this.modCalc(this.props.appState.stats[this.props.stat] +val);
    }

    modCalc = (val) =>{
        
        switch (val) {
            case 1:
                this.setState({score: -5 });
                break;
            case 2:
            case 3:
                this.setState({score: -4 });
                break;
            case 4:
            case 5:
                this.setState({score: -3 });
                break;
            case 6:
            case 7:
                this.setState({score: -2 });
                break;
            case 8:
            case 9:
                this.setState({score: -1 });
                break;
            case 10:
            case 11:          
                this.setState({score: 0 });
                break;
            case 12:
            case 13:
                this.setState({score: 1 });
                break;    
            case 14:
            case 15:
                this.setState({score: 2 });
                break;
            case 16:
            case 17:
                this.setState({score: 3 });
                break;
            case 18:
            case 19:
                this.setState({score: 4 });
                break;
            case 20:
            case 21:
                this.setState({score: 5 });                
                break;
            default:
                break;
        }
        return;
    }
    
    decreasePoints = () =>{
        if(this.state.stat >0){
            if(this.state.stat >13){
                this.props.appState.increase_Points(2);
            }else{
                this.props.appState.increase_Points(1);
            }

            this.props.appState.update_Stat(this.props.stat, -1);
            //this.setState({stat: this.props.appState.stats.str -1});
            this.modCalc(this.props.appState.stats[this.props.stat] -1);    
        }else{
            alert("To Few Points Left!");
        }
    }

    increasePoints = () =>{
        if(this.state.stat+ 1>13){
            if(this.props.appState.points > 1){
                this.props.appState.decrease_Points(2); 
                this.props.appState.update_Stat(this.props.stat, +1);  
                this.modCalc(this.props.appState.stats[this.props.stat] +1);              
            }else{
                alert("Not Enough Points!");
            }
        }else{
            if(this.props.appState.points > 0){
                this.props.appState.decrease_Points(1);            
                this.props.appState.update_Stat(this.props.stat, +1);
                this.modCalc(this.props.appState.stats[this.props.stat] +1);  
            }else{
                alert("Not Enough Points!");
            }
        }
    }

    render () {
        const { classes } = this.props;

        return (    
        <Box width="20" className={classes.stat}>
            {this.props.stat}
            <br/>
            <ButtonGroup size="small" color="primary" variant="contained">
                <Button type="button" onClick={this.decreasePoints}>-</Button> 
                <Button type="button" onClick={this.increasePoints}>+</Button>

            </ButtonGroup>

            <br/>
            Points: {this.props.appState.stats[this.props.stat]}
            <br/>
            Score: 
            <Box className={classes.score}>
                {this.state.score}
            </Box>

        </Box>      
        );
        
    }

}
export default withStyles(styles, {withTheme: true})(Stat_block);
