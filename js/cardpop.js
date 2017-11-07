jQuery(function($) {
  //variables
  var card = $(".card"); // card container
  var cardContent;

  // select card
  $( card ).click(function() {

    if ( $( this ).hasClass( "cardback" ) ) {
      $(this).removeClass("cardback");
      $( this ).find( "article" ).hide();

    } else {
      cardContent = $(this).find( "article" );

      $(this).addClass("cardback");
      $(card).not(this).removeClass("cardback");

      // show contents of the card
      $(cardContent).show();

      // hide any other card contents
      $(card).not(this).find("article").hide();
    }
    return false;
  });
});
