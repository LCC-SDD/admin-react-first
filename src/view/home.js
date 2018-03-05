import React,{Component} from 'react';
import {Link} from 'react-router-dom'; 
class Home extends Component{
	constructor(props){
		super(props)
	}
	render(){
		const go = '去自摸那';
		let styleDiv = {
			width:'100%',
			height:'500px',
			background:'red',
			fontSize:'30px',
			textAlign:'center',
			lineHeight:'500px',
			fontWeight:'bold'
		}
		return  (
			<div style={styleDiv}>
				 <Link to={{pathname:'/zimo',hash:'#fdfdf',search:'id',query:{foo:'boo'},state:{data:'hello'}}}>
					马豌豆豌豆的链接
				</Link>	
			{/*to=对象，带参数跳转（pathname, query, hash, state(额外数据）），
     		注意:这些参数都被存放到this.props.location中
			*/}
			</div>
			)
	}
}
export default Home;