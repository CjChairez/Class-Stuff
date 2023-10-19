<!DOCTYPE html>
<html lang="en">
    <head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Button Click</title>
    </head>
<body>

<!-- Create a button element -->
<button id="myButton">Click me</button>

<script>
  // Get the button element by its ID
  let button = document.getElementById('myButton');

  // Add an event listener to the button for the 'click' event
  button.addEventListener('click', function() {
    // Change the text of the button when it's clicked
    button.textContent = 'You clicked me!';
  });
</script>

</body>
<html/>