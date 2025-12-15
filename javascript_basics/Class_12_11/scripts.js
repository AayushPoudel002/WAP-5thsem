//DOM selection
const Name = document.getElementById("name")
const roll=document.getElementById("roll")
const address=document.getElementById("address")
const submit_button=document.getElementById("btn_submit")
const form=document.getElementById("entryform")
const transcript=document.querySelector(".transcript")

//DOM events
/*
submit_button.addEventListener("click",function(event)
{
    event.preventDefault() // Prevent form submission

    /*
    const object_user=
    {
        Name_value:Name.value,
        ROll_value:roll.value,
        Address_value:address.value,
    }

    console.log(object_user)

})
*/
form.addEventListener("submit",function(event)
{
    event.preventDefault() // Prevent form submission

    if(Number(roll.value)<=0)
    {
        alert("Please Enter Vald Roll number")
        roll.focus()
        return
    }



    UpdateUI()
})

function UpdateUI()
{
    transcript.innerHTML=
    `<h2>Transcript</h2>
    <dl class="details">
        <dt>Name:</dt>
        <dd>${Name.value}</dd>
        <dt>Roll:</dt>
        <dd>${roll.value}</dd>
        <dt>Address:</dt>
        <dd>${address.value}</dd>

    </dl>







    `   
}

localStorage.setItem("username","John Doe")
localStorage.setItem("userroll","12345")
localStorage.setItem("useraddress","Koteshwor-32")

const object_user=
{
    name:"ABC",
    roll:6789,
    address:"Baneshwor-12"
}

localStorage.setItem("user1",JSON.stringify(object_user))


//localstorage is non volatile storage
//data stored in localstorage will persist even after closing the browser
//sessionstorage is volatile storage
//data stored in sessionstorage will be cleared when the page session ends
