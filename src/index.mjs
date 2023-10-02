import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  String handling and string manipulation.
  Write a JS program to create a new string from a given string
  taking the first 3 characters and the last 3 characters of a string
  and adding them together. The string length must be 3 or more, if not the original
  string is returned.
</div>
`;

const newSting = (str) => 
str.length < 3 ? str : str.slice(0, 3) + str.slice(-3);

console.log(newSting('abc'));
console.log(newSting('abcdef'));
console.log(newSting('abcefghifjlm'));

console.log(newSting('ab'));

//practice exercises by codebubb on youtube//