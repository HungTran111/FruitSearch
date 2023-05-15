const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
	// TODO
	if (str.length) {
		results = fruit.filter(item =>{
			return item.toLocaleLowerCase().includes(str.toLowerCase());
		})
	}
	return results;
}

function searchHandler(e) {
	// TODO
	const inputVal = e.target.value;
	const results = search(inputVal);
	showSuggestions(results,inputVal);
}

function showSuggestions(results, inputVal) {
	// TODO
	suggestions.innerHTML = '';
	
	const inputValLowerCase = inputVal.toLowerCase();
	results.forEach((fruit) => {
	
	const li = document.createElement('li');
	const fruitToLowerCase = fruit.toLowerCase();
	const index = fruitToLowerCase.indexOf(inputValLowerCase);
	console.log(index)
	
		if (index !== undefined) {
			let matchLetters = '';
			for (let i = index; i < index + inputVal.length; i++) {
		  		matchLetters += fruit[i];
				console.log(fruit[i])
			}
			console.log('match: ' + matchLetters)
		
		let start = '';
		for (let i = 0; i < index; i++) {
		  	start += fruit[i];
		}
		console.log('start:' + start)


		
		let end = '';
		for (let i = index + inputVal.length; i < fruit.length; i++) {
		  	end += fruit[i];
			console.log(index + inputVal.length)
		}
		console.log('end:' + end)

		
		li.innerHTML = `${start}<strong>${matchLetters}</strong>${end}`; 
		suggestions.appendChild(li);
	  }
	});
}

function useSuggestion(e) {
	// TODO
	if (e.target.tagName === 'LI') {
		const text = e.target.textContent;
		input.value = text;
		
		suggestions.innerHTML = '';
	  }
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);