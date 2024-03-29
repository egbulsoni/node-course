// const square = (x) => {
//     return x * x
// }

const square = x => x * x;

console.log(square(2));

const event = {
  name: "Birthday Party",
  // this binding
  // concise syntax on objects
  guestList: ["Andrew", "Jen", "Mike"],
  printGuestList() {
    console.log("Guest list for " + this.name);

    this.guestList.forEach(guest => {
      console.log(guest + " is attending " + this.name);
    });
  }
};

event.printGuestList();
