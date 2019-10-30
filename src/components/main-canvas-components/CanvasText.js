import React, { Component } from "react";
import { Text, Transformer} from 'react-konva';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';

import { downloadImage } from "./../../redux/action/image";
import { addCurrentFontSize } from "./../../redux/action/currentTextFontSize";
import { addFontSize } from "./../../redux/action/updatedTextFontSize";
 
class CanvasText extends Component{

    constructor(){
        super();
        this.state = {
            draggableText:"Draggable text", 
            isDragging: false,
            x: 300,
            y: 200,
            fontSize:26,
            dragBoundLoad:false
        }
    }

    componentDidMount(){
        this.props.addFontSize({fontSize:0});
        this.props.addCurrentFontSize({currentFontSize: 26});
    }

    componentDidUpdate(){
        console.log("triggered in canvas text");
    }


    handleTextDblClick = (e) => {
        let stageCanvasElement = this.textRef.parent.parent;
        let layerCanvasElement = this.textRef.parent;

        this.textRef.hide();
        this.transformerRef.show();
        layerCanvasElement.draw();

        let textPosition = this.textRef.absolutePosition();
        let stageCanvasElementDimension = stageCanvasElement.container().getBoundingClientRect();
        
        let stageBox = stageCanvasElementDimension;

        let areaPosition = {
            x: stageBox.left + textPosition.x,
            y: stageBox.top + textPosition.y
        };


        let textarea = document.createElement('textarea');
        document.body.appendChild(textarea);
        textarea.value = this.state.draggableText;
        textarea.style.position = 'absolute';
        textarea.style.top = areaPosition.y + 'px';
        textarea.style.left = areaPosition.x + 'px';
        textarea.style.width = this.textRef.width() - this.textRef.padding() * 2 + 'px';
        textarea.style.height = this.textRef.height() - this.textRef.padding() * 2 + 5 + 'px';
        textarea.style.fontSize = (this.textRef.fontSize() - 9) + 'px';
        textarea.style.border = 'none';
        textarea.style.padding = '0px';
        textarea.style.margin = '0px';
        textarea.style.overflow = 'hidden';
        textarea.style.background = 'none';
        textarea.style.outline = 'none';
        textarea.style.resize = 'none';
        textarea.style.lineHeight = this.textRef.lineHeight();
        textarea.style.fontFamily = this.textRef.fontFamily();
        textarea.style.transformOrigin = 'left top';
        textarea.style.textAlign = this.textRef.align();
        textarea.style.color = this.textRef.fill(); 
        let rotation = this.textRef.rotation();
        let transform = '';
        if (rotation) {
          transform += 'rotateZ(' + rotation + 'deg)';
        }

        let px = 0;
        // also we need to slightly move textarea on firefox
        // because it jumps a bit
        let isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
        if (isFirefox) {
          px += 2 + Math.round(this.textRef.fontSize() / 20);
        }
        transform += 'translateY(-' + px + 'px)';

        textarea.style.transform = transform;

        // reset height
        textarea.style.height = 'auto';
        // after browsers resized it we can set actual value
        textarea.style.height = textarea.scrollHeight + 3 + 'px';

        textarea.focus();

        const removeTextarea = () => {
            textarea.parentNode.removeChild(textarea);
            window.removeEventListener('click', handleOutsideClick);
            this.textRef.show();
            this.transformerRef.show();
            this.transformerRef.forceUpdate();
            layerCanvasElement.draw();
        }

        const setTextareaWidth = (newWidth) => {
            if (!newWidth) {
                // set width for placeholder
                newWidth = this.textRef.placeholder.length * this.textRef.fontSize();
            }
            // some extra fixes on different browsers
            var isSafari = /^((?!chrome|android).)*safari/i.test(
                navigator.userAgent
            );
            var isFirefox =
            navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
            if (isSafari || isFirefox) {
                newWidth = Math.ceil(newWidth);
            }

            var isEdge =
            document.documentMode || /Edge/.test(navigator.userAgent);
            if (isEdge) {
                newWidth += 1;
            }
            textarea.style.width = newWidth + 'px';
        }

        textarea.addEventListener('keydown', (e) => {
            // hide on enter
            // but don't hide on shift + enter
            if (e.keyCode === 13 && !e.shiftKey) {
                //this.textRef.text(textarea.value);
                this.setState({draggableText: textarea.value});
                this.transformerRef.hide();
                removeTextarea();
            }
            // on esc do not set value back to node
            if (e.keyCode === 27) {
                removeTextarea();
            }
        });

        textarea.addEventListener('keydown', (e) => {
            let scale = this.textRef.getAbsoluteScale().x;
            setTextareaWidth(this.textRef.width() * scale);
            textarea.style.height = 'auto';
            textarea.style.height =
            textarea.scrollHeight + this.textRef.fontSize() + 'px';
            this.props.downloadImage({
                imageUrl:stageCanvasElement.getStage().toDataURL()
            });
        });

        const handleOutsideClick = (e) => {
            if (e.target !== textarea) {
                //this.textRef.text(textarea.value);s
                this.setState({draggableText: textarea.value});
                removeTextarea();
                this.props.downloadImage({
                    imageUrl:stageCanvasElement.getStage().toDataURL()
                });
            }
        }

        setTimeout(() => {
            window.addEventListener('click', handleOutsideClick);
        });


    }

    setTextBoundary

    dragBoundFuncNew = (pos) => { 
        /* 
        
            -xBoundaryLeft: calculated based on 29%  of stage(this.textRef.parent.parent.attrs.width) width
            -xBoundaryLeft: calculated based on xBoundaryLeft + 19% of stage(this.textRef.parent.parent.attrs.width) width
            -yBoundaryTop: calculated based on 17% of stage(this.textRef.parent.parent.attrs.height) height.
            -yBoundaryBottom: calculated based on yBoundaryTop + 19% of stage(this.textRef.parent.parent.attrs.width) height.

            -percent is used since stage is responsive(resizable)
        */
        //console.log(this.textRef);
        let xBoundaryLeft = this.textRef.parent.parent.attrs.width * .29;
        let xBoundaryRight = this.textRef.parent.parent.attrs.width * .19;
        let yBoundaryTop =  this.textRef.parent.parent.attrs.height * .17;
        let yBoundaryBottom =  this.textRef.parent.parent.attrs.height * .70;
        var boundary = {x: xBoundaryLeft, y: yBoundaryTop, width: xBoundaryRight, height: yBoundaryBottom};
        
        var testRect={
            left: boundary.x, 
            top: boundary.y, 
            right: boundary.x + boundary.width,
            bottom: boundary.y + boundary.height
        };

        var newX = (pos.x < testRect.left ? testRect.left : pos.x);
        // right edge check
        newX = (newX > testRect.right ? testRect.right : newX);
        //console.log("TCL: CanvasText -> newX", newX)
        // top edge check
        var newY = (pos.y < testRect.top ? testRect.top : pos.y);
        // bottom edge check
        newY = (newY > testRect.bottom ? testRect.bottom : newY);
        console.log("TCL: CanvasText -> newY", newY)

        return {
            x: newX,
            y: newY
        }
    }

    render(){
        /* console.log(this.transformerRef);
        console.log(this.textRef); */
        return(
            <React.Fragment>
                <Text
                    text={this.props.textOnShirt}
                    keepRatio={true}
                    drawBorder={true}
                    fontSize={this.props.currentFontSize + this.props.updatedFontSize}
                    //onDblClick={this.handleTextDblClick}
                    x={this.state.x}
                    y={this.state.y}
                    draggable={true}
                    fill={this.state.isDragging ? 'white' : 'white'}
                    onDragStart={() => {
                        this.setState({
                            isDragging: true
                        });
                    }}
                    onDragEnd={e => {
                        this.setState({
                            isDragging: false,
                            x: e.target.x(),
                            y: e.target.y()
                        });
                    }}
                    dragBoundFunc={
                        this.dragBoundFuncNew
                    }
                    ref={node => this.textRef = node}
                />
                
                <Transformer
                    node={this.textRef}
                    keepRatio={true}
                    enabledAnchors={['top-left', 'top-right', 'bottom-left', 'bottom-right']}
                    boundBoxFunc={(oldBox, newBox)=> {
                    /*  newBox.width = Math.max(30, newBox.width);
                        return newBox; */
                        if (newBox.width > 333 || newBox.width < this.textRef.fontSize()) {
                            //console.log("TCL: CanvasText -> render -> oldBox", oldBox)
                            return oldBox;
                        } else if (newBox.height < this.textRef.fontSize()) {
                            //console.log("TCL: CanvasText -> render -> oldBox", oldBox)
                            return oldBox;
                        }
                        return newBox
                    }}
                    
                    onTransform={() => {
                        console.log("drag box ");
                        /* console.log("TCL: CanvasText -> render -> this.textRef.fontSize() ", this.textRef.fontSize())
                        console.log("this.textRef.width() * width ",  this.textRef.width() * this.textRef.scaleX());
                        console.log("this.textRef.width() * height ",  this.textRef.height() * this.textRef.scaleY()); */
                        /* this.textRef.setAttrs({
                            width: this.textRef.width() * this.textRef.scaleX(),
                            height: this.textRef.height() * this.textRef.scaleY(),
                            scaleX: 1,
                            scaleY: 1
                        }); */
                        /* if(this.textRef.height() > this.textRef.fontSize() || this.textRef.height() < this.textRef.fontSize() ){
                            this.setState({fontSize:Math.floor(this.textRef.height())});
                        } */
                        
                    }}
                    ref={node => this.transformerRef = node} 
                />
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state, props) => {
    console.log(state);
    return{
        textOnShirt: state.textOnShirt, 
        currentFontSize: state.currentFontSize,
        updatedFontSize: state.updatedFontSize
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        downloadImage, addCurrentFontSize, addFontSize
    },dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CanvasText);