import React from 'react';
import Number from './number.jsx';
import BtnReset from './btn_reset.jsx';
import Buttons from './buttons.jsx';
import DeleteChild from './delete-child.jsx';
import Mode from './mode-on-off.jsx';

class Child extends React.Component {
    constructor(props){
        super(props)
        //this.onClickTest = this.onClickTest.bind(this);
    }
    onClickTest() {
        console.log(this.props.id);
    }
    render () {

        return (
            <div className="box">
                <DeleteChild
                    delete={()=>{this.props.deleteChild(this.props.id)}}
                />
                <p className="textBoss">Child №{this.props.id}</p>


                <Number numb={this.props.numb} />
                <Buttons
                    plus={() => {this.props.operationChild(+1,this.props.id)}}
                    minus={() => {this.props.operationChild(-1,this.props.id)}}
                    numb={this.props.numb}
                />

                <BtnReset
                    // reset={() =>{this.props.reset(this.props.id)}}
                    reset={this.props.reset}
                    id={this.props.id}
                />
                <Mode
                    modeOnOff={()=>{this.props.modeOnOff(this.props.id)}}
                    mode={this.props.mode}
                />


            </div>
        )
    }
}

export default Child;