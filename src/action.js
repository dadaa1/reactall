export function add(item){
	return{
		type:'ADD',
		item,
	}
}

export function deleteItem(item){
	return{
		type:'DELETE',
		item,
	}
}

export function update(item,oldItem){
	return{
		type:'UPDATE',
		item,
		oldItem,
	}
}