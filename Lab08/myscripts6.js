document.getElementById('googleButton').addEventListener('click', function() {
    // Show the confirm box
    const result = confirm("Do you want to go to Google?");

    if (result) {
        // If 'OK' is selected, redirect to Google
        window.location.href = "https://www.google.com";
    } else {
        // If 'Cancel' is selected, display the message
        alert("You decided to stay.");
    }
});