// module2.js - Utility functions
MyApp.Utils.Helpers = (function () {
    function validateName(name) {
        return typeof name === "string" && name.trim().length >= 2;
    }

    function renderText(elementId, text) {
        const el = document.getElementById(elementId);
        if (el) {
            el.innerHTML = text;
        }
    }

    function formatUser(user) {
        return ${user.name} - ${user.age};
    }

    return {
        validateName,
        renderText,
        formatUser
    };
})();