import React from "react";
import ReactDOM from "react-dom";
import Test from "./container";



class App extends React.Component{

    render(){
        return (
            <div>
                <Test />
            </div>
        )

    };
};


 ReactDOM.render(
     <App />,
   document.getElementById('root')
 );



