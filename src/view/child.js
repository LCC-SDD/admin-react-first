import React,{ Component } from 'react';
import { connect } from 'react-redux';

class Childs extends Component{
	constructor(props) {
	  super(props);
	  this.state = {};
	}
	render(){
		const { arr , addArr , reduceArr} = this.props;
		console.log(this.props);
		const childStyle = {
			width:'100%',
			height:'100%',
			background:'red',
			div:{
				width:400,
				height:100,
				background:'green',
				marginLeft:300
			},
			button:{
				width:80,
				height:60,
				fontSize:20,
			}
		}
	    return (
	   	   <div style={childStyle}>
	   	   		{
	   	   			arr.map((item,index)=>{
	   	   				return (
	   	   					<div style={childStyle.div} key={index}>{item}</div>
	   	   					)
	   	   			})
	   	   		}
	   	   		<button style={childStyle.button} onClick={()=>addArr()}>增加</button>
	   	   		<button style={childStyle.button} onClick={()=>reduceArr()}>删除</button>
	   	   </div>
	   	)
	}
}
function mapStateToProps(state){
	console.log(state)
	return {
		arr:state.addReducer.arr
	}
}
function mapDispatchToProps(dispatch){
	return {
		addArr:()=>dispatch({type:'ADD'}),
		reduceArr:()=>dispatch({type:'REDUCE'})
	}
}
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Childs);