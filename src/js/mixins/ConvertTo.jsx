import HiraganaDic from '../../db/hiraganaDictionary.json';
import KatakanaDic from '../../db/katakanaDictionary.json';

let ConvertTo = {
	getInitialState: function() {
		return {
			text: '',
			dictionary: HiraganaDic,
			convertTo: 1
		};
	},
	convertToKana: function(event) {
		let 
			value = event.target.value,
			dictionary = this.state.dictionary;

		for (let key in dictionary) {
			value = value.replace(new RegExp(key, 'g'), dictionary[key])
		}

		this.setState({text: value});
	},
	changeKana: function(event) {
		if (event.keyCode === ' '.charCodeAt(0) && event.ctrlKey) {
			this.state.convertTo
				? this.setState({dictionary: KatakanaDic, convertTo: 0})
				: this.setState({dictionary: HiraganaDic, convertTo: 1});
		}
	}
};

export default ConvertTo;