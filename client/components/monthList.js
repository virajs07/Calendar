import React from 'react';
import Month from './month'
import PropTypes from 'prop-types';

const MonthList = ({currentMonth,months,onClick})=>(
	<ul>
		{
		 	months.map((month)=>{
				return <Month month={month} key={month} currentMonth={currentMonth} onClick={onClick}/>
			})
		}
	 </ul>
)

MonthList.PropTypes = {
	currentMonth:PropTypes.string.isRequired,
	months:PropTypes.array.isRequired,
	onClick:PropTypes.func.isRequired
}
export default MonthList