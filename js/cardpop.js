jQuery(function($) {

  var card = $(".card.active"); // card container
  var closeButton = $(".close-button"); // close button - du doy!
  var cardContent;
  var cardTitle;
  var currentCard;
  var cardArt;

  // select card
  $( card ).click(function() {

    // if event target is currently expanded
    if ($(this).hasClass("cardback")) {
      return false;

    } else {

      currentCard = $(this);
      cardContent = $(this).find("article");
      cardArt = $(this).find(".card-art");

      $(this).addClass("cardback");
      $(card).not(this).removeClass("cardback");
      $(card).not(this).find(".card-art").show();

      // hide the card art of the small card
      $(cardArt).hide();

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
        $(cardArt).show();

        return false;
      });

    }
    return false;
  });


  // event handler for hovering over cards
  $( card ).mouseenter(function() {
    $(this).addClass("card-hover")
  });
  $( card ).mouseleave(function() {
    $(this).removeClass("card-hover")
  });

});
