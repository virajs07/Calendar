import React from 'react';
import PropTypes from 'prop-types';
import EmployeeDetails from '../containers/employeeDetails';
import CurrentMonth from './currentMonth';

const Month = ({month,currentMonth,onClick})=>(
	month!==currentMonth
	?<li className="month">
		<details>
			<summary onClick={(e)=>onClick(month,currentMonth)}>
				<label>{month}</label>
				<i className="arrow right"></i>
			</summary>
		</details>
	</li>
	:<CurrentMonth month={month} onClick={onClick}/>	
)

Month.PropTypes = {
	month:PropTypes.string.isRequired,
	currentMonth:PropTypes.string.isRequired,
	onClick:PropTypes.func.isRequired
}

export default Month;
