import React from 'react';

class BtnReset extends React.Component {
    render () {
        return (
            <div className="reset">
                <button className="btnReset" onClick={this.props.reset}>Reset</button>
            </div>
        )
    }
}

export default BtnReset;