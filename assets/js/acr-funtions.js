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
      } else if (id == 'acr-projects-image7' ) {
        $("#modalWindow_7").load(url+" #"+id).foundation('open');
      } else if (id == 'acr-projects-image8' ) {
        $("#modalWindow_8").load(url+" #"+id).foundation('open');
      } else if (id == 'acr-projects-image9' ) {
        $("#modalWindow_9").load(url+" #"+id).foundation('open');
      } else if (id == 'acr-projects-image10' ) {
        $("#modalWindow_10").load(url+" #"+id).foundation('open');
      } else if (id == 'acr-projects-image11' ) {
        $("#modalWindow_11").load(url+" #"+id).foundation('open');
      } else if (id == 'acr-projects-image12' ) {
        $("#modalWindow_12").load(url+" #"+id).foundation('open');
      } else if (id == 'acr-projects-image13' ) {
        $("#modalWindow_13").load(url+" #"+id).foundation('open');
      } else if (id == 'acr-projects-image14' ) {
        $("#modalWindow_14").load(url+" #"+id).foundation('open');
      } else if (id == 'acr-projects-image15' ) {
        $("#modalWindow_15").load(url+" #"+id).foundation('open');
      } else if (id == 'acr-projects-image16' ) {
        $("#modalWindow_16").load(url+" #"+id).foundation('open');
      } else if (id == 'acr-projects-image17' ) {
        $("#modalWindow_17").load(url+" #"+id).foundation('open');
      } else if (id == 'acr-projects-image18' ) {
        $("#modalWindow_18").load(url+" #"+id).foundation('open');
      } else if (id == 'acr-projects-image19' ) {
        $("#modalWindow_19").load(url+" #"+id).foundation('open');
      } else if (id == 'acr-projects-image20' ) {
        $("#modalWindow_20").load(url+" #"+id).foundation('open');
      } else if (id == 'acr-projects-image21' ) {
        $("#modalWindow_21").load(url+" #"+id).foundation('open');
      } else {
        alert("selecciona algo");
      }
    });
});
