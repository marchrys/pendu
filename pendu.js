var words = ['dièse', 'bémol', 'bécarre', 'tonalité', 'gamme', 'intervalle'];

var alphabet = 'A,B,C,D,E,&Eacute;,&Egrave;,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z';
var alphabetArr = alphabet.split(',');

var word = '';
var dispWordArr = [];

var errors = 0;
var maxErrors = 10;
var remLetters = 0;
var isInWord = false;

$(function(){
    alphabetArr.forEach(function(item){
        $('#answers-container').append('<button type="button" class="btn btn-primary m-1 col-1 ans-button">' + item + '</button>');
    });
    initGame();

    $('.ans-button').click(function(){
        $(this).prop('disabled', true);
        isInWord = false;
    
        var ansLetter = $(this).html();
        
        for(var i=0; i<word.length; i++){
            var questLetter = word.charAt(i);
            
            if(ansLetter == questLetter){
                isInWord = true;
                remLetters--;
    
                dispWordArr[i] = ansLetter;
            }
        }
    
        $('#word').html(dispWordArr);
    
        if(!isInWord){
            errors++;
        }
    
        showHangmanImg();
    
        if(remLetters == 0){
            $('#game-over-message').html('Super! Vous avez gagné.')
    
            $('#answers-container').hide();
            $('#game-over-cont').show();
        }
    
        if(errors == maxErrors){
            $('#game-over-message').html('Désolé! Vous avez perdu.')
    
            $('#answers-container').hide();
            $('#game-over-cont').show();
        }
    });

    $('#play-button').click(function(){
        initGame();
    });
});

function initGame(){
    $('#answers-container').show();
    $('#game-over-cont').hide();

    $('.ans-button').each(function(){
        $(this).prop('disabled', false);
    });

    errors = 0;
    showHangmanImg();

    word = words[Math.floor(Math.random() * words.length)];
    word = word.toUpperCase();

    remLetters = word.length;

    dispWordArr = [];
    for(var i=0; i<word.length; i++){
        dispWordArr.push(' _ ');
    }
    $('#word').html(dispWordArr);
}

function showHangmanImg(){
    $('#hangman-img').attr('src', 'img/' + errors + '.jpg');
}





