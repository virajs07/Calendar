import React from 'react';
import PropTypes from 'prop-types';

class Name extends React.Component{

	getRandomColor(data){
		switch(data){
			case 0: return 'color-one'
			case 1: return 'color-two'
			case 2: return 'color-three'
			case 3: return 'color-four'
			case 4: return 'color-five'
			case 5: return 'color-six'
			case 6: return 'color-seven'
			case 7: return 'color-eight'
			case 8: return 'color-nine'
			case 9: return 'color-ten'
			case 10: return 'color-eleven'
			case 11: return 'color-twelve'
			case 12: return 'color-thirteen'
			default: return 'color-seven'
		}
	}

	render(){
		const {data,index,dataListLength} = this.props;
		var flexGrow = "flex-0 "
		if(dataListLength<=2)
			flexGrow = "flex-1 "
		var classVar = "employee-name " + flexGrow +  this.getRandomColor(index) ;

		return(
			<div className={classVar}>
				{data && data.name ? data.name[0].toUpperCase() : null}
			</div>
		)
	}
}

Name.PropTypes={
	data:PropTypes.object.isRequired,
	index:PropTypes.number.isRequired,
	dataListLength:PropTypes.number.isRequired
}

export default Name