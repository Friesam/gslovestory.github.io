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
    let rsvpInfo = {
      "phoneNumber": "8675309",
      "firstName": "value",
      "lastName": "value",
      "accept": "value",
      "decline": "value",
      "coupleNote": "value",
      "wisdomNote": "value",
      "lastName": "value"
  }
  $.ajax({
    type: 'put',
    url: 'https://l6a4uu9pxh.execute-api.us-east-2.amazonaws.com/v1/store-info',
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(rsvpInfo),
    })
    .done(function (results) {
      console.log(results);
    })
  });
  