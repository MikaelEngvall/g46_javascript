function filterAds() {
  // Get the entered title from the input field
  let filterValue = document.getElementById("filterTitle").value.toUpperCase();  //to upper or lowercase so it is not case sensitive

  // Get all the advertisement cards
  let cards = document.getElementsByClassName("card");  // creating an array of cards

  // Loop through each "card" and hide/show based on the filter value
  for (let i = 0; i < cards.length; i++) {
    let title = cards[i].querySelector(".card-title").innerText.toUpperCase();
    if (title.indexOf(filterValue) > -1) {
      cards[i].style.display = "";  //Shows the card
    } else {
      cards[i].style.display = "none"; // Hides the card
    }
  }
}
function toggleEmail(element, email) {
  // Check if the current text is the email address
  if (element.innerText === 'Contact: ' + email) {
    // If it is, replace it with ***
    element.innerText = 'Contact: ***';
  } else {
    // If it's not, replace it with the email address
    element.innerText = 'Contact: ' + email;
  }
}

// Attach click event listeners to each card's contact element
document.querySelectorAll('.card-text').forEach(function (element, index) {
  // Extract the email address from the alert function
  let email = 'contact' + (index + 1) + '@example.com';
  // Attach the toggleEmail function to the click event
  element.onclick = function () {
    toggleEmail(element, email);
  };
});