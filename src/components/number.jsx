import React from 'react';

class Number extends React.Component {
    render () {

        return (
            <div className="number">
                <span className='coloRed'>{this.props.numb}</span>

            </div>
        )
    }
}
export default Number;