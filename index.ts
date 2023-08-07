/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.*/

let guestList: Array<string> = [
   "Zia Khan",
   "Jahanzaib Tayab",
   "Abid Shirwani"
];
// set 1 informing people that you found a bigger dinner table.
for (let guest of guestList) {
    console.log(`Hello, ${guest}, we found a bigger dinner table.`)
}
// step 2 add a new guest to the beginningof Array.
guestList.unshift("Ali Phull")
// console.log(guestList)
// set 3 add one guest to the middle of array.
let middleIndex: number = Math.floor(guestList.length/2)
guestList.splice(middleIndex, 0, "Mian Asif")
// console.log(guestList)

// 4th step use append() to add new guest to the end of your list.
guestList.push("Usama Phull")
// console.log(guestList)
// Final Step Print a new set of invitation messages, one for each person in your list.
console.log("New set of invitation messages:")

for (let i of guestList) 
{
  console.log(`Dear ${i} you are invited to dinner.`)
}