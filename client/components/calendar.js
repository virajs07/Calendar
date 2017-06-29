import React from 'react';
import MonthList from './monthList';
import PropTypes from 'prop-types';

const Calendar = ({onClick,months,currentMonth}) => (
	<MonthList months={months} currentMonth={currentMonth} onClick={onClick}/>
)
Calendar.PropTypes = {
	onClick:PropTypes.func.isRequired,
	months:PropTypes.array.isRequired,
	currentMonth:PropTypes.string.isRequired
}
export default Calendar