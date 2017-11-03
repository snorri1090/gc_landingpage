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
    // card is removed
      // adjacent cards collapse into removed card space
    $( this ).hide();

    // assign name of current card to related popup content

    // card pop out animates to center of containing window
      // card pop out displaces other adjacent cards and cards below

    if ($(cardPopup).is(":visible")) {
      $( "div" ).closest(cardPopup).fadeOut(200);
    }

    $( "div" ).closest(cardPopup).fadeIn(200);
    // add hidden card back if new card is selected
    $( card ).not(this).show();
    activeCard = $(this);

    // card pop out is populated with the content related to the card clicked
      //grab the id of the current card
    cardId = activeCard.attr('id');
    console.log(cardId);

      //grab the html content of the associated article

    cardPopup.html(cardPopupContent)
  });

    // card pop out closes and card returns on click (to be replaced with close button)
  $( cardPopup ).click(function() {
    // close window
    $(this).fadeOut(200);
    // add hidden card back
    activeCard.show();

  });
});
