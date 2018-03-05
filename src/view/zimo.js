import React,{Component} from 'react';
class Zimo extends Component{
	constructor(props){
		super(props);
	}
	noew(){
		const params = { data:this.props.location.state.data };
		this.$http.post('/api',params).then((res)=>{
			if(this.props.location.state.data === 'hello'){
				console.log(1)
			}
			return;
		}).carte(error=>{
			console.log(error)
		});
	}
	render(){
		console.log(this.props.location.state.data);
		console.log(this);
		const shuang = '哈哈';
		let styleDiv = {
			width:'100%',
			height:'500px',
			background:'green',
			fontSize:'30px',
			textAlign:'center',
			lineHeight:'500px',
			fontWeight:'bold'
		}
		return  (
			<div style={styleDiv}>
				{ shuang }
			</div>
			)
	}
}
export default Zimo;