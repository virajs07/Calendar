import React from 'react';
import PropTypes from 'prop-types';
import EmployeeDetails from '../containers/employeeDetails';

const CurrentMonth = ({month,onClick}) =>(
	<li className="month current-month">
		<details open>
			<summary onClick={(e)=>onClick(month,month)}>
				<label>{month}</label>
				<i className="arrow up"></i>
			</summary>
			<EmployeeDetails/>
		</details>
	</li>
)

CurrentMonth.PropTypes = {
	month:PropTypes.string.isRequired,
	onClick:PropTypes.func.isRequired
}

export default CurrentMonth;