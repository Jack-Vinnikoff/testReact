import React from "react";
import ReactDOM from "react-dom";
//import App from './App.jsx';

class Number extends React.Component {
    render () {

        return (
            <div className="number">
                <span className='coloRed'>{this.props.numb}</span>

            </div>
        )
    }
}

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
                <Number numb={this.state.val}/>
                <button className="btn-plus" onClick={this.operation.bind(this,+1)}>+</button>
                <button disabled={valueSpan<=0 ?'disabled':''} className={valueSpan>0 ?'btn-minus':'block'} onClick={this.operation.bind(this,-1)}>-</button>
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
