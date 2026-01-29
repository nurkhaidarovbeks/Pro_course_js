
var ConfigManager = function () {
    var instance;
    var config = {
        environment: "development",
        featureFlags: {
            newDashboard: false,
            betaCheckout: false
        }
    };

    function init() {
        return {
            getEnvironment: function () {
                return config.environment;
            },

            setEnvironment: function (envName) {
                if (typeof envName !== "string" || envName.length === 0) {
                    return false;
                }
                config.environment = envName;
                return true;
            },

            isFeatureEnabled: function (flagName) {
                return Boolean(config.featureFlags[flagName]);
            },

            setFeatureFlag: function (flagName, enabled) {
                if (typeof flagName !== "string" || flagName.length === 0) {
                    return false;
                }
                config.featureFlags[flagName] = Boolean(enabled);
                return true;
            },

            getSnapshot: function () {
                return {
                    environment: config.environment,
                    featureFlags: Object.assign({}, config.featureFlags)
                };
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

var configA = ConfigManager.getInstance();
configA.setEnvironment("production");
configA.setFeatureFlag("newDashboard", true);

var configB = ConfigManager.getInstance();
console.log("Same instance:", configA === configB)
console.log("newDashboard enabled:", configB.isFeatureEnabled("newDashboard"));
console.log("Config snapshot:", configB.getSnapshot());