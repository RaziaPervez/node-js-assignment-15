//project=15

//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.

//creating a guest list 
let guestlist1 =["Maheen","Nadia","Isha","Muskhan"]
//making variable for those guest who can't come
let dontcome =guestlist1 [0]
//print the name of guest who unable to come 
console.log (dontcome, "she'll unable to come")
//add or remove guest from the guestlist
guestlist1.splice(0,1,"Ayesha")
//message print for a bigger table
console.log ("Good news!we found a bigger table")
//adding a new guest at the starting index of guestlist
guestlist1.unshift ("samrah")
//adding new guest at the ending index of guestlist
guestlist1.push ("kashaf")
//adding new name at the middle index of guestlist
let middleindex: number=Math.floor (guestlist1.length/2) 
//adding new guest to middle index of array 
guestlist1.splice(middleindex,0,"azaan")
//printing updated guest list
console.log("updated guest list")
guestlist1.forEach(oneguest=>console.log(`hello ${oneguest},would you like to dinner with me`))