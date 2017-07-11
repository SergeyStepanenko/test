import as obj './search.JSON';
console.log(obj);

// import docsearch from 'docsearch.js';
function showHideReset () {
  var val = (this.value === undefined || this.value === "") ? 'none' : 'block';
  this.parentNode.parentNode.querySelector('.searchbox__reset').style.display = val;
}

var input = document.querySelector('.searchbox__input');
input.addEventListener('keyup', handleInputChange);

function handleInputChange(e) {
	console.log(e.target.value);
}

var test = 1;
module.exports = test;

export var obj = 1;

// export default function () {
//
//   var ds = docsearch({
//     apiKey: 'a1e1ce4270154213659b1056053824cd',
//     indexName: 'middleman',
//     inputSelector: '#search-input'
//   });
//
//   var $input = document.querySelector('.searchbox__input');
//   var $reset = document.querySelector('.searchbox__reset');
//
//   // Focus input on reset
//   $reset.addEventListener('click', function () {
//     ds.autocomplete.autocomplete.setVal('');
//     $input.focus();
//     showHideReset.call($input);
//   });
//
//   $input.addEventListener('input', showHideReset);
// };
