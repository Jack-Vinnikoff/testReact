import React from 'react';

class Buttons extends React.Component {
    render () {

        return (
            <div>
                <button className="btn-plus" onClick={this.props.plus}>+</button>
                <button disabled={this.props.numb<=0 ?'disabled':''} className={this.props.numb>0 ?'btn-minus':'block'} onClick={this.props.minus}>-</button>

            </div>
        )
    }
}


export default Buttons;
