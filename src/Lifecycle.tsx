import React from "react";

interface IState {
    value: number;
}

export default class Lifecycle extends React.Component<{},IState> {
    constructor(props: {}){
    super(props);
    this.state={
        value:10
    }
    console.log("constructor");
    }
    static getDerivedStateFromProps() {
        console.log("getDerivedStateFromProps");
    }
    static shouldComponentUpdate() {
        console.log("shouldComponentUpdate");
        return true;
    }
    handleClick=()=>{
        let currentValue = this.state.value;
        this.setState({value: currentValue+1})
    }
    public render(){
        console.log("render");
        return (
            <>
            <button onClick={(prevState) => this.handleClick()}>Lifecycle Increment
            </button>
                <div>{this.state.value}</div>
                </>
            );
    }
    static getSnapshotBeforeUpdate() {
        console.log("getSnapshotBeforeUpdate");
        return null;
    }
    static componentDidUpdate(){
        console.log("componentDidUpdate");
    }
    static componentDidMount(){
        console.log("componentDidMount");
    }
}