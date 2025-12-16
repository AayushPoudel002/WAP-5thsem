
/*
const btn_click_me=document.getElementById('btn_click_me')
const nav= document.getElementById('nav')
const burger=document.getElementById('menu')
const modal_btn=document.querySelector('.modal_container')
const modal_close=document.getElementById('modal')
const inactive = document.querySelector('.modal_overlay')

//hover effects
btn_click_me.addEventListener('mouseover',function(){
    btn_click_me.style.backgroundColor='blue'

})

btn_click_me.addEventListener('mouseout',function(){
    btn_click_me.style.backgroundColor=''
})

//dynamic menues

burger.addEventListener("click",function(){
    if(nav.display === "flex")
        nav.style.display = "none"
    else
        nav.style.display = "flex"
})
//modal



btn_click_me.addEventListener('click',function()
{
    modal_btn.style.display='flex'
    inactive.style.display='flex'
})

modal_close.addEventListener('click',function()
{
    modal_btn.style.display=''
    inactive.style.display=''
})

*/

/*
    Jquery purpose
    1.Reduces and simplifies DOM syntax
    2.Direct access to css



    Way
    replace document.getElementById with $
    if id then add#infront of id

*/

const btn_click_me=$('#btn_click_me')
const nav= $('#nav')
const burger=$('#menu')
const modal_btn=$('.modal_container')
const modal_close=$('modal')
const inactive = $('.modal_overlay')


//hover effects
btn_click_me.on('mouseover',function(){
    btn_click_me.css('backgroundColor','blue')

})

btn_click_me.on('mouseout',function(){
    btn_click_me.css('backgroundColor','')
})

let function_name=()=>{ //arrow function
    console.log("hello")
}

let square = function(number){ ///Tradiotional Practice BAD, not hoisted
    return number*number //Anonymous function // return number**2
}

let cube = number =>{number*3}//Arrow function, here number is paramerter not variable

console.log(square(5))
console.log(cube(3))

