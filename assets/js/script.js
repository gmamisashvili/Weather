$(document).ready(function() {
  // Add smooth scrolling to all links
  $("a").on("click", function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function() {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });

  // slider

  var sliders = [
    $(".left-widgets-div"),
    $(".middle-widgets-div"),
    $(".right-widgets-div")
  ];

  $(".scroll-right-img").on("click", function() {
    // $(".left-widgets-div").css("order", 4),
    //   $(".middle-widgets-div").css("order", 2),
    //   $(".right-widgets-div").css("order", 3);
    for (let i = 0; i < sliders.length; i++) {
      var order = sliders[i].css("order");
      if (order == 2) {
        sliders[i].css("order", 4);
      } else {
        sliders[i].css("order", order - 1);
      }

      if (sliders[i].css("order") == 3) {
        sliders[i].css("transform", "scale(" + 1.15 + ")");
        sliders[i].css("z-index", "999");
      } else {
        sliders[i].css("transform", "scale(" + 1 + ")");
        sliders[i].css("z-index", "1");
      }
    }
  });

  // slider
});
