function app(state={},action){
	switch(action.type){
		case 'FETCH_EMPLOYEE_DATA_STARTED':
			return Object.assign({},state,{dataStatus:"loading"})
		case 'FETCH_EMPLOYEE_DATA_END':
			return Object.assign({},state,{dataStatus:"loaded",empData:action.data})
		case 'MONTH_CHANGED':
			return Object.assign({},state,{currentMonth:action.newMonth})
		case 'COLORS_RECEIVED':
			return Object.assign({},state,{colors:action.data})
		case 'FILTERED_DATA':
			return Object.assign({},state,{filteredData:action.data})
		default:
			return state
	}
}

export default app;