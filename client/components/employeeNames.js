import React from 'react';
import PropTypes from 'prop-types';
import Name from './name.js';

const EmployeeNames = ({dataList,colorList,numberOfItems})=>(
	<div className="employee-names">
		{
			dataList.map((data,index)=>{
				return <Name data={data} colorList={colorList} key={index} dataListLength={numberOfItems} index={index}/>
			})
		}
	</div>
)

EmployeeNames.PropTypes = {
	dataList:PropTypes.array.isRequired,
	colorList:PropTypes.array.isRequired,
	numberOfItems:PropTypes.number
}

export default EmployeeNames;