var UserManager = (function() {
    var instance;
    var users = [];

    function init() {
        return {
            addUser: function (name, email) {
                var user = {
                    id: users.length + 1,
                    name: name,
                    email: email,
                    createdAt: new Date()
                };

                users.push(user);
                return user;
            },

            findUser: function (id) {
                for (var i = 0; i < users.length; i++) {
                    if (users[i].id === id) {
                        return users[i];
                    }
                }
                return null;
            },

            getUsers: function () {
                return users.slice();
            }
        };
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = init();
            }
            return instance;
        }
    };
})();

var managerA = UserManager.getInstance();
managerA.addUser("Alan", "alan@example.com");
managerA.addUser("Beks", "beks@example.com");

var managerB = UserManager.getInstance();
var found = managerB.findUser(2);

console.log("Same instance:", managerA === managerB)
console.log("Found user #2", found)
console.log("All users:", managerA.getUsers());