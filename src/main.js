import React from "react";
import ReactDOM from "react-dom";
import Buttons from './components/buttons.jsx'
import Number from './components/number.jsx'


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

             <button className="btnReset" onClick={this.btnReset.bind(this)}>Reset</button>
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


