jQuery(function($) {

  var card = $(".card"); // card container
  var closeButton = $(".close-button"); // close button - du doy!
  var cardContent;
  var cardTitle;
  var currentCard;

  // select card
  $( card ).click(function() {

    // if event target is currently expanded
    if ($(this).hasClass("cardback")) {
      return false;

    } else {

      currentCard = $(this);
      cardContent = $(this).find("article");

      $(this).addClass("cardback");
      $(card).not(this).removeClass("cardback");

      // show contents of the card
      $(cardContent).show();

      // hide the main card title
      cardTitle = $(this).find("h3");
      $(card).not(this).find(".card-title").show();

      // hide any other card contents
      $(card).not(this).find("article").hide();

      // select close button
      $( closeButton ).click(function() {
        $(currentCard).removeClass("cardback");
        $(currentCard).find( "article" ).hide();

        return false;
      });

    }
    return false;
  });

});
