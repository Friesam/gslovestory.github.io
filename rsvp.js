// import { get } from "http";

$(document).ready(function() {
  
    $("#nameButton").click(function() {
      let inputFirstName = $("#firstName").val();
      let inputLastName = $("lastName").val();

      $("#detailsEntry").show();
      $("#detailsForm").hide();
      $("#nameButtom").hide();
  

      $('#firstName').val()
      $("#lastName").val()
     
      $('.name-text').text($('#firstName').val() + " " + $("#lastName").val());
     
    });
   
    $('#submitRsvp').click(function() {
      $('.completed').text('RSVP Completely Filled!!!')
      // alert("RSVP completed")
    })
    
  });
  