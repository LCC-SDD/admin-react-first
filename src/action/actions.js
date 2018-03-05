export const REDUCE = 'REDUCE';
export const ADD = 'ADD';

export const reduce = (item)=>{
	return {
		type:'REDUCE',
		payload:item
	}
};
export const add = (num)=>{
	return {
		type:'ADD',
		payload:num
	}
}