var max = 50;
var userGuess;

var numberGuess;
var allGuesses = [];

var getRandomInt = function( min, max ) {
  return Math.floor(Math.random() * ( max - min + 1 ) + min );
}

var number = getRandomInt( 0, max );
console.log( 'the number is ' + number );

var convertGuess = function( input ) {
  return parseInt( input, 10 );
}

var submitGuess = function() {
  userGuess = $( 'input' ).val();
  $( 'input' ).val( '' );
  numberGuess = convertGuess( userGuess );

  if( numberGuess > max || !numberGuess ) {
    console.log( 'not a valid guess!' );
  } else {
    console.log( 'valid guess, check against number' );
  }

  allGuesses.push( userGuess );
  console.log( 'allGuesses = ' + allGuesses );
}

$( document ).ready( function() {
  $( '#max' ).html( max );

  $( '.guess' ).on( 'click', submitGuess );
  $( 'input' ).on( 'keypress', function( event ) {
    if( event.keyCode == 13 ) {
      $( '.guess' ).click();
    }
  })
})
