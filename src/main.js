import React from "react";
import ReactDOM from "react-dom";
import Buttons from './components/buttons.jsx'
import Number from './components/number.jsx'
import BtnReset from './components/btn_reset.jsx'


class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            val:1
        }
    }
    operation(oper) {
        let valueSpan = this.state.val;
        this.setState({val:valueSpan+oper})
    }
    btnReset(){
        this.setState({val:1})
    }

    render(){
        let valueSpan = this.state.val;
        return (
            <div className="box">
             <Number numb={valueSpan}/>
             <Buttons plus={this.operation.bind(this,1)} minus={this.operation.bind(this,-1)} numb={valueSpan}   />

             <BtnReset reset={this.btnReset.bind(this)}/>
             <p className={valueSpan==0?'warn':'none'}>Меньше никак нельзя, прости</p>

            </div>
        );
    };
};


 ReactDOM.render(
     <App />,
   document.getElementById('root')
 );

console.log('Hello Kitty');


