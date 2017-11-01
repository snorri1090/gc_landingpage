jQuery(function($) {
  //variables
  var card = $(".card");
  var cardsContainer;
  var cardPopup = $(".card-popup");
  var activeCard;

  // select card
  $( card ).click(function() {
    // card is removed
      // adjacent cards collapse into removed card space
    $( this ).hide();

    // card pop out animates to center of containing window
      // card pop out displaces other adjacent cards and cards below
    $( cardPopup ).show();
    $( card ).not(this).show();
    activeCard = $(this);


    // card pop out is populated with the content related to the card clicked
  });

    // card pop out closes and card returns on click (to be replaced with close button)
  $( cardPopup ).click(function() {
    $(this).hide();
    activeCard.show();

  });












  // close window

  // add hidden card back

  // add hidden card back if new card is selected

});
