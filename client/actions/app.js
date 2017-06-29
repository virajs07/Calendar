export function startGettingEmployeeData(){
	return{
		type:"FETCH_EMPLOYEE_DATA_STARTED"
	}
}

export function employeeDataReceived(json){
	return{
		type:"FETCH_EMPLOYEE_DATA_END",
		data:json
	}
}

export function monthChanged(month){
	return{
		type:"MONTH_CHANGED",
		newMonth:month
	}
}

export function colorsReceived(json){
	return{
		type:"COLORS_RECEIVED",
		data:json
	}
}

export function setFilteredData(data){
	return{
		type:"FILTERED_DATA",
		data
	}
}

export function updateRandRange(index){
	return{
		type:"RAND_RANGE_UPDATE",
		index
	}
}