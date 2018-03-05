import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { BrowserRouter as Router,Route,Switch,Redirect } from 'react-router-dom';
// import { HashRouter as Router,Route } from 'react-router-dom';
// 路由4.0.0以后，将路由里面的Router废弃，被BrowserRouter代替，或者 as Router;
// exact:是严格匹配路由，也就是说所有的路径与跳转的路径对应完全一致，
//才让当前所有的路由显示高亮状态

//BrowserRouter浏览器的正常跳转，是一般开发时用的路由跳转，
//而到了线上使用Hash进行路由跳转（hash路由跳转只是将/#/后面的路径进行了切换，
// 相当于tab切换，不会请求后台[减少http请求，提高网页性能]）

import { Provider }  from 'react-redux';
import store from './store/stores';
import Childs from './view/child';
import Home from './view/home';
import Zimo from './view/zimo';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(
// 	<Provider store={store}>
// 	 <Childs />
// 	</Provider>, 
// document.getElementById('root'));
// registerServiceWorker();

// ReactDOM.render(
// 	<Router>
// 		{/*<Home />*/}
// 		<div className='aa'>
// 			<Route exact path='/' component={ Home }/>
// 			<Route path='/zimo' component={ Zimo }/>
// 		</div>
// 	</Router>,
	 
// document.getElementById('root'));
// registerServiceWorker();


ReactDOM.render(
	<Router>
		{/*<Home />*/}
		<Switch className='aa'>
		{/*Switch是选择性的加载当前唯一的路由，其他的是不会都去匹配*/}
			<Route exact path='/' component={ Home }/>
			<Route path='/zimo' component={ Zimo }/>
			<Redirect  from='/zimo' to='/home' />
		</Switch>
	</Router>,
	 
document.getElementById('root'));
registerServiceWorker();
