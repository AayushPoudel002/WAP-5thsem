const countryList = document.getElementById('countryList')
const btn_select_country = document.getElementById('select_country')
const display_country = document.getElementById('display_country')

const user_name = document.getElementById('name')
const user_email = document.getElementById('email')
const user_password = document.getElementById('password')
const form = document.getElementById('login_form')
const upload = document.getElementById('upload')

let country_name

fetch('https://restcountries.com/v3.1/all?fields=name,flags')
//api endpoint
  .then(res => res.json()) //response converted to json
  .then(data => { //data used

    data.forEach(country => { //foreach loop, runs loop till there is data in array
    const li = document.createElement('li')
      li.innerHTML = `<img src="${country.flags.png}"> ${country.name.common}`
      li.addEventListener('click', () => {
        country_name = country.name.common
        display_country.value = country_name
        countryList.style.display = 'none'
      });
      countryList.appendChild(li) //dynamic ui added
    });
})
  .catch(err => console.error(err)) //if the data doesnt load properly

btn_select_country.addEventListener('click',function(){ //dont to make Select country dropdown box toggle
  if(countryList.style.display == 'none')
    countryList.style.display = 'flex'
  else
    countryList.style.display = 'none'

})

form.addEventListener('submit',function(e){ //Form Validation
  e.preventDefault()
  if(!user_name.value)
  {
    alert("User name is required")
    return
  }
  if(!user_email.value)
  {
    alert("User email is required")
    return
  }
  if(!user_password.value)
  {
    alert("User password is required")
    return
  }

  if(!regex_password.test(user_password.value))
  {
    alert("Password must be at least 8 characters with uppercase, lowercase, number, and special character")
    return
  }

  if(!display_country.value) //this is for country selection validation
  {
    alert("Country not selected")
    return
  }

  if(upload.files.length === 0 )
  {
    alert("Please upload a file")
    return
  }


  
  const file = upload.files[0] //get the first file from the FileList object

  if (file.size > 2*1024*1024)
  {
    alert("File size exceeds 2MB limit")
    upload.value = "" // Clear the file input
    return
  }
    
  alert("form submitted")

})



