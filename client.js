// cards example
// deck array for our cards
let deck = [];
// our hand
let hand = [];

function createCard( value, suit ){
    // start with face = value
    let face = value;
    // change face to King, Queen, Jack, or Ace if needed
    if( value === 13 ){
        face = 'King';
    }
    else if( value === 12 ){
        face = 'Queen';
    }
    else if( value === 11 ){
        face = 'Jack';
    }
    else if( value === 1 ){
        face = 'Ace';
    }
    // create card object
    let newCard = {
        face: face,
        suit: suit,
        faceUp: false,
        value: value
    } // end newCard
    // push into deck
    deck.push( newCard );
    return true; // optional
} // end createCard

function createDeck(){
    // loop through 1-13 to create cards
    for( let i=1; i<14; i++ ){ 
        createCard( i, 'Clubs' );
    } //end for
    for( let i=1; i<14; i++ ){ 
        createCard( i, 'Diamonds' );
    } //end for
    for( let i=1; i<14; i++ ){ 
        createCard( i, 'Spades' );
    } //end for
    for( let i=1; i<14; i++ ){ 
        createCard( i, 'Hearts' );
    } //end for
} //end createDeck

function handValue(){
    // our sum var
    let sum = 0;
    // loop through our hand
    for( let i=0; i<hand.length; i++){
        // add up all values
        sum += hand[ i ].value;
    } // end for
    // return sum of all values
    return sum;
} //end handValue

function hitMe(){
    hand.push( randomCard() );
} //end hitMe

function randomCard(){
    const index = Math.floor(Math.random() * deck.length);
    const rando = deck[ index ];
    console.log( 'randomCard:', rando );
    return rando;
}

// setup
createDeck();