import React from 'react';
import PropTypes from 'prop-types';
import Calendar from './Calendar';

class EmployeeCalendar extends React.Component{

	componentDidMount(){
		const {onBodyLoad,onClick,data,months} = this.props
		onBodyLoad();
		var date = new Date();
		var currentMonth = months[date.getMonth()]
		onClick(currentMonth)
	}

	componentWillReceiveProps(nextProps){
		const {data,currentMonth} = this.props;
		if(data.length!==nextProps.data.length || currentMonth!=nextProps.currentMonth){
			this.filter(nextProps.data,nextProps.currentMonth)
		}
	}

	filter(dataList,currentMonth){
		const {months,setFilteredData} = this.props;
		var filteredData =  dataList.filter((data)=>{
			let date = new Date(data.dob)
			let month = months[date.getMonth()]
			return month === currentMonth
		})
		setFilteredData(filteredData)
	}

	render(){
		const {onClick,currentMonth,months} = this.props;
		return(
			<Calendar onClick={onClick} currentMonth={currentMonth} months={months}/>
		)
	}
}

EmployeeCalendar.propTypes = {
	data:PropTypes.array.isRequired,
	months:PropTypes.array.isRequired,
	onClick:PropTypes.func.isRequired,
	setFilteredData:PropTypes.func.isRequired,
	onBodyLoad:PropTypes.func.isRequired,
	currentMonth:PropTypes.string.isRequired
}

export default EmployeeCalendar;