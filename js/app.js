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

  if ( numberGuess > max || !numberGuess ) {
    $( '.alert' ).html( 'Sorry, that was not a valid guess.' );

  } else {
    allGuesses.push( userGuess );

    if ( numberGuess > number ) {
      $( '.history' ).append( '<p class="pastguess">' + numberGuess + ' is too high, please guess again.</p>' );
    } else if ( numberGuess < number ) {
      $( '.history' ).append( '<p class="pastguess">' + numberGuess + ' is too low, please guess again.</p>' );
    } else {
      $( '.history' ).append( '<p class="pastguess">Congratulations, ' + number + ' is correct!<br />You have guessed the number in ' +
        allGuesses.length + ' guesses.</p>' );
    }
  }
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
