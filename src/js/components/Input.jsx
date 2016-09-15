import React from 'react';
import ConvertToMixin from '../mixins/ConvertTo.jsx';

const Input = React.createClass({
  mixins: [ConvertToMixin],
	render: function() {
		return (
			<div className='g-input'>
				<input
					type='text'
					placeholder='ka->カ'
					value={this.state.text}
					onChange={this.convertToKana}
					onKeyDown={this.changeKana}
				/>
			</div>
		);
	}
});

export default Input;