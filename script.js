
var value = document.getElementById("value");
var entry = document.getElementById("entries");
var count = 0
function increment () {
    count += 1;
    value.innerHTML = count;
}
function decrement () {
    count -= 1;
    value.innerHTML = count;
}

function save () {
    entry.innerHTML += count + "-";
    count = 0;
    value.innerHTML = 0;
}
function reset () {
    entry.innerHTML = "";
}
// Keyborad
// function inc (event) {
//     var key = event.key;
//     if (key == "+") {
//     count += 1;
//     value.innerHTML = count;
// }
// }