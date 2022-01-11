let array = ["john", "smith", 123, 8000, undefined, null]

//1. log first and last item of array. Array length can be infinite.
console.log(array[0],null);

//2. Append "start of array" at the beginning of array.
array.unshift("john")
console.log(array)

//3. Append arrayOfCustomers at the end of array.
const arrayOfCustomers = [
    {id: 1, name: "James", role: "user"},
    {id: 2, name: "Brandon", role: "admin"},
    {id: 3, name: "Marie", role: "user"}

]
array.push(arrayOfCustomers)
console.log({array})

//4. Change all numbers in array to string type.
let str = array.toString()
console.log(str)

//5. Filter array to receive an array of strings.
const arrayOfStrings = array.filter(e=>typeof e===`string` && e)
console.log({arrayOfStrings})

//6. Find array of customers in shuffledArray.
const shuffledArray = shuffle(array)
console.log({shuffledArray})
let foundedArrayOfCustomers = shuffledArray.find(item=> item='')
console.log({foundedArrayOfCustomers})

//7. separate users and admins into two arrays from foundedArrayOfCustomers
const users = arrayOfCustomers.filter(person => person.role>="user")
console.log({users})
const admins = arrayOfCustomers.filter(person => person.role<="admin")
console.log({admins})

//8. modify foundedArrayOfCustomers, role user should be named as 'customer'








function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}
