var max = 50;
var userGuess;

var numberGuess;
var allGuesses = [];

var getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

var number = getRandomInt(0, max);

var convertGuess = function(input) {
  return parseInt(input, 10);
}

var submitGuess = function() {

  userGuess = $('#guess_value').val();
  $('#guess_value').val('');
  numberGuess = convertGuess(userGuess);

  if (isNaN(numberGuess) || numberGuess > max || numberGuess < 0) {
    $('.alert').show();
    $('.alert').html('<p>Oops! Please enter a number between 0 and ' + max + '.</p>');

  } else {
    allGuesses.push(userGuess);
    $('.alert').hide();

    if (numberGuess > number) {
      $('.history').append('<p class="pastguess">' + numberGuess + ' is too high, please guess again.</p>');
    } else if (numberGuess < number) {
      $('.history').append('<p class="pastguess">' + numberGuess + ' is too low, please guess again.</p>');
    } else {
      $('.history').append('<p class="pastguess">Congratulations, ' + number + ' is correct!<br />You have guessed the number in ' +
        allGuesses.length + ' guesses.</p>');
      $('.success').show();
      $('.guess').hide();
      $('input').prop('disabled', true);
    }
  }
}

$( document ).ready( function() {
  $('#max').html(max);
  $('.alert').hide();
  $('.success').hide();

  $('.guess').on('click', submitGuess);
  $('#guess_value').on('keypress', function(event) {
    if(event.keyCode == 13) {
      submitGuess();
    }
  })
  $('#new_game').on('click', function() {
    location.reload();
    $('#guess_value').prop('disabled', false);
  })
})
