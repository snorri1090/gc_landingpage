jQuery(function($) {
  //variables
  var card = $(".card"); // card container
  var cardContent;
  var cardTitle;

  // select card
  $( card ).click(function() {

    // if event target is currently expanded
    if ($(this).hasClass("cardback")) {
      $(this).removeClass("cardback");
      $(this).find( "article" ).hide();
      $(this).find(".card-title").show();

    } else {
      cardContent = $(this).find("article");

      $(this).addClass("cardback");
      $(card).not(this).removeClass("cardback");

      // show contents of the card
      $(cardContent).show();

      // hide the main card title
      cardTitle = $(this).find("h3");
      $(this).find(".card-title").hide();

      // hide any other card contents
      $(card).not(this).find("article").hide();
    }
    return false;
  });
});
