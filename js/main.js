function howdy ( person, message ) {
	return person + 'says' + message;
}
var message = howdy( 'Jenn', 'hello!' );

var numba = function( string ) {

	if ( string.length < 7 ) {
		console.log( 'What a short little word!' );
	} else if ( string.length > 7 ) {
		console.log( 'I\'m sorry, but that\'s too many to count' );
	} else if ( string.length == 7 ) {
		console.log( '7, what a perfect choice' );
	}
};

string( 7 );
string( 'seventy' );
string( 'university' );

function inception ( callback, value ) {
	callback( value );
}

var message = inception( 'Box Trolls is a fantastic movie.' );
