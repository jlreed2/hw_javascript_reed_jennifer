function howdy ( person, message ) {
	console.log( person + ' says ' + message );
}
howdy( 'Jenn', 'hello!' );

var numba = function( string ) {

	if ( string.length < 7 ) {
		console.log( 'What a short little word!' );
	} else if ( string.length > 7 ) {
		console.log( 'I\'m sorry, but that\'s too many to count' );
	} else if ( string.length == 7 ) {
		console.log( '7, what a perfect choice' );
	}
};

numba( '7' );
numba( 'seventy' );
numba( 'university' );

function inception ( callback, value ) {
	callback( value );
}

console.log( inception( 'Box Trolls is a fantastic movie.' ) );
