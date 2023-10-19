<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Form Submission</title>
</head>
<body>

<!-- Create a form with a text input and a submit button -->
<form id="myForm">
  <input type="text" id="myText" placeholder="Type something...">
  <button type="submit">Submit</button>
</form>

<script>
  // Get the form element by its ID
  let form = document.getElementById('myForm');

  // Add an event listener to the form for the 'submit' event
  form.addEventListener('submit', function(event) {
    // Prevent the form from being submitted
    event.preventDefault();

    // Get the text input element by its ID
    let textInput = document.getElementById('myText');
    // Display the text input's value in an alert
    alert(textInput.value);
  });
</script>

</body>
</html>