const user = {
  name: "Ankita",
  subject: "IT",
};
console.log("Object", user);

///Destructuring

const { name: userName, subject: sub } = {
  name: "Ankita",
  subject: "IT",
};
console.log("Destructure_Object", userName);
console.log(sub);
