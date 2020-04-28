import React from 'react';
import './index.scss'
export default class Button extends React.Component{
    render() {
        return (
            <div className="Button">
                Button
                <iframe ref={(ref)=>{this.iframe = ref}} id="iframe"  className="iframe" title="xxx" src="http://ianlunn.github.io/Hover/"  frameBorder="0"></iframe>
            </div>
        );
    }
}