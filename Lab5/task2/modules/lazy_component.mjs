export const renderLazyComponent = () => {
    const el = document.getElementById("lazyContent");
    if (el) {
        el.textContent = "Lazy component loaded on visibility";
    }
};