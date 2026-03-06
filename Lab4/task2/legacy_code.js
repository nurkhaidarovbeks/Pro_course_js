// legacy_code.js
// Original-style legacy code with anti-pattern comments

var users = []; // Anti-pattern: global namespace pollution
var currentUser = null; // Anti-pattern: global namespace pollution
var isAdmin = false; // Anti-pattern: global namespace pollution
var appName = "Legacy App"; // Anti-pattern: global namespace pollution

function addUser(name, age) {
    // Anti-pattern: no validation reuse, duplicated logic may appear elsewhere
    if (name && age) {
        users.push({ name: name, age: age });
        console.log("User added: " + name);
    }
}

function addEmployee(name, age) {
    // Anti-pattern: code duplication
    if (name && age) {
        users.push({ name: name, age: age });
        console.log("Employee added: " + name);
    }
}

function loginUser(name) {
    // Anti-pattern: tight coupling with global state
    for (var i = 0; i < users.length; i++) {
        if (users[i].name === name) {
            currentUser = users[i];
            showDashboard(); // Anti-pattern: tight coupling
        }
    }
}

function showDashboard() {
    // Anti-pattern: DOM logic mixed with business logic
    document.getElementById("output").innerHTML = "Welcome " + currentUser.name;
    setTimeout("loadProfile()", 1000); // Anti-pattern: string passed to setTimeout
}

function loadProfile() {
    // Anti-pattern: depends on global currentUser
    document.getElementById("profile").innerHTML =
        "Name: " + currentUser.name + ", Age: " + currentUser.age;
}

function printUsers() {
    // Anti-pattern: spaghetti-style mixed logic
    var text = "";
    for (var i = 0; i < users.length; i++) {
        text += users[i].name + " - " + users[i].age + "<br>";
    }
    document.getElementById("list").innerHTML = text;
}

function validateName(name) {
    if (!name  name.length < 2) {
        return false;
    }
    return true;
}

function validateEmployeeName(name) {
    // Anti-pattern: code duplication
    if (!name  name.length < 2) {
        return false;
    }
    return true;
}