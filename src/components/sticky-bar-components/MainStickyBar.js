import React, { Component } from "react";

import PropTypes from 'prop-types';
import { withStyles  } from '@material-ui/core/styles';

import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

//fontawesome icons
import {library, dom} from "@fortawesome/fontawesome-svg-core";
import { faTshirt, faImage } from "@fortawesome/free-solid-svg-icons";

library.add( faTshirt, faImage );
dom.watch();

//material ui icons
import TextFieldsIcon from '@material-ui/icons/TextFields';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

import { main_sticky_bar__container, main_sticky_bar__icons } from "../../styles/styled-components/mainStickyBar";

const styles = theme => ({ main_sticky_bar__container, main_sticky_bar__icons });

class MainStickyBar extends Component{

    constructor(){
        super();
        this.state = {
            showTextField:false
        }
    }

    render(){
        
        const { classes } = this.props;
        return(
            <section id="main_sticky_bar">
                <div className={classes.main_sticky_bar__container}>
                    <div className={classes.main_sticky_bar__icons}>
                        <i className="fas fa-tshirt"></i>
                        <p>Products</p>
                    </div>
                    <div className={classes.main_sticky_bar__icons}>
                        <i className="fas fa-image"></i>
                        <p>Designs</p>
                    </div>
                    <div className={classes.main_sticky_bar__icons}>
                        <TextFieldsIcon />  
                        <p>Text</p>
                    </div>
                    <div className={classes.main_sticky_bar__icons}>
                        <CloudUploadIcon />
                        <p>Upload</p>
                    </div>
                    <div className={classes.main_sticky_bar__icons}>
                        <CloudDownloadIcon />
                        <a href={this.props.imageSrc.imageUrl} download="myImage.png">Download</a>
                    </div>
                </div>
            </section>
        )
    }
}

MainStickyBar.propTypes = {
    classes: PropTypes.object.isRequired,
};
  
const mapStateToProps = (state, props) => {
    return{
        imageSrc:state.imageSrc
    }
}

/* const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        
    },dispatch);
} */

export default connect(mapStateToProps,null)(withStyles(styles)(MainStickyBar));