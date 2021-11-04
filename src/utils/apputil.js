var utils = {

	/**
	 * Проверяет, что переменная на undefined и не null
	 * если OK возвразает true, если не сложилось - false
	 * @param {any} p_value любая переменная
	 * @returns {boolean} l_result результат проверки переменной 
	 */
     isDefined: function(p_value) {
		let l_result = true ;
		if (typeof p_value === "undefined"){
			l_result=false;
		} else if ( p_value === null){
			l_result=false;
		} else {
			// do nothing
		};
		return l_result ;     
	},





};

module.exports = utils ;
