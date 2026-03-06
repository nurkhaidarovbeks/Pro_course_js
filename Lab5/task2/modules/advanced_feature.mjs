export const loadAdvancedFeature = () => {
    const result = "Advanced feature loaded dynamically";
    const el = document.getElementById("advancedOutput");
    if (el) {
        el.textContent = result;
    }
};