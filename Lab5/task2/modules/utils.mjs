const formatResult = (value) => Result: ${value};

export const showText = (elementId, text) => {
    const el = document.getElementById(elementId);
    if (el) {
        el.textContent = text;
    }
};

export default formatResult;