jQuery(function($) {
  //variables
  var card = $(".card"); // card container
  var cardContentContainer = $( ".card-popup" );
  var cardContent;

  // select card
  $( card ).click(function() {

    if ( $( this ).hasClass( "cardback" ) ) {
      $(this).removeClass("cardback");
      $( this ).find( "article" ).toggle();

    } else {

      $(this).addClass("cardback");
      $(".card").not(this).removeClass("cardback");

      $( this ).find( "article" ).toggle();
    }
    return false;
  });
});
