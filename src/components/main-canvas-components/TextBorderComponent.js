import React, { Component } from "react";
import { Text, Transformer, Label, Tag, Group, Rect} from 'react-konva';

class TextBorderComponent extends Component{

    render(){
        return(
            <React.Fragment>
                <Group
                    x={220}
                    y={135}
                >
                    <Rect 
                        width={340} 
                        height={600} 
                        stroke="#118AD0" 
                        strokeWidth={2}
                    ></Rect>
                </Group> 
            </React.Fragment>
        );
    }
}

export default TextBorderComponent;