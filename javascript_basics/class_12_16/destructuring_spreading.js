let arr = [1,2,3,4,5]
/* Traditional method of pulling data from array
let a = arr[0]
let b = arr[1]
let b = arr [2]
*/

let [a,b,c,d,e]=arr //Destructuring assignment of array but only good 
console.log(a)
console.log(b)
console.log(c)
console.log(rest)

let user_object=
{
    Name:'Aayush',
    id: 5,
}

const {Name,id} = user_object //object destructuring
/*const {x,y}=user_object //THis is not allowed */
console.log(Name)
console.log(id)

/*Spread/rest operators */

console.log(...arr) //spread operation
 
//wap to merge the two array
let num_list = [1,2,3]
let num_list2 = [4,5]

let arr_mergerd = [...num_list,...num_list2] //spreading two array and merging into one
console.log(arr_mergerd)

//WAP to fing greatest number in an array below
let numbers=[1,3,5,2,4,6]
console.log(Math.max(...numbers)) //spread the numbers array in the Math.max() function

/*Rest operators */

let arr1 = [1,2,3,4,5]
let [x,y,...rest] = arr
console.log(rest)
