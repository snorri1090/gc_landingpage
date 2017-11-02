jQuery(function($) {
  //variables
  var card = $(".card");
  var cardsContainer;
  var cardPopup = $(".card-popup");
  var activeCard;
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
      // if cardPopup is already present, it must fade out, then fade back in with new click
    $( "div" ).closest(cardPopup).fadeIn(200);
    // add hidden card back if new card is selected
    $( card ).not(this).show();
    activeCard = $(this);


    // card pop out is populated with the content related to the card clicked
    cardId = activeCard.attr('class');
    cardPopupContent = $( "article" ).attr("id", cardId).html();
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
