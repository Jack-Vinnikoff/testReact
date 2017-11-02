import React from 'react';

class DeleteChild extends React.Component{
    render() {
        return (
            <div className="deleteChild">
                <input type="submit" value="X" onClick={this.props.delete} className="deleteChild-btn"/>
            </div>
        )
    }
}

export default DeleteChild;