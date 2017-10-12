import React from "react";
import ReactDOM from "react-dom";
//import App from './App.jsx';

class Buttons extends React.Component {
    render () {
        console.log(this.props.numb);
        return (
            <div>
                <button className="btn-plus" onClick={this.props.plus}>+</button>
                <button disabled={this.props.numb<=0 ?'disabled':''} className={this.props.numb>0 ?'btn-minus':'block'} onClick={this.props.minus}>-</button>

            </div>
        )
    }
}

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
