import React from "react";
import ReactDOM from "react-dom";
import Child from './components/child.jsx'
import Parent from './components/parent.jsx';


class App extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            parent:[{id:1,value:3}],
            child:[{id:1,value:3,mode:true},{id:2,value:1,mode:true},{id:3,value:11,mode:true},{id:4,value:2,mode:true},
                    {id:5,value:12,mode:true}],
        }
    }
    componentDidMount () {
        const returnObjChild = JSON.parse(localStorage.getItem("child"))
        const returnObjParent = JSON.parse(localStorage.getItem("parent"))
        const child = this.state.child;
        const parent = this.state.parent;
        this.setState({child:returnObjChild ||child, parent:returnObjParent || parent});
    }

    operation(oper) {
        const parent = this.state.parent;
        const child = this.state.child;
        const childVal = child.map((item,i)=>{
            if(item.mode == true) {
                return {id: item.id, value: item.value + oper, mode : item.mode};
            }
            return {id : item.id, value : item.value, mode : item.mode}
        });
        const parentVal = parent.map((item,i)=>{
            return {id: parent[i].id , value : parent[i].value + oper, mode:true};

        });
        this.setState({child:childVal, parent:parentVal});

    }
    btnResetParent() {
        const parent = this.state.parent;
        const child = this.state.child;
        const childVal = child.map((item,i) =>{
            if(item.mode == true) {
                return {id : item.id, value : item.value = 1, mode: item.mode}
            }
            return {id : item.id, value : item.value, mode: item.mode}
        })
        const parentVal = parent.map((item,i) => {
            return {id : item.id, value : item.value = 1, mode:true}
        })
        this.setState({child:childVal, parent:parentVal});

    }
    operationChild(oper,idN){
        const child = this.state.child;
        const childVal = child.map((item,i) => {
            if(item.id == idN && item.mode == true) {
                return {id: item.id, value: item.value + oper, mode : item.mode}
            }
            return {id : item.id, value: item.value, mode : item.mode}

        })
        this.setState({child:childVal});
    }
    btnResetChild(idN) {
        const child = this.state.child;
        const childVal = child.map((item,i) =>{
            if(item.id == idN) {
                return {id : item.id, value : 1, mode : true}
            }
            return {id : item.id, value : item.value, mode : item.mode}
        })
        this.setState({child:childVal});
    }

    addedChild () {
        const child = this.state.child;
        let newChild = child.concat();
        let newId = newChild.length;
        if(newId == 0) {
            newChild.push({id : 1, value : 1, mode:true});
            return this.setState({child : newChild});
        }

        let lastElement = newChild[newId-1].id;
        newChild.push({id : lastElement+1, value : 1, mode:true});
        this.setState({child : newChild});

    }

    deleteChild (idN) {
        const child = this.state.child;
        const newChild =[];
        for(let i=0; i<child.length; i++){
            if(child[i].id == idN){
                continue;
            }
            newChild.push(child[i]);
        }
        this.setState({child:newChild});

    }
    modeOnOff(idN){
        const value=document.querySelector('.mode-btn-on');
        const child=this.state.child;
        const newChild = child.map((item,i) => {
            if(item.id == idN) {

                return {id : item.id, value : item.value, mode:!item.mode}
            }
            return {id : item.id, value : item.value, mode : item.mode};
        })
        this.setState({child:newChild});
        console.log(value.value);
    }
    componentDidUpdate () {
        let serialObjChild = JSON.stringify(this.state.child);
        let serialObjParent = JSON.stringify(this.state.parent);
        localStorage.setItem('child',serialObjChild);
        localStorage.setItem('parent',serialObjParent);

    }

    render(){
        const valueParent = this.state.parent[0].value;
        const valueChild = this.state.child;

        return (
            <div className="">
                <Parent
                    numb={valueParent}
                    plus={this.operation.bind(this,+1)}
                    minus={this.operation.bind(this,-1)}
                    reset={this.btnResetParent.bind(this)}
                    added={this.addedChild.bind(this)}
                />
                <p className={valueParent==0?'warn':'none'}>Меньше никак нельзя, прости</p>

                {valueChild.map((item,i)=>{
                    return <Child key={item.id}
                        id = {item.id}
                        numb={item.value}
                        reset = {this.btnResetChild.bind(this)}
                        operationChild={this.operationChild.bind(this)}
                        deleteChild={this.deleteChild.bind(this)}
                        modeOnOff={this.modeOnOff.bind(this)}
                        mode={item.mode}
                    />
                })}


            </div>
        );
    };
};


 ReactDOM.render(
     <App />,
   document.getElementById('root')
 );



