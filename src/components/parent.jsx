import React from 'react';
import Number from './number.jsx';
import BtnReset from './btn_reset.jsx';
import Buttons from './buttons.jsx';
import NewChild from './added_child.jsx';

class Parent extends React.Component {

    render() {
        return (
            <div className="box">
                <p className="textBoss">Big BOSS</p>
                <Number numb={this.props.numb}/>
                <Buttons
                    plus={this.props.plus}
                    minus={this.props.minus}
                    numb={this.props.numb}
                />
                <BtnReset
                    reset={this.props.reset}
                />
                <NewChild
                addedNewChild={this.props.added}
                />
            </div>
        )
    }
}

export default Parent;