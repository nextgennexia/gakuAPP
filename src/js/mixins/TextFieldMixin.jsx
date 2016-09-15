import HiraganaDic from '../../db/hiraganaDictionary.json';
import KatakanaDic from '../../db/katakanaDictionary.json';

let TextFieldMixin = {
	getInitialState: function() {
		return {
			text: '',
			dictionary: HiraganaDic,
			convertTo: 1
		};
	},
	handleJpConvert: function(event) {
		let 
			textFieldValue = event.target.value,
			dictionary = this.state.dictionary;

		for (let key in dictionary) {
			textFieldValue = textFieldValue.replace(new RegExp(key, 'g'), dictionary[key])
		}

		this.setState({text: textFieldValue});
	},
	changeKana: function(event) {
		if (event.keyCode === ' '.charCodeAt(0) && event.ctrlKey) {
			this.state.convertTo
				? this.setState({dictionary: KatakanaDic, convertTo: 0})
				: this.setState({dictionary: HiraganaDic, convertTo: 1});
		}
	}
};

export default TextFieldMixin;