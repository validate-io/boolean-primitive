'use strict';

var isBoolean = require( './../lib' );

console.log( isBoolean( false ) );
// returns true

console.log( isBoolean( true ) );
// returns true

console.log( isBoolean( new Boolean( true ) ) );
// returns false

console.log( isBoolean( 5 ) );
// returns false
