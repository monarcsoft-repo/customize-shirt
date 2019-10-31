import React, { Component } from "react";
import Grid from '@material-ui/core/Grid';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

//redux
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { increaseFontSize, reduceFontSize } from "./../../redux/action/updatedTextFontSize";

class TextFontSizeChange extends Component {

    constructor(){
        super();
    }

    increaseFontSize = () => {
        this.props.increaseFontSize({fontSize:this.props.updatedFontSize + 1});
    }

    reduceFontSize = () => {
        this.props.reduceFontSize({fontSize:this.props.updatedFontSize - 1})
    }

    render() {
        return (
            <React.Fragment>
                <Grid item container justify="center" xs={12} md={11}>
                    <Grid item xs={4}>
                        <p>Text Size</p>
                    </Grid>
                    <Grid container item xs={6}>
                        <ButtonGroup fullWidth aria-label="full width outlined button group">
                            <Button 
                                onClick={this.increaseFontSize}><AddIcon />
                            </Button>
                            <Button
                                onClick={this.reduceFontSize}>
                                <RemoveIcon />
                            </Button>
                        </ButtonGroup>
                    </Grid>
                    <Grid item xs={2}>
                        {(this.props.currentFontSize + this.props.updatedFontSize)}
                    </Grid>
                </Grid>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state, props) => {
    return{
        currentFontSize: state.currentFontSize,
        updatedFontSize: state.updatedFontSize
    }
}


const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        increaseFontSize, reduceFontSize
    },dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(TextFontSizeChange);