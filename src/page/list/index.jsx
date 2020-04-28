import React from 'react';

export default class List extends React.Component{
    render() {
        return (
            <div>
                List
                <iframe ref={(ref)=>{this.iframe = ref}}  className="iframe" title="xxx" src="http://www.imagehover.io/"  frameBorder="0"></iframe>
            </div>
        );
    }
}