export default function reducer(list={},action){
	switch(action.type){
		case 'ADD':
			console.log('我是add操作~',Object.assign({},list,{[action.item]:action.item}));
			return Object.assign({},list,{[action.item]:action.item})
		case 'DELETE':
			let item=delete list[action.item];
			console.log('我是delete操作~',item+'\n',{...list});
			return {...list};
		case 'UPDATE':
			item=list[action.oldItem]=action.item;
			console.log('我是update操作~',{...list});
			return {...list}
		default:
			return list;
	}
}


