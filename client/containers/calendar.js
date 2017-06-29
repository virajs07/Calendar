import React from 'react';
import {connect} from 'react-redux'
import {startGettingEmployeeData,employeeDataReceived,monthChanged,colorsReceived,setFilteredData} from '../actions/app';
import Data from '../../data/data100.json';
import Colors from '../../data/colors.json';
import EmployeeCalendar from '../components/employeeCalendar';

function mapStateToProps(state){
	return{
		data:state.app.empData,
		months:state.app.monthList,
		currentMonth:state.app.currentMonth,
		filteredData:state.app.filteredData
	}
}

function mapDispatchToProps(dispatch){
	return{
		onBodyLoad(){
			dispatch(startGettingEmployeeData())
			dispatch(employeeDataReceived(Data));
			dispatch(colorsReceived(Colors))
		},
		onClick(month,currentMonth){
			if(month===currentMonth)
				month = "random"
			dispatch(monthChanged(month))
		},
		setFilteredData(data){
			dispatch(setFilteredData(data))
		}
	}
}

var Calendar = connect(mapStateToProps,mapDispatchToProps)(EmployeeCalendar)

export default Calendar;