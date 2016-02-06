var one = {
	firstName: 'Barack',
	lastName: 'Obama',
	termLength: '8 years',
	party: 'Democrat',
	yearsOfPresidency: '2009-present'
};

var two = {
	firstName: 'George',
	lastName: 'Bush',
	termLength: '8 years',
	party: 'Republican',
	yearsOfPresidency: '2001-2009'
};

var three = {
	firstName: 'Bill',
	lastName: 'Clinton',
	termLength: '8 years',
	party: 'Democrat',
	yearsOfPresidency: '1993-2001'
};

var four = {
	firstName: 'George',
	lastName: 'Bush',
	termLength: '4 years',
	party: 'Republican',
	yearsOfPresidency: '1989-1993'
};

var five = {
	firstName: 'Ronald',
	lastName: 'Reagan',
	termLength: '8 years',
	party: 'Republican',
	yearsOfPresidency: '1981-1989'
};

var presidents = [ one, two, three, four, five ];

console.log( presidents[ 2 ].firstName.lastName );
