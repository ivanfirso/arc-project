/*
$(function() {                                     // DOM has loaded
    var $modal = $('#reveal');
    function loadContent(url){                    // Load new content into page
      $modal.load(url + ' #pageBody *').foundation('open');
    }

    $('.load-modal').on('click', function(e) {     // Click handler
      e.preventDefault();                         // Stop link loading new page
      var href = this.href;                       // Get href attribute of link
      var $this = $(this);                        // Store link in jQuery object
      loadContent(href);                          // Call function: loads content
    });
  });


  */

  $(document).ready(function() {
    $('.js-modal-link').click(function(){
      var url = $(this).attr("href");
      var id = $(this).attr("id");
      if (id == 'acr-projects-image1' ) {
        $("#modalWindow_1").load(url+" #"+id).foundation('open');
      } else if (id == 'acr-projects-image2' ) {
        $("#modalWindow_2").load(url+" #"+id).foundation('open');
      } else if (id == 'acr-projects-image3' ) {
        $("#modalWindow_3").load(url+" #"+id).foundation('open');
      } else if (id == 'acr-projects-image4' ) {
        $("#modalWindow_4").load(url+" #"+id).foundation('open');
      } else if (id == 'acr-projects-image5' ) {
        $("#modalWindow_5").load(url+" #"+id).foundation('open');
      } else if (id == 'acr-projects-image6' ) {
        $("#modalWindow_6").load(url+" #"+id).foundation('open');
      } else {
        alert ("selecciona algo");
      }
    });
});
