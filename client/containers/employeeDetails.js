import React from 'react';
import EmployeeNames from '../components/EmployeeNames';
import {updateRandRange} from '../actions/app';
import {connect} from 'react-redux'


function mapStateToProps(state){
	return{
		dataList:state.app.filteredData,
		colorList:state.app.colors,
		numberOfItems : state.app.filteredData.length
	}
}

function mapDispatchToProps(dispatch){
	return{
		ontest(){
			console.log("test")
		}
	}
}

var EmployeeDetails = connect(mapStateToProps,mapDispatchToProps)(EmployeeNames)

export default EmployeeDetails;