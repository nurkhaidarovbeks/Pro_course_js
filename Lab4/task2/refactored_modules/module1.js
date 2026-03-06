// module1.js - Core functionality
MyApp.Modules.UserModule = (function (Helpers, Settings) {
    const users = [];
    let currentUser = null;

    function addUser(name, age) {
        if (!Helpers.validateName(name)  !age) {
            console.log("Invalid user data");
            return;
        }

        users.push({ name: name.trim(), age });
        console.log(`User added: ${name}`);
    }

    function loginUser(name) {
        currentUser = users.find(user => user.name === name)  null;

        if (!currentUser) {
            Helpers.renderText("output", "User not found");
            return;
        }

        showDashboard();
    }

    function showDashboard() {
        Helpers.renderText("output", Welcome ${currentUser.name});
        setTimeout(loadProfile, Settings.welcomeDelay);
    }

    function loadProfile() {
        if (!currentUser) return;
        Helpers.renderText(
            "profile",
            Name: ${currentUser.name}, Age: ${currentUser.age}
        );
    }

    function printUsers() {
        const content = users.map(Helpers.formatUser).join("<br>");
        Helpers.renderText("list", content);
    }

    function getUsers() {
        return [...users];
    }

    return {
        addUser,
        loginUser,
        printUsers,
        getUsers
    };
})(MyApp.Utils.Helpers, MyApp.Config.Settings);