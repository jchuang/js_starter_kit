var max = 50;
var userGuess;

function getRandomInt( min, max ) {
  return Math.floor(Math.random() * ( max - min + 1 ) + min );
}

var number = getRandomInt( 0, max );

$( document ).ready(function() {
  $( '#max' ).html( max );
  $( '.guess' ).on( 'click', function() {
    userGuess = $( 'input' ).val();
    console.log( userGuess );
  });
});

console.log( 'the number is ' + number );
console.log( "look, it's more text!" );

console.log( parseInt( '15', 10 ));
console.log( typeof( parseInt( '15', 10 )));

console.log( max === 50 );
