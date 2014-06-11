$( document ).ready(function() {
  'use strict';

  var emailEntry = $('input[name="email"]');

  emailEntry.focus(function() {
    if (!emailEntry.next("p").length) {
      $(this).after("<p>You appear to be entering your e-mail address</p>");
    }
  });

  emailEntry.keyup(function () {
    console.log(emailEntry.val());
    if (emailEntry.val().indexOf('@') === -1 ) {
      emailEntry.next("p").replaceWith($("<p>", {text: "Not a valid e-mail address"}));
    }
    else {
     emailEntry.next("p").
      replaceWith($("<p>", {text: "E-mail address validated"}));
    }
  });




$( "form" ).submit(function( event ) {
  // alert( "Handler for .submit() called." );
  var email = $('input[name="email"]').val();
  console.log(email);

  var creditCardNumber = $('input[name="credit_card_number"]').val();
  console.log(creditCardNumber);

  var nameOnCard = $('input[name="name_on_card"]').val();
  console.log(nameOnCard);

  var cardVerification = $('input[name="verify_code"]').val();
  console.log(cardVerification);

  if (email.indexOf('@') === -1) {
  	alert("That is not an email address.");
  }

  if (creditCardNumber.length !== 16) {
  	alert("Enter a valid card number.");
  }

if (nameOnCard.indexOf(' ') === -1) {
  	alert("Name is not valid.");
  }

if (cardVerification.length !== 3) {
  	alert("Enter a valid verification code.");
  }



  // var re = [ 0-1 + 0-9 + / + 0-9 +0-9 ] /g

  // if (expiration !== re) {
  // 	alert("Enter a valid card number.");
  // }


  event.preventDefault();
});



});
