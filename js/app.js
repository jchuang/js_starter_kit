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

  if ( numberGuess > max || numberGuess < 0 || !numberGuess ) {
    $( '.alert' ).html( '<p>Oops! Please enter a number between 0 and ' + max + '.</p>' );

  } else {
    allGuesses.push( userGuess );
    $( '.alert' ).html( 'Button' );

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
