/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	isBoolean = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'validate.io-boolean-primitive', function tests() {

	it( 'should export a function', function test() {
		expect( isBoolean ).to.be.a( 'function' );
	});

	it( 'should positively validate', function test() {
		var bool;

		bool = isBoolean( true );
		assert.ok( bool );

		bool = isBoolean( false );
		assert.ok( bool );
	});

	it( 'should negatively validate', function test() {
		var values = [
			5,
			'5',
			null,
			undefined,
			new Boolean( true ),
			new Boolean( false ),
			NaN,
			function(){},
			[],
			{}
		];

		for ( var i = 0; i < values.length; i++ ) {
			assert.notOk( badValue( values[i] ) );
		}
		function badValue( value ) {
			return isBoolean( value );
		}
	});

});
