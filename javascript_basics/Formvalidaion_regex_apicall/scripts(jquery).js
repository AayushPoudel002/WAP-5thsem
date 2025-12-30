// Execute code only after the document is fully loaded
$(document).ready(function () {

  // Selecting required DOM elements using jQuery
  const $countryList = $('#countryList')          // UL element for country list
  const $btnSelectCountry = $('#select_country')  // Button to open country dropdown
  const $displayCountry = $('#display_country')   // Input field to display selected country

  const $userName = $('#name')        // Name input field
  const $userEmail = $('#email')      // Email input field
  const $userPassword = $('#password')// Password input field
  const $form = $('#login_form')      // Form element
  const $upload = $('#upload')        // File upload input

  let country_name                  // Variable to store selected country name

  // Fetch country names and flags using jQuery AJAX
  $.ajax({
    url: 'https://restcountries.com/v3.1/all?fields=name,flags', // API endpoint
    method: 'GET',
    success: function (data) {

      // Loop through each country received from API
      $.each(data, function (index, country) {

        // Create a new list item dynamically
        const $li = $('<li>')
        $li.html(`<img src="${country.flags.png}"> ${country.name.common}`)

        // On clicking a country
        $li.on('click', function () {
          country_name = country.name.common           // Store selected country
          $displayCountry.val(country_name)            // Display in input field
          $countryList.hide()                           // Hide country list
        })

        // Append list item to country list
        $countryList.append($li)
      })
    },

    // Error handling if API fails
    error: function (err) {
      console.error(err)
    }
  })

  // Toggle country dropdown on button click
  $btnSelectCountry.on('click', function () {
    if ($countryList.css('display') === 'none')
      $countryList.css('display', 'flex')
    else
      $countryList.css('display', 'none')
  })

  // Form submission and validation
  $form.on('submit', function (e) {
    e.preventDefault()   // Prevent default form submission

    // Check if name field is empty
    if (!$userName.val()) {
      alert("User name is required")
      return
    }

    // Check if email field is empty
    if (!$userEmail.val()) {
      alert("User email is required")
      return
    }

    // Check if password field is empty
    if (!$userPassword.val()) {
      alert("User password is required")
      return
    }

    // Check if file is uploaded
    if ($upload[0].files.length === 0) {
      alert("Please upload a file")
      return
    }

    // Get the uploaded file
    const file = $upload[0].files[0]

    // File size validation (maximum 2MB)
    if (file.size > 2 * 1024 * 1024) {
      alert("File size exceeds 2MB limit")
      $upload.val("")    // Clear file input
      return
    }

    // Check if country is selected
    if (!$displayCountry.val()) {
      alert("Country not selected")
      return
    }

    // If all validations pass
    alert("form submitted")
  })

})
