import React from 'react';

class Mode extends React.Component {
    render() {
        return (
            <div className="mode">
                <form>
                    <input type="button" className={this.props.mode==true?"mode-btn-on":"mode-btn-off"} value={this.props.mode==true?"ON":"OFF"} onClick={this.props.modeOnOff} />
                </form>
            </div>
        )
    }
}

export default Mode;