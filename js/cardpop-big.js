jQuery(function($) {
  //variables
  var card = $(".card"); // card container
  var cardsContainer; // container for entire set of cards
  var cardPopup = $(".card-popup"); // container for cardPopup - further card details
  var activeCard; // currently active card
  var cardId;
  var cardPopupContent;

  // select card
  $( card ).click(function() {

    if ( $( this ).hasClass( "cardback-big" ) ) {
      $( this ).removeClass("cardback-big");
    } else {

      $( this ).addClass("cardback-big");
      $(".card").not( this ).removeClass("cardback-big");
    }
    return false;
  });
});
