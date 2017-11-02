import React from 'react';

class NewChild extends React.Component {
    render () {
        return (
            <div className="addedChild">
                <input type="submit" value="+" onClick={this.props.addedNewChild} className="addedChild-btn"/>
            </div>
        )
    }
}

export default NewChild;