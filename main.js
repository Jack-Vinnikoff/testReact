import React from 'react';
import ReactDOM from 'react-dom';
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
    btnPlus() {
        let valueSpan = this.state.val;
        this.setState({val:valueSpan+1})

    }
    btnMinus(){
        let valueSpan = this.state.val;
        if(valueSpan>0){
            this.setState({val:valueSpan-1})
        }
    }

    render(){
        let valueSpan = this.state.val;
        return (
            <div className="box">
                <Number numb={this.state.val}/>
                <button className="btn-plus" onClick={this.btnPlus.bind(this)}>+</button>
                <button className="btn-minus" onClick={this.btnMinus.bind(this)}>-</button>
                <p className={valueSpan==0?'warn':'none'}>Меньше никак нельзя, прости</p>

            </div>
        );
    };
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
