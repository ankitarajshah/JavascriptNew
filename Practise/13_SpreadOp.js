const hobbies = ["sports", "reading"];
const newhobbies = ["dance"];

const mergedHobbies = [hobbies, newhobbies];

console.log(mergedHobbies); //op as array

const mergedHobbies1 = [...hobbies, ...newhobbies];

console.log(mergedHobbies1, "spreadop on array");

////////////////////////object//////////////
const user = {
  name: "Ankita",
  sub: "IT",
};
const extUser = {
  isAdmin: true,
  ...user,
};
console.log(extUser, "spreadop on object");
