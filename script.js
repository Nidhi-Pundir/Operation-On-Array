/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  const developers = arr
    .filter((employee) => employee.profession === "developer")
    .map((developer) => console.log(developer));
}

function PrintDeveloperbyForEach() {
  arr.forEach((employee) => {
    if (employee.profession === "developer") {
      console.log(employee);
    }
  });
}

function addData() {
  const newEmployee = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr.push(newEmployee);
  console.log(newEmployee);
}

function removeAdmin() {
  arr = arr.filter((employee) => employee.profession !== "admin");
  console.log(arr);
}

function concatenateArray() {
  const newArray = [
    { id: 5, name: "aashi", age: "25", profession: "manager" },
    { id: 6, name: "rajesh", age: "28", profession: "ui designer" },
    { id: 7, name: "Kate", age: "26", profession: "developer" },
  ];

  const concatenatedArray = arr.concat(newArray);
  console.log(concatenatedArray);
}
