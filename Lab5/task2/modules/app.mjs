import { add } from "./core.mjs";
import formatResult, { showText } from "./utils.mjs";
import * as Constants from "./constants.mjs";

showText("title", Constants.appTitle);
showText("status", Constants.defaultMessage);
showText("result", formatResult(add(5, 3)));

const advancedButton = document.getElementById("loadAdvanced");

if (advancedButton) {
    advancedButton.addEventListener("click", async () => {
        try {
            const module = await import("./advanced_feature.mjs");
            module.loadAdvancedFeature();
        } catch (error) {
            showText("advancedOutput", "Failed to load advanced feature");
            console.error(error);
        }
    });
}

const lazyTarget = document.getElementById("lazyTarget");

if (lazyTarget) {
    const observer = new IntersectionObserver(async (entries, obs) => {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                try {
                    const module = await import("./lazy_component.mjs");
                    module.renderLazyComponent();
                    obs.disconnect();
                } catch (error) {
                    showText("lazyContent", "Failed to load lazy component");
                    console.error(error);
                }
            }
        }
    });

    observer.observe(lazyTarget);
}