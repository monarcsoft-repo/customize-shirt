import React, { Component } from "react";
import { Stage, Layer } from 'react-konva';
import { ReactReduxContext, Provider } from "react-redux";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import WindowSizeListener from 'react-window-size-listener';

import shirtMin from "./../../assets/images/shirt-min.png";
import CanvasImage from "./CanvasImage";
import CanvasText from "./CanvasText";
import TextBorderComponent from './TextBorderComponent';
import { downloadImage } from "./../../redux/action/image";

class ReactCanvas extends Component{

    constructor(){
        super();
        this.state = {
            canvasWidth:0,
            canvasHeight:0
        }
    }

    componentDidMount(){
        
        if(this.imgRef !== undefined){
            if(this.imgRef.image !== undefined){
                this.imgRef.image.onload = () => {
                    this.setState({
                        canvasWidth: this.imgRef.image.width,
                        canvasHeight: this.imgRef.image.height
                    });
                    this.props.downloadImage({
                        imageUrl:this.canvasRef.getStage().toDataURL()
                    });
                }

            }
        }
    }

    render(){
        window.addEventListener('resize', this.canvasRef);
        return(
            <React.Fragment>
                <ReactReduxContext.Consumer>
                    {({ store }) => (
                        <WindowSizeListener 
                            onResize={windowSize => {
                                let container = this.canvasRef.attrs.container.parentNode;
                                let containerWidth = container.offsetWidth;
                                let scale = containerWidth / this.state.canvasWidth;
                                this.canvasRef.width(this.state.canvasWidth * scale);
                                this.canvasRef.height(this.state.canvasHeight * scale);
                                this.canvasRef.scale({ x: scale, y: scale });
                                this.canvasRef.draw();
                            }
                          }>
                            <Stage 
                                ref={node => this.canvasRef = node}
                            >
                                <Provider store={store}>
                                    <Layer>
                                        <CanvasImage
                                            imageUrl={shirtMin}
                                            ref={node => this.imgRef = node}
                                        />
                                        <TextBorderComponent />
                                        <CanvasText />
                                    </Layer>
                                </Provider>
                            </Stage>
                        </WindowSizeListener>
                    )}
                </ReactReduxContext.Consumer>
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        downloadImage
    },dispatch);
}

export default connect(null, mapDispatchToProps)(ReactCanvas);